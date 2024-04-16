"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFhirHumanName = exports.loadAllResources = exports.getObjLike = exports.IdentifierUseCodes = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ = require("..");

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getObjLike = function getObjLike(objArr, key, value) {
  var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var arr = objArr !== null && objArr !== void 0 ? objArr : [];
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var thisObj = arr[i];
    var objHasValue = thisObj[key];

    if ((0, _lodash.isEqual)(objHasValue, value)) {
      result.push(thisObj);
    }

    if (result.length > 0 && !all) {
      return result;
    }
  }

  return result;
};

exports.getObjLike = getObjLike;
var IdentifierUseCodes;
exports.IdentifierUseCodes = IdentifierUseCodes;

(function (IdentifierUseCodes) {
  IdentifierUseCodes["USUAL"] = "usual";
  IdentifierUseCodes["OFFICIAL"] = "official";
  IdentifierUseCodes["TEMP"] = "temp";
  IdentifierUseCodes["SECONDARY"] = "secondary";
  IdentifierUseCodes["OLD"] = "old";
})(IdentifierUseCodes || (exports.IdentifierUseCodes = IdentifierUseCodes = {}));

var loadAllResources = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(baseUrl, resourceType) {
    var extraFilters,
        summaryFilters,
        summary,
        total,
        fetchAllFilter,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            extraFilters = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            summaryFilters = _objectSpread({
              _summary: 'count'
            }, extraFilters);
            _context.next = 4;
            return new _.FHIRServiceClass(baseUrl, resourceType).list(summaryFilters);

          case 4:
            summary = _context.sent;
            total = summary.total;
            fetchAllFilter = _objectSpread(_objectSpread({}, total ? {
              _count: total
            } : {}), extraFilters);
            return _context.abrupt("return", new _.FHIRServiceClass(baseUrl, resourceType).list(fetchAllFilter));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadAllResources(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.loadAllResources = loadAllResources;

var parseFhirHumanName = function parseFhirHumanName(hName) {
  if (!hName) {
    return;
  }

  var family = hName.family,
      given = hName.given,
      suffix = hName.suffix,
      prefix = hName.prefix;

  var confirmArray = function confirmArray(element) {
    return element ? Array.isArray(element) ? element : [element] : [];
  };

  var namesArray = [confirmArray(prefix).join(' '), confirmArray(given).join(' '), confirmArray(family).join(' '), confirmArray(suffix).join(' ')].filter(function (txt) {
    return !!txt;
  });
  return namesArray.join(' ');
};

exports.parseFhirHumanName = parseFhirHumanName;