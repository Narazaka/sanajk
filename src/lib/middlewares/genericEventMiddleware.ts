import { RequestContext, ShioriMiddlewareWithState } from "shiorack";
import { handleRequestLazy, RequestCallbackReturnValue } from "shiori-request-helper";

const genericEventMiddleware: <State>(events?: genericEventMiddleware.Events<State>) =>
    ShioriMiddlewareWithState<State, genericEventMiddleware.EventsState<State>> =
    <State>(events: genericEventMiddleware.Events<State> = {}) =>
    ({
        request: async function genericEventRequestMiddleware(ctx, next) {
            const id = ctx.request.headers.ID as string;
            const event = ctx.state.events[id];
            if (event) {
                return handleRequestLazy(ctx.request, async () => {
                    const response = await event(ctx);

                    // tslint:disable-next-line no-null-keyword strict-type-predicates
                    return response == null ? next() : response; // 返り値がなかったら後続ミドルへ
                });
            } else {
                return handleRequestLazy(ctx.request, next);
            }
        },
        state: { events },
    });

namespace genericEventMiddleware {
    export type SanaRequestCallback<State> =
        (ctx: RequestContext<State & EventsState<State>>) => RequestCallbackReturnValue;

    export interface Events<State> {
        [name: string]: SanaRequestCallback<State>;
    }

    export interface EventsState<State> {
        events: Events<State>;
    }
}

export = genericEventMiddleware;
