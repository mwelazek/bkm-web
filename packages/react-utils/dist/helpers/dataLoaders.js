"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProtectedImage = exports.OpenSRPService = exports.FHIRServiceClass = void 0;
exports.handleSessionOrTokenExpiry = handleSessionOrTokenExpiry;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _store = require("@opensrp/store");

var _serverService = require("@opensrp/server-service");

var _connectedReducerRegistry = require("@onaio/connected-reducer-registry");

var _gatekeeper = require("@onaio/gatekeeper");

var _sessionReducer = require("@onaio/session-reducer");

var _constants = require("../constants");

var _pkgConfig = require("@opensrp/pkg-config");

var _fhirclient = _interopRequireDefault(require("fhirclient"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var configs = (0, _pkgConfig.getAllConfigs)();

var OpenSRPService = function (_GenericOpenSRPServic) {
  (0, _inherits2["default"])(OpenSRPService, _GenericOpenSRPServic);

  var _super = _createSuper(OpenSRPService);

  function OpenSRPService(endpoint) {
    var baseURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _serverService.OPENSRP_API_BASE_URL;
    var fetchOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _serverService.getFetchOptions;
    (0, _classCallCheck2["default"])(this, OpenSRPService);
    return _super.call(this, handleSessionOrTokenExpiry, baseURL, endpoint, fetchOptions);
  }

  return (0, _createClass2["default"])(OpenSRPService);
}(_serverService.OpenSRPService);

exports.OpenSRPService = OpenSRPService;

var FHIRServiceClass = function () {
  function FHIRServiceClass(baseURL, resourceType) {
    var signal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new AbortController().signal;
    (0, _classCallCheck2["default"])(this, FHIRServiceClass);
    (0, _defineProperty2["default"])(this, "accessTokenOrCallBack", void 0);
    (0, _defineProperty2["default"])(this, "baseURL", void 0);
    (0, _defineProperty2["default"])(this, "resourceType", void 0);
    (0, _defineProperty2["default"])(this, "signal", void 0);
    this.accessTokenOrCallBack = handleSessionOrTokenExpiry;
    this.baseURL = baseURL;
    this.resourceType = resourceType;
    this.signal = signal;
  }

  (0, _createClass2["default"])(FHIRServiceClass, [{
    key: "buildQueryParams",
    value: function buildQueryParams(params) {
      if (params) {
        var urlParams = new URLSearchParams();
        Object.entries(params).forEach(function (_ref) {
          var _element$toString;

          var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
              key = _ref2[0],
              element = _ref2[1];

          urlParams.append(key, (_element$toString = element === null || element === void 0 ? void 0 : element.toString()) !== null && _element$toString !== void 0 ? _element$toString : '');
        });
        return "".concat(this.resourceType, "/_search?").concat(urlParams.toString());
      }

      return this.resourceType;
    }
  }, {
    key: "buildState",
    value: function buildState(accessToken) {
      return {
        serverUrl: this.baseURL,
        tokenResponse: {
          access_token: accessToken
        }
      };
    }
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(payload) {
        var accessToken, serve;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return OpenSRPService.processAcessToken(this.accessTokenOrCallBack);

              case 2:
                accessToken = _context.sent;
                serve = _fhirclient["default"].client(this.buildState(accessToken));
                return _context.abrupt("return", serve.create(payload, {
                  signal: this.signal
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(payload) {
        var accessToken, serve;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return OpenSRPService.processAcessToken(this.accessTokenOrCallBack);

              case 2:
                accessToken = _context2.sent;
                serve = _fhirclient["default"].client(this.buildState(accessToken));
                return _context2.abrupt("return", serve.update(payload, {
                  signal: this.signal
                }));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function update(_x2) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        var params,
            accessToken,
            queryStr,
            serve,
            _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
                _context3.next = 3;
                return OpenSRPService.processAcessToken(this.accessTokenOrCallBack);

              case 3:
                accessToken = _context3.sent;
                queryStr = this.buildQueryParams(params);
                serve = _fhirclient["default"].client(this.buildState(accessToken));
                return _context3.abrupt("return", serve.request({
                  url: queryStr,
                  headers: {
                    'cache-control': 'no-cache'
                  }
                }));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function list() {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "read",
    value: function () {
      var _read = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(id) {
        var accessToken, serve;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return OpenSRPService.processAcessToken(this.accessTokenOrCallBack);

              case 2:
                accessToken = _context4.sent;
                serve = _fhirclient["default"].client(this.buildState(accessToken));
                return _context4.abrupt("return", serve.request({
                  url: "".concat(this.resourceType, "/").concat(id),
                  headers: {
                    'cache-control': 'no-cache'
                  }
                }));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function read(_x3) {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(id) {
        var accessToken, serve;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return OpenSRPService.processAcessToken(this.accessTokenOrCallBack);

              case 2:
                accessToken = _context5.sent;
                serve = _fhirclient["default"].client(this.buildState(accessToken));
                return _context5.abrupt("return", serve["delete"]("".concat(this.resourceType, "/").concat(id), {
                  signal: this.signal
                }));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return FHIRServiceClass;
}();

exports.FHIRServiceClass = FHIRServiceClass;

function handleSessionOrTokenExpiry() {
  return _handleSessionOrTokenExpiry.apply(this, arguments);
}

function _handleSessionOrTokenExpiry() {
  _handleSessionOrTokenExpiry = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (!(0, _sessionReducer.isTokenExpired)(_store.store.getState())) {
              _context7.next = 13;
              break;
            }

            _context7.prev = 1;
            _context7.next = 4;
            return (0, _gatekeeper.refreshToken)("".concat(_constants.EXPRESS_TOKEN_REFRESH_URL), _store.store.dispatch, {});

          case 4:
            return _context7.abrupt("return", _context7.sent);

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](1);

            _connectedReducerRegistry.history.push("".concat(configs.appLoginURL));

            throw new Error('Session Expired');

          case 11:
            _context7.next = 14;
            break;

          case 13:
            return _context7.abrupt("return", (0, _sessionReducer.getAccessToken)(_store.store.getState()));

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 7]]);
  }));
  return _handleSessionOrTokenExpiry.apply(this, arguments);
}

var fetchProtectedImage = function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(imageURL) {
    var token, response, blob;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return handleSessionOrTokenExpiry();

          case 2:
            token = _context6.sent;
            _context6.next = 5;
            return (0, _serverService.customFetch)(imageURL, {
              headers: {
                authorization: "Bearer ".concat(token)
              },
              method: 'GET'
            });

          case 5:
            response = _context6.sent;

            if (!response) {
              _context6.next = 11;
              break;
            }

            _context6.next = 9;
            return response.blob();

          case 9:
            blob = _context6.sent;
            return _context6.abrupt("return", URL.createObjectURL(blob));

          case 11:
            return _context6.abrupt("return", null);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function fetchProtectedImage(_x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.fetchProtectedImage = fetchProtectedImage;