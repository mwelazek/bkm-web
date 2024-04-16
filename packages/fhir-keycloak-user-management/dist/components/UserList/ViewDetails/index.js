"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewDetailsWrapper = exports.ViewDetails = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _userManagement = require("@opensrp/user-management");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _reactUtils = require("@opensrp/react-utils");

var _reactQuery = require("react-query");

var _keycloakService = require("@opensrp/keycloak-service");

var _constants = require("../../../constants");

var _CreateEditUser = require("../../CreateEditUser");

var _react = _interopRequireDefault(require("react"));

var _i18n = require("@opensrp/i18n");

var _lodash = require("lodash");

var ViewDetails = function ViewDetails(props) {
  var _keycloakUserValues, _practitionerKeyValue, _ref;

  var resourceId = props.resourceId,
      fhirBaseUrl = props.fhirBaseUrl,
      keycloakBaseUrl = props.keycloakBaseUrl;

  var _useTranslation = (0, _i18n.useTranslation)(),
      t = _useTranslation.t;

  var _useQuery = (0, _reactQuery.useQuery)([_userManagement.KEYCLOAK_URL_USERS, resourceId], function () {
    return new _keycloakService.KeycloakService("".concat(_userManagement.KEYCLOAK_URL_USERS), keycloakBaseUrl).read(resourceId);
  }),
      user = _useQuery.data,
      userIsLoading = _useQuery.isLoading,
      userError = _useQuery.error;

  var _useQuery2 = (0, _reactQuery.useQuery)([_constants.practitionerResourceType, resourceId], function () {
    return new _reactUtils.FHIRServiceClass(fhirBaseUrl, _constants.practitionerResourceType).list({
      identifier: resourceId
    }).then(function (res) {
      return (0, _reactUtils.getResourcesFromBundle)(res)[0];
    });
  }),
      practitioner = _useQuery2.data,
      practitionerIsLoading = _useQuery2.isLoading;

  var _useQuery3 = (0, _reactQuery.useQuery)([_constants.groupResourceType, resourceId], function () {
    return new _keycloakService.KeycloakService("".concat(_userManagement.KEYCLOAK_URL_USERS, "/").concat(resourceId).concat(_userManagement.KEYCLOAK_URL_USER_GROUPS), keycloakBaseUrl).list();
  }),
      userGroup = _useQuery3.data,
      userGroupIsLoading = _useQuery3.isLoading;

  var _useQuery4 = (0, _reactQuery.useQuery)([_constants.careTeamResourceType, resourceId], function () {
    var filters = {
      'participant:Practitioner': practitioner === null || practitioner === void 0 ? void 0 : practitioner.id
    };
    return (0, _reactUtils.loadAllResources)(fhirBaseUrl, _constants.careTeamResourceType, filters).then(function (res) {
      return (0, _reactUtils.getResourcesFromBundle)(res);
    });
  }, {
    enabled: !!practitioner
  }),
      careTeams = _useQuery4.data,
      careTeamsIsLoading = _useQuery4.isLoading;

  var _useQuery5 = (0, _reactQuery.useQuery)([_constants.practitionerRoleResourceType, resourceId], function () {
    return (0, _CreateEditUser.getPractitionerRole)(fhirBaseUrl, resourceId);
  }),
      practitionerRole = _useQuery5.data,
      practitionerRoleIsLoading = _useQuery5.isLoading;

  if (userIsLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner",
      "data-testid": "custom-spinner"
    });
  }

  if (userError && !user) {
    return _react["default"].createElement(_antd.Alert, {
      type: "error",
      message: "".concat(userError)
    });
  }

  var keycloakUserValues = (_keycloakUserValues = {}, (0, _defineProperty2["default"])(_keycloakUserValues, t('Keycloak UUID'), user.id), (0, _defineProperty2["default"])(_keycloakUserValues, "Username", user.username), _keycloakUserValues);
  var practitionerIdentifierObj = (0, _reactUtils.getObjLike)(practitioner === null || practitioner === void 0 ? void 0 : practitioner.identifier, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL);
  var practitionerKeyValues = (_practitionerKeyValue = {}, (0, _defineProperty2["default"])(_practitionerKeyValue, t('Practitioner ID'), practitioner === null || practitioner === void 0 ? void 0 : practitioner.id), (0, _defineProperty2["default"])(_practitionerKeyValue, t('Practitioner UUID'), (0, _lodash.get)(practitionerIdentifierObj, '0.value')), (0, _defineProperty2["default"])(_practitionerKeyValue, t('Practitioner status'), practitioner !== null && practitioner !== void 0 && practitioner.active ? t('active') : t('inactive')), _practitionerKeyValue);
  var careTeamKeyValues = (0, _defineProperty2["default"])({}, t('Linked care teams'), _react["default"].createElement("ul", {
    id: "practitioner-care-teams"
  }, (careTeams !== null && careTeams !== void 0 ? careTeams : []).map(function (careTeam) {
    return _react["default"].createElement("li", {
      key: careTeam.id
    }, careTeam.name);
  })));
  var keycloakUserGroupskeyVaues = (0, _defineProperty2["default"])({}, t('Keycloack User Groups'), _react["default"].createElement("ul", {
    id: "keycloak-user-groups"
  }, (userGroup !== null && userGroup !== void 0 ? userGroup : []).map(function (group) {
    return _react["default"].createElement("li", {
      key: group.id
    }, group.name);
  })));
  var practitionerRoleKeyValues = (0, _defineProperty2["default"])({}, t('User Type'), _react["default"].createElement("ul", {
    id: "user-type"
  }, ((_ref = practitionerRole ? [practitionerRole] : undefined) !== null && _ref !== void 0 ? _ref : []).map(function (role) {
    var userType;
    var userTypeCode = (0, _userManagement.getUserTypeCode)(role);

    if (userTypeCode) {
      userType = (0, _userManagement.getUserType)(userTypeCode);
    }

    return _react["default"].createElement("li", {
      key: role.id,
      "data-testid": "user-type"
    }, userType);
  })));
  return _react["default"].createElement(_antd.Space, {
    direction: "vertical"
  }, (0, _reactUtils.renderObjectAsKeyvalue)(keycloakUserValues), userGroupIsLoading ? _react["default"].createElement(_antd.Alert, {
    description: t('Fetching User Groups'),
    type: "info"
  }) : userGroup !== null && userGroup !== void 0 && userGroup.length ? (0, _reactUtils.renderObjectAsKeyvalue)(keycloakUserGroupskeyVaues) : _react["default"].createElement(_antd.Alert, {
    description: t('User is not assigned to any user groups'),
    type: "warning"
  }), practitionerIsLoading ? _react["default"].createElement(_antd.Alert, {
    description: t('Fetching linked practitioner'),
    type: "info"
  }) : practitioner ? (0, _reactUtils.renderObjectAsKeyvalue)(practitionerKeyValues) : _react["default"].createElement(_antd.Alert, {
    description: t('User does not have a linked practitioner'),
    type: "warning"
  }), practitionerRoleIsLoading ? _react["default"].createElement(_antd.Alert, {
    description: t('Fetching linked practitionerRole'),
    type: "info"
  }) : practitionerRole ? (0, _reactUtils.renderObjectAsKeyvalue)(practitionerRoleKeyValues) : _react["default"].createElement(_antd.Alert, {
    description: t('User has not been assigned a user type'),
    type: "warning"
  }), careTeamsIsLoading ? _react["default"].createElement(_antd.Alert, {
    description: t('Fetching linked care teams'),
    type: "info"
  }) : careTeams && careTeams.length > 0 ? (0, _reactUtils.renderObjectAsKeyvalue)(careTeamKeyValues) : _react["default"].createElement(_antd.Alert, {
    description: t('Practitioner is not assigned to a care team'),
    type: "warning"
  }));
};

exports.ViewDetails = ViewDetails;

var ViewDetailsWrapper = function ViewDetailsWrapper(props) {
  var resourceId = props.resourceId,
      fhirBaseUrl = props.fhirBaseUrl,
      keycloakBaseUrl = props.keycloakBaseUrl;

  var _useSearchParams = (0, _reactUtils.useSearchParams)(),
      removeParam = _useSearchParams.removeParam;

  if (!resourceId) {
    return null;
  }

  return _react["default"].createElement(_antd.Col, {
    className: "view-details-content"
  }, _react["default"].createElement("div", {
    className: "flex-right"
  }, _react["default"].createElement(_antd.Button, {
    "data-testid": "close-button",
    icon: _react["default"].createElement(_icons.CloseOutlined, null),
    shape: "circle",
    type: "text",
    onClick: function onClick() {
      return removeParam(_reactUtils.viewDetailsQuery);
    }
  })), _react["default"].createElement(ViewDetails, {
    resourceId: resourceId,
    fhirBaseUrl: fhirBaseUrl,
    keycloakBaseUrl: keycloakBaseUrl
  }));
};

exports.ViewDetailsWrapper = ViewDetailsWrapper;