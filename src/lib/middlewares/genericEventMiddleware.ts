import { RequestContext, ShioriMiddlewareWithState } from "shiorack";
import { handleRequestLazy, RequestCallbackReturnValue } from "shiori-request-helper";

const middleware: <State>(events?: middleware.Events<State>) =>
    ShioriMiddlewareWithState<State, middleware.EventsState<State>> =
    <State>(events: middleware.Events<State> = {}) =>
    ({
        request: async function genericEventMiddleware(ctx, next) {
            const id = ctx.request.headers.ID as string;
            const event = ctx.state.events[id];
            if (event) {
                return handleRequestLazy(ctx.request, async () => {
                    const response = await event(ctx);

                    // tslint:disable-next-line triple-equals no-null-keyword strict-type-predicates
                    return response == null ? next() : response; // 返り値がなかったら後続ミドルへ
                });
            } else {
                return handleRequestLazy(ctx.request, next);
            }
        },
        state: { events },
    });

// tslint:disable-next-line no-namespace
namespace middleware {
    export type SanaRequestCallback<State> =
        (ctx: RequestContext<State & EventsState<State>>) => RequestCallbackReturnValue;

    export interface Events<State> {
        [name: string]: SanaRequestCallback<State>;
    }

    export interface EventsState<State> {
        events: Events<State>;
    }
}

export = middleware;
