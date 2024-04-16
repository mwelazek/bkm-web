"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionnaireDetails = void 0;

var _antd = require("antd");

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _reactUtils = require("@opensrp/react-utils");

var _mls = require("../mls");

var QuestionnaireDetails = function QuestionnaireDetails(props) {
  var date = props.date,
      title = props.title,
      version = props.version,
      subjectType = props.subjectType,
      publisher = props.publisher,
      effectivePeriod = props.effectivePeriod,
      lastReviewDate = props.lastReviewDate,
      description = props.description;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var keyValuePairs = {};

  if (date) {
    keyValuePairs[t('Last Changed:')] = t('{{val, datetime}}', {
      val: new Date(date)
    });
  }

  if (version) {
    keyValuePairs[t('Version:')] = version;
  }

  if (subjectType) {
    keyValuePairs[t('Subject type:')] = subjectType;
  }

  if (publisher) {
    keyValuePairs[t('Publisher:')] = publisher;
  }

  if (effectivePeriod !== null && effectivePeriod !== void 0 && effectivePeriod.start) {
    keyValuePairs[t('Effective period start:')] = t('{{val, datetime}}', {
      val: new Date(effectivePeriod.start)
    });
  }

  if (effectivePeriod !== null && effectivePeriod !== void 0 && effectivePeriod.end) {
    keyValuePairs[t('Effective period end:')] = t('{{val, datetime}}', {
      val: new Date(effectivePeriod.end)
    });
  }

  if (lastReviewDate) {
    keyValuePairs[t('Last reviewed date:')] = t('{{val, datetime}}', {
      val: new Date(lastReviewDate)
    });
  }

  return _react["default"].createElement("div", {
    className: "resourceDetails"
  }, _react["default"].createElement("div", {
    className: "resourceDetails-avatar"
  }, _react["default"].createElement(_antd.Avatar, {
    icon: _react["default"].createElement(_icons.FormOutlined, null),
    className: "resourceDetails-avatar__icon"
  })), _react["default"].createElement("div", {
    className: "resourceDetails-info"
  }, _react["default"].createElement("h4", null, title), _react["default"].createElement("div", {
    className: "resourceDetails-meta"
  }, _react["default"].createElement("div", {
    className: "resourceDetails-info__key-value"
  }, _react["default"].createElement(_reactUtils.KeyValueGrid, keyValuePairs))), description ? _react["default"].createElement("div", {
    className: "resourceDetails-description"
  }, _react["default"].createElement(_reactUtils.SingleKeyNestedValue, {
    Description: description
  })) : null));
};

exports.QuestionnaireDetails = QuestionnaireDetails;