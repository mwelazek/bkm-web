"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Resource404 = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _UtilPageExtra = require("../UtilPageExtra");

var _mls = require("../../mls");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _objectSpread({}, _UtilPageExtra.extraLinksDefault);

var Resource404 = function Resource404(props) {
  var title = props.title,
      errorMessage = props.errorMessage;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var extraLinksProps = {
    homeUrl: props.homeUrl
  };
  var i18nedErrMessage = errorMessage !== null && errorMessage !== void 0 ? errorMessage : t('Sorry, the resource you requested for, does not exist');
  var i18nedTitle = title !== null && title !== void 0 ? title : t('404');
  return _react["default"].createElement(_antd.Result, {
    status: "404",
    title: i18nedTitle,
    subTitle: i18nedErrMessage,
    extra: _react["default"].createElement(_UtilPageExtra.ExtraLinks, extraLinksProps)
  });
};

exports.Resource404 = Resource404;
Resource404.defaultProps = defaultProps;