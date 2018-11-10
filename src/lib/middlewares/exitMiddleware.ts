import * as shiorack from "shiorack";

const exitMiddleware: shiorack.ShioriMiddleware<{}> = {
    unload: async function exitUnloadMiddleware(_ctx, next) {
        await next();
        process.exit();
    },
};

export = exitMiddleware;
