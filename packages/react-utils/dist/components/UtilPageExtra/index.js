"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extraLinksDefault = exports.ExtraLinks = void 0;

var _reactRouter = require("react-router");

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _constants = require("../../constants");

var _mls = require("../../mls");

var extraLinksDefault = {
  homeUrl: _constants.HOME_URL
};
exports.extraLinksDefault = extraLinksDefault;

var ExtraLinks = function ExtraLinks(props) {
  var history = (0, _reactRouter.useHistory)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var homeUrl = props.homeUrl;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      history.goBack();
    }
  }, _react["default"].createElement(_icons.ArrowLeftOutlined, null), t('Go back')), _react["default"].createElement(_reactRouterDom.Link, {
    to: homeUrl
  }, _react["default"].createElement(_antd.Button, {
    type: "primary"
  }, t('Go home'))));
};

exports.ExtraLinks = ExtraLinks;
ExtraLinks.defaultProps = extraLinksDefault;