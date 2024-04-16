"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tailLayout = exports.isAuthorized = exports.formItemLayout = exports.PublicComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _excluded = ["component"];

var PublicComponent = function PublicComponent(_ref) {
  var Component = _ref.component,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useLocation = (0, _reactRouter.useLocation)(),
      pathname = _useLocation.pathname;

  return _react["default"].createElement(_reactRouter.Route, (0, _extends2["default"])({}, rest, {
    component: function component(props) {
      return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, {
        key: pathname
      }));
    }
  }));
};

exports.PublicComponent = PublicComponent;

var isAuthorized = function isAuthorized(roles, activeRoles) {
  return activeRoles.some(function (r) {
    return roles.includes(r);
  });
};

exports.isAuthorized = isAuthorized;
var formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    },
    md: {
      span: 4
    },
    lg: {
      span: 6
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 18
    },
    md: {
      span: 16
    },
    lg: {
      span: 14
    }
  }
};
exports.formItemLayout = formItemLayout;
var tailLayout = {
  wrapperCol: {
    xs: {
      offset: 0,
      span: 16
    },
    sm: {
      offset: 12,
      span: 24
    },
    md: {
      offset: 8,
      span: 16
    },
    lg: {
      offset: 6,
      span: 14
    }
  }
};
exports.tailLayout = tailLayout;