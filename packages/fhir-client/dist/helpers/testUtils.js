"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mountWithProviders = void 0;

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _reactQuery = require("react-query");

var queryClient = new _reactQuery.QueryClient();

var mountWithProviders = function mountWithProviders(component, options) {
  return (0, _enzyme.mount)(_react["default"].createElement(_reactQuery.QueryClientProvider, {
    client: queryClient
  }, component), options);
};

exports.mountWithProviders = mountWithProviders;