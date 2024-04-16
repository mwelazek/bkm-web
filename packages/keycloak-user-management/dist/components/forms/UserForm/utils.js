"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userGroupOptionsFilter = exports.submitForm = exports.postPutPractitioner = exports.getUserTypeCode = exports.getUserType = exports.getUserGroupsOptions = exports.getUserAndGroupsPayload = exports.getFormValues = exports.getCompositionOptions = exports.createOrEditPractitioners = exports.compositionUrlFilter = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _connectedReducerRegistry = require("@onaio/connected-reducer-registry");

var _uuid = require("uuid");

var _keycloakService = require("@opensrp/keycloak-service");

var _notifications = require("@opensrp/notifications");

var _constants = require("../../../constants");

var _reactUtils = require("@opensrp/react-utils");

var _2 = require(".");

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getUserId = function getUserId(response) {
  var _response$headers$get;

  var locationStr = (_response$headers$get = response.headers.get('location')) === null || _response$headers$get === void 0 ? void 0 : _response$headers$get.split('/');
  var newUUID = locationStr[locationStr.length - 1];
  return newUUID;
};

var createOrEditPractitioners = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(baseURL, payload) {
    var isEditMode,
        t,
        practitionersService,
        requestType,
        successMessage,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isEditMode = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
            t = _args.length > 3 ? _args[3] : undefined;
            practitionersService = new _reactUtils.OpenSRPService(_constants.PRACTITIONER, baseURL);
            requestType = 'create';
            successMessage = t('Practitioner created successfully');

            if (isEditMode) {
              requestType = 'update';
              successMessage = t('Practitioner updated successfully');
            }

            _context.next = 8;
            return practitionersService[requestType](payload)["catch"](function (_) {
              if (isEditMode) {
                (0, _notifications.sendErrorNotification)(t('There was a problem updating practitioner'));
              } else {
                (0, _notifications.sendErrorNotification)(t('There was a problem creating practitioner'));
              }
            }).then(function () {
              return (0, _notifications.sendSuccessNotification)(successMessage);
            });

          case 8:
            if (!isEditMode) {
              _connectedReducerRegistry.history.push("".concat(_constants.URL_USER_CREDENTIALS, "/").concat(payload.userId, "/").concat(payload.username));
            }

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createOrEditPractitioners(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createOrEditPractitioners = createOrEditPractitioners;

var createEditKeycloakUser = function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(keycloakBaseURL, keycloakUserPayload, isEditMode, updateGroupsAndPractitionerCallback, t) {
    var serve, _serve;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!isEditMode) {
              _context2.next = 5;
              break;
            }

            serve = new _keycloakService.KeycloakService("".concat(_constants.KEYCLOAK_URL_USERS, "/").concat(keycloakUserPayload.id), keycloakBaseURL);
            return _context2.abrupt("return", serve.update(keycloakUserPayload).then(function () {
              (0, _notifications.sendSuccessNotification)(t('User edited successfully'));
              updateGroupsAndPractitionerCallback(keycloakUserPayload.id)["catch"](function () {
                return (0, _notifications.sendErrorNotification)(t('There was a problem updating groups and practitioners'));
              });
            })["catch"](function (error) {
              throw error;
            }));

          case 5:
            _serve = new _keycloakService.KeycloakService(_constants.KEYCLOAK_URL_USERS, keycloakBaseURL);
            return _context2.abrupt("return", _serve.create(keycloakUserPayload).then(function (res) {
              (0, _notifications.sendSuccessNotification)(t('User created successfully'));
              var keycloakUserId = getUserId(res);
              updateGroupsAndPractitionerCallback(keycloakUserId)["catch"](function () {
                return (0, _notifications.sendErrorNotification)(t('There was a problem creating group and practitioner'));
              });
            })["catch"](function (error) {
              throw error;
            }));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createEditKeycloakUser(_x3, _x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

var submitForm = function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(values, keycloakBaseURL, allUserGroups, previousUserGroupIds, practitionerUpdater, t) {
    var _getUserAndGroupsPayl, isEditMode, keycloakUser, updateGroupsAndPractitioner;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _getUserAndGroupsPayl = getUserAndGroupsPayload(values), isEditMode = _getUserAndGroupsPayl.isEditMode, keycloakUser = _getUserAndGroupsPayl.keycloakUser;

            updateGroupsAndPractitioner = function () {
              var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(keycloakUserId) {
                var promises;
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        promises = [];
                        promises.push(practitionerUpdater(values, keycloakUserId, t));

                        if (values.userGroups) {
                          values.userGroups.forEach(function (groupId) {
                            var userGroupValue = allUserGroups.find(function (group) {
                              return group.id === groupId;
                            });
                            var serve = new _keycloakService.KeycloakService("".concat(_constants.KEYCLOAK_URL_USERS, "/").concat(keycloakUserId).concat(_constants.KEYCLOAK_URL_USER_GROUPS, "/").concat(groupId), keycloakBaseURL);
                            var promise = serve.update(userGroupValue);
                            promises.push(promise);
                          });
                        }

                        if (previousUserGroupIds) {
                          previousUserGroupIds.forEach(function (groupId) {
                            var _values$userGroups;

                            if (!((_values$userGroups = values.userGroups) !== null && _values$userGroups !== void 0 && _values$userGroups.includes(groupId))) {
                              var serve = new _keycloakService.KeycloakService("".concat(_constants.KEYCLOAK_URL_USERS, "/").concat(keycloakUserId).concat(_constants.KEYCLOAK_URL_USER_GROUPS, "/").concat(groupId), keycloakBaseURL);
                              var promise = serve["delete"]();
                              promises.push(promise);
                            }
                          });
                        }

                        _context3.next = 6;
                        return Promise.allSettled(promises)["catch"](function (error) {
                          throw error;
                        }).then(function () {
                          (0, _notifications.sendSuccessNotification)(t('User Group edited successfully'));
                        });

                      case 6:
                        return _context3.abrupt("return", _context3.sent);

                      case 7:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function updateGroupsAndPractitioner(_x14) {
                return _ref4.apply(this, arguments);
              };
            }();

            _context4.next = 4;
            return createEditKeycloakUser(keycloakBaseURL, keycloakUser, isEditMode, updateGroupsAndPractitioner, t)["catch"](function () {
              if (isEditMode) {
                (0, _notifications.sendErrorNotification)(t('There was a problem updating the user profile'));
              } else {
                (0, _notifications.sendErrorNotification)(t('There was a problem creating the user'));
              }
            });

          case 4:
            if (isEditMode) {
              _connectedReducerRegistry.history.push(_constants.URL_USER);
            }

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function submitForm(_x8, _x9, _x10, _x11, _x12, _x13) {
    return _ref3.apply(this, arguments);
  };
}();

exports.submitForm = submitForm;

var getUserTypeCode = function getUserTypeCode(role) {
  var _role$code;

  return (_role$code = role.code) === null || _role$code === void 0 ? void 0 : _role$code.flatMap(function (code) {
    var _code$coding;

    return (_code$coding = code.coding) === null || _code$coding === void 0 ? void 0 : _code$coding.map(function (coding) {
      return coding.code;
    });
  }).find(function (code) {
    return code === _constants.SUPERVISOR_USER_TYPE_CODE || code === _constants.PRACTITIONER_USER_TYPE_CODE;
  });
};

exports.getUserTypeCode = getUserTypeCode;

var getUserType = function getUserType(userTypeCode) {
  switch (userTypeCode) {
    case _constants.PRACTITIONER_USER_TYPE_CODE:
      return _constants.PRACTITIONER;

    case _constants.SUPERVISOR_USER_TYPE_CODE:
      return _constants.SUPERVISOR;
  }
};

exports.getUserType = getUserType;

var getFormValues = function getFormValues(keycloakUser, practitioner, userGroups, practitionerRole) {
  var _keycloakUser$attribu;

  if (!keycloakUser) {
    return _2.defaultUserFormInitialValues;
  }

  var id = keycloakUser.id,
      username = keycloakUser.username,
      firstName = keycloakUser.firstName,
      lastName = keycloakUser.lastName,
      email = keycloakUser.email,
      enabled = keycloakUser.enabled;

  var _ref5 = (_keycloakUser$attribu = keycloakUser.attributes) !== null && _keycloakUser$attribu !== void 0 ? _keycloakUser$attribu : {},
      contacts = _ref5.contact,
      fhirCoreAppId = _ref5.fhir_core_app_id;

  var _ref6 = practitioner !== null && practitioner !== void 0 ? practitioner : {},
      active = _ref6.active;

  var userType = 'practitioner';

  if (practitionerRole) {
    var userTypeCode = getUserTypeCode(practitionerRole);

    if (userTypeCode) {
      userType = getUserType(userTypeCode);
    }
  }

  return {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: username,
    enabled: enabled,
    contact: contacts === null || contacts === void 0 ? void 0 : contacts[0],
    active: active,
    userType: userType,
    practitioner: practitioner,
    userGroups: userGroups === null || userGroups === void 0 ? void 0 : userGroups.map(function (tag) {
      return tag.id;
    }),
    keycloakUser: keycloakUser,
    practitionerRole: practitionerRole,
    fhirCoreAppId: fhirCoreAppId === null || fhirCoreAppId === void 0 ? void 0 : fhirCoreAppId[0]
  };
};

exports.getFormValues = getFormValues;

var getUserAndGroupsPayload = function getUserAndGroupsPayload(values) {
  var _values$keycloakUser, _values$userGroups2;

  var isEditMode = !!values.id;
  var id = values.id,
      username = values.username,
      firstName = values.firstName,
      lastName = values.lastName,
      email = values.email,
      enabled = values.enabled,
      contact = values.contact,
      fhirCoreAppId = values.fhirCoreAppId;

  var preUserAttributes = _objectSpread(_objectSpread({}, contact ? {
    contact: [contact]
  } : {}), fhirCoreAppId ? {
    fhir_core_app_id: [fhirCoreAppId]
  } : {});

  var cleanedAttributes = (0, _lodash.pickBy)(preUserAttributes, function (value) {
    return value !== undefined && value !== null;
  });

  var keycloakUser = _objectSpread(_objectSpread(_objectSpread({}, (_values$keycloakUser = values.keycloakUser) !== null && _values$keycloakUser !== void 0 ? _values$keycloakUser : {}), {}, {
    firstName: firstName,
    id: isEditMode ? id : '',
    lastName: lastName,
    username: username
  }, email ? {
    email: email
  } : {}), {}, {
    enabled: enabled
  }, (0, _lodash.some)(cleanedAttributes) ? {
    attributes: cleanedAttributes
  } : {});

  return {
    isEditMode: isEditMode,
    keycloakUser: keycloakUser,
    userGroups: (_values$userGroups2 = values.userGroups) !== null && _values$userGroups2 !== void 0 ? _values$userGroups2 : []
  };
};

exports.getUserAndGroupsPayload = getUserAndGroupsPayload;

var getUserGroupsOptions = function getUserGroupsOptions(userGroups) {
  return userGroups.map(function (userGroup) {
    return {
      value: userGroup.id,
      label: userGroup.name
    };
  });
};

exports.getUserGroupsOptions = getUserGroupsOptions;

var userGroupOptionsFilter = function userGroupOptionsFilter(inputValue, option) {
  return !!(option !== null && option !== void 0 && option.label.toLowerCase().includes(inputValue.toLowerCase()));
};

exports.userGroupOptionsFilter = userGroupOptionsFilter;

var postPutPractitioner = function postPutPractitioner(baseUrl) {
  return function (values, userId, t) {
    var _values$practitioner;

    var id = values.id,
        username = values.username,
        firstName = values.firstName,
        lastName = values.lastName,
        enabled = values.enabled,
        active = values.active;
    var practitionerId = (0, _uuid.v4)();
    var practitioner = {
      active: true,
      identifier: practitionerId,
      name: "".concat(firstName, " ").concat(lastName),
      userId: userId,
      username: username
    };
    var practitionerActive = enabled === false ? false : active === undefined ? false : active;
    var practObj = values.practitioner;

    if (practObj !== null && practObj !== void 0 && practObj.identifier) {
      practitioner = _objectSpread(_objectSpread({}, practObj), {}, {
        active: practitionerActive,
        name: "".concat(firstName, " ").concat(lastName),
        userId: id,
        username: username
      });
    }

    var practitionerIsEditMode = !!((_values$practitioner = values.practitioner) !== null && _values$practitioner !== void 0 && _values$practitioner.identifier);
    return createOrEditPractitioners(baseUrl, practitioner, practitionerIsEditMode, t);
  };
};

exports.postPutPractitioner = postPutPractitioner;

var getCompositionOptions = function getCompositionOptions(composition) {
  var title = composition.title,
      identifier = composition.identifier;
  if (!identifier) return;
  var value = identifier.value;
  return {
    label: "".concat(title, "(").concat(value, ")"),
    value: value,
    ref: composition
  };
};

exports.getCompositionOptions = getCompositionOptions;
var compositionUrlFilter = {
  type: "".concat(_constants.SNOMED_CODEABLE_SYSTEM, "|").concat(_constants.DEVICE_SETTING_CODEABLE_CODE),
  _elements: 'identifier,title'
};
exports.compositionUrlFilter = compositionUrlFilter;