"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitForm = exports.removeAssignedRoles = exports.fetchSingleGroup = exports.fetchRoleMappings = exports.assignRoles = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _connectedReducerRegistry = require("@onaio/connected-reducer-registry");

var _keycloakService = require("@opensrp/keycloak-service");

var _notifications = require("@opensrp/notifications");

var _constants = require("../../constants");

var _userGroups = require("../../ducks/userGroups");

var fetchRoleMappings = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(groupId, keycloakBaseURL, roleMappingEndpoint, setRolesAction, t) {
    var keycloakService;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            keycloakService = new _keycloakService.KeycloakService("".concat(_constants.KEYCLOAK_URL_USER_GROUPS, "/").concat(groupId).concat(roleMappingEndpoint), keycloakBaseURL);
            _context.next = 3;
            return keycloakService.list().then(function (response) {
              setRolesAction(response);
            })["catch"](function (_) {
              (0, _notifications.sendErrorNotification)(t('There was a problem fetching role mappings'));
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchRoleMappings(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchRoleMappings = fetchRoleMappings;

var removeAssignedRoles = function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(groupId, keycloakBaseURL, allRoles, rolesToRemove, t) {
    var data, keycloakService;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = [];
            rolesToRemove.forEach(function (roleId) {
              var roleObj = allRoles.find(function (role) {
                return role.id === roleId;
              });
              data.push(roleObj);
            });
            keycloakService = new _keycloakService.KeycloakService("".concat(_constants.KEYCLOAK_URL_USER_GROUPS, "/").concat(groupId).concat(_constants.KEYCLOAK_URL_ASSIGNED_ROLES), keycloakBaseURL);
            _context2.next = 5;
            return keycloakService.update(data, null, 'DELETE').then(function () {
              (0, _notifications.sendSuccessNotification)(t('Role Mappings Updated Successfully'));
            })["catch"](function (_) {
              (0, _notifications.sendErrorNotification)(t('There was a problem removing assigned roles'));
            });

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function removeAssignedRoles(_x6, _x7, _x8, _x9, _x10) {
    return _ref2.apply(this, arguments);
  };
}();

exports.removeAssignedRoles = removeAssignedRoles;

var assignRoles = function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(groupId, keycloakBaseURL, allRoles, rolesToAdd, t) {
    var data, keycloakService;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = [];
            rolesToAdd.forEach(function (roleId) {
              var roleObj = allRoles.find(function (role) {
                return role.id === roleId;
              });
              data.push(roleObj);
            });
            keycloakService = new _keycloakService.KeycloakService("".concat(_constants.KEYCLOAK_URL_USER_GROUPS, "/").concat(groupId).concat(_constants.KEYCLOAK_URL_ASSIGNED_ROLES), keycloakBaseURL);
            _context3.next = 5;
            return keycloakService.create(data).then(function () {
              (0, _notifications.sendSuccessNotification)(t('Role Mappings Updated Successfully'));
            })["catch"](function (_) {
              (0, _notifications.sendErrorNotification)(t('There was a problem assigning roles'));
            });

          case 5:
            return _context3.abrupt("return", _context3.sent);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function assignRoles(_x11, _x12, _x13, _x14, _x15) {
    return _ref3.apply(this, arguments);
  };
}();

exports.assignRoles = assignRoles;

var fetchSingleGroup = function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(groupId, keycloakBaseURL, dispatch, t) {
    var keycloakService;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            keycloakService = new _keycloakService.KeycloakService(_constants.KEYCLOAK_URL_USER_GROUPS, keycloakBaseURL);
            _context4.next = 3;
            return keycloakService.read(groupId).then(function (response) {
              dispatch((0, _userGroups.fetchKeycloakUserGroups)([response]));
            })["catch"](function (_) {
              (0, _notifications.sendErrorNotification)(t('There was a problem fetching User Group'));
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchSingleGroup(_x16, _x17, _x18, _x19) {
    return _ref4.apply(this, arguments);
  };
}();

exports.fetchSingleGroup = fetchSingleGroup;

var submitForm = function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(values, keycloakBaseURL, setSubmittingCallback, t) {
    var serve, newUUID, _serve;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (values.id) {
              serve = new _keycloakService.KeycloakService("".concat(_constants.KEYCLOAK_URL_USER_GROUPS, "/").concat(values.id), keycloakBaseURL);
              serve.update(values).then(function () {
                return (0, _notifications.sendSuccessNotification)(t('User Group edited successfully'));
              })["catch"](function (_) {
                return (0, _notifications.sendErrorNotification)(t('There was a problem editing User Group'));
              })["finally"](function () {
                _connectedReducerRegistry.history.push(_constants.URL_USER_GROUPS);

                setSubmittingCallback(false);
              });
            } else {
              _serve = new _keycloakService.KeycloakService(_constants.KEYCLOAK_URL_USER_GROUPS, keycloakBaseURL);

              _serve.create({
                name: values.name
              }).then(function (res) {
                var _res$headers$get;

                var locationStr = (_res$headers$get = res.headers.get('location')) === null || _res$headers$get === void 0 ? void 0 : _res$headers$get.split('/');
                newUUID = locationStr[locationStr.length - 1];
                (0, _notifications.sendSuccessNotification)(t('User Group created successfully'));
              })["catch"](function (_) {
                return (0, _notifications.sendErrorNotification)(t('There was a problem creating User Group'));
              })["finally"](function () {
                setSubmittingCallback(false);

                if (newUUID) {
                  _connectedReducerRegistry.history.push("".concat(_constants.URL_USER_GROUP_EDIT, "/").concat(newUUID));
                }
              });
            }

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function submitForm(_x20, _x21, _x22, _x23) {
    return _ref5.apply(this, arguments);
  };
}();

exports.submitForm = submitForm;