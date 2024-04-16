"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HealthCareList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _icons = require("@ant-design/icons");

var _constants = require("../../constants");

var _reactRouterDom = require("react-router-dom");

var _HealthCareDetail = require("../HealthCareDetail");

var _mls = require("../../mls");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var HealthCareList = function HealthCareList(props) {
  var _sParams$get, _data$records;

  var fhirBaseURL = props.fhirBaseURL;

  var _useSearchParams = (0, _reactUtils.useSearchParams)(),
      sParams = _useSearchParams.sParams,
      addParam = _useSearchParams.addParam;

  var resourceId = (_sParams$get = sParams.get(_reactUtils.viewDetailsQuery)) !== null && _sParams$get !== void 0 ? _sParams$get : undefined;
  var history = (0, _reactRouterDom.useHistory)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useSimpleTabularView = (0, _reactUtils.useSimpleTabularView)(fhirBaseURL, _constants.healthCareServiceResourceType),
      searchFormProps = _useSimpleTabularView.searchFormProps,
      tablePaginationProps = _useSimpleTabularView.tablePaginationProps,
      queryValues = _useSimpleTabularView.queryValues;

  var data = queryValues.data,
      isFetching = queryValues.isFetching,
      isLoading = queryValues.isLoading,
      error = queryValues.error;

  if (error && !data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: error.message
    });
  }

  var tableData = ((_data$records = data === null || data === void 0 ? void 0 : data.records) !== null && _data$records !== void 0 ? _data$records : []).map(function (obj, index) {
    return _objectSpread(_objectSpread({}, (0, _HealthCareDetail.parseHealthCare)(obj)), {}, {
      key: "".concat(index)
    });
  });

  var getItems = function getItems(record) {
    return [{
      key: '1',
      label: _react["default"].createElement(_antd.Button, {
        onClick: function onClick() {
          return addParam(_reactUtils.viewDetailsQuery, record.id);
        },
        type: "link"
      }, t('View Details'))
    }];
  };

  var columns = [{
    title: t('Name'),
    dataIndex: 'name',
    key: 'name'
  }, {
    title: t('Status'),
    dataIndex: 'active',
    key: 'active',
    render: function render(value) {
      return _react["default"].createElement("div", null, value ? t('Active') : t('Inactive'));
    }
  }, {
    title: t('Last Updated'),
    dataIndex: 'lastUpdated',
    key: 'lastUpdated',
    render: function render(value) {
      return t('{{val, datetime}}', {
        val: new Date(value)
      });
    }
  }, {
    title: t('Actions'),
    width: '10%',
    render: function render(_, record) {
      return _react["default"].createElement("span", {
        className: "d-flex align-items-center"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "".concat(_constants.ADD_EDIT_HEALTHCARE_SERVICE_URL, "/").concat(record.id),
        className: "m-0 p-1"
      }, t('Edit')), _react["default"].createElement(_antd.Divider, {
        type: "vertical"
      }), _react["default"].createElement(_antd.Dropdown, {
        menu: {
          items: getItems(record)
        },
        placement: "bottomRight",
        arrow: true,
        trigger: ['click']
      }, _react["default"].createElement(_icons.MoreOutlined, {
        "data-testid": "action-dropdown",
        className: "more-options"
      })));
    }
  }];
  var tableProps = {
    datasource: tableData,
    columns: columns,
    loading: isFetching || isLoading,
    pagination: tablePaginationProps
  };
  var pageTitle = t('HealthCare service list');
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
  }, searchFormProps)), _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return history.push(_constants.ADD_EDIT_HEALTHCARE_SERVICE_URL);
    }
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('Create Care Service'))), _react["default"].createElement(_reactUtils.TableLayout, tableProps)), _react["default"].createElement(_HealthCareDetail.ViewDetailsWrapper, {
    resourceId: resourceId,
    fhirBaseURL: fhirBaseURL
  })));
};

exports.HealthCareList = HealthCareList;