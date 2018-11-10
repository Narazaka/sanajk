import * as shiorack from "shiorack";
import { DefaultHeadersState } from "./completeResponseMiddleware";

const senderMiddleware: shiorack.ShioriMiddleware<DefaultHeadersState> = {
    /** set ownerghostname to sender */
    request: function senderRequestMiddleware(ctx, next) {
        if (ctx.request.headers.ID === "ownerghostname") {
            const sender = ctx.request.headers.Reference(0);
            if (typeof sender === "string" && sender.length) {
                ctx.state.defaultHeaders.Sender = sender;
            }
        }

        return next();
    },
};

export = senderMiddleware;
