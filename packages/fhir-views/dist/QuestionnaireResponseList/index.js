"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qrListRouteKey = exports.QuestionnaireResponseList = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../constants");

var _reactQuery = require("react-query");

var _antd = require("antd");

var _fhirResources = require("@opensrp/fhir-resources");

var _icons = require("@ant-design/icons");

var _mls = require("../mls");

var _rbac = require("@opensrp/rbac");

var qrListRouteKey = 'id';
exports.qrListRouteKey = qrListRouteKey;

var getColumns = function getColumns(t) {
  var columns = [{
    title: t('Submission Id'),
    width: '30%',
    dataIndex: 'id'
  }, {
    title: t('Date authored'),
    dataIndex: 'authoredDateTime',
    render: function render(value) {
      return t('{{val, datetime}}', {
        val: new Date(value)
      });
    }
  }, {
    title: t('QuestionnaireVersion'),
    dataIndex: 'questionnaireVersion'
  }, {
    title: t('Actions'),
    render: function render(record) {
      return _react["default"].createElement(_rbac.RbacCheck, {
        permissions: ['QuestionnaireResponse.update']
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "".concat(_constants.QUEST_FORM_VIEW_URL, "/").concat(record.id, "/").concat(_constants.questionnaireResponseResourceType)
      }, t('Edit')));
    },
    width: '20%'
  }];
  return columns;
};

var QuestionnaireResponseList = function QuestionnaireResponseList(props) {
  var _data$records;

  var fhirBaseURL = props.fhirBaseURL;

  var _useParams = (0, _reactRouterDom.useParams)(),
      questId = _useParams.id;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var history = (0, _reactRouterDom.useHistory)();

  var _useQuery = (0, _reactQuery.useQuery)([_constants.questionnaireResourceType, questId], function () {
    return new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.questionnaireResourceType).read(questId);
  }, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  }),
      QuestLoading = _useQuery.isLoading,
      questData = _useQuery.data,
      questError = _useQuery.error;

  var extraParams = {
    questionnaire: questId
  };

  var _useSimpleTabularView = (0, _reactUtils.useSimpleTabularView)(fhirBaseURL, _constants.questionnaireResponseResourceType, extraParams),
      tablePaginationProps = _useSimpleTabularView.tablePaginationProps,
      queryValues = _useSimpleTabularView.queryValues;

  var data = queryValues.data,
      isFetching = queryValues.isFetching,
      isLoading = queryValues.isLoading;

  if (QuestLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (questError && !questData) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: t('Problem loading questionnaire')
    });
  }

  if (!questData) {
    return _react["default"].createElement(_reactUtils.Resource404, null);
  }

  var columns = getColumns(t);
  var dataSource = ((_data$records = data === null || data === void 0 ? void 0 : data.records) !== null && _data$records !== void 0 ? _data$records : []).map(_fhirResources.parseQuestionnaireResponse);
  var tableProps = {
    datasource: dataSource,
    columns: columns,
    loading: isFetching || isLoading,
    pagination: tablePaginationProps
  };
  return _react["default"].createElement("div", {
    className: "content-section fhir-resource-container"
  }, _react["default"].createElement(_fhirResources.Questionnaire, {
    resource: questData
  }), ",", _react["default"].createElement(_antd.Row, {
    className: "list-view"
  }, _react["default"].createElement(_antd.Col, {
    className: "main-content"
  }, _react["default"].createElement(_rbac.RbacCheck, {
    permissions: ['QuestionnaireResponse.create']
  }, _react["default"].createElement("div", {
    className: "main-content__header flex-right"
  }, _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return history.push("".concat(_constants.QUEST_FORM_VIEW_URL, "/").concat(questData.id, "/").concat(_constants.questionnaireResourceType));
    }
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('Fill form')))), _react["default"].createElement(_reactUtils.TableLayout, tableProps))));
};

exports.QuestionnaireResponseList = QuestionnaireResponseList;