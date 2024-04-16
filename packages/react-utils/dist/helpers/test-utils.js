"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.superUserRole = exports.ContextProvider = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _store = require("@opensrp/store");

var _reactRedux = require("react-redux");

var _react = _interopRequireDefault(require("react"));

var _rbac = require("@opensrp/rbac");

var _connectedReducerRegistry = require("@onaio/connected-reducer-registry");

var _reactRouter = require("react-router");

var superUserRole = new _rbac.UserRole([].concat((0, _toConsumableArray2["default"])(_rbac.FhirResources), (0, _toConsumableArray2["default"])(_rbac.IamResources)), _rbac.Permit.MANAGE);
exports.superUserRole = superUserRole;

var ContextProvider = function ContextProvider(props) {
  var children = props.children;
  return _react["default"].createElement(_reactRedux.Provider, {
    store: _store.store
  }, _react["default"].createElement(_reactRouter.Router, {
    history: _connectedReducerRegistry.history
  }, _react["default"].createElement(_rbac.RoleContext.Provider, {
    value: superUserRole
  }, children)));
};

exports.ContextProvider = ContextProvider;