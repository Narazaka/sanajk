'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SanaJK = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.response = response;
exports.ok = ok;
exports.no_content = no_content;
exports.bad_request = bad_request;
exports.internal_server_error = internal_server_error;

var _shiorijk = require('shiorijk');

var _shiorijk2 = _interopRequireDefault(_shiorijk);

var _shiori_transaction = require('shiori_transaction');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SHIORI load() callback
 * @typedef {function(dirpath: string): Promise<number>} LoadCallback
 */

/**
 * SHIORI request() callback
 * @typedef {function(request_str: string): Promise<string>} RequestCallback
 */

/**
 * SHIORI unload() callback
 * @typedef {function(): Promise<number>} UnloadCallback
 */

/**
 * event definitions
 * @typedef {{_load: LoadCallback, _unload: UnloadCallback, [id]: RequestCallback}} Events
 */

/**
 * Ukagaka SHIORI submodule 'SanaJK'
 */
var SanaJK = exports.SanaJK = function () {
  /**
   * initialize Sana
   * @param {Events} events event definitions
   */
  function SanaJK() {
    var events = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, SanaJK);

    /**
     * events object
     * @type {Events}
     */
    this.events = events;
    /**
     * default Charset header value
     * @type {string}
     */
    this.charset = 'UTF-8';
    /**
     * default Sender header value
     * @type {string}
     */
    this.sender = 'SanaJK';
    this._request_parser = new _shiorijk2.default.Shiori.Request.Parser();
  }

  (0, _createClass3.default)(SanaJK, [{
    key: '_has_event',
    value: function _has_event(name) {
      return typeof this.events[name] === 'function';
    }

    /**
     * SHIORI load()
     * @param {string} dirpath the ghost/master directory path
     * @return {Promise<number>} status code
     */

  }, {
    key: 'load',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dirpath) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /**
                 * the ghost/master path
                 * @type {string}
                 */
                this.dirpath = dirpath;

                if (!this._has_event('_load')) {
                  _context.next = 5;
                  break;
                }

                _context.next = 4;
                return this._load(dirpath);

              case 4:
                return _context.abrupt('return', _context.sent);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load(_x2) {
        return _ref.apply(this, arguments);
      }

      return load;
    }()

    /**
     * SHIORI unload()
     * @return {Promise<number>} status code
     */

  }, {
    key: 'unload',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._has_event('_unload')) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 3;
                return this._unload();

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function unload() {
        return _ref2.apply(this, arguments);
      }

      return unload;
    }()

    /**
     * SHIORI request()
     * @param {string} request_str SHIORI Request
     * @return {Promise<string>} SHIORI Response
     */

  }, {
    key: 'request',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(request_str) {
        var transaction, _request, id, _response;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                transaction = new _shiori_transaction.ShioriTransaction();
                _context3.prev = 1;

                transaction.request = this._request_parser.parse(request_str + '');
                _context3.next = 8;
                break;

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3['catch'](1);
                return _context3.abrupt('return', this._build_response(bad_request()));

              case 8:
                _context3.prev = 8;

                if (!transaction.request.request_line.version.startsWith('2')) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt('return', this._build_response(bad_request()));

              case 11:
                _request = transaction.request.to('3.0');
                id = _request.headers.header.ID;
                _response = void 0;

                if (!this._has_event(id)) {
                  _context3.next = 18;
                  break;
                }

                _context3.next = 17;
                return this.events[id](_request);

              case 17:
                _response = _context3.sent;

              case 18:
                if (!(typeof _response === 'string' || typeof _response === 'number' || _response instanceof String || _response instanceof Number)) {
                  _context3.next = 22;
                  break;
                }

                return _context3.abrupt('return', this._build_response(ok(_response)));

              case 22:
                return _context3.abrupt('return', this._build_response(_response));

              case 23:
                _context3.next = 28;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t1 = _context3['catch'](8);
                return _context3.abrupt('return', this._build_response(internal_server_error()));

              case 28:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 5], [8, 25]]);
      }));

      function request(_x3) {
        return _ref3.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: '_build_response',
    value: function _build_response(response) {
      var status_line = response.status_line;
      var headers = response.headers;
      if (status_line.version == null) status_line.version = '3.0';
      if (!status_line.code) status_line.code = headers.header.Value != null && headers.header.Value.toString().length ? 200 : 204;
      if (!headers.header.Charset) headers.header.Charset = this.charset;
      if (!headers.header.Sender) headers.header.Sender = this.sender;
      return response.toString();
    }
  }]);
  return SanaJK;
}();

/**
 * empty response struct
 * @return {ShioriJK.Message.Response} empty SHIORI Response
 */


function response() {
  return new _shiorijk2.default.Message.Response();
}

/**
 * normal response (200 OK or 204 No Content)
 * @param {string} value Value header content
 * @param {string} to Reference0 header content (for communication)
 * @return {ShioriJK.Message.Response} SHIORI Response
 */
function ok(value, to) {
  var value_str = value == null ? '' : value.toString();
  if (value_str.length !== 0) {
    var _response2 = new _shiorijk2.default.Message.Response({
      status_line: {
        code: 200
      },
      headers: {
        Value: value_str
      }
    });
    if (to) _response2.headers.header.Reference0 = to.toString();
    return _response2;
  } else {
    return no_content();
  }
}

/**
 * 204 No Content
 * @return {ShioriJK.Message.Response} SHIORI Response
 */
function no_content() {
  return new _shiorijk2.default.Message.Response({ status_line: { code: 204 } });
}

/**
 * 400 Bad Request
 * @return {ShioriJK.Message.Response} SHIORI Response
 */
function bad_request() {
  return new _shiorijk2.default.Message.Response({ status_line: { code: 400 } });
}

/**
 * 500 Internal Server Error
 * @return {ShioriJK.Message.Response} SHIORI Response
 */
function internal_server_error() {
  return new _shiorijk2.default.Message.Response({ status_line: { code: 500 } });
}
//# sourceMappingURL=sanajk.js.map
