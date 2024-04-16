"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQuestionnaireResponse = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var R4Parse = function R4Parse(resource) {
  var _questionnaireURl$spl;

  var rootItems = resource.item,
      id = resource.id,
      basedOn = resource.basedOn,
      partOf = resource.partOf,
      questionnaire = resource.questionnaire,
      subject = resource.subject,
      authoredDateTime = resource.authored,
      author = resource.author,
      source = resource.source;
  var questionnaireURl = resource.questionnaire;
  var splitPath = (_questionnaireURl$spl = questionnaireURl === null || questionnaireURl === void 0 ? void 0 : questionnaireURl.split('/')) !== null && _questionnaireURl$spl !== void 0 ? _questionnaireURl$spl : [];
  var historyPathIndex = splitPath.findIndex(function (value) {
    return value === '_history';
  });
  var questionnaireVersion;

  if (historyPathIndex > 0) {
    questionnaireVersion = splitPath[historyPathIndex + 1];
  }

  return {
    id: id,
    basedOn: basedOn,
    partOf: partOf,
    questionnaire: questionnaire,
    subject: subject,
    authoredDateTime: authoredDateTime,
    author: author,
    source: source,
    rootItems: rootItems,
    questionnaireVersion: questionnaireVersion
  };
};

var parseQuestionnaireResponse = function parseQuestionnaireResponse(resource) {
  return _objectSpread({}, R4Parse(resource));
};

exports.parseQuestionnaireResponse = parseQuestionnaireResponse;