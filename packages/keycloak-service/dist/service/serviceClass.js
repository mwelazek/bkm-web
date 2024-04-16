"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customFetch = exports.KeycloakService = exports.KeycloakAPIService = exports.KEYCLOAK_API_BASE_URL = void 0;
exports.getDefaultHeaders = getDefaultHeaders;
exports.getFetchOptions = getFetchOptions;
exports.getFilterParams = getFilterParams;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _querystring = _interopRequireDefault(require("querystring"));

var _reactUtils = require("@opensrp/react-utils");

var _errors = require("./errors");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var KEYCLOAK_API_BASE_URL = 'http://192.168.1.10:8080/auth/realms/';
exports.KEYCLOAK_API_BASE_URL = KEYCLOAK_API_BASE_URL;

function getDefaultHeaders(accessToken) {
  var accept = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'application/json';
  var authorizationType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Bearer';
  var contentType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'application/json;charset=UTF-8';
  return {
    accept: accept,
    authorization: "".concat(authorizationType, " ").concat(accessToken),
    'content-type': contentType
  };
}

function getFilterParams(obj) {
  return Object.entries(obj).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return "".concat(key, ":").concat(val);
  }).join(',');
}

function getFetchOptions(_, accessToken, method) {
  return {
    headers: getDefaultHeaders(accessToken),
    method: method
  };
}

var customFetch = function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch.apply(void 0, _args);

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            (0, _errors.throwNetworkError)(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function customFetch() {
    return _ref3.apply(this, arguments);
  };
}();

exports.customFetch = customFetch;

