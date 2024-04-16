"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQuestionnaire = exports.Questionnaire = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _details = require("./details");

var _itemsPreview = require("./itemsPreview");

require("./index.css");

var _antd = require("antd");

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Panel = _antd.Collapse.Panel;

var commonParse = function commonParse(resource) {
  var status = resource.status,
      dateTime = resource.date;
  return {
    status: status,
    dateTime: dateTime
  };
};

var R4Parse = function R4Parse(resource) {
  var _title;

  var rootItems = resource.item,
      id = resource.id,
      text = resource.text,
      version = resource.version,
      subjectTypeCodes = resource.subjectType,
      publisher = resource.publisher,
      effectivePeriod = resource.effectivePeriod,
      lastReviewDate = resource.lastReviewDate,
      date = resource.date,
      description = resource.description;
  var narrativePreview;

  if ((text === null || text === void 0 ? void 0 : text.status) === 'generated') {
    narrativePreview = text.div;
  }

  var title = resource.title;
  title = (_title = title) !== null && _title !== void 0 ? _title : id;
  return {
    id: id,
    narrativePreview: narrativePreview,
    title: title,
    rootItems: rootItems,
    version: version,
    subjectType: subjectTypeCodes === null || subjectTypeCodes === void 0 ? void 0 : subjectTypeCodes.join(','),
    publisher: publisher,
    effectivePeriod: effectivePeriod,
    lastReviewDate: lastReviewDate,
    date: date,
    description: description
  };
};

var parseQuestionnaire = function parseQuestionnaire(resource) {
  return _objectSpread(_objectSpread({}, commonParse(resource)), R4Parse(resource));
};

exports.parseQuestionnaire = parseQuestionnaire;

var Questionnaire = function Questionnaire(props) {
  var resource = props.resource;

  var _parseQuestionnaire = parseQuestionnaire(resource),
      title = _parseQuestionnaire.title,
      narrativePreview = _parseQuestionnaire.narrativePreview,
      publisher = _parseQuestionnaire.publisher,
      description = _parseQuestionnaire.description,
      date = _parseQuestionnaire.date,
      version = _parseQuestionnaire.version,
      subjectType = _parseQuestionnaire.subjectType,
      lastReviewDate = _parseQuestionnaire.lastReviewDate,
      effectivePeriod = _parseQuestionnaire.effectivePeriod;

  var questionnaireDetailProps = {
    title: title,
    publisher: publisher,
    description: description,
    date: date,
    version: version,
    subjectType: subjectType,
    lastReviewDate: lastReviewDate,
    effectivePeriod: effectivePeriod
  };
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_details.QuestionnaireDetails, questionnaireDetailProps), _react["default"].createElement(_antd.Collapse, {
    className: "questionnaireItemPreview"
  }, _react["default"].createElement(Panel, {
    header: "Preview items",
    key: "1"
  }, narrativePreview ? (0, _htmlReactParser["default"])(narrativePreview) : _react["default"].createElement(_itemsPreview.QItems, {
    qItems: resource.item
  }))));
};

exports.Questionnaire = Questionnaire;