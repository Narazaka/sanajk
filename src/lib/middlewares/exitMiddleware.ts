import * as shiorack from "shiorack";

const middleware: shiorack.ShioriMiddleware<{}> = {
    unload: async function exitMiddleware(_ctx, next) {
        await next();
        process.exit();
    },
};

export = middleware;
