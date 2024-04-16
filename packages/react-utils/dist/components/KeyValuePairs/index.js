"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderObjectAsKeyvalue = exports.SingleKeyNestedValue = exports.KeyValueGrid = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("./index.css");

var Text = _antd.Typography.Text;

var KeyValueGrid = function KeyValueGrid(props) {
  return _react["default"].createElement("dl", {
    className: "keyValueGrid"
  }, Object.entries(props).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return _react["default"].createElement("div", {
      key: key,
      className: "keyValueGrid-pair"
    }, _react["default"].createElement("dt", {
      className: "keyValueGrid-pair__label"
    }, key), _react["default"].createElement("dd", {
      className: "keyValueGrid-pair__value"
    }, value));
  }));
};

exports.KeyValueGrid = KeyValueGrid;

var SingleKeyNestedValue = function SingleKeyNestedValue(props) {
  var firstPair = Object.entries(props)[0];
  if (firstPair === undefined) return null;

  var _firstPair = (0, _slicedToArray2["default"])(firstPair, 2),
      key = _firstPair[0],
      value = _firstPair[1];

  return _react["default"].createElement("dl", {
    className: "singleKeyValue"
  }, _react["default"].createElement("div", {
    className: "singleKeyValue-pair"
  }, _react["default"].createElement("dt", {
    className: "singleKeyValue-pair__label"
  }, _react["default"].createElement(Text, {
    type: 'secondary'
  }, key)), _react["default"].createElement("dd", {
    className: "singleKeyValue-pair__value"
  }, _react["default"].createElement(Text, null, value))));
};

exports.SingleKeyNestedValue = SingleKeyNestedValue;

var renderObjectAsKeyvalue = function renderObjectAsKeyvalue(obj) {
  return _react["default"].createElement(_react["default"].Fragment, null, Object.entries(obj).map(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    var props = (0, _defineProperty2["default"])({}, key, value);
    return value ? _react["default"].createElement("div", {
      key: key,
      "data-testid": "key-value"
    }, _react["default"].createElement(SingleKeyNestedValue, props)) : null;
  }));
};

exports.renderObjectAsKeyvalue = renderObjectAsKeyvalue;