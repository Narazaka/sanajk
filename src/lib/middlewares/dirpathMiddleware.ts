import * as shiorack from "shiorack";
import { DefaultState } from "shiorack";

const dirpathMiddleware: () => shiorack.ShioriMiddlewareWithState<
  DefaultState,
  dirpathMiddleware.DirpathState
> = () => ({
  load: function dirpathLoadMiddleware(ctx, next) {
    ctx.state.dirpath = ctx.dirpath;

    return next();
  },

  state: {} as dirpathMiddleware.DirpathState,
});

namespace dirpathMiddleware {
  export interface DirpathState {
    dirpath: string;
  }
}

export = dirpathMiddleware;
