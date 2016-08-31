(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sanajk"] = factory();
	else
		root["sanajk"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/web";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SanaJK = undefined;
	
	var _regenerator = __webpack_require__(1);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(5);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _classCallCheck2 = __webpack_require__(71);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(72);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	exports.response = response;
	exports.ok = ok;
	exports.no_content = no_content;
	exports.bad_request = bad_request;
	exports.internal_server_error = internal_server_error;
	
	var _shiorijk = __webpack_require__(76);
	
	var _shiorijk2 = _interopRequireDefault(_shiorijk);
	
	var _shiori_transaction = __webpack_require__(79);
	
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
	
	                if (!/^2/.test(transaction.request.request_line.version.toString())) {
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(3);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(6);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }
	
	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            return step("next", value);
	          }, function (err) {
	            return step("throw", err);
	          });
	        }
	      }
	
	      return step("next");
	    });
	  };
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(53);
	__webpack_require__(57);
	module.exports = __webpack_require__(17).Promise;

/***/ },
/* 8 */
/***/ function(module, exports) {



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(10)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(13)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , defined   = __webpack_require__(12);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(14)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , hide           = __webpack_require__(20)
	  , has            = __webpack_require__(31)
	  , Iterators      = __webpack_require__(32)
	  , $iterCreate    = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(51)
	  , ITERATOR       = __webpack_require__(50)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(17)
	  , ctx       = __webpack_require__(18)
	  , hide      = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 16 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(21)
	  , createDesc = __webpack_require__(29);
	module.exports = __webpack_require__(25) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(22)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(28)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(25) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(25) && !__webpack_require__(26)(function(){
	  return Object.defineProperty(__webpack_require__(27)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(26)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23)
	  , document = __webpack_require__(16).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(23);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 31 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(34)
	  , descriptor     = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(49)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(20)(IteratorPrototype, __webpack_require__(50)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(22)
	  , dPs         = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(47)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(27)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(21)
	  , anObject = __webpack_require__(22)
	  , getKeys  = __webpack_require__(36);
	
	module.exports = __webpack_require__(25) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(37)
	  , enumBugKeys = __webpack_require__(47);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(31)
	  , toIObject    = __webpack_require__(38)
	  , arrayIndexOf = __webpack_require__(41)(false)
	  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(39)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(40);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(38)
	  , toLength  = __webpack_require__(42)
	  , toIndex   = __webpack_require__(43);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(11)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(45)('keys')
	  , uid    = __webpack_require__(46);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(21).f
	  , has = __webpack_require__(31)
	  , TAG = __webpack_require__(50)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(45)('wks')
	  , uid        = __webpack_require__(46)
	  , Symbol     = __webpack_require__(16).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(31)
	  , toObject    = __webpack_require__(52)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(54);
	var global        = __webpack_require__(16)
	  , hide          = __webpack_require__(20)
	  , Iterators     = __webpack_require__(32)
	  , TO_STRING_TAG = __webpack_require__(50)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(55)
	  , step             = __webpack_require__(56)
	  , Iterators        = __webpack_require__(32)
	  , toIObject        = __webpack_require__(38);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(13)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(14)
	  , global             = __webpack_require__(16)
	  , ctx                = __webpack_require__(18)
	  , classof            = __webpack_require__(58)
	  , $export            = __webpack_require__(15)
	  , isObject           = __webpack_require__(23)
	  , aFunction          = __webpack_require__(19)
	  , anInstance         = __webpack_require__(59)
	  , forOf              = __webpack_require__(60)
	  , speciesConstructor = __webpack_require__(64)
	  , task               = __webpack_require__(65).set
	  , microtask          = __webpack_require__(67)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(50)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(68)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(49)($Promise, PROMISE);
	__webpack_require__(69)(PROMISE);
	Wrapper = __webpack_require__(17)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(70)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(40)
	  , TAG = __webpack_require__(50)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(18)
	  , call        = __webpack_require__(61)
	  , isArrayIter = __webpack_require__(62)
	  , anObject    = __webpack_require__(22)
	  , toLength    = __webpack_require__(42)
	  , getIterFn   = __webpack_require__(63)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(32)
	  , ITERATOR   = __webpack_require__(50)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(58)
	  , ITERATOR  = __webpack_require__(50)('iterator')
	  , Iterators = __webpack_require__(32);
	module.exports = __webpack_require__(17).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(22)
	  , aFunction = __webpack_require__(19)
	  , SPECIES   = __webpack_require__(50)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(18)
	  , invoke             = __webpack_require__(66)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(27)
	  , global             = __webpack_require__(16)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(40)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , macrotask = __webpack_require__(65).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(40)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(20);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(16)
	  , core        = __webpack_require__(17)
	  , dP          = __webpack_require__(21)
	  , DESCRIPTORS = __webpack_require__(25)
	  , SPECIES     = __webpack_require__(50)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(50)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(73);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75);
	var $Object = __webpack_require__(17).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(25), 'Object', {defineProperty: __webpack_require__(21).f});

/***/ },
/* 76 */
[83, 77],
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {
	/* (C) 2014 Narazaka : Licensed under The MIT License - http://narazaka.net/license/MIT?2014 */
	var ShioriJK,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	ShioriJK = {};
	
	if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
	  module.exports = ShioriJK;
	}
	
	Function.prototype.property = function(properties) {
	  var descriptions, property, results1;
	  results1 = [];
	  for (property in properties) {
	    descriptions = properties[property];
	    results1.push(Object.defineProperty(this.prototype, property, descriptions));
	  }
	  return results1;
	};
	
	ShioriJK.Message = {};
	
	ShioriJK.Message.Request = (function() {
	  function Request(arg) {
	    var headers, no_prepare, ref, request_line;
	    ref = arg != null ? arg : {}, request_line = ref.request_line, headers = ref.headers, no_prepare = ref.no_prepare;
	    this.request_line = request_line != null ? request_line instanceof ShioriJK.RequestLine ? request_line : new ShioriJK.RequestLine(request_line) : !no_prepare ? new ShioriJK.RequestLine() : void 0;
	    this.headers = headers != null ? headers instanceof ShioriJK.Headers.Request ? headers : new ShioriJK.Headers.Request(headers) : new ShioriJK.Headers.Request();
	  }
	
	  Request.prototype.request_line = null;
	
	  Request.prototype.headers = null;
	
	  Request.prototype.toString = function() {
	    return this.request_line.toString() + '\r\n' + this.headers.toString() + '\r\n';
	  };
	
	  return Request;
	
	})();
	
	ShioriJK.Message.Response = (function() {
	  function Response(arg) {
	    var headers, no_prepare, ref, status_line;
	    ref = arg != null ? arg : {}, status_line = ref.status_line, headers = ref.headers, no_prepare = ref.no_prepare;
	    this.status_line = status_line != null ? status_line instanceof ShioriJK.StatusLine ? status_line : new ShioriJK.StatusLine(status_line) : !no_prepare ? new ShioriJK.StatusLine() : void 0;
	    this.headers = headers != null ? headers instanceof ShioriJK.Headers.Response ? headers : new ShioriJK.Headers.Response(headers) : new ShioriJK.Headers.Response();
	  }
	
	  Response.prototype.status_line = null;
	
	  Response.prototype.headers = null;
	
	  Response.prototype.toString = function() {
	    return this.status_line.toString() + '\r\n' + this.headers.toString() + '\r\n';
	  };
	
	  return Response;
	
	})();
	
	ShioriJK.RequestLine = (function() {
	  function RequestLine(arg) {
	    var method, protocol, ref, version;
	    ref = arg != null ? arg : {}, method = ref.method, protocol = ref.protocol, version = ref.version;
	    this["arguments"] = {};
	    if (method != null) {
	      this.method = method;
	    }
	    this.protocol = protocol || 'SHIORI';
	    if (version != null) {
	      this.version = version;
	    }
	  }
	
	  RequestLine.prototype.method = null;
	
	  RequestLine.prototype.protocol = null;
	
	  RequestLine.prototype.version = null;
	
	  RequestLine.property({
	    method: {
	      get: function() {
	        return this["arguments"].method;
	      },
	      set: function(method) {
	        if ((method != null) && (this.version != null)) {
	          this.validate_method_version(method, this.version);
	        } else if (method != null) {
	          switch (method) {
	            case 'GET':
	            case 'NOTIFY':
	            case 'GET Version':
	            case 'GET Sentence':
	            case 'GET Word':
	            case 'GET Status':
	            case 'TEACH':
	            case 'GET String':
	            case 'NOTIFY OwnerGhostName':
	            case 'NOTIFY OtherGhostName':
	            case 'TRANSLATE Sentence':
	              break;
	            default:
	              throw 'Invalid protocol method : ' + method;
	          }
	        }
	        return this["arguments"].method = method;
	      }
	    },
	    protocol: {
	      get: function() {
	        return this["arguments"].protocol;
	      },
	      set: function(protocol) {
	        if ((protocol != null) && protocol !== 'SHIORI') {
	          throw 'Invalid protocol : ' + protocol;
	        }
	        return this["arguments"].protocol = protocol;
	      }
	    },
	    version: {
	      get: function() {
	        return this["arguments"].version;
	      },
	      set: function(version) {
	        if ((this.method != null) && (version != null)) {
	          this.validate_method_version(this.method, version);
	        } else if (version != null) {
	          switch (version) {
	            case '2.0':
	            case '2.2':
	            case '2.3':
	            case '2.4':
	            case '2.5':
	            case '2.6':
	            case '3.0':
	              break;
	            default:
	              throw 'Invalid protocol version : ' + version;
	          }
	        }
	        return this["arguments"].version = version;
	      }
	    }
	  });
	
	  RequestLine.prototype.validate_method_version = function(method, version) {
	    var is_valid;
	    is_valid = false;
	    switch (version) {
	      case '2.0':
	        switch (method) {
	          case 'GET Version':
	          case 'NOTIFY OwnerGhostName':
	          case 'GET Sentence':
	          case 'GET Word':
	          case 'GET Status':
	            is_valid = true;
	        }
	        break;
	      case '2.2':
	        switch (method) {
	          case 'GET Sentence':
	            is_valid = true;
	        }
	        break;
	      case '2.3':
	        switch (method) {
	          case 'NOTIFY OtherGhostName':
	          case 'GET Sentence':
	            is_valid = true;
	        }
	        break;
	      case '2.4':
	        switch (method) {
	          case 'TEACH':
	            is_valid = true;
	        }
	        break;
	      case '2.5':
	        switch (method) {
	          case 'GET String':
	            is_valid = true;
	        }
	        break;
	      case '2.6':
	        switch (method) {
	          case 'GET Sentence':
	          case 'GET Status':
	          case 'GET String':
	          case 'NOTIFY OwnerGhostName':
	          case 'NOTIFY OtherGhostName':
	          case 'GET Version':
	          case 'TRANSLATE Sentence':
	            is_valid = true;
	        }
	        break;
	      case '3.0':
	        switch (method) {
	          case 'GET':
	          case 'NOTIFY':
	            is_valid = true;
	        }
	    }
	    if (!is_valid) {
	      throw 'Invalid protocol method and version : ' + method + ' SHIORI/' + version;
	    }
	  };
	
	  RequestLine.prototype.toString = function() {
	    return this.method + " " + this.protocol + "/" + this.version;
	  };
	
	  return RequestLine;
	
	})();
	
	ShioriJK.StatusLine = (function() {
	  function StatusLine(arg) {
	    var code, protocol, ref, version;
	    ref = arg != null ? arg : {}, code = ref.code, protocol = ref.protocol, version = ref.version;
	    this["arguments"] = {};
	    if (code != null) {
	      this.code = code;
	    }
	    this.protocol = protocol || 'SHIORI';
	    if (version != null) {
	      this.version = version;
	    }
	  }
	
	  StatusLine.prototype.code = null;
	
	  StatusLine.prototype.protocol = null;
	
	  StatusLine.prototype.version = null;
	
	  StatusLine.property({
	    code: {
	      get: function() {
	        return this["arguments"].code;
	      },
	      set: function(code) {
	        if ((code != null) && (this.message[code] == null)) {
	          throw 'Invalid response code : ' + code;
	        }
	        return this["arguments"].code = code;
	      }
	    },
	    protocol: {
	      get: function() {
	        return this["arguments"].protocol;
	      },
	      set: function(protocol) {
	        if ((protocol != null) && protocol !== 'SHIORI') {
	          throw 'Invalid protocol : ' + protocol;
	        }
	        return this["arguments"].protocol = protocol;
	      }
	    },
	    version: {
	      get: function() {
	        return this["arguments"].version;
	      },
	      set: function(version) {
	        if (version != null) {
	          switch (version) {
	            case '2.0':
	            case '2.2':
	            case '2.3':
	            case '2.4':
	            case '2.5':
	            case '2.6':
	            case '3.0':
	              break;
	            default:
	              throw 'Invalid protocol version : ' + version;
	          }
	        }
	        return this["arguments"].version = version;
	      }
	    }
	  });
	
	  StatusLine.prototype.toString = function() {
	    return this.protocol + "/" + this.version + " " + this.code + " " + this.message[this.code];
	  };
	
	  StatusLine.prototype.message = {
	    200: 'OK',
	    204: 'No Content',
	    310: 'Communicate',
	    311: 'Not Enough',
	    312: 'Advice',
	    400: 'Bad Request',
	    418: "I'm a tea pot",
	    500: 'Internal Server Error'
	  };
	
	  return StatusLine;
	
	})();
	
	ShioriJK.Headers = (function() {
	  function Headers(header) {
	    this.header = header != null ? header : {};
	  }
	
	  Headers.prototype.header = null;
	
	  Headers.prototype.get = function(name) {
	    if (this.header[name] != null) {
	      return this.header[name];
	    }
	  };
	
	  Headers.prototype.set = function(name, value) {
	    return this.header[name] = value;
	  };
	
	  Headers.prototype.get_separated = function(name, separator) {
	    if (separator == null) {
	      separator = '\x01';
	    }
	    if (this.header[name] != null) {
	      return this.header[name].split(separator);
	    }
	  };
	
	  Headers.prototype.set_separated = function(name, value, separator) {
	    if (separator == null) {
	      separator = '\x01';
	    }
	    return this.header[name] = value.join(separator);
	  };
	
	  Headers.prototype.get_separated2 = function(name, separator1, separator2) {
	    var element, i, len, ref, results1;
	    if (separator1 == null) {
	      separator1 = '\x02';
	    }
	    if (separator2 == null) {
	      separator2 = '\x01';
	    }
	    if (this.header[name] != null) {
	      ref = this.header[name].split(separator1);
	      results1 = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        element = ref[i];
	        results1.push(element.split(separator2));
	      }
	      return results1;
	    }
	  };
	
	  Headers.prototype.set_separated2 = function(name, value, separator1, separator2) {
	    var element;
	    if (separator1 == null) {
	      separator1 = '\x02';
	    }
	    if (separator2 == null) {
	      separator2 = '\x01';
	    }
	    return this.header[name] = ((function() {
	      var i, len, results1;
	      results1 = [];
	      for (i = 0, len = value.length; i < len; i++) {
	        element = value[i];
	        results1.push(element.join(separator2));
	      }
	      return results1;
	    })()).join(separator1);
	  };
	
	  Headers.prototype.references = function() {
	    var i, index, name, ref, reference_max_index, result, results1;
	    reference_max_index = -1;
	    for (name in this.header) {
	      if ((result = /^Reference(\d+)$/.exec(name)) && reference_max_index < result[1] - 0) {
	        reference_max_index = result[1] - 0;
	      }
	    }
	    results1 = [];
	    for (index = i = 0, ref = reference_max_index + 1; 0 <= ref ? i < ref : i > ref; index = 0 <= ref ? ++i : --i) {
	      results1.push(this.header["Reference" + index]);
	    }
	    return results1;
	  };
	
	  Headers.prototype.validate = function() {
	    var name, ref, results1, value;
	    ref = this.header;
	    results1 = [];
	    for (name in ref) {
	      value = ref[name];
	      if (("" + value).match(/\n/)) {
	        throw 'Invalid header value - line feed found : [' + name + '] : ' + value;
	      } else {
	        results1.push(void 0);
	      }
	    }
	    return results1;
	  };
	
	  Headers.prototype.toString = function() {
	    var name, ref, str, value;
	    str = '';
	    this.validate();
	    ref = this.header;
	    for (name in ref) {
	      value = ref[name];
	      str += name + ": " + value + "\r\n";
	    }
	    return str;
	  };
	
	  return Headers;
	
	})();
	
	ShioriJK.Headers.Request = (function(superClass) {
	  extend(Request, superClass);
	
	  function Request() {
	    return Request.__super__.constructor.apply(this, arguments);
	  }
	
	  return Request;
	
	})(ShioriJK.Headers);
	
	ShioriJK.Headers.Response = (function(superClass) {
	  extend(Response, superClass);
	
	  function Response() {
	    return Response.__super__.constructor.apply(this, arguments);
	  }
	
	  return Response;
	
	})(ShioriJK.Headers);
	
	ShioriJK.Shiori = {};
	
	ShioriJK.Shiori.Header = {};
	
	ShioriJK.Shiori.Request = {};
	
	ShioriJK.Shiori.Request.RequestLine = {};
	
	ShioriJK.Shiori.Request.Header = {};
	
	ShioriJK.Shiori.Response = {};
	
	ShioriJK.Shiori.Response.StatusLine = {};
	
	ShioriJK.Shiori.Response.Header = {};
	
	ShioriJK.Shiori.Parser = (function() {
	  function Parser() {}
	
	  Parser.prototype.is_parsing = function() {
	    return !this.section.is('idle');
	  };
	
	  Parser.prototype.is_parsing_end = function() {
	    return !this.section.is('end');
	  };
	
	  Parser.prototype.get_result = function() {
	    return this.result;
	  };
	
	  Parser.prototype.result_builder = function() {};
	
	  Parser.prototype.begin_parse = function() {
	    if (!this.section.is('idle')) {
	      throw 'cannot begin parsing because previous transaction is still working';
	    }
	    this.result = this.result_builder();
	    return this.section.next();
	  };
	
	  Parser.prototype.end_parse = function() {
	    if (!this.section.is('end')) {
	      this.abort_parse();
	      throw 'parsing was aborted';
	    }
	    return this.section.next();
	  };
	
	  Parser.prototype.abort_parse = function() {
	    var name, parser, ref;
	    if (this.parsers != null) {
	      ref = this.parsers;
	      for (name in ref) {
	        parser = ref[name];
	        if (parser.abort_parse != null) {
	          parser.abort_parse();
	        }
	      }
	    }
	    return this.section.set('idle');
	  };
	
	  Parser.prototype.parse = function(transaction) {
	    var result;
	    this.begin_parse();
	    result = this.parse_chunk(transaction);
	    if (this.is_parsing()) {
	      throw 'transaction is not closed';
	    }
	    if (result.results.length !== 1) {
	      throw 'multiple transaction';
	    }
	    return result.results[0];
	  };
	
	  Parser.prototype.parse_chunk = function(chunk) {
	    var lines;
	    lines = chunk.split(/\r\n/);
	    if (chunk.match(/\r\n$/)) {
	      lines.pop();
	    }
	    return this.parse_lines(lines);
	  };
	
	  Parser.prototype.parse_lines = function(lines) {
	    var i, len, line, result, results;
	    results = [];
	    for (i = 0, len = lines.length; i < len; i++) {
	      line = lines[i];
	      result = this.parse_line(line);
	      if (result.state === 'end') {
	        results.push(result.result);
	      }
	    }
	    return {
	      results: results,
	      state: result.state
	    };
	  };
	
	  Parser.prototype.parse_line = function(line) {
	    if (this.section.is('idle')) {
	      this.begin_parse();
	    }
	    this.parse_main(line);
	    if (this.section.is('end')) {
	      this.end_parse();
	      return {
	        result: this.get_result(),
	        state: 'end'
	      };
	    } else {
	      return {
	        state: 'continue'
	      };
	    }
	  };
	
	  Parser.prototype.parse_main = function(line) {};
	
	  return Parser;
	
	})();
	
	ShioriJK.Shiori.Section = (function() {
	  function Section(sections) {
	    this.sections = sections;
	    this.index = 0;
	  }
	
	  Section.prototype.is = function(section) {
	    return this.sections[this.index] === section;
	  };
	
	  Section.prototype.next = function() {
	    if (this.index === this.sections.length - 1) {
	      return this.index = 0;
	    } else {
	      return this.index++;
	    }
	  };
	
	  Section.prototype.previous = function() {
	    if (this.index === 0) {
	      return this.index = this.sections.length - 1;
	    } else {
	      return this.index--;
	    }
	  };
	
	  Section.prototype.set = function(section) {
	    return this.index = this.sections.indexOf(section);
	  };
	
	  Section.prototype.get = function() {
	    return this.sections[this.index];
	  };
	
	  return Section;
	
	})();
	
	ShioriJK.Shiori.Header.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    return Parser.__super__.constructor.apply(this, arguments);
	  }
	
	  Parser.prototype.parse_main = function(line) {
	    var result;
	    result = this.parse_header(line);
	    if (result.state === 'end') {
	      return this.section.next();
	    }
	  };
	
	  Parser.prototype.parse_header = function(line) {
	    var result;
	    if (line.length) {
	      if (result = line.match(/^(.+?): (.*)$/)) {
	        this.result.header[result[1]] = result[2];
	      } else {
	        throw 'Invalid header line : ' + line;
	      }
	      return {
	        state: 'continue'
	      };
	    } else {
	      return {
	        state: 'end'
	      };
	    }
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Parser);
	
	ShioriJK.Shiori.Header.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section(sections) {
	    this.sections = sections != null ? sections : ['idle', 'header', 'end'];
	    this.index = 0;
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Section);
	
	ShioriJK.Shiori.Request.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.parsers = {
	      request_line: new ShioriJK.Shiori.Request.RequestLine.Parser(),
	      headers: new ShioriJK.Shiori.Request.Header.Parser()
	    };
	    this.section = new ShioriJK.Shiori.Request.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Message.Request({
	      no_prepare: true
	    });
	  };
	
	  Parser.prototype.parse_main = function(line) {
	    var parser, parser_result;
	    parser = this.parsers[this.section.get()];
	    parser_result = parser.parse_line(line);
	    if (parser_result.state === 'end') {
	      this.result[this.section.get()] = parser_result.result;
	      return this.section.next();
	    }
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Parser);
	
	ShioriJK.Shiori.Request.RequestLine.Parser = (function() {
	  function Parser() {}
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.RequestLine();
	  };
	
	  Parser.prototype.parse = function(transaction) {
	    return this.parse_chunk(transaction);
	  };
	
	  Parser.prototype.parse_chunk = function(chunk) {
	    return this.parse_line(chunk);
	  };
	
	  Parser.prototype.parse_line = function(line) {
	    var result;
	    result = line.match(/^([A-Za-z0-9 ]+) SHIORI\/([0-9.]+)/);
	    if (!result) {
	      throw 'Invalid request line : ' + line;
	    }
	    this.result = this.result_builder();
	    this.result.method = result[1];
	    this.result.protocol = 'SHIORI';
	    this.result.version = result[2];
	    return {
	      result: this.result,
	      state: 'end'
	    };
	  };
	
	  return Parser;
	
	})();
	
	ShioriJK.Shiori.Request.Header.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.section = new ShioriJK.Shiori.Request.Header.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Headers.Request();
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Header.Parser);
	
	ShioriJK.Shiori.Request.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section(sections) {
	    this.sections = sections != null ? sections : ['idle', 'request_line', 'headers', 'end'];
	    this.index = 0;
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Section);
	
	ShioriJK.Shiori.Request.Header.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section() {
	    return Section.__super__.constructor.apply(this, arguments);
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Header.Section);
	
	ShioriJK.Shiori.Response.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.parsers = {
	      status_line: new ShioriJK.Shiori.Response.StatusLine.Parser(),
	      headers: new ShioriJK.Shiori.Response.Header.Parser()
	    };
	    this.section = new ShioriJK.Shiori.Response.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Message.Response({
	      no_prepare: true
	    });
	  };
	
	  Parser.prototype.parse_main = function(line) {
	    var parser, parser_result;
	    parser = this.parsers[this.section.get()];
	    parser_result = parser.parse_line(line);
	    if (parser_result.state === 'end') {
	      this.result[this.section.get()] = parser_result.result;
	      return this.section.next();
	    }
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Parser);
	
	ShioriJK.Shiori.Response.StatusLine.Parser = (function() {
	  function Parser() {}
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.StatusLine();
	  };
	
	  Parser.prototype.parse = function(transaction) {
	    return this.parse_chunk(transaction);
	  };
	
	  Parser.prototype.parse_chunk = function(chunk) {
	    return this.parse_line(chunk);
	  };
	
	  Parser.prototype.parse_line = function(line) {
	    var result;
	    result = line.match(/^SHIORI\/([0-9.]+) (\d+) (.+)$/);
	    if (!result) {
	      throw 'Invalid status line : ' + line;
	    }
	    this.result = this.result_builder();
	    this.result.protocol = 'SHIORI';
	    this.result.version = result[1];
	    this.result.code = result[2] - 0;
	    return {
	      result: this.result,
	      state: 'end'
	    };
	  };
	
	  return Parser;
	
	})();
	
	ShioriJK.Shiori.Response.Header.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.section = new ShioriJK.Shiori.Response.Header.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Headers.Response();
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Header.Parser);
	
	ShioriJK.Shiori.Response.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section(sections) {
	    this.sections = sections != null ? sections : ['idle', 'status_line', 'headers', 'end'];
	    this.index = 0;
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Section);
	
	ShioriJK.Shiori.Response.Header.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section() {
	    return Section.__super__.constructor.apply(this, arguments);
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Header.Section);
	
	//# sourceMappingURL=shiorijk.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)(module)))

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	if(false) var exports = window;
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	if (true) {
	  var ShioriConverter = __webpack_require__(80).ShioriConverter;
	}
	
	/**
	 * SHIORI/2.x/3.x transaction class with protocol version converter
	 */
	
	var ShioriTransaction = (function () {
	  /**
	   * constructor
	   * @return {ShioriTransaction} this
	   */
	
	  function ShioriTransaction() {
	    _classCallCheck(this, ShioriTransaction);
	  }
	
	  /**
	   * request
	   * @return {ShioriJK.Message.Request} request
	   */
	
	  _createClass(ShioriTransaction, [{
	    key: 'request_to',
	
	    /**
	     * convert request to specified protocol version
	     * (this method needs ShioriConverter)
	     * @param {string} version - target protocol version
	     * @return {ShioriJK.Message.Request} specified version request
	     */
	    value: function request_to(version) {
	      return ShioriConverter.request_to(this.request, version);
	    }
	
	    /**
	     * convert response to specified protocol version
	     * (this method needs ShioriConverter)
	     * @param {string} version - target protocol version
	     * @return {ShioriJK.Message.Response} specified version response
	     */
	
	  }, {
	    key: 'response_to',
	    value: function response_to(version) {
	      return ShioriConverter.response_to(this.request, this.response, version);
	    }
	  }, {
	    key: 'request',
	    get: function get() {
	      return this._request;
	    }
	
	    /**
	     * request
	     * @param {ShioriJK.Message.Request} request - request
	     * @return {ShioriJK.Message.Request} request
	     */
	    ,
	    set: function set(request) {
	      this._request = request;
	      this._request.to = this.request_to.bind(this);
	      return this._request;
	    }
	
	    /**
	     * response
	     * @return {ShioriJK.Message.Response} response
	     */
	
	  }, {
	    key: 'response',
	    get: function get() {
	      return this._response;
	    }
	
	    /**
	     * response
	     * @param {ShioriJK.Message.Response} response - response
	     * @return {ShioriJK.Message.Response} response
	     */
	    ,
	    set: function set(response) {
	      this._response = response;
	      this._response.to = this.response_to.bind(this);
	      return this._response;
	    }
	  }]);
	
	  return ShioriTransaction;
	})();
	
	exports.ShioriTransaction = ShioriTransaction;
	//# sourceMappingURL=shiori_transaction.js.map


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}if(false)var exports=window;var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}();if(Object.defineProperty(exports,"__esModule",{value:!0}),"undefined"!="function")var ShioriJK=__webpack_require__(81);var ShioriConverter=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"request_to",value:function(r,t){if(!r)throw new e.RequestNotSetError;return"4.0"===r.request_line.version?"4.0"===t?r:"3.0"===t?e.request_4to3(r):e.request_4to2(r):"3.0"===r.request_line.version?"4.0"===t?e.request_3to4(r):"3.0"===t?r:e.request_3to2(r):"4.0"===t?e.request_2to4(r):"3.0"===t?e.request_2to3(r):r}},{key:"response_to",value:function(r,t,o){if(!r)throw new e.RequestNotSetError;if(!t)throw new e.ResponseNotSetError;return"4.0"===t.status_line.version?"4.0"===o?t:"3.0"===o?e.response_4to3(r,t):e.response_4to2(r,t):"3.0"===t.status_line.version?"4.0"===o?e.response_3to4(r,t):"3.0"===o?t:e.response_3to2(r,t):"4.0"===o?e.response_2to4(r,t):"3.0"===o?e.response_2to3(r,t):t}},{key:"request_4to3",value:function(r){throw new e.NotImplementedError}},{key:"request_4to2",value:function(r){return e.request_3to2(e.request_4to3(r))}},{key:"method3to2",value:function(e){var r=e.headers.header.ID;return"version"===r?"GET Version":"OnTeach"===r?"TEACH":"ownerghostname"===r?"NOTIFY OwnerGhostName":"otherghostname"===r?"NOTIFY OtherGhostName":"NOTIFY"===e.request_line.method?void 0:r.match(/^[a-z]/)?"GET String":"GET Sentence"}},{key:"request_3to2",value:function(r){var t=e.method3to2(r);if(t){var o=r.headers.header.ID,n=new ShioriJK.Headers.Request,s=new ShioriJK.Message.Request({request_line:new ShioriJK.RequestLine({method:t,protocol:r.protocol,version:"2.6"}),headers:n});if("GET Version"===t);else if("GET Sentence"===t&&null!=o){if("OnCommunicate"===o){n.header.Sender=r.headers.header.Reference0,n.header.Sentence=r.headers.header.Reference1,n.header.Age=r.headers.header.Age||"0";for(var a in r.headers.header){var i=r.headers.header[a],u=void 0;(u=a.match(/^Reference(\d+)$/))?n.header["Reference"+(u[1]-2)]=""+i:n.header[a]=""+i}return s}n.header.Event=o}else{if("GET String"!==t||null==o){if("TEACH"===t){n.header.Word=r.headers.header.Reference0;for(var a in r.headers.header){var i=r.headers.header[a],u=void 0;(u=a.match(/^Reference(\d+)$/))?n.header["Reference"+(u[1]-1)]=""+i:n.header[a]=""+i}return s}if("NOTIFY OwnerGhostName"===t)return n.header.Ghost=r.headers.header.Reference0,s;if("NOTIFY OtherGhostName"===t){var h=[];for(var a in r.headers.header){var i=r.headers.header[a];a.match(/^Reference\d+$/)?h.push(""+i):n.header[a]=""+i}var c=h.map(function(e){return"GhostEx: "+e+"\r\n"}).join("");return s.request_line+"\r\n"+s.headers+c+"\r\n"}return}n.header.ID=o}for(var a in r.headers.header)if("ID"!==a){var i=r.headers.header[a];n.header[a]=""+i}return s}}},{key:"request_2to3",value:function(r){throw new e.NotImplementedError}},{key:"request_3to4",value:function(r){throw new e.NotImplementedError}},{key:"request_2to4",value:function(r){return e.request_3to4(e.request_2to3(r))}},{key:"response_4to3",value:function(r,t){throw new e.NotImplementedError}},{key:"response_4to2",value:function(r,t){return e.response_3to2(e.response_4to3(r,t))}},{key:"response_3to2",value:function(r,t){throw new e.NotImplementedError}},{key:"response_2to3",value:function(r,t){var o=e.request_to(r,"2.6"),n=void 0;switch(o.request_line.method){case"GET String":n="String";break;case"GET Word":n="Word";break;case"GET Status":n="Status";break;default:n="Sentence"}var s=new ShioriJK.Headers.Response;null!=t.headers.header[n]&&(s.header.Value=t.headers.header[n]);for(var a in t.headers.header){var i=t.headers.header[a],u=void 0;(u=a.match(/^Reference(\d+)$/))?s.header["Reference"+(u[1]+1)]=i:"To"===a?s.header.Reference0=i:a!==n&&(s.header[a]=i)}return new ShioriJK.Message.Response({status_line:new ShioriJK.StatusLine({code:t.status_line.code,protocol:t.status_line.protocol,version:"3.0"}),headers:s})}},{key:"response_3to4",value:function(r,t){throw new e.NotImplementedError}},{key:"response_2to4",value:function(r,t){return e.response_3to4(e.response_2to3(r,t))}}]),e}();ShioriConverter.RequestNotSetError=function(e){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,e),r}(Error),ShioriConverter.ResponseNotSetError=function(e){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,e),r}(Error),ShioriConverter.NotImplementedError=function(e){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,e),r}(Error),exports.ShioriConverter=ShioriConverter;
	//# sourceMappingURL=shiori_converter.js.map


