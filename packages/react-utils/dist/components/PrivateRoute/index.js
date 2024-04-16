"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivateRoute = exports.LOGIN_REDIRECT_URL_PARAM = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _sessionReducer = require("@onaio/session-reducer");

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _pkgConfig = require("@opensrp/pkg-config");

var _rbac = require("@opensrp/rbac");

var _UnauthorizedPage = require("../UnauthorizedPage");

var _excluded = ["component", "disableLoginProtection", "redirectPath", "permissions"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var configs = (0, _pkgConfig.getAllConfigs)();
var LOGIN_REDIRECT_URL_PARAM = 'next';
exports.LOGIN_REDIRECT_URL_PARAM = LOGIN_REDIRECT_URL_PARAM;
var defaultPrivateRouteProps = {
  disableLoginProtection: false,
  redirectPath: '/login',
  permissions: []
};

var PrivateRoute = function PrivateRoute(props) {
  var allProps = _objectSpread(_objectSpread({}, props), {}, {
    keycloakBaseURL: configs.keycloakBaseURL,
    opensrpBaseURL: configs.opensrpBaseURL,
    fhirBaseURL: configs.fhirBaseURL
  });

  var component = allProps.component,
      disableLoginProtection = allProps.disableLoginProtection,
      redirectPath = allProps.redirectPath,
      permissions = allProps.permissions,
      routeProps = (0, _objectWithoutProperties2["default"])(allProps, _excluded);
  var Component = component;
  var match = (0, _reactRouter.useRouteMatch)();
  var location = (0, _reactRouter.useLocation)();
  var authenticated = (0, _reactRedux.useSelector)(function (state) {
    return (0, _sessionReducer.isAuthenticated)(state);
  });
  var nextUrl = match.path;
  var currentSParams = new URLSearchParams(location.search);
  currentSParams.set(LOGIN_REDIRECT_URL_PARAM, nextUrl);
  var fullRedirectPath = "".concat(redirectPath, "?").concat(currentSParams.toString());
  var okToRender = authenticated === true || disableLoginProtection === true;

  if (!okToRender) {
    return _react["default"].createElement(_reactRouter.Redirect, {
      to: fullRedirectPath
    });
  }

  return _react["default"].createElement(_reactRouter.Route, routeProps, function (routeProps) {
    return _react["default"].createElement(_rbac.RbacCheck, {
      permissions: permissions,
      fallback: _react["default"].createElement(_UnauthorizedPage.UnauthorizedPage, {
        title: '403',
        errorMessage: 'Sorry, you are not authorized to access this page'
      })
    }, _react["default"].createElement(Component, (0, _extends2["default"])({}, routeProps, allProps)));
  });
};

exports.PrivateRoute = PrivateRoute;
PrivateRoute.defaultProps = defaultPrivateRouteProps;