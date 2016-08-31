import ShioriJK from 'shiorijk';
import {ShioriTransaction} from 'shiori_transaction';

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
export class SanaJK {
  /**
   * initialize Sana
   * @param {Events} events event definitions
   */
  constructor(events = {}) {
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
    this._request_parser = new ShioriJK.Shiori.Request.Parser();
  }

  _has_event(name) {
    return typeof this.events[name] === 'function';
  }

  /**
   * SHIORI load()
   * @param {string} dirpath the ghost/master directory path
   * @return {Promise<number>} status code
   */
  async load(dirpath) {
    /**
     * the ghost/master path
     * @type {string}
     */
    this.dirpath = dirpath;
    if (this._has_event('_load')) return await this._load(dirpath);
  }

  /**
   * SHIORI unload()
   * @return {Promise<number>} status code
   */
  async unload() {
    if (this._has_event('_unload')) return await this._unload();
  }

  /**
   * SHIORI request()
   * @param {string} request_str SHIORI Request
   * @return {Promise<string>} SHIORI Response
   */
  async request(request_str) {
    const transaction = new ShioriTransaction();
    try {
      transaction.request = this._request_parser.parse(request_str + '');
    } catch (error) {
      return this._build_response(bad_request());
    }
    try {
      if (/^2/.test(transaction.request.request_line.version.toString())) {
        return this._build_response(bad_request());
      }
      const request = transaction.request.to('3.0');
      const id = request.headers.header.ID;
      let response;
      if (this._has_event(id)) response = await this.events[id](request);
      if (typeof response === 'string' || typeof response === 'number'
        || response instanceof String || response instanceof Number) {
        return this._build_response(ok(response));
      } else {
        return this._build_response(response);
      }
    } catch (error) {
      return this._build_response(internal_server_error());
    }
  }

  _build_response(response) {
    const status_line = response.status_line;
    const headers = response.headers;
    if (status_line.version == null) status_line.version = '3.0';
    if (!status_line.code)
      status_line.code =
        headers.header.Value != null && headers.header.Value.toString().length ? 200 : 204;
    if (!headers.header.Charset) headers.header.Charset = this.charset;
    if (!headers.header.Sender) headers.header.Sender = this.sender;
    return response.toString();
  }
}

/**
 * empty response struct
 * @return {ShioriJK.Message.Response} empty SHIORI Response
 */
export function response() {
  return new ShioriJK.Message.Response();
}

/**
 * normal response (200 OK or 204 No Content)
 * @param {string} value Value header content
 * @param {string} to Reference0 header content (for communication)
 * @return {ShioriJK.Message.Response} SHIORI Response
 */
export function ok(value, to) {
  const value_str = value == null ? '' : value.toString();
  if (value_str.length !== 0) {
    const response = new ShioriJK.Message.Response({
      status_line: {
        code: 200,
      },
      headers: {
        Value: value_str,
      },
    });
    if (to) response.headers.header.Reference0 = to.toString();
    return response;
  } else {
    return no_content();
  }
}

/**
 * 204 No Content
 * @return {ShioriJK.Message.Response} SHIORI Response
 */
export function no_content() {
  return new ShioriJK.Message.Response({status_line: {code: 204} });
}

/**
 * 400 Bad Request
 * @return {ShioriJK.Message.Response} SHIORI Response
 */
export function bad_request() {
  return new ShioriJK.Message.Response({status_line: {code: 400} });
}

/**
 * 500 Internal Server Error
 * @return {ShioriJK.Message.Response} SHIORI Response
 */
export function internal_server_error() {
  return new ShioriJK.Message.Response({status_line: {code: 500} });
}
