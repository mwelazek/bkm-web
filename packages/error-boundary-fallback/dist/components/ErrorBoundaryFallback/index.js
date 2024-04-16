"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundaryFallback = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _mls = require("../../mls");

var ErrorBoundaryFallback = function ErrorBoundaryFallback(props) {
  var homeUrl = props.homeUrl;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  return _react["default"].createElement(_antd.Result, {
    status: "error",
    title: t('An Error Occurred'),
    subTitle: t('There has been an error. It’s been reported to the site administrators via email and should be fixed shortly. Thanks for your patience.'),
    extra: _react["default"].createElement(_antd.Button, {
      id: "backHome",
      key: "error",
      onClick: function onClick() {
        return window.location.href = homeUrl ? homeUrl : '/';
      },
      type: "primary"
    }, t('Back Home'))
  });
};

exports.ErrorBoundaryFallback = ErrorBoundaryFallback;