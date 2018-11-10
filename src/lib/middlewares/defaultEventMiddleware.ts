import { ShioriMiddleware } from "shiorack";
import { OK } from "shiori-request-helper";

const defaultEvents: {[id: string]: string} = {
    // tslint:disable-next-line no-require-imports
    version: require("../../../package.json").version,
    name: "SanaJK",
    craftman: "Narazaka",
    craftmanw: "奈良阪",
};

const defaultEventMiddleware: ShioriMiddleware<{}> = {
    request: async function defaultEventRequestMiddleware(ctx, next) {
        const id = ctx.request.headers.ID as string;
        const event = defaultEvents[id];
        if (event) {
            return OK(event);
        } else {
            return next();
        }
    },
};

export = defaultEventMiddleware;
