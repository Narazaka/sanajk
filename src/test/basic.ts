import { SanaShioriBuilder } from "../lib";

// tslint:disable-next-line no-implicit-dependencies
import * as assert from "power-assert";

describe("SanaJK", function() {
  context("without events", function() {
    describe("#constructor", function() {
      it("surely initialized", function() {
        assert.doesNotThrow(() => new SanaShioriBuilder());
        assert(new SanaShioriBuilder() instanceof SanaShioriBuilder);
      });
    });
  });
});
