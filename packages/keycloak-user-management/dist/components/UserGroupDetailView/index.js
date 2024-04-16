"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../../constants");

var _reactRouterDom = require("react-router-dom");

var _mls = require("../../mls");

var Text = _antd.Typography.Text;

var ViewDetails = function ViewDetails(props) {
  var loading = props.loading,
      error = props.error,
      GroupDetails = props.GroupDetails,
      userGroupMembers = props.userGroupMembers,
      onClose = props.onClose,
      effectiveRoles = props.effectiveRoles;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  return _react["default"].createElement(_antd.Col, {
    className: "p-4 bg-white"
  }, _react["default"].createElement(_antd.Button, {
    shape: "circle",
    onClick: function onClick() {
      return onClose();
    },
    className: "float-right close-btn",
    type: "text",
    icon: _react["default"].createElement(_icons.CloseOutlined, null)
  }), loading ? _react["default"].createElement(_antd.Spin, {
    size: "large",
    className: "inline-spinner"
  }) : error || !GroupDetails || !userGroupMembers ? _react["default"].createElement(_reactUtils.Resource404, null) : _react["default"].createElement(_antd.Space, {
    direction: "vertical"
  }, _react["default"].createElement("div", {
    className: "mb-2 medium mt-2"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Group uuid')), _react["default"].createElement("p", {
    className: "mb-0",
    id: "uuid"
  }, GroupDetails.id)), _react["default"].createElement("div", {
    className: "mb-2 medium mt-2"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Name')), _react["default"].createElement("p", {
    className: "mb-0",
    id: "name"
  }, GroupDetails.name)), _react["default"].createElement("div", {
    className: "mb-2 medium mt-2"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Roles')), _react["default"].createElement(_antd.Space, {
    direction: "vertical",
    size: 1
  }, effectiveRoles !== null && effectiveRoles !== void 0 && effectiveRoles.length ? effectiveRoles.map(function (role) {
    return _react["default"].createElement(Text, {
      key: role.name
    }, role.name);
  }) : _react["default"].createElement("p", {
    id: "noRealRole"
  }, t('No assigned roles')))), _react["default"].createElement("div", {
    className: "mb-2 medium mt-2"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Members')), userGroupMembers.length ? userGroupMembers.map(function (member) {
    return _react["default"].createElement("p", {
      key: member.id,
      className: "mb-0",
      id: "groupMember"
    }, _react["default"].createElement(_reactRouterDom.Link, {
      key: member.id,
      to: "".concat(_constants.URL_USER_EDIT, "/").concat(member.id),
      id: "realRole"
    }, "".concat(member.firstName, " ").concat(member.lastName, " (").concat(member.username, ")")));
  }) : _react["default"].createElement("p", {
    id: "noGroupMember"
  }, t('No assigned members')))));
};

exports.ViewDetails = ViewDetails;