"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseListView = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _GroupDetail = require("../GroupDetail");

var _icons = require("@ant-design/icons");

var _constants = require("../../../constants");

var _reactRouterDom = require("react-router-dom");

var _mls = require("../../../mls");

var _rbac = require("@opensrp/rbac");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var BaseListView = function BaseListView(props) {
  var _sParams$get, _data$records;

  var fhirBaseURL = props.fhirBaseURL,
      extraQueryFilters = props.extraQueryFilters,
      getColumns = props.getColumns,
      createButtonLabel = props.createButtonLabel,
      createButtonUrl = props.createButtonUrl,
      keyValueMapperRenderProp = props.keyValueMapperRenderProp,
      pageTitle = props.pageTitle;

  var _useSearchParams = (0, _reactUtils.useSearchParams)(),
      sParams = _useSearchParams.sParams;

  var resourceId = (_sParams$get = sParams.get(_reactUtils.viewDetailsQuery)) !== null && _sParams$get !== void 0 ? _sParams$get : undefined;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var history = (0, _reactRouterDom.useHistory)();

  var getSearchParams = function getSearchParams(search) {
    if (search) {
      return _objectSpread((0, _defineProperty2["default"])({}, "name:contains", search), extraQueryFilters);
    }

    return _objectSpread({}, extraQueryFilters);
  };

  var _useSimpleTabularView = (0, _reactUtils.useSimpleTabularView)(fhirBaseURL, _constants.groupResourceType, getSearchParams),
      _useSimpleTabularView2 = _useSimpleTabularView.queryValues,
      data = _useSimpleTabularView2.data,
      isFetching = _useSimpleTabularView2.isFetching,
      isLoading = _useSimpleTabularView2.isLoading,
      error = _useSimpleTabularView2.error,
      tablePaginationProps = _useSimpleTabularView.tablePaginationProps,
      searchFormProps = _useSimpleTabularView.searchFormProps;

  if (error && !data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: error.message
    });
  }

  var tableData = ((_data$records = data === null || data === void 0 ? void 0 : data.records) !== null && _data$records !== void 0 ? _data$records : []).map(function (org, index) {
    return _objectSpread(_objectSpread({}, (0, _GroupDetail.parseGroup)(org)), {}, {
      key: "".concat(index)
    });
  });
  var columns = getColumns(t);
  var tableProps = {
    datasource: tableData,
    columns: columns,
    loading: isFetching || isLoading,
    pagination: tablePaginationProps
  };
  return _react["default"].createElement("div", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement(_antd.Row, {
    className: "list-view"
  }, _react["default"].createElement(_antd.Col, {
    className: "main-content"
  }, _react["default"].createElement("div", {
    className: "main-content__header"
  }, _react["default"].createElement(_reactUtils.SearchForm, (0, _extends2["default"])({
    "data-testid": "search-form"
  }, searchFormProps)), _react["default"].createElement(_rbac.RbacCheck, {
    permissions: ['Group.create']
  }, createButtonUrl ? _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return history.push(createButtonUrl);
    }
  }, _react["default"].createElement(_icons.PlusOutlined, null), createButtonLabel) : null)), _react["default"].createElement(_reactUtils.TableLayout, tableProps)), _react["default"].createElement(_GroupDetail.ViewDetailsWrapper, {
    resourceId: resourceId,
    fhirBaseURL: fhirBaseURL,
    keyValueMapperRenderProp: keyValueMapperRenderProp
  })));
};

exports.BaseListView = BaseListView;