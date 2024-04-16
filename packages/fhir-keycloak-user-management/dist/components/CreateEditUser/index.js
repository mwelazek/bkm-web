"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateEditUser = CreateEditUser;
exports.practitionerUpdater = exports.getPractitionerRole = exports.getPractitioner = exports.getGroup = exports.createEditPractitionerRoleResource = exports.createEditGroupResource = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userManagement = require("@opensrp/user-management");

var _constants = require("../../constants");

var _reactUtils = require("@opensrp/react-utils");

var _react = _interopRequireDefault(require("react"));

var _uuid = require("uuid");

var _notifications = require("@opensrp/notifications");

var _connectedReducerRegistry = require("@onaio/connected-reducer-registry");

var _fhirTeamManagement = require("@opensrp/fhir-team-management");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getPractitioner = function getPractitioner(baseUrl, userId) {
  var serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.practitionerResourceType);
  return serve.list({
    identifier: userId
  }).then(function (res) {
    return (0, _reactUtils.getResourcesFromBundle)(res)[0];
  });
};

exports.getPractitioner = getPractitioner;

var getGroup = function getGroup(baseUrl, userId) {
  var serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.groupResourceType);
  return serve.list({
    identifier: userId
  }).then(function (res) {
    return (0, _reactUtils.getResourcesFromBundle)(res)[0];
  });
};

exports.getGroup = getGroup;

var getPractitionerRole = function getPractitionerRole(baseUrl, userId) {
  var serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.practitionerRoleResourceType);
  return serve.list({
    identifier: userId
  }).then(function (res) {
    return (0, _reactUtils.getResourcesFromBundle)(res)[0];
  });
};

exports.getPractitionerRole = getPractitionerRole;

var createEditGroupResource = function createEditGroupResource(keycloakUserEnabled, keycloakID, keycloakUserName, practitionerID, baseUrl, existingGroupID) {
  var newGroupResourceID = (0, _uuid.v4)();
  var payload = {
    resourceType: _constants.groupResourceType,
    id: existingGroupID !== null && existingGroupID !== void 0 ? existingGroupID : newGroupResourceID,
    identifier: [{
      use: _reactUtils.IdentifierUseCodes.OFFICIAL,
      value: existingGroupID !== null && existingGroupID !== void 0 ? existingGroupID : newGroupResourceID
    }, {
      use: _reactUtils.IdentifierUseCodes.SECONDARY,
      value: keycloakID
    }],
    active: keycloakUserEnabled,
    type: 'practitioner',
    actual: true,
    code: {
      coding: [{
        system: 'http://snomed.info/sct',
        code: _userManagement.PRACTITIONER_USER_TYPE_CODE,
        display: 'Assigned practitioner'
      }]
    },
    name: keycloakUserName,
    member: [{
      entity: {
        reference: "Practitioner/".concat(practitionerID)
      }
    }]
  };
  var serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.groupResourceType);
  return serve.update(payload);
};

exports.createEditGroupResource = createEditGroupResource;

var createEditPractitionerRoleResource = function createEditPractitionerRoleResource(userType, keycloakID, keycloakUserEnabled, practitionerID, practitionerName, baseUrl, existingPractitionerRoleID) {
  var newPractitionerRoleResourceID = (0, _uuid.v4)();
  var practitionerRoleResourceCode = [{
    coding: [{
      system: 'http://snomed.info/sct',
      code: _userManagement.PRACTITIONER_USER_TYPE_CODE,
      display: 'Assigned practitioner'
    }]
  }];

  if (userType === 'supervisor') {
    practitionerRoleResourceCode = [{
      coding: [{
        system: 'http://snomed.info/sct',
        code: _userManagement.SUPERVISOR_USER_TYPE_CODE,
        display: 'Supervisor (occupation)'
      }]
    }];
  }

  var practitionerDisplayName = (0, _reactUtils.getObjLike)(practitionerName, 'use', _fhirTeamManagement.HumanNameUseCodes.OFFICIAL, true)[0];
  var payload = {
    resourceType: _constants.practitionerRoleResourceType,
    id: existingPractitionerRoleID !== null && existingPractitionerRoleID !== void 0 ? existingPractitionerRoleID : newPractitionerRoleResourceID,
    identifier: [{
      use: _reactUtils.IdentifierUseCodes.OFFICIAL,
      value: existingPractitionerRoleID !== null && existingPractitionerRoleID !== void 0 ? existingPractitionerRoleID : newPractitionerRoleResourceID
    }, {
      use: _reactUtils.IdentifierUseCodes.SECONDARY,
      value: keycloakID
    }],
    active: keycloakUserEnabled,
    practitioner: {
      reference: "Practitioner/".concat(practitionerID),
      display: (0, _reactUtils.parseFhirHumanName)(practitionerDisplayName)
    },
    code: practitionerRoleResourceCode
  };
  var serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.practitionerRoleResourceType);
  return serve.update(payload);
};

exports.createEditPractitionerRoleResource = createEditPractitionerRoleResource;

