// tslint:disable-next-line no-implicit-dependencies
import * as assert from "power-assert";
import * as ShioriJK from "shiorijk";
import * as SanaJK from "../lib";

const { auto, chain, endchain } = SanaJK;

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
            auto(
                chain(
                    "5-5-1a",
                    "5-5-2a",
                ),
                chain(
                    "5-5-1b",
                    "5-5-2b",
                ),
            ),
            "5-6",
            endchain(
                "5-7-1",
                "5-7-2",
                auto(
                    endchain(
                        "5-7-3-1a",
                        "5-7-3-2a",
                    ),
                    endchain(
                        "5-7-3-1b",
                        "5-7-3-2b",
                    ),
                ),
                "5-7-4",
            ),
            "5-8",
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
                for (let i = 0; i < 2000; ++i) { // tslint:disable-line no-magic-numbers
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
                    const random1 = autoTalkChooser.choose(ctx).exec(ctx);
                    assert(["5-5-1a", "5-5-1b"].includes(random1 as string));
                    switch (random1) {
                        case "5-5-1a": assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-5-2a"); break;
                        case "5-5-1b": assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-5-2b"); break;
                        default: assert.fail();
                    }
                    assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-6");
                    assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-7-1");
                    assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-7-2");
                    const random2 = autoTalkChooser.choose(ctx).exec(ctx);
                    assert(["5-7-3-1a", "5-7-3-1b"].includes(random2 as string));
                    switch (random2) {
                        case "5-7-3-1a": assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-7-3-2a"); break;
                        case "5-7-3-1b": assert(autoTalkChooser.choose(ctx).exec(ctx) === "5-7-3-2b"); break;
                        default: assert.fail();
                    }
                }
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "1");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "2");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "3-1");
                assert(autoTalkChooser.choose(ctx).exec(ctx) === "3-2");
            });
        });
    });
});
