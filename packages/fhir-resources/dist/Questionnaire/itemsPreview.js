"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QItems = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _mls = require("../mls");

var Text = _antd.Typography.Text;

var QItems = function QItems(props) {
  var qItems = props.qItems;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  if (!Array.isArray(qItems) || qItems.length === 0) {
    return null;
  }

  return _react["default"].createElement(_react["default"].Fragment, null, qItems.map(function (item, i) {
    var _item$linkId, _item$item;

    var linkId = (_item$linkId = item.linkId) !== null && _item$linkId !== void 0 ? _item$linkId : '';
    var text = item.text;
    var nestedItems = (_item$item = item.item) !== null && _item$item !== void 0 ? _item$item : [];
    var isGroup = item.type === 'group';
    return _react["default"].createElement("ul", {
      key: "item-".concat(i),
      className: "questionnaireItemsList"
    }, _react["default"].createElement("li", {
      className: "questionnaireItemsList-title",
      "data-testid": "linkId-".concat(item.linkId)
    }, _react["default"].createElement(Text, null, text), "\xA0", _react["default"].createElement(_antd.Tag, {
      color: "default"
    }, t('linkId: {{linkId}}', {
      linkId: linkId
    })), _react["default"].createElement(_antd.Tag, {
      color: "default"
    }, t('type: {{itemType}}', {
      itemType: item.type
    }))), !isGroup && _react["default"].createElement("li", null, _react["default"].createElement(Questions, {
      questions: nestedItems
    })), isGroup && _react["default"].createElement("li", null, _react["default"].createElement(QItems, {
      qItems: nestedItems
    })));
  }));
};

exports.QItems = QItems;

var Questions = function Questions(props) {
  var questions = props.questions;

  var _useTranslation2 = (0, _mls.useTranslation)(),
      t = _useTranslation2.t;

  if (!Array.isArray(questions) || questions.length === 0) {
    return null;
  }

  return _react["default"].createElement("ul", {
    className: "questionnaireItemsList__questions-list"
  }, questions.map(function (item, i) {
    var hasLinkId = item.linkId === undefined || item.linkId === null;
    var type = item.type;
    var text = item.text;
    return _react["default"].createElement("li", {
      key: "item-".concat(i),
      "data-testid": "linkId-".concat(item.linkId)
    }, text, hasLinkId ? _react["default"].createElement(_react["default"].Fragment, null, "\xA0", _react["default"].createElement(_antd.Tag, {
      color: "default"
    }, t('linkId: {{linkId}}', {
      linkId: item.linkId
    })), _react["default"].createElement(_antd.Tag, {
      color: "default"
    }, t('type: {{itemType}}', {
      itemType: type
    }))) : null, item.item ? _react["default"].createElement(QItems, {
      qItems: item.item
    }) : null);
  }));
};