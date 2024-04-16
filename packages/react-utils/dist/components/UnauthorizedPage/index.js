"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHandleUnauthorizedPage = exports.UnauthorizedPage = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _notifications = require("@opensrp/notifications");

var _UtilPageExtra = require("../UtilPageExtra");

var _mls = require("../../mls");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _objectSpread({}, _UtilPageExtra.extraLinksDefault);

var UnauthorizedPage = function UnauthorizedPage(props) {
  var errorMessage = props.errorMessage,
      title = props.title;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var i18nedErrMessage = errorMessage !== null && errorMessage !== void 0 ? errorMessage : t('Sorry, you are not authorized to access this page');
  var i18nedTitle = title !== null && title !== void 0 ? title : t('Error');
  var extraLinksProps = {
    homeUrl: props.homeUrl
  };
  return _react["default"].createElement(_antd.Result, {
    status: "403",
    title: i18nedTitle,
    subTitle: i18nedErrMessage,
    extra: _react["default"].createElement(_UtilPageExtra.ExtraLinks, extraLinksProps)
  });
};

exports.UnauthorizedPage = UnauthorizedPage;
UnauthorizedPage.defaultProps = defaultProps;

var useHandleUnauthorizedPage = function useHandleUnauthorizedPage() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      unauthorized = _useState2[0],
      setUnauthorized = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  function handleUnauthorizedPage(error) {
    (0, _notifications.sendWarningNotification)(error.name, error.message);
    setErrorMessage(error.message);
    setUnauthorized(true);
  }

  return {
    unauthorized: unauthorized,
    errorMessage: errorMessage,
    handleUnauthorizedPage: handleUnauthorizedPage
  };
};

exports.useHandleUnauthorizedPage = useHandleUnauthorizedPage;