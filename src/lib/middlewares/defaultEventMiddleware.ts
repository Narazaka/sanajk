import { DefaultState, ShioriMiddleware } from "shiorack";
import { OK } from "shiori-request-helper";

const defaultEvents: { [id: string]: string } = {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  version: require("../../../package.json").version,
  name: "SanaJK",
  craftman: "Narazaka",
  craftmanw: "奈良阪",
};

const defaultEventMiddleware: ShioriMiddleware<DefaultState> = {
  request: async function defaultEventRequestMiddleware(ctx, next) {
    const id = ctx.request.headers.ID as string;
    const event = defaultEvents[id];
    if (event) {
      return OK(event);
    }
    return next();
  },
};

export = defaultEventMiddleware;
