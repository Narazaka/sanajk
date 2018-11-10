// tslint:disable-next-line no-implicit-dependencies
import * as assert from "power-assert";
import * as ShioriJK from "shiorijk";
import * as SanaJK from "../lib";

const { chain, endchain } = SanaJK;

const autoTalks = new SanaJK.AutoTalks<{}>([
    chain(
        "1",
        "2",
        chain(
            "3-1",
            "3-2",
        ),
        "4",
        endchain(
            "5-1",
            "5-2",
            chain(
                "5-3-1",
                "5-3-2",
            ),
            "5-4",
            endchain(
                "5-5-1",
                "5-5-2",
            ),
            "5-6",
        ),
        "6",
    ),
]);

const OnSecondChange = new ShioriJK.Message.Request({
    request_line: {method: "GET", version: "3.0"},
    headers: {ID: "OnSecondChange"},
});

describe("SanaJK", () => {
    describe("autoTalkMiddleware", () => {
        describe("ChainTalk", () => {
            it("works", async () => {
                const autoTalkChooser = new SanaJK.AutoTalkChooser();
                const autoTalkTrigger = new SanaJK.AutoTalkTrigger({autoStart: false});
                const ctx = {
                    request: OnSecondChange,
                    state: {
                        autoTalks,
                        autoTalkChooser,
                        autoTalkTrigger,
                    },
                };
                // tslint:disable newline-per-chained-call
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "1");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "2");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "3-1");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "3-2");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "4");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-1");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-2");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-3-1");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-3-2");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-4");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-5-1");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-5-2");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "1");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "2");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "3-1");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "3-2");
            });
        });
    });
});
