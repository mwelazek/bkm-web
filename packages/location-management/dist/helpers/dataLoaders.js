"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSettingsParams = exports.defaultPostLocationParams = exports.defaultParamFilters = exports.defaultHierarchyParams = exports.defaultGetLocationParams = void 0;
exports.loadHierarchy = loadHierarchy;
exports.loadJurisdiction = loadJurisdiction;
exports.loadJurisdictions = loadJurisdictions;
exports.loadLocationTags = loadLocationTags;
exports.loadSettings = loadSettings;
exports.postPutLocationUnit = postPutLocationUnit;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultHierarchyParams = {
  return_structure_count: false
};
exports.defaultHierarchyParams = defaultHierarchyParams;

function loadHierarchy(_x, _x2) {
  return _loadHierarchy.apply(this, arguments);
}

function _loadHierarchy() {
  _loadHierarchy = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(rootJurisdictionId, dispatcher) {
    var openSRPBaseURL,
        urlParams,
        serve,
        params,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            openSRPBaseURL = _args.length > 2 && _args[2] !== undefined ? _args[2] : _constants.baseURL;
            urlParams = _args.length > 3 && _args[3] !== undefined ? _args[3] : defaultHierarchyParams;
            serve = new _reactUtils.OpenSRPService(_constants.LOCATION_HIERARCHY, openSRPBaseURL);
            params = _objectSpread({}, urlParams);
            return _context.abrupt("return", serve.read(rootJurisdictionId, params).then(function (response) {
              if (!dispatcher) {
                return response;
              }

              dispatcher(response);
            })["catch"](function (err) {
              throw err;
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadHierarchy.apply(this, arguments);
}

var defaultGetLocationParams = {
  is_jurisdiction: true,
  return_geometry: false
};
exports.defaultGetLocationParams = defaultGetLocationParams;
var defaultParamFilters = {
  status: _constants.ACTIVE
};
exports.defaultParamFilters = defaultParamFilters;

function loadJurisdictions(_x3) {
  return _loadJurisdictions.apply(this, arguments);
}

function _loadJurisdictions() {
  _loadJurisdictions = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(dispatcher) {
    var openSRPBaseURL,
        urlParams,
        filterParams,
        endpoint,
        filterByParentId,
        serve,
        filterParamsObject,
        params,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            openSRPBaseURL = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _constants.baseURL;
            urlParams = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : defaultGetLocationParams;
            filterParams = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : defaultParamFilters;
            endpoint = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : _constants.LOCATION_UNIT_FIND_BY_PROPERTIES;
            filterByParentId = _args2.length > 5 ? _args2[5] : undefined;
            serve = new _reactUtils.OpenSRPService(endpoint, openSRPBaseURL);
            filterParamsObject = Object.values(filterParams).length > 0 ? {
              properties_filter: _reactUtils.OpenSRPService.getFilterParams(_objectSpread(_objectSpread({}, filterParams), _objectSpread({}, filterByParentId ? {
                parentId: null
              } : {
                geographicLevel: 0
              })))
            } : {};
            params = _objectSpread(_objectSpread({}, urlParams), filterParamsObject);
            return _context2.abrupt("return", serve.list(params).then(function (response) {
              if (!dispatcher) {
                return response;
              }

              dispatcher(response);
            })["catch"](function (e) {
              throw e;
            }));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadJurisdictions.apply(this, arguments);
}

var defaultSettingsParams = {
  serverVersion: '0'
};
exports.defaultSettingsParams = defaultSettingsParams;

function loadSettings(_x4, _x5, _x6) {
  return _loadSettings.apply(this, arguments);
}

function _loadSettings() {
  _loadSettings = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(settingsIdentifier, baseURL, callback) {
    var params,
        service,
        queryParams,
        _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : defaultSettingsParams;
            service = new _reactUtils.OpenSRPService(_constants.OPENSRP_V2_SETTINGS, baseURL);
            queryParams = _objectSpread(_objectSpread({}, params), {}, {
              identifier: settingsIdentifier
            });
            return _context3.abrupt("return", service.read('', queryParams).then(function (res) {
              if (callback) {
                callback(res);
              }
            })["catch"](function (error) {
              throw error;
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadSettings.apply(this, arguments);
}

function loadLocationTags(_x7, _x8) {
  return _loadLocationTags.apply(this, arguments);
}

function _loadLocationTags() {
  _loadLocationTags = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(baseURL, callback) {
    var serve;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            serve = new _reactUtils.OpenSRPService(_constants.LOCATION_UNIT_GROUP_ALL, baseURL);
            return _context4.abrupt("return", serve.list().then(function (response) {
              callback === null || callback === void 0 ? void 0 : callback(response);
            })["catch"](function (error) {
              throw error;
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _loadLocationTags.apply(this, arguments);
}

var defaultPostLocationParams = {
  is_jurisdiction: true
};
exports.defaultPostLocationParams = defaultPostLocationParams;

function postPutLocationUnit(_x9) {
  return _postPutLocationUnit.apply(this, arguments);
}

function _postPutLocationUnit() {
  _postPutLocationUnit = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(payload) {
    var openSRPBaseURL,
        isEdit,
        params,
        serve,
        _args5 = arguments;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            openSRPBaseURL = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _constants.baseURL;
            isEdit = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : true;
            params = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : defaultPostLocationParams;
            serve = new _reactUtils.OpenSRPService(_constants.LOCATION_UNIT_ENDPOINT, openSRPBaseURL);

            if (!isEdit) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", serve.update(payload, params)["catch"](function (err) {
              throw err;
            }));

          case 6:
            return _context5.abrupt("return", serve.create(payload, params)["catch"](function (err) {
              throw err;
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _postPutLocationUnit.apply(this, arguments);
}

function loadJurisdiction(_x10, _x11) {
  return _loadJurisdiction.apply(this, arguments);
}

function _loadJurisdiction() {
  _loadJurisdiction = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(locId, dispatcher) {
    var openSRPBaseURL,
        urlParams,
        serve,
        params,
        _args6 = arguments;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            openSRPBaseURL = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : _constants.baseURL;
            urlParams = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : defaultGetLocationParams;
            serve = new _reactUtils.OpenSRPService(_constants.LOCATION_UNIT_ENDPOINT, openSRPBaseURL);
            params = _objectSpread({}, urlParams);
            return _context6.abrupt("return", serve.read(locId, params).then(function (response) {
              if (dispatcher && response) {
                dispatcher(response);
              }

              return response;
            })["catch"](function (e) {
              throw e;
            }));

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _loadJurisdiction.apply(this, arguments);
}