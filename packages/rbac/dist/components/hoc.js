"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RbacCheck = RbacCheck;
exports.RbacProvider = RbacProvider;
exports.RoleContext = void 0;
exports.useStoreUserRole = useStoreUserRole;
exports.useUserRole = useUserRole;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _keycloakAdapter = require("../adapters/keycloakAdapter");

var _pkgConfig = require("@opensrp/pkg-config");

var _sessionReducer = require("@onaio/session-reducer");

var _roleDefinition = require("../roleDefinition");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var iamStrategiesLookup = {
  keycloak: _keycloakAdapter.adapter
};

function RbacCheck(props) {
  var permissions = props.permissions,
      children = props.children,
      fallback = props.fallback,
      matchStrategy = props.matchStrategy;
  var userRole = useUserRole();

  if (userRole.hasPermissions(permissions, matchStrategy)) {
    if (children) {
      return children;
    }
  }

  return fallback !== null && fallback !== void 0 ? fallback : null;
}

var defaultUserRole = new _roleDefinition.UserRole();
var RoleContext = (0, _react.createContext)(defaultUserRole);
exports.RoleContext = RoleContext;

function RbacProvider(props) {
  var children = props.children;
  var userRole = useStoreUserRole();
  return _react["default"].createElement(RoleContext.Provider, {
    value: userRole
  }, children);
}

function useStoreUserRole() {
  var _getConfig, _ref;

  var extraData = (0, _reactRedux.useSelector)(function (state) {
    return (0, _sessionReducer.getExtraData)(state);
  });
  var roles = extraData.roles;
  var iamStrategy = (_getConfig = (0, _pkgConfig.getConfig)('rbacStrategy')) !== null && _getConfig !== void 0 ? _getConfig : 'keycloak';
  var strategy = iamStrategiesLookup[iamStrategy];
  var userRole = (_ref = strategy(roles)) !== null && _ref !== void 0 ? _ref : defaultUserRole;
  return userRole;
}

function useUserRole() {
  var userRole = (0, _react.useContext)(RoleContext);
  return userRole;
}