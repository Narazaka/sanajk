import ShioriJK from 'shiorijk';
import {SanaJK, ok, no_content, bad_request, internal_server_error} from '../src/lib/sanajk';

import assert from 'power-assert';

const crlf = '\r\n';

describe('ok', function() {
  context('has value', function() {
    it('works', function() {
      assert.deepEqual(ok('hello'), new ShioriJK.Message.Response({
        status_line: {code: 200},
        headers: {Value: 'hello'},
      }));
    });
  });
  context('number value', function() {
    it('works', function() {
      assert.deepEqual(ok(42), new ShioriJK.Message.Response({
        status_line: {code: 200},
        headers: {Value: '42'},
      }));
    });
  });
  context('empty value', function() {
    it('works', function() {
      assert.deepEqual(ok(''), new ShioriJK.Message.Response({
        status_line: {code: 204},
      }));
    });
  });
  context('null value', function() {
    it('works', function() {
      assert.deepEqual(ok(null), new ShioriJK.Message.Response({
        status_line: {code: 204},
      }));
    });
  });
  context('undefined value', function() {
    it('works', function() {
      assert.deepEqual(ok(undefined), new ShioriJK.Message.Response({
        status_line: {code: 204},
      }));
    });
  });
  context('no value', function() {
    it('works', function() {
      assert.deepEqual(ok(), new ShioriJK.Message.Response({
        status_line: {code: 204},
      }));
    });
  });
});

describe('ok (with to)', function() {
  context('has to value', function() {
    it('works', function() {
      assert.deepEqual(ok('hello', 'somebody'), new ShioriJK.Message.Response({
        status_line: {code: 200},
        headers: {Value: 'hello', Reference0: 'somebody'},
      }));
    });
  });
});

describe('no_content', function() {
  it('works', function() {
    assert.deepEqual(no_content(), new ShioriJK.Message.Response({
      status_line: {code: 204},
    }));
  });
});

describe('bad_request', function() {
  it('works', function() {
    assert.deepEqual(bad_request(), new ShioriJK.Message.Response({
      status_line: {code: 400},
    }));
  });
});

describe('internal_server_error', function() {
  it('works', function() {
    assert.deepEqual(internal_server_error(), new ShioriJK.Message.Response({
      status_line: {code: 500},
    }));
  });
});
