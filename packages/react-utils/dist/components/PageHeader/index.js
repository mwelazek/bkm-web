"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var Title = _antd.Typography.Title;

var PageHeader = function PageHeader(props) {
  var title = props.title;
  return _react["default"].createElement("div", {
    className: "header"
  }, _react["default"].createElement(Title, {
    level: 4,
    className: "page-header"
  }, title));
};

exports.PageHeader = PageHeader;