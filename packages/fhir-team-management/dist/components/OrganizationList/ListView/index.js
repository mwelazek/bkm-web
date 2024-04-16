"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrganizationList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _reactUtils = require("@opensrp/react-utils");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _reactRouterDom = require("react-router-dom");

var _constants = require("../../../constants");

var _ViewDetails = require("../ViewDetails");

var _mls = require("../../../mls");

var _rbac = require("@opensrp/rbac");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var OrganizationList = function OrganizationList(props) {
  var _sParams$get, _data$records;

  var fhirBaseURL = props.fhirBaseURL;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useSearchParams = (0, _reactUtils.useSearchParams)(),
      addParam = _useSearchParams.addParam,
      sParams = _useSearchParams.sParams;

  var resourceId = (_sParams$get = sParams.get(_reactUtils.viewDetailsQuery)) !== null && _sParams$get !== void 0 ? _sParams$get : undefined;

  var _useSimpleTabularView = (0, _reactUtils.useSimpleTabularView)(fhirBaseURL, _constants.organizationResourceType),
      searchFormProps = _useSimpleTabularView.searchFormProps,
      tablePaginationProps = _useSimpleTabularView.tablePaginationProps,
      queryValues = _useSimpleTabularView.queryValues;

  var data = queryValues.data,
      isFetching = queryValues.isFetching,
      isLoading = queryValues.isLoading,
      error = queryValues.error;
  var history = (0, _reactRouterDom.useHistory)();

  if (error && !data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: error.message
    });
  }

  var tableData = ((_data$records = data === null || data === void 0 ? void 0 : data.records) !== null && _data$records !== void 0 ? _data$records : []).map(function (org, index) {
    return _objectSpread(_objectSpread({}, (0, _ViewDetails.parseOrganization)(org)), {}, {
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
    title: t('Team name'),
    dataIndex: 'name',
    key: 'name'
  }, {
    title: t('Actions'),
    width: '10%',
    render: function render(_, record) {
      return _react["default"].createElement("span", {
        className: "d-flex align-items-center"
      }, _react["default"].createElement(_rbac.RbacCheck, {
        permissions: ['Organization.update']
      }, _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Link, {
        to: "".concat(_constants.URL_EDIT_ORGANIZATION, "/").concat(record.id),
        className: "m-0 p-1"
      }, t('Edit')), _react["default"].createElement(_antd.Divider, {
        type: "vertical"
      }))), _react["default"].createElement(_antd.Dropdown, {
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
  var pageTitle = t('Organization list');
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
    permissions: ['Organization.create']
  }, _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return history.push(_constants.URL_ADD_ORGANIZATION);
    }
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('Add Organization')))), _react["default"].createElement(_reactUtils.TableLayout, tableProps)), _react["default"].createElement(_ViewDetails.ViewDetailsWrapper, {
    resourceId: resourceId,
    fhirBaseURL: fhirBaseURL
  })));
};

exports.OrganizationList = OrganizationList;