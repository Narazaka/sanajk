import * as shiorack from "shiorack";
import { completeResponse } from "shiori-request-helper";

const middleware: () => shiorack.ShioriMiddlewareWithState<{}, middleware.DefaultHeadersState> = () =>
    ({
        request: async function completeResponseMiddleware(ctx, next) {
            return completeResponse(await next(), ctx.state.defaultHeaders);
        },
        state: {defaultHeaders: {}},
    });

// tslint:disable-next-line no-namespace
namespace middleware {
    export interface DefaultHeadersState {
        defaultHeaders: {[name: string]: string};
    }
}

// tslint:disable-next-line no-default-export
export = middleware;
