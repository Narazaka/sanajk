import * as assert from "power-assert";
import * as ShioriJK from "shiorijk";
import * as SanaJK from "../lib";

const { chain, chainw, endchain, endchainw, auto, autow } = SanaJK;

const state = {
  value: "value1",
  w: 0,
};

const builder = new SanaJK.SanaShioriBuilder().use({ state }).useAutoTalk({
  autoTalkTrigger: { autoStart: false },
  autoTalks: [
    (ctx) => ctx.state.value,
    autow(1, "a"),
    auto(["tag1"], "tag1"),
    autow(1, ["tag1"], "tag1"),
    autow(0, "NO"),
    autow(() => 0, "NO"),
    autow((ctx) => ctx.state.w + 1, "w"),
    chain("a", "b", chainw(1, "c"), "c", endchain("d", endchainw(2, "cc"))),
    auto(autow(1, "a", "b")),
  ],
});

const OnSecondChange = new ShioriJK.Message.Request({
  request_line: { method: "GET", version: "3.0" },
  headers: { ID: "OnSecondChange" },
});

describe("SanaJK", () => {
  describe("autoTalkMiddleware", () => {
    describe("ChainTalk", () => {
      it("works", async () => {
        const { autoTalks } = builder.state;
        const { autoTalkChooser } = builder.state;
        const { autoTalkTrigger } = builder.state;
        const ctx = {
          request: OnSecondChange,
          state: {
            autoTalks,
            autoTalkChooser,
            autoTalkTrigger,
            ...state,
          },
        };
        for (let i = 0; i < 20000; ++i) {
          const talk = autoTalkChooser.choose(ctx);
          assert(talk.talk instanceof Function);
          const result = talk.exec(ctx);
          assert(result);
          assert(result !== "NO");
        }
      });
    });
  });
});
