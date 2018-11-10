import { RequestContext } from "shiorack";
import { RequestCallbackReturnValue } from "shiori-request-helper";
import { AutoTalkChooser } from "./AutoTalkChooser";
import { AutoTalks } from "./AutoTalks";
import { AutoTalkTrigger } from "./AutoTalkTrigger";

export interface AutoTalksState<State> {
    autoTalkChooser: AutoTalkChooser<State>;
    autoTalkTrigger: AutoTalkTrigger;
    autoTalks: AutoTalks<State>;
}

export type AutoTalkRequestContext<State> = RequestContext<State & AutoTalksState<State>>;

export type AutoTalkRequestCallback<State> =
    (ctx: AutoTalkRequestContext<State>) => RequestCallbackReturnValue;

export type AutoTalkLike<State> =
    AutoTalks<State> |
    string |
    AutoTalkRequestCallback<State>
    ;

export type AutoTalkWeight<State> = number | ((ctx: AutoTalkRequestContext<State>) => number);

export type AutoTalkTags = string[] | Set<string> | undefined;
