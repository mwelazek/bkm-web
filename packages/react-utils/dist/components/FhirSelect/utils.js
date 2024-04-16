"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadResources = exports.getTotalRecordsOnApi = exports.getTotalRecordsInBundles = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataLoaders = require("../../helpers/dataLoaders");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var loadResources = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(baseUrl, resourceType, params, extraParams) {
    var page, pageSize, search, filterParams, service, bundleResponse, summary, total;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = params.page, pageSize = params.pageSize, search = params.search;
            filterParams = _objectSpread({
              _getpagesoffset: (page - 1) * pageSize,
              _count: pageSize
            }, extraParams);

            if (search) {
              filterParams['name:contains'] = search;
            }

            service = new _dataLoaders.FHIRServiceClass(baseUrl, resourceType);
            _context.next = 6;
            return service.list(filterParams);

          case 6:
            bundleResponse = _context.sent;

            if (!(bundleResponse.total === undefined)) {
              _context.next = 14;
              break;
            }

            filterParams['_summary'] = 'count';
            _context.next = 11;
            return service.list(filterParams);

          case 11:
            summary = _context.sent;
            total = summary.total;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, bundleResponse), {}, {
              total: total
            }));

          case 14:
            return _context.abrupt("return", bundleResponse);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadResources(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.loadResources = loadResources;

var getTotalRecordsOnApi = function getTotalRecordsOnApi(bundles) {
  if (!bundles.length) return 0;
  var lastBundle = bundles[bundles.length - 1];
  var total = lastBundle.total;
  return total;
};

exports.getTotalRecordsOnApi = getTotalRecordsOnApi;

var getTotalRecordsInBundles = function getTotalRecordsInBundles(bundles) {
  return bundles.flatMap(function (page) {
    var _page$entry;

    return ((_page$entry = page.entry) !== null && _page$entry !== void 0 ? _page$entry : []).length;
  }).reduce(function (a, v) {
    return a + v;
  }, 0);
};

exports.getTotalRecordsInBundles = getTotalRecordsInBundles;