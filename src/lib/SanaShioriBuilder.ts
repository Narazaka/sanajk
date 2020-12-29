import {
  DefaultState,
  LoadMiddleware,
  RequestMiddleware,
  ShioriBuilder,
  ShioriMiddleware,
  ShioriMiddlewareWithState,
  UnloadMiddleware,
} from "shiorack";
import * as autoTalkMiddleware from "./middlewares/autoTalkMiddleware";
import * as completeResponseMiddleware from "./middlewares/completeResponseMiddleware";
import * as defaultEventMiddleware from "./middlewares/defaultEventMiddleware";
import * as dirpathMiddleware from "./middlewares/dirpathMiddleware";
import * as errorResponseMiddleware from "./middlewares/errorResponseMiddleware";
import * as exitMiddleware from "./middlewares/exitMiddleware";
import * as genericEventMiddleware from "./middlewares/genericEventMiddleware";
import * as saveLoadMiddleware from "./middlewares/saveLoadMiddleware";
import * as senderMiddleware from "./middlewares/senderMiddleware";
import { AutoTalks } from "./AutoTalks";
import { AutoTalkTrigger, AutoTalkTriggerSettings } from "./AutoTalkTrigger";
import { AutoTalkLike, AutoTalkTags } from "./AutoTalkTypes";

export interface UseDefaultOption<State> {
  save?: string;
  events?: genericEventMiddleware.Events<
    State &
      dirpathMiddleware.DirpathState &
      completeResponseMiddleware.DefaultHeadersState
  >;
  autoTalkTags?: AutoTalkTags;
  autoTalkTrigger?: AutoTalkTrigger | AutoTalkTriggerSettings;
  autoTalks?: Array<AutoTalkLike<State>> | AutoTalks<State>;
}

/** SHIORI subsystem interface builder */
export class SanaShioriBuilder<
  State = DefaultState
> extends ShioriBuilder<State> {
  /** use default middlewares */
  useDefaults<SaveData = DefaultState>(options: UseDefaultOption<State> = {}) {
    return this.useExit()
      .useDirpath()
      .useSaveLoad<SaveData>(options.save)
      .useCompleteResponse()
      .useErrorResponse()
      .useSender()
      .useGenericEvent(options.events)
      .useAutoTalk({
        autoTalkTags: options.autoTalkTags,
        autoTalkTrigger: options.autoTalkTrigger,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        autoTalks: options.autoTalks as any,
      })
      .useDefaultEvent();
  }

  /** must be first middleware */
  useExit() {
    return this.use(exitMiddleware);
  }

  /** any order */
  useDirpath() {
    return this.use(dirpathMiddleware());
  }

  /** any order */
  useSaveLoad<SaveData = DefaultState>(filename = "save.json") {
    return this.use(saveLoadMiddleware<SaveData>(filename));
  }

  /** must be first one of request middlewares */
  useCompleteResponse() {
    return this.use(completeResponseMiddleware());
  }

  /** must be after completeResponse */
  useErrorResponse() {
    return this.use(errorResponseMiddleware);
  }

  /** must be after completeResponse */
  useSender() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.use(senderMiddleware as any);
  }

  /** must be after completeResponse */
  useAutoTalk(options: autoTalkMiddleware.Options<State> = {}) {
    return this.use(autoTalkMiddleware(options));
  }

  /** must be after completeResponse */
  useGenericEvent(events?: genericEventMiddleware.Events<State>) {
    return this.use(genericEventMiddleware(events));
  }

  /** must be after completeResponse */
  useDefaultEvent() {
    return this.use(defaultEventMiddleware);
  }

  /**
   * add middleware
   * @param middleware middleware with state
   */
  use(middleware: ShioriMiddleware<State>): SanaShioriBuilder<State>;
  use<AddState>(
    middleware: ShioriMiddlewareWithState<State, AddState>
  ): SanaShioriBuilder<State & AddState>;
  use<AddState = DefaultState>(
    middleware: ShioriMiddlewareWithState<State, AddState>
  ) {
    const builder = super.use(middleware);

    return new SanaShioriBuilder(
      builder.state,
      {
        load: builder.load,
        request: builder.request,
        unload: builder.unload,
      },
      false
    );
  }

  /**
   * add load middleware
   * @param middleware middleware
   * @param state state
   */
  useLoad(middleware: LoadMiddleware<State>): SanaShioriBuilder<State>;
  useLoad<AddState>(
    middleware: LoadMiddleware<State & AddState>,
    state: AddState
  ): SanaShioriBuilder<State & AddState>;
  useLoad<AddState = DefaultState>(
    middleware: LoadMiddleware<State & AddState>,
    state?: AddState
  ) {
    return super.useLoad(middleware, state as AddState);
  }

  /**
   * add request middleware
   * @param middleware middleware
   * @param state state
   */
  useRequest(middleware: RequestMiddleware<State>): SanaShioriBuilder<State>;
  useRequest<AddState>(
    middleware: RequestMiddleware<State & AddState>,
    state: AddState
  ): SanaShioriBuilder<State & AddState>;
  useRequest<AddState = DefaultState>(
    middleware: RequestMiddleware<State & AddState>,
    state?: AddState
  ) {
    return super.useRequest(middleware, state as AddState);
  }

  /**
   * add unload middleware
   * @param middleware middleware
   * @param state state
   */
  useUnload(middleware: UnloadMiddleware<State>): SanaShioriBuilder<State>;
  useUnload<AddState>(
    middleware: UnloadMiddleware<State & AddState>,
    state: AddState
  ): SanaShioriBuilder<State & AddState>;
  useUnload<AddState = DefaultState>(
    middleware: UnloadMiddleware<State & AddState>,
    state?: AddState
  ) {
    return super.useUnload(middleware, state as AddState);
  }
}
