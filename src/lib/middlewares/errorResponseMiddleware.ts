import * as shiorack from "shiorack";
import { InternalServerError } from "shiori-request-helper";

const middleware: shiorack.ShioriMiddleware<{}> = {
    /** unhandled error to internal server error response */
    request: async function errorResponseMiddleware(_ctx, next) {
        try {
            return await next();
        } catch (error) {
            return InternalServerError(error);
        }
    },
};

export = middleware;
