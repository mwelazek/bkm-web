"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _antd = require("antd");

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _mls = require("../../mls");

var LocationUnitDetail = function LocationUnitDetail(props) {
  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  return _react["default"].createElement("div", {
    className: "p-4 bg-white"
  }, _react["default"].createElement(_antd.Button, {
    shape: "circle",
    onClick: function onClick() {
      return props.onClose ? props.onClose() : '';
    },
    className: "float-right",
    type: "text",
    icon: _react["default"].createElement(_icons.CloseOutlined, null)
  }), _react["default"].createElement("div", {
    className: "mb-4 small mt-4"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Name')), _react["default"].createElement("p", {
    className: "mb-0 loc-desc"
  }, props.properties.name)), _react["default"].createElement("div", {
    className: "mb-4 small mt-4"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Identifier')), _react["default"].createElement("p", {
    className: "mb-0 loc-desc"
  }, props.id)), _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Status')), _react["default"].createElement("p", {
    className: "mb-0 loc-desc"
  }, props.properties.status)), _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Type')), _react["default"].createElement("p", {
    className: "mb-0 loc-desc"
  }, props.type)), _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('External ID')), _react["default"].createElement("p", {
    className: "mb-0 loc-desc"
  }, props.properties.externalId)), _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Username')), _react["default"].createElement("p", {
    className: "mb-0 loc-desc"
  }, props.properties.username)), _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Version')), _react["default"].createElement("p", {
    className: "mb-0 loc-desc"
  }, props.properties.version)), _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Sync status')), _react["default"].createElement("p", {
    className: "mb-0 loc-desc"
  }, props.syncStatus)), _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Level')), _react["default"].createElement("p", {
    className: "mb-0 loc-desc"
  }, props.properties.geographicLevel)));
};

var _default = LocationUnitDetail;
exports["default"] = _default;