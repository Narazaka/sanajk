/* eslint-disable max-classes-per-file */
import {
  AutoTalkLike,
  AutoTalkRequestCallback,
  AutoTalkRequestContext,
  AutoTalkTags,
  AutoTalkWeight,
} from "./AutoTalkTypes";

export class AutoTalk<State> {
  readonly talk: AutoTalkRequestCallback<State>;

  constructor(talk: AutoTalkRequestCallback<State>) {
    this.talk = talk;
  }

  exec = (ctx: AutoTalkRequestContext<State>) => this.talk(ctx);
}

export class AutoTalks<State> {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  static wrapTalk<State>(talk: AutoTalkLike<State>) {
    return typeof talk === "string" ? () => talk : talk;
  }

  readonly talks: Array<AutoTalkRequestCallback<State> | AutoTalks<State>>;

  staticWeight: AutoTalkWeight<State>;

  readonly tags?: Set<string>;

  constructor(
    talks: Array<AutoTalkLike<State>>,
    weight: AutoTalkWeight<State> = -1,
    tags?: AutoTalkTags
  ) {
    this.talks = talks.map(AutoTalks.wrapTalk);
    this.staticWeight = weight;
    this.tags = tags instanceof Array ? new Set(tags) : tags;
  }

  weight(ctx: AutoTalkRequestContext<State>) {
    if (this.staticWeight instanceof Function) {
      return Math.max(0, this.staticWeight(ctx));
    }
    if (this.staticWeight >= 0) {
      return this.staticWeight;
    }
    return this.childrenWeightSum(ctx);
  }

  get allTags() {
    const set = new Set(this.tags || []);
    for (const talk of this.talks) {
      if (talk instanceof AutoTalks) {
        for (const tag of talk.allTags) set.add(tag);
      }
    }

    return set;
  }

  add(...talks: Array<AutoTalkLike<State>>) {
    this.talks.push(...talks.map(AutoTalks.wrapTalk));

    return this;
  }

  hasTag(allowTags?: AutoTalkTags) {
    if (!allowTags || !this.tags) return true;

    for (const tag of allowTags) {
      if (this.tags.has(tag)) return true;
    }

    return false;
  }

  filterByTags(allowTags?: AutoTalkTags): AutoTalks<State> {
    if (!allowTags) return this;
    if (!(allowTags as string[]).length && !(allowTags as Set<string>).size) {
      return new AutoTalks<State>([], this.staticWeight, this.tags);
    }

    return new AutoTalks<State>(
      this.talks.filter(
        (talk) => !(talk instanceof AutoTalks) || talk.hasTag(allowTags)
      ),
      this.staticWeight,
      this.tags
    );
  }

  choose(ctx: AutoTalkRequestContext<State>): AutoTalk<State> {
    const targetWeight = Math.random() * this.childrenWeightSum(ctx);
    let weight = 0;
    for (const talk of this.talks) {
      const talkWeight = talk instanceof AutoTalks ? talk.weight(ctx) : 1;
      if (!talkWeight) continue;
      weight += talkWeight;
      if (weight >= targetWeight)
        return talk instanceof AutoTalks
          ? talk.choose(ctx)
          : new AutoTalk(talk);
    }

    return new AutoTalk(() => undefined); // 要素が1つもなかった場合
  }

  private childrenWeightSum(ctx: AutoTalkRequestContext<State>) {
    let weight = 0;
    for (const talk of this.talks) {
      weight += talk instanceof AutoTalks ? talk.weight(ctx) : 1;
    }

    return weight;
  }
}

export function auto<State>(
  ...talks: Array<AutoTalkLike<State>>
): AutoTalks<State>;
export function auto<State>(
  tags: AutoTalkTags,
  ...talks: Array<AutoTalkLike<State>>
): AutoTalks<State>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function auto<State>(...args: any[]) {
  if (
    args[0] instanceof Array ||
    args[0] instanceof Set ||
    args[0] === undefined
  ) {
    return new AutoTalks<State>(args.slice(1), -1, args[0]);
  }
  return new AutoTalks<State>(args);
}

export function autow<State>(
  weight: AutoTalkWeight<State>,
  ...talks: Array<AutoTalkLike<State>>
): AutoTalks<State>;

export function autow<State>(
  weight: AutoTalkWeight<State>,
  tags: AutoTalkTags,
  ...talks: Array<AutoTalkLike<State>>
): AutoTalks<State>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function autow<State>(...args: any[]) {
  if (
    args[1] instanceof Array ||
    args[1] instanceof Set ||
    args[1] === undefined
  ) {
    return new AutoTalks<State>(args.slice(2), args[0], args[1]);
  }
  return new AutoTalks<State>(args.slice(1), args[0]);
}
