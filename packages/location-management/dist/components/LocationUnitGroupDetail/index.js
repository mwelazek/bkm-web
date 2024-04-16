"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _mls = require("../../mls");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LocationUnitGroupDetail = function LocationUnitGroupDetail(props) {
  var name = props.name,
      active = props.active,
      description = props.description;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  return React.createElement("div", {
    id: "LocationUnitGroupDetail",
    className: "p-4 bg-white"
  }, React.createElement(_antd.Button, {
    shape: "circle",
    onClick: function onClick() {
      return props.onClose ? props.onClose() : '';
    },
    className: "float-right",
    type: "text",
    icon: React.createElement(_icons.CloseOutlined, null)
  }), React.createElement("div", {
    className: "mb-4 small mt-4"
  }, React.createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Name')), React.createElement("p", {
    className: "mb-0 loc-desc"
  }, name)), React.createElement("div", {
    className: "mb-4 small"
  }, React.createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Status')), React.createElement("p", {
    className: "mb-0 loc-desc"
  }, "".concat(active))), React.createElement("div", {
    className: "mb-4 small"
  }, React.createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Description')), React.createElement("p", {
    className: "mb-0 loc-desc"
  }, description)));
};

var _default = LocationUnitGroupDetail;
exports["default"] = _default;