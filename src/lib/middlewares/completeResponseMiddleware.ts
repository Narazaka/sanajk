import * as shiorack from "shiorack";
import { DefaultState } from "shiorack";
import { completeResponse } from "shiori-request-helper";

const completeResponseMiddleware: () => shiorack.ShioriMiddlewareWithState<
  DefaultState,
  completeResponseMiddleware.DefaultHeadersState
> = () => ({
  request: async function completeResponseRequestMiddleware(ctx, next) {
    return completeResponse(await next(), ctx.state.defaultHeaders);
  },
  state: { defaultHeaders: {} },
});

namespace completeResponseMiddleware {
  export interface DefaultHeadersState {
    defaultHeaders: { [name: string]: string };
  }
}

export = completeResponseMiddleware;
