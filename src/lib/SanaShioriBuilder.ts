import {
    LoadMiddleware,
    RequestMiddleware,
    ShioriBuilder,
    ShioriMiddleware,
    ShioriMiddlewareWithState,
    UnloadMiddleware,
} from "shiorack";
import * as completeResponseMiddleware from "../lib/middlewares/completeResponseMiddleware";
import * as dirpathMiddleware from "../lib/middlewares/dirpathMiddleware";
import * as errorResponseMiddleware from "../lib/middlewares/errorResponseMiddleware";
import * as exitMiddleware from "../lib/middlewares/exitMiddleware";
import * as genericEventMiddleware from "../lib/middlewares/genericEventMiddleware";
import * as saveLoadMiddleware from "../lib/middlewares/saveLoadMiddleware";
import * as senderMiddleware from "../lib/middlewares/senderMiddleware";

export interface UseDefaultOption<State> {
    save?: string;
    events?: genericEventMiddleware.Events<State>;
}

/** SHIORI subsystem interface builder */
export class SanaShioriBuilder<State = {}> extends ShioriBuilder<State> {
    /** use default middlewares */
    useDefaults<SaveData = {}>(options: UseDefaultOption<State> = {}) {
        return this
            .useExit()
            .useDirpath()
            .useSaveLoad<SaveData>(options.save)
            .useCompleteResponse()
            .useErrorResponse()
            .use(senderMiddleware)
            .useGenericEvent(options.events)
            ;
    }

    /** must be first middleware */
    useExit() { return this.use(exitMiddleware); }
    /** any order */
    useDirpath() { return this.use(dirpathMiddleware()); }
    /** any order */
    useSaveLoad<SaveData = {}>(filename = "save.json") { return this.use(saveLoadMiddleware<SaveData>(filename)); }
    /** must be first one of request middlewares */
    useCompleteResponse() { return this.use(completeResponseMiddleware()); }
    /** must be after completeResponse */
    useErrorResponse() { return this.use(errorResponseMiddleware); }
    /** must be after completeResponse */
    useGenericEvent(events?: genericEventMiddleware.Events<State>) { return this.use(genericEventMiddleware(events)); }

    /**
     * add middleware
     * @param middleware middleware with state
     */
    use(middleware: ShioriMiddleware<State>): SanaShioriBuilder<State>;
    use<AddState>(middleware: ShioriMiddlewareWithState<State, AddState>): SanaShioriBuilder<State & AddState>;
    use<AddState = {}>(middleware: ShioriMiddlewareWithState<State, AddState>) {
        const builder = super.use(middleware);

        return new SanaShioriBuilder(
            builder.state,
            {
                load: builder.load,
                request: builder.request,
                unload: builder.unload,
            },
            false,
        );
    }

    /**
     * add load middleware
     * @param middleware middleware
     * @param state state
     */
    useLoad(middleware: LoadMiddleware<State>): SanaShioriBuilder<State>;
    useLoad<AddState>(middleware: LoadMiddleware<State & AddState>, state: AddState):
        SanaShioriBuilder<State & AddState>;
    useLoad<AddState = {}>(middleware: LoadMiddleware<State & AddState>, state?: AddState) {
        return super.useLoad(middleware, state);
    }

    /**
     * add request middleware
     * @param middleware middleware
     * @param state state
     */
    useRequest(middleware: RequestMiddleware<State>): SanaShioriBuilder<State>;
    useRequest<AddState>(middleware: RequestMiddleware<State & AddState>, state: AddState):
        SanaShioriBuilder<State & AddState>;
    useRequest<AddState = {}>(middleware: RequestMiddleware<State & AddState>, state?: AddState) {
        return super.useRequest(middleware, state);
    }

    /**
     * add unload middleware
     * @param middleware middleware
     * @param state state
     */
    useUnload(middleware: UnloadMiddleware<State>): SanaShioriBuilder<State>;
    useUnload<AddState>(middleware: UnloadMiddleware<State & AddState>, state: AddState):
        SanaShioriBuilder<State & AddState>;
    useUnload<AddState = {}>(middleware: UnloadMiddleware<State & AddState>, state?: AddState) {
        return super.useUnload(middleware, state);
    }
}
