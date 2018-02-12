import { ShioriBuilder } from "shiorack";
import * as completeResponseMiddleware from "../lib/middlewares/completeResponseMiddleware";
import * as dirpathMiddleware from "../lib/middlewares/dirpathMiddleware";
import * as errorResponseMiddleware from "../lib/middlewares/errorResponseMiddleware";
import * as exitMiddleware from "../lib/middlewares/exitMiddleware";
import * as genericEventMiddleware from "../lib/middlewares/genericEventMiddleware";
import * as senderMiddleware from "../lib/middlewares/senderMiddleware";

/** SHIORI subsystem interface builder */
export class SanaShioriBuilder<State = {}> extends ShioriBuilder<State> {
    /** use default middlewares */
    useDefaults() {
        return this
            .use(exitMiddleware)
            .use(dirpathMiddleware())
            .use(completeResponseMiddleware())
            .use(errorResponseMiddleware)
            .use(senderMiddleware)
            .use(genericEventMiddleware())
            ;
    }
}
