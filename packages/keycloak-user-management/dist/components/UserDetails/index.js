"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _mls = require("../../mls");

var UserDetails = function UserDetails(props) {
  var onClose = props.onClose,
      keycloakUser = props.keycloakUser,
      practitioner = props.practitioner,
      assignedTeams = props.assignedTeams;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  if (!keycloakUser) return _react["default"].createElement(_antd.Spin, {
    size: "large"
  });
  return _react["default"].createElement("div", {
    className: "p-4 bg-white"
  }, _react["default"].createElement(_antd.Button, {
    shape: "circle",
    onClick: function onClick() {
      return onClose && onClose();
    },
    className: "float-right close-btn",
    type: "text",
    icon: _react["default"].createElement(_icons.CloseOutlined, null)
  }), _react["default"].createElement("div", {
    className: "mb-4 small mt-4"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Username')), _react["default"].createElement("p", {
    className: "mb-0",
    id: "username"
  }, keycloakUser.username)), _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Keycloak UUID')), _react["default"].createElement("p", {
    className: "mb-0",
    id: "keycloakId"
  }, "".concat(keycloakUser.id))), practitioner ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Practitioner UUID')), _react["default"].createElement("p", {
    className: "mb-0",
    id: "practitionerId"
  }, "".concat(practitioner.identifier))), _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Practitioner Status')), _react["default"].createElement("p", {
    className: "mb-0",
    id: "practitionerStatus"
  }, practitioner.active ? 'active' : 'inactive'))) : _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Practitioner')), _react["default"].createElement("p", {
    className: "mb-0",
    id: "noActivePractitioner"
  }, t('No Active Practitioner'))), _react["default"].createElement("div", {
    className: "mb-4 small"
  }, _react["default"].createElement("p", {
    className: "mb-0 font-weight-bold"
  }, t('Assigned Teams')), assignedTeams !== null && assignedTeams !== void 0 && assignedTeams.length ? assignedTeams.map(function (team) {
    return _react["default"].createElement("p", {
      key: team.identifier,
      className: "mb-0",
      id: "assignedTeam"
    }, "".concat(team.name));
  }) : _react["default"].createElement("p", {
    id: "noAssignedTeams"
  }, t('No Assigned Teams'))));
};

exports.UserDetails = UserDetails;