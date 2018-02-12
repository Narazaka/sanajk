import * as shiorack from "shiorack";

const middleware: () => shiorack.ShioriMiddlewareWithState<{}, middleware.DirpathState> = () =>
    ({
        load: function dirpathMiddleware(ctx, next) {
            ctx.state.dirpath = ctx.dirpath;

            return next();
        },
        // tslint:disable-next-line no-object-literal-type-assertion
        state: {} as middleware.DirpathState,
    });

// tslint:disable-next-line no-namespace
namespace middleware {
    export interface DirpathState {
        dirpath: string;
    }
}

export = middleware;
