import { ShioriMiddlewareWithState } from "shiorack";
import { handleRequestLazy } from "shiori-request-helper";
import { AutoTalkChooser } from "../AutoTalkChooser";
import { AutoTalks } from "../AutoTalks";
import { AutoTalkTrigger, AutoTalkTriggerSettings } from "../AutoTalkTrigger";
import { AutoTalkLike, AutoTalksState, AutoTalkTags } from "../AutoTalkTypes";

const autoTalkMiddleware: <State>(
  options: autoTalkMiddleware.Options<State>
) => ShioriMiddlewareWithState<State, AutoTalksState<State>> = <State>(
  options: autoTalkMiddleware.Options<State>
) => ({
  request: async function autoTalkRequestMiddleware(ctx, next) {
    const id = ctx.request.headers.ID as string;

    if (id === "OnSecondChange" && ctx.state.autoTalkTrigger.canTalk) {
      const talk = ctx.state.autoTalkChooser.choose(ctx);

      return handleRequestLazy(ctx.request, async () => {
        const response = talk ? await talk.exec(ctx) : undefined;
        ctx.state.autoTalkTrigger.talked();

        return response == null ? next() : response; // 返り値がなかったら後続ミドルへ
      });
    }
    return next();
  },
  unload: function autoTalkUnloadMiddleware(ctx, next) {
    ctx.state.autoTalkTrigger.stopCount();

    return next();
  },
  state: {
    autoTalkChooser: new AutoTalkChooser(options.autoTalkTags),
    autoTalkTrigger:
      options.autoTalkTrigger instanceof AutoTalkTrigger
        ? options.autoTalkTrigger
        : new AutoTalkTrigger(options.autoTalkTrigger || {}),
    autoTalks:
      options.autoTalks instanceof AutoTalks
        ? options.autoTalks
        : new AutoTalks(options.autoTalks || []),
  },
});

namespace autoTalkMiddleware {
  export interface Options<State> {
    autoTalkTags?: AutoTalkTags;
    autoTalkTrigger?: AutoTalkTrigger | AutoTalkTriggerSettings;
    autoTalks?: Array<AutoTalkLike<State>> | AutoTalks<State>;
  }
}

export = autoTalkMiddleware;
