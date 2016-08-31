import ShioriJK from 'shiorijk';
import {SanaJK, ok, no_content, bad_request, internal_server_error} from '../src/lib/sanajk';

import assert from 'power-assert';

function id_request(id, version = '3.0') {
  return new ShioriJK.Message.Request({
    request_line: {version, method: 'GET'},
    headers: {
      ID: id,
    },
  }).toString();
}

function parse_response(response_str) {
  return new ShioriJK.Shiori.Response.Parser().parse(response_str);
}

describe('SanaJK', function() {
  context('without events', function() {
    lazy('sanajk', function() { return new SanaJK(); });
    describe('#constructor', function() {
      it('surely initialized', function() {
        assert.doesNotThrow(() => this.sanajk);
        assert(this.sanajk instanceof SanaJK);
      });
    });
  });

  context('with events', function() {
    lazy('events', function() {
      return {
        _load: (dirpath) => dirpath ? 0 : 1,
        _unload: () => 0,
        OnStringValue: (request) => 'str',
        OnNumberValue: (request) => 'num',
        OnNullValue: (request) => null,
        OnUndefinedValue: (request) => undefined,
        OnResponse: (request) => ok('res'),
        OnError: (request) => { throw new Error(); },
      };
    });
    lazy('sanajk', function() { return new SanaJK(this.events); });
    describe('#constructor', function() {
      it('surely initialized', function() {
        assert.doesNotThrow(() => this.sanajk);
        assert(this.sanajk instanceof SanaJK);
      });
    });
    describe('#load', function() {
      it('works', async function() {
        assert(0 === await this.sanajk.load('/path/'));
      });
      it('passes args', async function() {
        assert(1 === await this.sanajk.load());
      });
    });
    describe('#unload', function() {
      it('works', async function() {
        assert(0 === await this.sanajk.unload());
      });
    });
    describe('#request', function() {
      context('events', function() {
        it('string value', async function() { assert('str' === parse_response(await this.sanajk.request(id_request('OnStringValue'))).headers.get('Value')); });
        it('number value', async function() { assert('num' === parse_response(await this.sanajk.request(id_request('OnNumberValue'))).headers.get('Value')); });
        it('null value', async function() { assert(204 === parse_response(await this.sanajk.request(id_request('OnNullValue'))).status_line.code); });
        it('undefined value', async function() { assert(204 === parse_response(await this.sanajk.request(id_request('OnUndefinedValue'))).status_line.code); });
        it('response', async function() {
          const response = ok('res');
          response.status_line.version = '3.0';
          response.status_line.protocol = 'SHIORI';
          response.headers.header.Charset = 'UTF-8';
          response.headers.header.Sender = 'SanaJK';
          assert.deepEqual(response, parse_response(await this.sanajk.request(id_request('OnResponse'))));
        });
        it('no event', async function() { assert(204 === parse_response(await this.sanajk.request(id_request('OnNoEvent'))).status_line.code); });
      });
      context('error event', function() {
        it('causes 500 error', async function() { assert(500 === parse_response(await this.sanajk.request(id_request('OnError'))).status_line.code); });
      });
      context('invalid request', function() {
        it('causes 400 parse error', async function() { assert(400 === parse_response(await this.sanajk.request('foo')).status_line.code); });
      });
      context('default header Charset changed', function() {
        it('has correct headers', async function() {
          this.sanajk.charset = 'Shift_JIS';
          assert('Shift_JIS' === parse_response(await this.sanajk.request(id_request('OnNumberValue'))).headers.get('Charset'));
        });
      });
      context('default header Sender changed', function() {
        it('has correct headers', async function() {
          this.sanajk.sender = 'Sakura';
          assert('Sakura' === parse_response(await this.sanajk.request(id_request('OnNumberValue'))).headers.get('Sender'));
        });
      });
    });
  });
});
