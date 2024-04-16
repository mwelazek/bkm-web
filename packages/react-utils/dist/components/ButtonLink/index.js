"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLink = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reactRouter = require("react-router");

var ButtonLink = function ButtonLink(props) {
  var history = (0, _reactRouter.useHistory)();
  var name = props.name,
      route = props.route,
      className = props.className;

  var handleClick = function handleClick() {
    history.push(route);
  };

  return _react["default"].createElement(_antd.Button, {
    onClick: handleClick,
    className: className,
    type: "link"
  }, name);
};

exports.ButtonLink = ButtonLink;