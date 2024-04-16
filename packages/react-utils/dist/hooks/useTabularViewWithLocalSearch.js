"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTabularViewWithLocalSearch = useTabularViewWithLocalSearch;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("react");

var _utils = require("../components/Search/utils");

var _utils2 = require("../helpers/utils");

var _reactQuery = require("react-query");

var _pkgConfig = require("@opensrp/pkg-config");

var _reactRouter = require("react-router");

var _fhirUtils = require("../helpers/fhir-utils");

var _utils3 = require("./utils");

var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function useTabularViewWithLocalSearch(fhirBaseUrl, resourceType) {
  var _ref, _filteredData;

  var extraParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var matchesSearch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _utils3.matchesOnName;
  var location = (0, _reactRouter.useLocation)();
  var history = (0, _reactRouter.useHistory)();
  var match = (0, _reactRouter.useRouteMatch)();
  var page = (0, _utils3.getNumberParam)(location, _utils3.pageQuery, _utils3.startingPage);
  var search = (0, _utils3.getStringParam)(location, _utils3.searchQuery);
  var defaultPageSize = (_ref = (0, _pkgConfig.getConfig)('defaultTablesPageSize')) !== null && _ref !== void 0 ? _ref : _utils3.startingPageSize;
  var pageSize = (0, _utils3.getNumberParam)(location, _utils3.pageSizeQuery, defaultPageSize);
  var queryFn = (0, _react.useCallback)(function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(_ref2) {
      var _ref2$queryKey, _, extraParams;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2$queryKey = (0, _slicedToArray2["default"])(_ref2.queryKey, 2), _ = _ref2$queryKey[0], extraParams = _ref2$queryKey[1];
              return _context.abrupt("return", (0, _fhirUtils.loadAllResources)(fhirBaseUrl, resourceType, extraParams));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), [fhirBaseUrl, resourceType]);
  var rQuery = {
    queryKey: [resourceType, extraParams],
    queryFn: queryFn,
    select: function select(data) {
      return (0, _utils2.getResourcesFromBundle)(data);
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  };

  var _useQuery = (0, _reactQuery.useQuery)(rQuery),
      data = _useQuery.data,
      restQueryValues = (0, _objectWithoutProperties2["default"])(_useQuery, _excluded);

  var filteredData = data;

  if (search) {
    filteredData = data === null || data === void 0 ? void 0 : data.filter(function (obj) {
      return matchesSearch(obj, search);
    });
  }

  var searchFormProps = {
    defaultValue: (0, _utils.getQueryParams)(location)[_utils3.searchQuery],
    onChangeHandler: function onChangeHandler(event) {
      var nextUrl = (0, _utils3.getNextUrlOnSearch)(event, location, match);
      history.push(nextUrl);
    }
  };
  var tablePaginationProps = {
    current: page,
    pageSize: pageSize,
    total: (_filteredData = filteredData) === null || _filteredData === void 0 ? void 0 : _filteredData.length,
    defaultPageSize: defaultPageSize,
    onChange: function onChange(current, pageSize) {
      if (current && pageSize) {
        var newSParams = new URLSearchParams(location.search);
        newSParams.set(_utils3.pageSizeQuery, pageSize.toString());
        newSParams.set(_utils3.pageQuery, current.toString());
        history.push("".concat(match.url, "?").concat(newSParams.toString()));
      }
    }
  };
  return {
    tablePaginationProps: tablePaginationProps,
    queryValues: _objectSpread({
      data: filteredData
    }, restQueryValues),
    searchFormProps: searchFormProps
  };
}