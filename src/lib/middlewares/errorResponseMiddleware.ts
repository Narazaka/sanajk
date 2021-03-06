import * as shiorack from "shiorack";
import { DefaultState } from "shiorack";
import { InternalServerError } from "shiori-request-helper";

const errorResponseMiddleware: shiorack.ShioriMiddleware<DefaultState> = {
  /** unhandled error to internal server error response */
  request: async function errorResponseRequestMiddleware(_ctx, next) {
    try {
      return await next();
    } catch (error) {
      return InternalServerError(error);
    }
  },
};

export = errorResponseMiddleware;
