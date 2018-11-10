import * as shiorack from "shiorack";
import { completeResponse } from "shiori-request-helper";

const completeResponseMiddleware:
    () => shiorack.ShioriMiddlewareWithState<{}, completeResponseMiddleware.DefaultHeadersState> = () =>
    ({
        request: async function completeResponseRequestMiddleware(ctx, next) {
            return completeResponse(await next(), ctx.state.defaultHeaders);
        },
        state: {defaultHeaders: {}},
    });

// tslint:disable-next-line no-namespace
namespace completeResponseMiddleware {
    export interface DefaultHeadersState {
        defaultHeaders: {[name: string]: string};
    }
}

// tslint:disable-next-line no-default-export
export = completeResponseMiddleware;