/***/ },
/* 81 */
[83, 82],
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {
	/* (C) 2014 Narazaka : Licensed under The MIT License - http://narazaka.net/license/MIT?2014 */
	var ShioriJK,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	ShioriJK = {};
	
	if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
	  module.exports = ShioriJK;
	}
	
	Function.prototype.property = function(properties) {
	  var descriptions, property, results1;
	  results1 = [];
	  for (property in properties) {
	    descriptions = properties[property];
	    results1.push(Object.defineProperty(this.prototype, property, descriptions));
	  }
	  return results1;
	};
	
	ShioriJK.Message = {};
	
	ShioriJK.Message.Request = (function() {
	  function Request(arg) {
	    var headers, no_prepare, ref, request_line;
	    ref = arg != null ? arg : {}, request_line = ref.request_line, headers = ref.headers, no_prepare = ref.no_prepare;
	    this.request_line = request_line != null ? request_line instanceof ShioriJK.RequestLine ? request_line : new ShioriJK.RequestLine(request_line) : !no_prepare ? new ShioriJK.RequestLine() : void 0;
	    this.headers = headers != null ? headers instanceof ShioriJK.Headers.Request ? headers : new ShioriJK.Headers.Request(headers) : new ShioriJK.Headers.Request();
	  }
	
	  Request.prototype.request_line = null;
	
	  Request.prototype.headers = null;
	
	  Request.prototype.toString = function() {
	    return this.request_line.toString() + '\r\n' + this.headers.toString() + '\r\n';
	  };
	
	  return Request;
	
	})();
	
	ShioriJK.Message.Response = (function() {
	  function Response(arg) {
	    var headers, no_prepare, ref, status_line;
	    ref = arg != null ? arg : {}, status_line = ref.status_line, headers = ref.headers, no_prepare = ref.no_prepare;
	    this.status_line = status_line != null ? status_line instanceof ShioriJK.StatusLine ? status_line : new ShioriJK.StatusLine(status_line) : !no_prepare ? new ShioriJK.StatusLine() : void 0;
	    this.headers = headers != null ? headers instanceof ShioriJK.Headers.Response ? headers : new ShioriJK.Headers.Response(headers) : new ShioriJK.Headers.Response();
	  }
	
	  Response.prototype.status_line = null;
	
	  Response.prototype.headers = null;
	
	  Response.prototype.toString = function() {
	    return this.status_line.toString() + '\r\n' + this.headers.toString() + '\r\n';
	  };
	
	  return Response;
	
	})();
	
	ShioriJK.RequestLine = (function() {
	  function RequestLine(arg) {
	    var method, protocol, ref, version;
	    ref = arg != null ? arg : {}, method = ref.method, protocol = ref.protocol, version = ref.version;
	    this["arguments"] = {};
	    if (method != null) {
	      this.method = method;
	    }
	    this.protocol = protocol || 'SHIORI';
	    if (version != null) {
	      this.version = version;
	    }
	  }
	
	  RequestLine.prototype.method = null;
	
	  RequestLine.prototype.protocol = null;
	
	  RequestLine.prototype.version = null;
	
	  RequestLine.property({
	    method: {
	      get: function() {
	        return this["arguments"].method;
	      },
	      set: function(method) {
	        if ((method != null) && (this.version != null)) {
	          this.validate_method_version(method, this.version);
	        } else if (method != null) {
	          switch (method) {
	            case 'GET':
	            case 'NOTIFY':
	            case 'GET Version':
	            case 'GET Sentence':
	            case 'GET Word':
	            case 'GET Status':
	            case 'TEACH':
	            case 'GET String':
	            case 'NOTIFY OwnerGhostName':
	            case 'NOTIFY OtherGhostName':
	            case 'TRANSLATE Sentence':
	              break;
	            default:
	              throw 'Invalid protocol method : ' + method;
	          }
	        }
	        return this["arguments"].method = method;
	      }
	    },
	    protocol: {
	      get: function() {
	        return this["arguments"].protocol;
	      },
	      set: function(protocol) {
	        if ((protocol != null) && protocol !== 'SHIORI') {
	          throw 'Invalid protocol : ' + protocol;
	        }
	        return this["arguments"].protocol = protocol;
	      }
	    },
	    version: {
	      get: function() {
	        return this["arguments"].version;
	      },
	      set: function(version) {
	        if ((this.method != null) && (version != null)) {
	          this.validate_method_version(this.method, version);
	        } else if (version != null) {
	          switch (version) {
	            case '2.0':
	            case '2.2':
	            case '2.3':
	            case '2.4':
	            case '2.5':
	            case '2.6':
	            case '3.0':
	              break;
	            default:
	              throw 'Invalid protocol version : ' + version;
	          }
	        }
	        return this["arguments"].version = version;
	      }
	    }
	  });
	
	  RequestLine.prototype.validate_method_version = function(method, version) {
	    var is_valid;
	    is_valid = false;
	    switch (version) {
	      case '2.0':
	        switch (method) {
	          case 'GET Version':
	          case 'NOTIFY OwnerGhostName':
	          case 'GET Sentence':
	          case 'GET Word':
	          case 'GET Status':
	            is_valid = true;
	        }
	        break;
	      case '2.2':
	        switch (method) {
	          case 'GET Sentence':
	            is_valid = true;
	        }
	        break;
	      case '2.3':
	        switch (method) {
	          case 'NOTIFY OtherGhostName':
	          case 'GET Sentence':
	            is_valid = true;
	        }
	        break;
	      case '2.4':
	        switch (method) {
	          case 'TEACH':
	            is_valid = true;
	        }
	        break;
	      case '2.5':
	        switch (method) {
	          case 'GET String':
	            is_valid = true;
	        }
	        break;
	      case '2.6':
	        switch (method) {
	          case 'GET Sentence':
	          case 'GET Status':
	          case 'GET String':
	          case 'NOTIFY OwnerGhostName':
	          case 'NOTIFY OtherGhostName':
	          case 'GET Version':
	          case 'TRANSLATE Sentence':
	            is_valid = true;
	        }
	        break;
	      case '3.0':
	        switch (method) {
	          case 'GET':
	          case 'NOTIFY':
	            is_valid = true;
	        }
	    }
	    if (!is_valid) {
	      throw 'Invalid protocol method and version : ' + method + ' SHIORI/' + version;
	    }
	  };
	
	  RequestLine.prototype.toString = function() {
	    return this.method + " " + this.protocol + "/" + this.version;
	  };
	
	  return RequestLine;
	
	})();
	
	ShioriJK.StatusLine = (function() {
	  function StatusLine(arg) {
	    var code, protocol, ref, version;
	    ref = arg != null ? arg : {}, code = ref.code, protocol = ref.protocol, version = ref.version;
	    this["arguments"] = {};
	    if (code != null) {
	      this.code = code;
	    }
	    this.protocol = protocol || 'SHIORI';
	    if (version != null) {
	      this.version = version;
	    }
	  }
	
	  StatusLine.prototype.code = null;
	
	  StatusLine.prototype.protocol = null;
	
	  StatusLine.prototype.version = null;
	
	  StatusLine.property({
	    code: {
	      get: function() {
	        return this["arguments"].code;
	      },
	      set: function(code) {
	        if ((code != null) && (this.message[code] == null)) {
	          throw 'Invalid response code : ' + code;
	        }
	        return this["arguments"].code = code;
	      }
	    },
	    protocol: {
	      get: function() {
	        return this["arguments"].protocol;
	      },
	      set: function(protocol) {
	        if ((protocol != null) && protocol !== 'SHIORI') {
	          throw 'Invalid protocol : ' + protocol;
	        }
	        return this["arguments"].protocol = protocol;
	      }
	    },
	    version: {
	      get: function() {
	        return this["arguments"].version;
	      },
	      set: function(version) {
	        if (version != null) {
	          switch (version) {
	            case '2.0':
	            case '2.2':
	            case '2.3':
	            case '2.4':
	            case '2.5':
	            case '2.6':
	            case '3.0':
	              break;
	            default:
	              throw 'Invalid protocol version : ' + version;
	          }
	        }
	        return this["arguments"].version = version;
	      }
	    }
	  });
	
	  StatusLine.prototype.toString = function() {
	    return this.protocol + "/" + this.version + " " + this.code + " " + this.message[this.code];
	  };
	
	  StatusLine.prototype.message = {
	    200: 'OK',
	    204: 'No Content',
	    310: 'Communicate',
	    311: 'Not Enough',
	    312: 'Advice',
	    400: 'Bad Request',
	    418: "I'm a tea pot",
	    500: 'Internal Server Error'
	  };
	
	  return StatusLine;
	
	})();
	
	ShioriJK.Headers = (function() {
	  function Headers(header) {
	    this.header = header != null ? header : {};
	  }
	
	  Headers.prototype.header = null;
	
	  Headers.prototype.get = function(name) {
	    if (this.header[name] != null) {
	      return this.header[name];
	    }
	  };
	
	  Headers.prototype.set = function(name, value) {
	    return this.header[name] = value;
	  };
	
	  Headers.prototype.get_separated = function(name, separator) {
	    if (separator == null) {
	      separator = '\x01';
	    }
	    if (this.header[name] != null) {
	      return this.header[name].split(separator);
	    }
	  };
	
	  Headers.prototype.set_separated = function(name, value, separator) {
	    if (separator == null) {
	      separator = '\x01';
	    }
	    return this.header[name] = value.join(separator);
	  };
	
	  Headers.prototype.get_separated2 = function(name, separator1, separator2) {
	    var element, i, len, ref, results1;
	    if (separator1 == null) {
	      separator1 = '\x02';
	    }
	    if (separator2 == null) {
	      separator2 = '\x01';
	    }
	    if (this.header[name] != null) {
	      ref = this.header[name].split(separator1);
	      results1 = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        element = ref[i];
	        results1.push(element.split(separator2));
	      }
	      return results1;
	    }
	  };
	
	  Headers.prototype.set_separated2 = function(name, value, separator1, separator2) {
	    var element;
	    if (separator1 == null) {
	      separator1 = '\x02';
	    }
	    if (separator2 == null) {
	      separator2 = '\x01';
	    }
	    return this.header[name] = ((function() {
	      var i, len, results1;
	      results1 = [];
	      for (i = 0, len = value.length; i < len; i++) {
	        element = value[i];
	        results1.push(element.join(separator2));
	      }
	      return results1;
	    })()).join(separator1);
	  };
	
	  Headers.prototype.validate = function() {
	    var name, ref, results1, value;
	    ref = this.header;
	    results1 = [];
	    for (name in ref) {
	      value = ref[name];
	      if (("" + value).match(/\n/)) {
	        throw 'Invalid header value - line feed found : [' + name + '] : ' + value;
	      } else {
	        results1.push(void 0);
	      }
	    }
	    return results1;
	  };
	
	  Headers.prototype.toString = function() {
	    var name, ref, str, value;
	    str = '';
	    this.validate();
	    ref = this.header;
	    for (name in ref) {
	      value = ref[name];
	      str += name + ": " + value + "\r\n";
	    }
	    return str;
	  };
	
	  return Headers;
	
	})();
	
	ShioriJK.Headers.Request = (function(superClass) {
	  extend(Request, superClass);
	
	  function Request() {
	    return Request.__super__.constructor.apply(this, arguments);
	  }
	
	  return Request;
	
	})(ShioriJK.Headers);
	
	ShioriJK.Headers.Response = (function(superClass) {
	  extend(Response, superClass);
	
	  function Response() {
	    return Response.__super__.constructor.apply(this, arguments);
	  }
	
	  return Response;
	
	})(ShioriJK.Headers);
	
	ShioriJK.Shiori = {};
	
	ShioriJK.Shiori.Header = {};
	
	ShioriJK.Shiori.Request = {};
	
	ShioriJK.Shiori.Request.RequestLine = {};
	
	ShioriJK.Shiori.Request.Header = {};
	
	ShioriJK.Shiori.Response = {};
	
	ShioriJK.Shiori.Response.StatusLine = {};
	
	ShioriJK.Shiori.Response.Header = {};
	
	ShioriJK.Shiori.Parser = (function() {
	  function Parser() {}
	
	  Parser.prototype.is_parsing = function() {
	    return !this.section.is('idle');
	  };
	
	  Parser.prototype.is_parsing_end = function() {
	    return !this.section.is('end');
	  };
	
	  Parser.prototype.get_result = function() {
	    return this.result;
	  };
	
	  Parser.prototype.result_builder = function() {};
	
	  Parser.prototype.begin_parse = function() {
	    if (!this.section.is('idle')) {
	      throw 'cannot begin parsing because previous transaction is still working';
	    }
	    this.result = this.result_builder();
	    return this.section.next();
	  };
	
	  Parser.prototype.end_parse = function() {
	    if (!this.section.is('end')) {
	      this.abort_parse();
	      throw 'parsing was aborted';
	    }
	    return this.section.next();
	  };
	
	  Parser.prototype.abort_parse = function() {
	    var name, parser, ref;
	    if (this.parsers != null) {
	      ref = this.parsers;
	      for (name in ref) {
	        parser = ref[name];
	        if (parser.abort_parse != null) {
	          parser.abort_parse();
	        }
	      }
	    }
	    return this.section.set('idle');
	  };
	
	  Parser.prototype.parse = function(transaction) {
	    var result;
	    this.begin_parse();
	    result = this.parse_chunk(transaction);
	    if (this.is_parsing()) {
	      throw 'transaction is not closed';
	    }
	    if (result.results.length !== 1) {
	      throw 'multiple transaction';
	    }
	    return result.results[0];
	  };
	
	  Parser.prototype.parse_chunk = function(chunk) {
	    var lines;
	    lines = chunk.split(/\r\n/);
	    if (chunk.match(/\r\n$/)) {
	      lines.pop();
	    }
	    return this.parse_lines(lines);
	  };
	
	  Parser.prototype.parse_lines = function(lines) {
	    var i, len, line, result, results;
	    results = [];
	    for (i = 0, len = lines.length; i < len; i++) {
	      line = lines[i];
	      result = this.parse_line(line);
	      if (result.state === 'end') {
	        results.push(result.result);
	      }
	    }
	    return {
	      results: results,
	      state: result.state
	    };
	  };
	
	  Parser.prototype.parse_line = function(line) {
	    if (this.section.is('idle')) {
	      this.begin_parse();
	    }
	    this.parse_main(line);
	    if (this.section.is('end')) {
	      this.end_parse();
	      return {
	        result: this.get_result(),
	        state: 'end'
	      };
	    } else {
	      return {
	        state: 'continue'
	      };
	    }
	  };
	
	  Parser.prototype.parse_main = function(line) {};
	
	  return Parser;
	
	})();
	
	ShioriJK.Shiori.Section = (function() {
	  function Section(sections) {
	    this.sections = sections;
	    this.index = 0;
	  }
	
	  Section.prototype.is = function(section) {
	    return this.sections[this.index] === section;
	  };
	
	  Section.prototype.next = function() {
	    if (this.index === this.sections.length - 1) {
	      return this.index = 0;
	    } else {
	      return this.index++;
	    }
	  };
	
	  Section.prototype.previous = function() {
	    if (this.index === 0) {
	      return this.index = this.sections.length - 1;
	    } else {
	      return this.index--;
	    }
	  };
	
	  Section.prototype.set = function(section) {
	    return this.index = this.sections.indexOf(section);
	  };
	
	  Section.prototype.get = function() {
	    return this.sections[this.index];
	  };
	
	  return Section;
	
	})();
	
	ShioriJK.Shiori.Header.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    return Parser.__super__.constructor.apply(this, arguments);
	  }
	
	  Parser.prototype.parse_main = function(line) {
	    var result;
	    result = this.parse_header(line);
	    if (result.state === 'end') {
	      return this.section.next();
	    }
	  };
	
	  Parser.prototype.parse_header = function(line) {
	    var result;
	    if (line.length) {
	      if (result = line.match(/^(.+?): (.*)$/)) {
	        this.result.header[result[1]] = result[2];
	      } else {
	        throw 'Invalid header line : ' + line;
	      }
	      return {
	        state: 'continue'
	      };
	    } else {
	      return {
	        state: 'end'
	      };
	    }
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Parser);
	
	ShioriJK.Shiori.Header.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section(sections) {
	    this.sections = sections != null ? sections : ['idle', 'header', 'end'];
	    this.index = 0;
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Section);
	
	ShioriJK.Shiori.Request.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.parsers = {
	      request_line: new ShioriJK.Shiori.Request.RequestLine.Parser(),
	      headers: new ShioriJK.Shiori.Request.Header.Parser()
	    };
	    this.section = new ShioriJK.Shiori.Request.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Message.Request({
	      no_prepare: true
	    });
	  };
	
	  Parser.prototype.parse_main = function(line) {
	    var parser, parser_result;
	    parser = this.parsers[this.section.get()];
	    parser_result = parser.parse_line(line);
	    if (parser_result.state === 'end') {
	      this.result[this.section.get()] = parser_result.result;
	      return this.section.next();
	    }
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Parser);
	
	ShioriJK.Shiori.Request.RequestLine.Parser = (function() {
	  function Parser() {}
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.RequestLine();
	  };
	
	  Parser.prototype.parse = function(transaction) {
	    return this.parse_chunk(transaction);
	  };
	
	  Parser.prototype.parse_chunk = function(chunk) {
	    return this.parse_line(chunk);
	  };
	
	  Parser.prototype.parse_line = function(line) {
	    var result;
	    result = line.match(/^([A-Za-z0-9 ]+) SHIORI\/([0-9.]+)/);
	    if (!result) {
	      throw 'Invalid request line : ' + line;
	    }
	    this.result = this.result_builder();
	    this.result.method = result[1];
	    this.result.protocol = 'SHIORI';
	    this.result.version = result[2];
	    return {
	      result: this.result,
	      state: 'end'
	    };
	  };
	
	  return Parser;
	
	})();
	
	ShioriJK.Shiori.Request.Header.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.section = new ShioriJK.Shiori.Request.Header.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Headers.Request();
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Header.Parser);
	
	ShioriJK.Shiori.Request.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section(sections) {
	    this.sections = sections != null ? sections : ['idle', 'request_line', 'headers', 'end'];
	    this.index = 0;
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Section);
	
	ShioriJK.Shiori.Request.Header.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section() {
	    return Section.__super__.constructor.apply(this, arguments);
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Header.Section);
	
	ShioriJK.Shiori.Response.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.parsers = {
	      status_line: new ShioriJK.Shiori.Response.StatusLine.Parser(),
	      headers: new ShioriJK.Shiori.Response.Header.Parser()
	    };
	    this.section = new ShioriJK.Shiori.Response.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Message.Response({
	      no_prepare: true
	    });
	  };
	
	  Parser.prototype.parse_main = function(line) {
	    var parser, parser_result;
	    parser = this.parsers[this.section.get()];
	    parser_result = parser.parse_line(line);
	    if (parser_result.state === 'end') {
	      this.result[this.section.get()] = parser_result.result;
	      return this.section.next();
	    }
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Parser);
	
	ShioriJK.Shiori.Response.StatusLine.Parser = (function() {
	  function Parser() {}
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.StatusLine();
	  };
	
	  Parser.prototype.parse = function(transaction) {
	    return this.parse_chunk(transaction);
	  };
	
	  Parser.prototype.parse_chunk = function(chunk) {
	    return this.parse_line(chunk);
	  };
	
	  Parser.prototype.parse_line = function(line) {
	    var result;
	    result = line.match(/^SHIORI\/([0-9.]+) (\d+) (.+)$/);
	    if (!result) {
	      throw 'Invalid status line : ' + line;
	    }
	    this.result = this.result_builder();
	    this.result.protocol = 'SHIORI';
	    this.result.version = result[1];
	    this.result.code = result[2] - 0;
	    return {
	      result: this.result,
	      state: 'end'
	    };
	  };
	
	  return Parser;
	
	})();
	
	ShioriJK.Shiori.Response.Header.Parser = (function(superClass) {
	  extend(Parser, superClass);
	
	  function Parser() {
	    this.section = new ShioriJK.Shiori.Response.Header.Section();
	  }
	
	  Parser.prototype.result_builder = function() {
	    return new ShioriJK.Headers.Response();
	  };
	
	  return Parser;
	
	})(ShioriJK.Shiori.Header.Parser);
	
	ShioriJK.Shiori.Response.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section(sections) {
	    this.sections = sections != null ? sections : ['idle', 'status_line', 'headers', 'end'];
	    this.index = 0;
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Section);
	
	ShioriJK.Shiori.Response.Header.Section = (function(superClass) {
	  extend(Section, superClass);
	
	  function Section() {
	    return Section.__super__.constructor.apply(this, arguments);
	  }
	
	  return Section;
	
	})(ShioriJK.Shiori.Header.Section);
	
	//# sourceMappingURL=shiorijk.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)(module)))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = __webpack_require__(__webpack_module_template_argument_0__)


/***/ }
/******/ ])))
});
;
//# sourceMappingURL=sanajk.js.map