var practitionerUpdater = function practitionerUpdater(baseUrl) {
  return function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(values, userId) {
      var _values$enabled;

      var t,
          isEditMode,
          group,
          practitionerSuccessMessage,
          practitionerErrorMessage,
          groupSuccessMessage,
          groupErrorMessage,
          practitionerRoleSuccessMessage,
          practitionerRoleErrorMessage,
          officialIdentifier,
          secondaryIdentifier,
          currentIdentifiers,
          payload,
          serve,
          _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              t = _args.length > 2 && _args[2] !== undefined ? _args[2] : function (str) {
                return str;
              };
              isEditMode = !!values.practitioner;

              if (!isEditMode) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return getGroup(baseUrl, userId);

            case 5:
              group = _context.sent;

            case 6:
              practitionerSuccessMessage = isEditMode ? t('Practitioner updated successfully') : t('Practitioner created successfully');
              practitionerErrorMessage = isEditMode ? t('Failed to update practitioner') : t('Failed to create practitioner');
              groupSuccessMessage = group ? t('Group resource updated successfully') : t('Group resource created successfully');
              groupErrorMessage = group ? t('Failed to update group resource') : t('Failed to create group resource');
              practitionerRoleSuccessMessage = isEditMode ? t('PractitionerRole updated successfully') : t('PractitionerRole created successfully');
              practitionerRoleErrorMessage = isEditMode ? t('Failed to update practitionerRole') : t('Failed to create practitionerRole');

              if (values.practitioner) {
                currentIdentifiers = values.practitioner.identifier;
                officialIdentifier = (0, _reactUtils.getObjLike)(currentIdentifiers, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL)[0];
                secondaryIdentifier = (0, _reactUtils.getObjLike)(currentIdentifiers, 'use', _reactUtils.IdentifierUseCodes.SECONDARY)[0];
              }

              if (!officialIdentifier) {
                officialIdentifier = {
                  use: _reactUtils.IdentifierUseCodes.OFFICIAL,
                  value: (0, _uuid.v4)()
                };
              }

              if (!secondaryIdentifier) {
                secondaryIdentifier = {
                  use: _reactUtils.IdentifierUseCodes.SECONDARY,
                  value: userId
                };
              }

              payload = {
                resourceType: _constants.practitionerResourceType,
                id: officialIdentifier.value,
                identifier: [officialIdentifier, secondaryIdentifier],
                active: (_values$enabled = values.enabled) !== null && _values$enabled !== void 0 ? _values$enabled : false,
                name: [{
                  use: _reactUtils.IdentifierUseCodes.OFFICIAL,
                  family: values.lastName,
                  given: [values.firstName, '']
                }],
                telecom: [{
                  system: 'email',
                  value: values.email
                }]
              };
              serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.practitionerResourceType);
              return _context.abrupt("return", serve.update(payload).then(function (res) {
                (0, _notifications.sendSuccessNotification)(practitionerSuccessMessage);
                return res;
              }).then(function (res) {
                var _res$identifier$find$, _res$identifier, _res$identifier$find, _values$enabled2, _group, _values$enabled3, _res$name, _values$practitionerR;

                var practitionerID = (_res$identifier$find$ = (_res$identifier = res.identifier) === null || _res$identifier === void 0 ? void 0 : (_res$identifier$find = _res$identifier.find(function (identifier) {
                  return identifier.use === 'official';
                })) === null || _res$identifier$find === void 0 ? void 0 : _res$identifier$find.value) !== null && _res$identifier$find$ !== void 0 ? _res$identifier$find$ : payload.id;
                createEditGroupResource((_values$enabled2 = values.enabled) !== null && _values$enabled2 !== void 0 ? _values$enabled2 : false, userId, "".concat(values.firstName, " ").concat(values.lastName), practitionerID !== null && practitionerID !== void 0 ? practitionerID : '', baseUrl, (_group = group) === null || _group === void 0 ? void 0 : _group.id).then(function () {
                  return (0, _notifications.sendSuccessNotification)(groupSuccessMessage);
                })["catch"](function () {
                  return (0, _notifications.sendErrorNotification)(groupErrorMessage);
                });
                createEditPractitionerRoleResource(values.userType, userId, (_values$enabled3 = values.enabled) !== null && _values$enabled3 !== void 0 ? _values$enabled3 : false, practitionerID !== null && practitionerID !== void 0 ? practitionerID : '', (_res$name = res.name) !== null && _res$name !== void 0 ? _res$name : [], baseUrl, (_values$practitionerR = values.practitionerRole) === null || _values$practitionerR === void 0 ? void 0 : _values$practitionerR.id).then(function () {
                  return (0, _notifications.sendSuccessNotification)(practitionerRoleSuccessMessage);
                })["catch"](function () {
                  return (0, _notifications.sendErrorNotification)(practitionerRoleErrorMessage);
                });
              })["catch"](function () {
                return (0, _notifications.sendErrorNotification)(practitionerErrorMessage);
              })["finally"](function () {
                if (!isEditMode) {
                  _connectedReducerRegistry.history.push("".concat(_userManagement.URL_USER_CREDENTIALS, "/").concat(userId, "/").concat(values.username));
                }
              }));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.practitionerUpdater = practitionerUpdater;

function CreateEditUser(props) {
  var baseCompProps = _objectSpread(_objectSpread({}, props), {}, {
    getPractitionerFun: getPractitioner,
    getPractitionerRoleFun: getPractitionerRole,
    postPutPractitionerFactory: practitionerUpdater
  });

  return _react["default"].createElement(_userManagement.ConnectedCreateEditUser, baseCompProps);
}