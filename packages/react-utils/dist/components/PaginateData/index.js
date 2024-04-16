"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginateData = PaginateData;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _reactQuery = require("react-query");

var _constants = require("../../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function PaginateData(props) {
  var _props$currentPage, _props$pageSize, _onSelect;

  var total = props.total,
      onError = props.onError,
      queryFn = props.queryFn,
      queryid = props.queryid,
      _onSuccess = props.onSuccess,
      onSelect = props.onSelect,
      children = props.children,
      queryOptions = props.queryOptions;

  var _useState = (0, _react.useState)({
    currentPage: (_props$currentPage = props.currentPage) !== null && _props$currentPage !== void 0 ? _props$currentPage : _constants.TABLE_PAGE,
    pageSize: (_props$pageSize = props.pageSize) !== null && _props$pageSize !== void 0 ? _props$pageSize : _constants.TABLE_PAGE_SIZE,
    prevdata: {
      data: [],
      total: undefined
    },
    queryPram: props.queryPram
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      _useState2$ = _useState2[0],
      currentPage = _useState2$.currentPage,
      pageSize = _useState2$.pageSize,
      prevdata = _useState2$.prevdata,
      queryPram = _useState2$.queryPram,
      setProps = _useState2[1];

  var query = (0, _reactQuery.useInfiniteQuery)([queryid, pageSize, queryPram], function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(_ref) {
      var _ref$pageParam, pageParam, queryString, data, totalval;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$pageParam = _ref.pageParam, pageParam = _ref$pageParam === void 0 ? currentPage : _ref$pageParam;
              queryString = queryPram && Object.entries(queryPram).reduce(function (acc, _ref3) {
                var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
                    key = _ref4[0],
                    val = _ref4[1];

                return acc + (val !== '' && val !== undefined ? "&".concat(key, "=").concat(val) : '');
              }, '');
              _context.next = 4;
              return queryFn(pageParam, pageSize, queryString);

            case 4:
              data = _context.sent;

              if (!(typeof total === 'function')) {
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return total(data, currentPage, pageSize, queryString);

            case 8:
              _context.t0 = _context.sent;
              _context.next = 12;
              break;

            case 11:
              _context.t0 = total;

            case 12:
              totalval = _context.t0;
              return _context.abrupt("return", {
                data: data,
                total: totalval
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), _objectSpread({
    onSuccess: function onSuccess(resp) {
      return _onSuccess === null || _onSuccess === void 0 ? void 0 : _onSuccess(convertToDataRecord(resp)[currentPage]);
    },
    onError: onError
  }, queryOptions));

  function convertToDataRecord(infiniteData) {
    return infiniteData.pages.reduce(function (acc, data, index) {
      var _ref5, _ref6;

      var page = (_ref5 = (_ref6 = infiniteData.pageParams[index]) !== null && _ref6 !== void 0 ? _ref6 : props.currentPage) !== null && _ref5 !== void 0 ? _ref5 : _constants.TABLE_PAGE;
      return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, page, data));
    }, {});
  }

  var data = query.data ? convertToDataRecord(query.data) : {};
  var fetchPage = (0, _react.useCallback)(function () {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentPage;
    if (!query.isFetchingNextPage && !query.isFetching && !query.isError) query.fetchNextPage({
      pageParam: page,
      throwOnError: true
    })["catch"](onError);
  }, [currentPage, query, onError]);
  (0, _react.useEffect)(function () {
    if (queryPram !== props.queryPram) setProps(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        currentPage: 1,
        queryPram: props.queryPram
      });
    });
  }, [JSON.stringify(props.queryPram)]);
  (0, _react.useEffect)(function () {
    if (data[currentPage] === undefined) fetchPage();
  }, [currentPage, data, fetchPage]);
  var tabledata = (0, _react.useMemo)(function () {
    var _ref7;

    return (_ref7 = data[currentPage]) !== null && _ref7 !== void 0 ? _ref7 : prevdata;
  }, [currentPage, data, prevdata]);
  return children({
    datasource: (_onSelect = onSelect === null || onSelect === void 0 ? void 0 : onSelect(tabledata.data)) !== null && _onSelect !== void 0 ? _onSelect : tabledata.data,
    loading: query.isFetching,
    fetchNextPage: function fetchNextPage() {
      return fetchPage(currentPage + 1);
    },
    fetchPreviousPage: function fetchPreviousPage() {
      return fetchPage(currentPage - 1);
    },
    pagination: {
      pageSize: pageSize,
      total: tabledata.total,
      current: currentPage,
      onChange: function onChange(page, pagesize) {
        return setProps(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            currentPage: page,
            pageSize: pagesize !== null && pagesize !== void 0 ? pagesize : pageSize,
            prevdata: tabledata
          });
        });
      }
    }
  });
}