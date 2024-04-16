"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resourceTypeParam = exports.resourceIdParam = exports.questionnaireResponseResourceType = exports.questionnaireResourceType = exports.QuestRForm = exports.BaseQuestRForm = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reducers = _interopRequireDefault(require("@helsenorge/skjemautfyller/reducers"));

var _components = require("@helsenorge/skjemautfyller/components");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reactRouter = require("react-router");

var _reactUtils = require("@opensrp/react-utils");

var _notifications = require("@opensrp/notifications");

var _antd = require("antd");

var _reactQuery = require("react-query");

var _mls = require("./mls");

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var store = (0, _redux.createStore)(_reducers["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"]));
var questionnaireResponseResourceType = 'QuestionnaireResponse';
exports.questionnaireResponseResourceType = questionnaireResponseResourceType;
var questionnaireResourceType = 'Questionnaire';
exports.questionnaireResourceType = questionnaireResourceType;

var BaseQuestRForm = function BaseQuestRForm(props) {
  var resourceId = props.resourceId,
      fhirBaseURL = props.fhirBaseURL,
      onSubmit = props.onSubmit,
      onCancel = props.onCancel,
      isQuestionnaire = props.isQuestionnaire;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useQuery = (0, _reactQuery.useQuery)([questionnaireResponseResourceType, resourceId], function () {
    return new _reactUtils.FHIRServiceClass(fhirBaseURL, questionnaireResponseResourceType).read(resourceId);
  }, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: !isQuestionnaire
  }),
      questRespIsLoading = _useQuery.isLoading,
      questResp = _useQuery.data,
      questRespError = _useQuery.error;

  var questId = isQuestionnaire ? "".concat(questionnaireResourceType, "/").concat(resourceId) : questResp === null || questResp === void 0 ? void 0 : questResp.questionnaire;

  var _useQuery2 = (0, _reactQuery.useQuery)([questionnaireResourceType, questId], function () {
    return new _reactUtils.FHIRServiceClass(fhirBaseURL, '').read(questId);
  }, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: isQuestionnaire || !!(questResp !== null && questResp !== void 0 && questResp.questionnaire)
  }),
      isLoading = _useQuery2.isLoading,
      data = _useQuery2.data,
      error = _useQuery2.error;

  if (isLoading || questRespIsLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (error && !data && questRespError && !questResp) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: "".concat(error)
    });
  }

  return _react["default"].createElement("div", {
    className: "content-section"
  }, _react["default"].createElement(_reactRedux.Provider, {
    store: store,
    key: "1"
  }, _react["default"].createElement(_components.SkjemautfyllerContainer, {
    store: store,
    questionnaire: data,
    questionnaireResponse: questResp,
    onSubmit: onSubmit,
    onCancel: onCancel,
    resources: {
      formCancel: t('Cancel'),
      formSend: t('Submit')
    },
    authorized: true
  })));
};

exports.BaseQuestRForm = BaseQuestRForm;
var resourceIdParam = 'resourceId';
exports.resourceIdParam = resourceIdParam;
var resourceTypeParam = 'resourceType';
exports.resourceTypeParam = resourceTypeParam;

var QuestRForm = function QuestRForm(props) {
  var _useParams = (0, _reactRouter.useParams)(),
      resourceId = _useParams.resourceId,
      resourceType = _useParams.resourceType;

  var history = (0, _reactRouter.useHistory)();

  var _useTranslation2 = (0, _mls.useTranslation)(),
      t = _useTranslation2.t;

  var isQuestionnaire = resourceType === 'Questionnaire';
  var fhirBaseURL = props.fhirBaseURL;

  var onSubmit = function onSubmit(qr) {
    var payload = _objectSpread(_objectSpread({}, qr), {}, {
      id: (0, _uuid.v4)()
    });

    var service = new _reactUtils.FHIRServiceClass(fhirBaseURL, questionnaireResponseResourceType);
    service.update(payload).then(function () {
      return (0, _notifications.sendSuccessNotification)(t('Questionnaire Response resource submitted successfully'));
    })["catch"](function (e) {
      return (0, _notifications.sendErrorNotification)(e);
    });
  };

  var onCancel = function onCancel() {
    return history.goBack();
  };

  var rawQuestProps = {
    resourceId: resourceId,
    isQuestionnaire: isQuestionnaire,
    onSubmit: onSubmit,
    onCancel: onCancel,
    fhirBaseURL: fhirBaseURL
  };
  return _react["default"].createElement(BaseQuestRForm, rawQuestProps);
};

exports.QuestRForm = QuestRForm;