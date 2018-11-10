import * as shiorack from "shiorack";

const dirpathMiddleware: () => shiorack.ShioriMiddlewareWithState<{}, dirpathMiddleware.DirpathState> = () =>
    ({
        load: function dirpathLoadMiddleware(ctx, next) {
            ctx.state.dirpath = ctx.dirpath;

            return next();
        },
        // tslint:disable-next-line no-object-literal-type-assertion
        state: {} as dirpathMiddleware.DirpathState,
    });

namespace dirpathMiddleware {
    export interface DirpathState {
        dirpath: string;
    }
}

export = dirpathMiddleware;
