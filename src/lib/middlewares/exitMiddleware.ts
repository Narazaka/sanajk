import * as shiorack from "shiorack";

const middleware: shiorack.ShioriMiddleware<{}> = {
    unload: async function exitMiddleware(_ctx, next) {
        const result = await next();
        process.exit(result ? 0 : 1);
    },
};

export = middleware;
