import * as shiorack from "shiorack";
import { DefaultState } from "shiorack";

const exitMiddleware: shiorack.ShioriMiddleware<DefaultState> = {
  unload: async function exitUnloadMiddleware(_ctx, next) {
    await next();
    process.exit();
  },
};

export = exitMiddleware;
