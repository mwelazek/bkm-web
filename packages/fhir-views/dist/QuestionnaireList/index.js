"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumns = exports.QuestionnaireList = exports.NamesColumnCustomRenderLink = exports.NamesColumnCustomRender = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../constants");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _reactHelmet = require("react-helmet");

var _fhirResources = require("@opensrp/fhir-resources");

var _mls = require("../mls");

require("./index.css");

var _rbac = require("@opensrp/rbac");

var NamesColumnCustomRenderLink = function NamesColumnCustomRenderLink(record) {
  var _ref, _record$title;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "".concat(_constants.QUEST_FORM_VIEW_URL, "/").concat(record.id, "/").concat(_constants.questionnaireResourceType)
  }, (_ref = (_record$title = record.title) !== null && _record$title !== void 0 ? _record$title : record.id) !== null && _ref !== void 0 ? _ref : ''));
};

exports.NamesColumnCustomRenderLink = NamesColumnCustomRenderLink;

var NamesColumnCustomRender = function NamesColumnCustomRender(record) {
  var _ref2, _record$title2;

  return _react["default"].createElement(_react["default"].Fragment, null, (_ref2 = (_record$title2 = record.title) !== null && _record$title2 !== void 0 ? _record$title2 : record.id) !== null && _ref2 !== void 0 ? _ref2 : '');
};

exports.NamesColumnCustomRender = NamesColumnCustomRender;

var getColumns = function getColumns(t, userRole) {
  var columns = [{
    title: t('Name/Id'),
    render: userRole.hasPermissions('QuestionnaireResponse.create') ? NamesColumnCustomRenderLink : NamesColumnCustomRender,
    width: '20%'
  }, {
    title: t('Status'),
    dataIndex: 'status'
  }, {
    title: t('Publisher'),
    dataIndex: 'publisher'
  }, {
    title: t('Version'),
    dataIndex: 'version'
  }, {
    title: t('date'),
    dataIndex: 'date',
    render: function render(value) {
      return t('{{val, datetime}}', {
        val: new Date(value)
      });
    }
  }, {
    title: t('Actions'),
    render: function render(record) {
      return _react["default"].createElement(_rbac.RbacCheck, {
        permissions: ['QuestionnaireResponse.read']
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "".concat(_constants.QUEST_RESPONSE_VIEW_URL, "/").concat(record.id)
      }, t('View Questionnaire Responses')));
    },
    width: '20%'
  }];
  return columns;
};

exports.getColumns = getColumns;

var getSearchParams = function getSearchParams(search) {
  if (search) {
    return (0, _defineProperty2["default"])({}, "title:contains", "".concat(search, ",name:contains=").concat(search));
  }

  return {};
};

var QuestionnaireList = function QuestionnaireList(props) {
  var _data$records;

  var fhirBaseURL = props.fhirBaseURL;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useSimpleTabularView = (0, _reactUtils.useSimpleTabularView)(fhirBaseURL, _constants.questionnaireResourceType, getSearchParams),
      searchFormProps = _useSimpleTabularView.searchFormProps,
      tablePaginationProps = _useSimpleTabularView.tablePaginationProps,
      queryValues = _useSimpleTabularView.queryValues;

  var userRole = (0, _rbac.useUserRole)();
  var data = queryValues.data,
      isFetching = queryValues.isFetching,
      isLoading = queryValues.isLoading,
      error = queryValues.error;
  var columns = getColumns(t, userRole);
  var dataSource = ((_data$records = data === null || data === void 0 ? void 0 : data.records) !== null && _data$records !== void 0 ? _data$records : []).map(_fhirResources.parseQuestionnaire);
  var tableProps = {
    datasource: dataSource,
    columns: columns,
    loading: isFetching || isLoading,
    pagination: tablePaginationProps
  };

  if (error && !data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: error.message
    });
  }

  var pageTitle = t('Questionnaire list view');
  return _react["default"].createElement("div", {
    className: "content-section fhir-resource-container"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement(_antd.Row, {
    className: "list-view"
  }, _react["default"].createElement(_antd.Col, {
    className: "main-content"
  }, _react["default"].createElement("div", {
    className: "main-content__header"
  }, _react["default"].createElement(_reactUtils.SearchForm, (0, _extends2["default"])({}, searchFormProps, {
    "data-testid": "search-form"
  })), _react["default"].createElement(_rbac.RbacCheck, {
    permissions: ['QuestionnaireResponse.create']
  }, _react["default"].createElement(_antd.Button, {
    type: "primary",
    disabled: true
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('Create questionnaire')))), _react["default"].createElement(_reactUtils.TableLayout, tableProps))));
};

exports.QuestionnaireList = QuestionnaireList;