var KeycloakAPIService = function () {
  function KeycloakAPIService() {
    var accessTokenOrCallBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _reactUtils.handleSessionOrTokenExpiry;
    var baseURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : KEYCLOAK_API_BASE_URL;
    var endpoint = arguments.length > 2 ? arguments[2] : undefined;
    var getPayload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getFetchOptions;
    var signal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new AbortController().signal;
    (0, _classCallCheck2["default"])(this, KeycloakAPIService);
    (0, _defineProperty2["default"])(this, "accessTokenOrCallBack", void 0);
    (0, _defineProperty2["default"])(this, "baseURL", void 0);
    (0, _defineProperty2["default"])(this, "endpoint", void 0);
    (0, _defineProperty2["default"])(this, "generalURL", void 0);
    (0, _defineProperty2["default"])(this, "getOptions", void 0);
    (0, _defineProperty2["default"])(this, "signal", void 0);
    this.endpoint = endpoint;
    this.getOptions = getPayload;
    this.signal = signal;
    this.baseURL = baseURL;
    this.generalURL = "".concat(this.baseURL).concat(this.endpoint);
    this.accessTokenOrCallBack = accessTokenOrCallBack;
  }

  (0, _createClass2["default"])(KeycloakAPIService, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(data) {
        var params,
            method,
            url,
            accessToken,
            payload,
            response,
            defaultMessage,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
                method = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 'POST';
                url = KeycloakAPIService.getURL(this.generalURL, params);
                _context2.next = 5;
                return KeycloakAPIService.processAcessToken(this.accessTokenOrCallBack);

              case 5:
                accessToken = _context2.sent;
                payload = _objectSpread(_objectSpread({}, this.getOptions(this.signal, accessToken, method)), {}, {
                  'Cache-Control': 'no-cache',
                  Pragma: 'no-cache',
                  body: JSON.stringify(data)
                });
                _context2.next = 9;
                return customFetch(url, payload);

              case 9:
                response = _context2.sent;

                if (!response) {
                  _context2.next = 16;
                  break;
                }

                if (!(response.ok || response.status === 201)) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", response);

              case 13:
                defaultMessage = "KeycloakAPIService create on ".concat(this.endpoint, " failed, HTTP status ").concat(response.status);
                _context2.next = 16;
                return (0, _errors.throwHTTPError)(response, defaultMessage);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "read",
    value: function () {
      var _read = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(id) {
        var params,
            method,
            url,
            accessToken,
            response,
            defaultMessage,
            _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
                method = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 'GET';
                url = KeycloakAPIService.getURL("".concat(this.generalURL, "/").concat(id), params);
                _context3.next = 5;
                return KeycloakAPIService.processAcessToken(this.accessTokenOrCallBack);

              case 5:
                accessToken = _context3.sent;
                _context3.next = 8;
                return customFetch(url, this.getOptions(this.signal, accessToken, method));

              case 8:
                response = _context3.sent;

                if (!response) {
                  _context3.next = 17;
                  break;
                }

                if (!response.ok) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 13;
                return response.json();

              case 13:
                return _context3.abrupt("return", _context3.sent);

              case 14:
                defaultMessage = "KeycloakAPIService read on ".concat(this.endpoint, " failed, HTTP status ").concat(response.status);
                _context3.next = 17;
                return (0, _errors.throwHTTPError)(response, defaultMessage);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function read(_x2) {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(data) {
        var params,
            method,
            url,
            accessToken,
            payload,
            response,
            defaultMessage,
            _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                params = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : null;
                method = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 'PUT';
                url = KeycloakAPIService.getURL(this.generalURL, params);
                _context4.next = 5;
                return KeycloakAPIService.processAcessToken(this.accessTokenOrCallBack);

              case 5:
                accessToken = _context4.sent;
                payload = _objectSpread(_objectSpread({}, this.getOptions(this.signal, accessToken, method)), {}, {
                  'Cache-Control': 'no-cache',
                  Pragma: 'no-cache',
                  body: JSON.stringify(data)
                });
                _context4.next = 9;
                return customFetch(url, payload);

              case 9:
                response = _context4.sent;

                if (!response) {
                  _context4.next = 16;
                  break;
                }

                if (!response.ok) {
                  _context4.next = 13;
                  break;
                }

                return _context4.abrupt("return", {});

              case 13:
                defaultMessage = "KeycloakAPIService update on ".concat(this.endpoint, " failed, HTTP status ").concat(response.status);
                _context4.next = 16;
                return (0, _errors.throwHTTPError)(response, defaultMessage);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function update(_x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        var params,
            method,
            url,
            accessToken,
            response,
            defaultMessage,
            _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : null;
                method = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 'GET';
                url = KeycloakAPIService.getURL(this.generalURL, params);
                _context5.next = 5;
                return KeycloakAPIService.processAcessToken(this.accessTokenOrCallBack);

              case 5:
                accessToken = _context5.sent;
                _context5.next = 8;
                return customFetch(url, this.getOptions(this.signal, accessToken, method));

              case 8:
                response = _context5.sent;

                if (!response) {
                  _context5.next = 17;
                  break;
                }

                if (!response.ok) {
                  _context5.next = 14;
                  break;
                }

                _context5.next = 13;
                return response.json();

              case 13:
                return _context5.abrupt("return", _context5.sent);

              case 14:
                defaultMessage = "KeycloakAPIService list on ".concat(this.endpoint, " failed, HTTP status ").concat(response.status);
                _context5.next = 17;
                return (0, _errors.throwHTTPError)(response, defaultMessage);

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function list() {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
        var params,
            method,
            url,
            accessToken,
            response,
            defaultMessage,
            _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : null;
                method = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 'DELETE';
                url = KeycloakAPIService.getURL(this.generalURL, params);
                _context6.next = 5;
                return KeycloakAPIService.processAcessToken(this.accessTokenOrCallBack);

              case 5:
                accessToken = _context6.sent;
                _context6.next = 8;
                return fetch(url, this.getOptions(this.signal, accessToken, method));

              case 8:
                response = _context6.sent;

                if (!(response.ok || response.status === 204 || response.status === 200)) {
                  _context6.next = 11;
                  break;
                }

                return _context6.abrupt("return", {});

              case 11:
                defaultMessage = "KeycloakAPIService delete on ".concat(this.endpoint, " failed, HTTP status ").concat(response.status);
                _context6.next = 14;
                return (0, _errors.throwHTTPError)(response, defaultMessage);

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }], [{
    key: "getURL",
    value: function getURL(generalUrl, params) {
      if (params) {
        return "".concat(generalUrl, "?").concat(_querystring["default"].stringify(params));
      }

      return generalUrl;
    }
  }, {
    key: "processAcessToken",
    value: function () {
      var _processAcessToken = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(accessTokenCallBack) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(typeof accessTokenCallBack === 'function')) {
                  _context7.next = 4;
                  break;
                }

                _context7.next = 3;
                return accessTokenCallBack();

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 4:
                return _context7.abrupt("return", accessTokenCallBack);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function processAcessToken(_x4) {
        return _processAcessToken.apply(this, arguments);
      }

      return processAcessToken;
    }()
  }]);
  return KeycloakAPIService;
}();

exports.KeycloakAPIService = KeycloakAPIService;

var KeycloakService = function (_KeycloakAPIService) {
  (0, _inherits2["default"])(KeycloakService, _KeycloakAPIService);

  var _super = _createSuper(KeycloakService);

  function KeycloakService(endpoint) {
    var baseURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : KEYCLOAK_API_BASE_URL;
    var accessTokenOrCallBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _reactUtils.handleSessionOrTokenExpiry;
    var getPayload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getFetchOptions;
    (0, _classCallCheck2["default"])(this, KeycloakService);
    return _super.call(this, accessTokenOrCallBack, baseURL, endpoint, getPayload);
  }

  (0, _createClass2["default"])(KeycloakService, [{
    key: "readFile",
    value: function () {
      var _readFile = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8(id) {
        var params,
            method,
            url,
            accessToken,
            response,
            _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                params = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : null;
                method = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : 'GET';
                url = KeycloakService.getURL("".concat(this.generalURL, "/").concat(id), params);
                _context8.next = 5;
                return KeycloakAPIService.processAcessToken(this.accessTokenOrCallBack);

              case 5:
                accessToken = _context8.sent;
                _context8.next = 8;
                return fetch(url, this.getOptions(this.signal, accessToken, method));

              case 8:
                response = _context8.sent;

                if (response.ok) {
                  _context8.next = 11;
                  break;
                }

                throw new Error("KeycloakService read on ".concat(this.endpoint, " failed, HTTP status ").concat(response.status));

              case 11:
                _context8.next = 13;
                return response.blob();

              case 13:
                return _context8.abrupt("return", _context8.sent);

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function readFile(_x5) {
        return _readFile.apply(this, arguments);
      }

      return readFile;
    }()
  }]);
  return KeycloakService;
}(KeycloakAPIService);

exports.KeycloakService = KeycloakService;