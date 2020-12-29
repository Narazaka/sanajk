import * as assert from "power-assert";
import { SanaShioriBuilder } from "../lib";

describe("SanaJK", () => {
  context("without events", () => {
    describe("#constructor", () => {
      it("surely initialized", () => {
        assert.doesNotThrow(() => new SanaShioriBuilder());
        assert(new SanaShioriBuilder() instanceof SanaShioriBuilder);
      });
    });
  });
});
