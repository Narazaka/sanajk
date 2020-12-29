import { AutoTalk } from "./AutoTalks";
import { AutoTalkRequestContext, AutoTalkTags } from "./AutoTalkTypes";
import { ChainTalk } from "./ChainTalks";

export class AutoTalkChooser<State = Record<string, unknown>> {
  tags?: Set<string>;

  chainTalk?: ChainTalk<State>;

  constructor(tags?: AutoTalkTags) {
    this.tags = tags instanceof Array ? new Set(tags) : tags;
  }

  choose(ctx: AutoTalkRequestContext<State>): AutoTalk<State> {
    const chainTalk = this.chainTalk
      ? this.chainTalk.chooseNext(ctx)
      : undefined;
    const talk =
      chainTalk || ctx.state.autoTalks.filterByTags(this.tags).choose(ctx);
    if (talk instanceof ChainTalk) this.chainTalk = talk;

    return talk;
  }
}
