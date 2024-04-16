"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSimpleTabularView = useSimpleTabularView;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("react");

var _dataLoaders = require("../helpers/dataLoaders");

var _utils = require("../components/Search/utils");

var _utils2 = require("../helpers/utils");

var _reactQuery = require("react-query");

var _pkgConfig = require("@opensrp/pkg-config");

var _reactRouter = require("react-router");

var _utils3 = require("./utils");

var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultGetExtraParams = function defaultGetExtraParams(search) {
  if (search) {
    return {
      'name:contains': search
    };
  }

  return {};
};

var loadResources = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(baseUrl, resourceType, params, extraParams) {
    var page, pageSize, search, filterParams, otherParams, service, res, countFilter, _yield$service$list, total;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = params.page, pageSize = params.pageSize, search = params.search;
            filterParams = {};
            otherParams = extraParams;

            if (typeof extraParams === 'function') {
              otherParams = extraParams(search);
            }

            filterParams = _objectSpread(_objectSpread(_objectSpread({
              _total: 'accurate'
            }, filterParams), otherParams), {}, {
              _getpagesoffset: (page - 1) * pageSize,
              _count: pageSize
            });
            service = new _dataLoaders.FHIRServiceClass(baseUrl, resourceType);
            _context.next = 8;
            return service.list(filterParams);

          case 8:
            res = _context.sent;

            if (!(res.total === undefined)) {
              _context.next = 17;
              break;
            }

            countFilter = _objectSpread(_objectSpread({}, filterParams), {}, {
              _summary: 'count'
            });
            _context.next = 13;
            return service.list(countFilter);

          case 13:
            _yield$service$list = _context.sent;
            total = _yield$service$list.total;
            res.total = total;
            return _context.abrupt("return", res);

          case 17:
            return _context.abrupt("return", res);

          case 18:
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

function useSimpleTabularView(fhirBaseUrl, resourceType) {
  var _ref2;

  var extraParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetExtraParams;
  var location = (0, _reactRouter.useLocation)();
  var history = (0, _reactRouter.useHistory)();
  var match = (0, _reactRouter.useRouteMatch)();
  var page = (0, _utils3.getNumberParam)(location, _utils3.pageQuery, _utils3.startingPage);
  var search = (0, _utils3.getStringParam)(location, _utils3.searchQuery);
  var defaultPageSize = (_ref2 = (0, _pkgConfig.getConfig)('defaultTablesPageSize')) !== null && _ref2 !== void 0 ? _ref2 : _utils3.startingPageSize;
  var pageSize = (0, _utils3.getNumberParam)(location, _utils3.pageSizeQuery, defaultPageSize);
  var queryFn = (0, _react.useCallback)(function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(_ref3) {
      var _ref3$queryKey, _, page, pageSize, search, extraParams;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref3$queryKey = (0, _slicedToArray2["default"])(_ref3.queryKey, 5), _ = _ref3$queryKey[0], page = _ref3$queryKey[1], pageSize = _ref3$queryKey[2], search = _ref3$queryKey[3], extraParams = _ref3$queryKey[4];
              return _context2.abrupt("return", loadResources(fhirBaseUrl, resourceType, {
                page: page,
                pageSize: pageSize,
                search: search
              }, extraParams));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }(), [fhirBaseUrl, resourceType]);
  var rQuery = {
    queryKey: [resourceType, page, pageSize, search, extraParams],
    queryFn: queryFn,
    select: function select(data) {
      var _data$total;

      return {
        records: (0, _utils2.getResourcesFromBundle)(data),
        total: (_data$total = data.total) !== null && _data$total !== void 0 ? _data$total : 0
      };
    },
    keepPreviousData: true,
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  };

  var _useQuery = (0, _reactQuery.useQuery)(rQuery),
      data = _useQuery.data,
      restQueryValues = (0, _objectWithoutProperties2["default"])(_useQuery, _excluded);

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
    total: data === null || data === void 0 ? void 0 : data.total,
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
      data: data
    }, restQueryValues),
    searchFormProps: searchFormProps
  };
}