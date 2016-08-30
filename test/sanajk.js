import {SanaJK, ok, no_content, bad_request, internal_server_error} from '../src/lib/sanajk';

import assert from 'power-assert';

/** @test {SanaJK} */
describe('SanaJK', function() {
  lazy('sanajk', function() { return new SanaJK(); });
  /** @test {RoutableComponent#constructor} */
  describe('constructor', function() {
    subject(function() { return this.sanajk; });
    it('surely initialized', function() {
      assert.doesNotThrow(() => this.subject);
      assert(this.subject instanceof SanaJK);
    });
  });
});
