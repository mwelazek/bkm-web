"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FhirSelect = FhirSelect;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactQuery = require("react-query");

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _lodash = require("lodash");

var _utils = require("../../helpers/utils");

var _mls = require("../../mls");

var _utils2 = require("./utils");

var _excluded = ["resourceType", "baseUrl", "transformOption", "placeholder", "filterPageSize", "extraQueryParams", "getFullOptionOnChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var debouncedFn = (0, _lodash.debounce)(function (callback) {
  return callback();
}, 500);

function FhirSelect(props) {
  var _data$pages, _data$pages2;

  var resourceType = props.resourceType,
      baseUrl = props.baseUrl,
      transformOption = props.transformOption,
      placeholder = props.placeholder,
      _props$filterPageSize = props.filterPageSize,
      pageSize = _props$filterPageSize === void 0 ? 20 : _props$filterPageSize,
      _props$extraQueryPara = props.extraQueryParams,
      extraQueryParams = _props$extraQueryPara === void 0 ? {} : _props$extraQueryPara,
      getFullOptionOnChange = props.getFullOptionOnChange,
      restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var defaultStartPage = 1;

  var _useState = (0, _react.useState)(defaultStartPage),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _React$useState = _react["default"].useState(),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      searchValue = _React$useState2[0],
      setSearchValue = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      debouncedSearchValue = _React$useState4[0],
      setDebouncedSearchValue = _React$useState4[1];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  (0, _react.useEffect)(function () {
    debouncedFn(function () {
      setDebouncedSearchValue(searchValue);
      setPage(defaultStartPage);
    });
  }, [searchValue]);

  var _useInfiniteQuery = (0, _reactQuery.useInfiniteQuery)({
    queryKey: [resourceType, debouncedSearchValue, page, pageSize],
    queryFn: function () {
      var _queryFn = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(_ref) {
        var _ref$pageParam, pageParam, response;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$pageParam = _ref.pageParam, pageParam = _ref$pageParam === void 0 ? page : _ref$pageParam;
                _context.next = 3;
                return (0, _utils2.loadResources)(baseUrl, resourceType, {
                  page: pageParam,
                  pageSize: pageSize,
                  search: debouncedSearchValue !== null && debouncedSearchValue !== void 0 ? debouncedSearchValue : null
                }, extraQueryParams);

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function queryFn(_x) {
        return _queryFn.apply(this, arguments);
      }

      return queryFn;
    }(),
    getNextPageParam: function getNextPageParam(lastGroup, allGroups) {
      var totalFetched = (0, _utils2.getTotalRecordsInBundles)(allGroups);
      var total = lastGroup.total;

      if (totalFetched < total) {
        return page + 1;
      } else {
        return false;
      }
    },
    getPreviousPageParam: function getPreviousPageParam() {
      if (page === 1) {
        return undefined;
      } else {
        return page - 1;
      }
    },
    refetchOnWindowFocus: false
  }),
      data = _useInfiniteQuery.data,
      fetchNextPage = _useInfiniteQuery.fetchNextPage,
      hasNextPage = _useInfiniteQuery.hasNextPage,
      isLoading = _useInfiniteQuery.isLoading,
      isFetchingNextPage = _useInfiniteQuery.isFetchingNextPage,
      isFetching = _useInfiniteQuery.isFetching,
      error = _useInfiniteQuery.error;

  var changeHandler = function changeHandler(value, fullOption) {
    var _props$onChange;

    var saneFullOption = Array.isArray(fullOption) ? fullOption.slice() : fullOption;
    (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, value, saneFullOption);
    getFullOptionOnChange === null || getFullOptionOnChange === void 0 ? void 0 : getFullOptionOnChange(saneFullOption);
  };

  var searchHandler = function searchHandler(value) {
    setSearchValue(value);
  };

  var options = ((_data$pages = data === null || data === void 0 ? void 0 : data.pages) !== null && _data$pages !== void 0 ? _data$pages : []).flatMap(function (resourceBundle) {
    var resources = (0, _utils.getResourcesFromBundle)(resourceBundle);
    var allOptions = resources.map(transformOption);
    var saneOptions = allOptions.filter(function (option) {
      return option !== undefined;
    });
    return saneOptions;
  });
  var pages = (_data$pages2 = data === null || data === void 0 ? void 0 : data.pages) !== null && _data$pages2 !== void 0 ? _data$pages2 : [];
  var recordsFetchedNum = (0, _utils2.getTotalRecordsInBundles)(pages);
  var totalPossibleRecords = (0, _utils2.getTotalRecordsOnApi)(pages);
  var remainingRecords = totalPossibleRecords - recordsFetchedNum;

  var propsToSelect = _objectSpread(_objectSpread({
    style: {
      minWidth: '200px'
    }
  }, restProps), {}, {
    onChange: changeHandler,
    loading: isLoading,
    notFoundContent: isLoading ? _react["default"].createElement(_antd.Spin, {
      size: "small"
    }) : _react["default"].createElement(_antd.Empty, {
      description: t('No data')
    }),
    filterOption: false,
    options: options,
    searchValue: searchValue,
    dropdownRender: function dropdownRender(menu) {
      return _react["default"].createElement(_react["default"].Fragment, null, !error && data && menu, _react["default"].createElement(_antd.Divider, {
        style: {
          margin: '8px 0'
        }
      }), error ? _react["default"].createElement(_antd.Alert, {
        message: t('Unable to load dropdown options.'),
        type: "error",
        showIcon: true
      }) : _react["default"].createElement(_antd.Space, {
        direction: "vertical"
      }, data && _react["default"].createElement("small", {
        style: {
          padding: '4px 16px'
        }
      }, t('Showing {{recordsFetchedNum}}; {{remainingRecords}} more records.', {
        recordsFetchedNum: recordsFetchedNum,
        remainingRecords: remainingRecords
      })), _react["default"].createElement(_antd.Button, {
        type: "text",
        icon: _react["default"].createElement(_icons.VerticalAlignBottomOutlined, null),
        disabled: !hasNextPage || isFetchingNextPage || isFetching,
        loading: isFetchingNextPage,
        onClick: function onClick() {
          return fetchNextPage();
        }
      }, isFetchingNextPage ? t('Fetching next page') : t('Load more options'))));
    }
  });

  if (props.showSearch) {
    propsToSelect.onSearch = searchHandler;
  }

  return _react["default"].createElement(_antd.Select, propsToSelect);
}