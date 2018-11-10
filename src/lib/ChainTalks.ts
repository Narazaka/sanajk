import { AutoTalk, AutoTalks } from "./AutoTalks";
import {
    AutoTalkLike,
    AutoTalkRequestCallback,
    AutoTalkRequestContext,
    AutoTalkTags,
    AutoTalkWeight,
} from "./AutoTalkTypes";

// tslint:disable no-magic-numbers max-classes-per-file

export class ChainTalk<State> extends AutoTalk<State> {
    readonly chainTalksStack: Array<ChainTalks<State>>;
    readonly indexes: number[];

    constructor(talk: AutoTalkRequestCallback<State>, chainTalksStack: Array<ChainTalks<State>>, indexes: number[]) {
        super(talk);
        this.chainTalksStack = chainTalksStack;
        this.indexes = indexes;
    }

    get bottomChainTalks() { return this.chainTalksStack[0]; }
    get topChainTalks() { return this.chainTalksStack[this.chainTalksStack.length - 1]; }
    get topIndex() { return this.indexes[this.indexes.length - 1]; }
    get exceptTopChainTalkStack() { return this.chainTalksStack.slice(0, this.chainTalksStack.length - 1); }
    get exceptTopIndexes() { return this.indexes.slice(0, this.indexes.length - 1); }
    get canChooseNextFromTop() { return this.topChainTalks && this.topChainTalks.size > this.topIndex + 1; }

    chooseNext(ctx: AutoTalkRequestContext<State>): ChainTalk<State> | undefined {
        if (this.canChooseNextFromTop) {
            const talk = this.topChainTalks.choose(ctx, this.topIndex + 1);
            if (talk.bottomChainTalks.stack) {
                return new ChainTalk(
                    talk.talk,
                    [...this.exceptTopChainTalkStack, ...talk.chainTalksStack],
                    [...this.exceptTopIndexes, ...talk.indexes],
                );
            } else {
                return talk;
            }
        } else if (!this.chainTalksStack.length) {
            return undefined;
        } else {
            const nextChain = new ChainTalk(
                this.talk,
                this.exceptTopChainTalkStack,
                this.exceptTopIndexes,
            );

            return nextChain.chooseNext(ctx);
        }
    }
}

export class ChainTalks<State> extends AutoTalks<State> {
    stack: boolean;

    constructor(
        stack: boolean,
        talks: Array<AutoTalkLike<State>>,
        weight: AutoTalkWeight<State> = 1,
        tags?: AutoTalkTags,
    ) {
        super(talks, weight, tags);
        this.stack = stack;
    }

    get size() {
        return this.talks.length;
    }

    add(...talks: Array<AutoTalkLike<State>>) {
        super.add(...talks);

        return this;
    }

    filterByTags(allowTags?: AutoTalkTags) {
        const autoTalks = super.filterByTags(allowTags);

        return new ChainTalks<State>(
            this.stack,
            autoTalks.talks,
            autoTalks.staticWeight,
            autoTalks.tags,
        );
    }

    choose(ctx: AutoTalkRequestContext<State>, index = 0): ChainTalk<State> {
        const talk = this.talks[index];
        const resultTalk = talk instanceof AutoTalks ? talk.choose(ctx) : talk;
        if (resultTalk instanceof ChainTalk) {
            if (resultTalk.bottomChainTalks.stack) {
                return new ChainTalk(
                    resultTalk.talk, [this, ...resultTalk.chainTalksStack], [index, ...resultTalk.indexes]);
            } else {
                return resultTalk;
            }
        } else {
            return new ChainTalk(talk instanceof AutoTalks ? talk.choose(ctx).talk : talk, [this], [index]);
        }
    }
}

function genChain(stack: boolean) {
    return function genericChain<State>(...args: any[]) {
        if (typeof args[0] === "number") {
            if (args[1] instanceof Array || args[1] instanceof Set || args[1] === undefined) {
                return new ChainTalks<State>(stack, args.slice(2), args[0], args[1]);
            } else {
                return new ChainTalks<State>(stack, args.slice(1), args[0]);
            }
        } else if (args[0] instanceof Array || args[0] instanceof Set || args[0] === undefined) {
            if (typeof args[1] === "number") {
                return new ChainTalks<State>(stack, args.slice(2), args[1], args[0]);
            } else {
                return new ChainTalks<State>(stack, args.slice(1), 1, args[0]);
            }
        } else {
            return new ChainTalks<State>(stack, args);
        }
    };
}

const chainFuncCache = {
    chain: genChain(true),
    endchain: genChain(false),
};

export function chain<State>(weight: number, ...talks: Array<AutoTalkLike<State>>): ChainTalks<State>;
// tslint:disable-next-line unified-signatures
export function chain<State>(tags: AutoTalkTags, ...talks: Array<AutoTalkLike<State>>): ChainTalks<State>;
export function chain<State>(weight: number, tags: AutoTalkTags, ...talks: Array<AutoTalkLike<State>>):
    ChainTalks<State>;
export function chain<State>(tags: AutoTalkTags, weight: number, ...talks: Array<AutoTalkLike<State>>):
    ChainTalks<State>;
export function chain<State>(...talks: Array<AutoTalkLike<State>>): ChainTalks<State>;
export function chain<State>(...args: any[]) {
    return chainFuncCache.chain<State>(...args);
}

export function endchain<State>(weight: number, ...talks: Array<AutoTalkLike<State>>): ChainTalks<State>;
// tslint:disable-next-line unified-signatures
export function endchain<State>(tags: AutoTalkTags, ...talks: Array<AutoTalkLike<State>>): ChainTalks<State>;
export function endchain<State>(weight: number, tags: AutoTalkTags, ...talks: Array<AutoTalkLike<State>>):
    ChainTalks<State>;
export function endchain<State>(tags: AutoTalkTags, weight: number, ...talks: Array<AutoTalkLike<State>>):
    ChainTalks<State>;
export function endchain<State>(...talks: Array<AutoTalkLike<State>>): ChainTalks<State>;
export function endchain<State>(...args: any[]) {
    return chainFuncCache.endchain<State>(...args);
}
