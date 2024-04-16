"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _connectedReducerRegistry = require("@onaio/connected-reducer-registry");

var _gatekeeper = require("@onaio/gatekeeper");

var _reduxReducerRegistry = _interopRequireWildcard(require("@onaio/redux-reducer-registry"));

var _sessionReducer = _interopRequireWildcard(require("@onaio/session-reducer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultReducers = {
  router: _connectedReducerRegistry.connectReducer
};
var preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
defaultReducers[_sessionReducer.reducerName] = _sessionReducer["default"];
defaultReducers[_gatekeeper.gateKeeperReducerName] = _gatekeeper.gateKeeperReducer;
var store = (0, _connectedReducerRegistry.getConnectedStore)(defaultReducers, preloadedState);
exports.store = store;

_reduxReducerRegistry["default"].setChangeListener(function (reducers) {
  store.replaceReducer((0, _reduxReducerRegistry.combine)(reducers));
});