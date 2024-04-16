"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _keycloakService = require("@opensrp/keycloak-service");

var _reactUtils = require("@opensrp/react-utils");

var _notifications = require("@opensrp/notifications");

var _constants = require("../../../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var deleteUser = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(removeKeycloakUsersCreator, keycloakBaseURL, opensrpBaseURL, userId, t) {
    var practitioner, serviceDelete;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getPractitionerByUserId(_constants.OPENSRP_CREATE_PRACTITIONER_ENDPOINT, userId, opensrpBaseURL)["catch"](function () {
              (0, _notifications.sendErrorNotification)(t('There was a problem fetching practitioner'));
              return undefined;
            });

          case 2:
            practitioner = _context.sent;

            if (practitioner) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            serviceDelete = new _keycloakService.KeycloakService("".concat(_constants.KEYCLOAK_URL_USERS, "/").concat(userId), keycloakBaseURL);
            return _context.abrupt("return", Promise.all([serviceDelete["delete"](), unassignAndDeactivatePractitioner(_constants.DELETE_PRACTITIONER_ROLE, _constants.PRACTITIONER, practitioner, opensrpBaseURL)]).then(function () {
              removeKeycloakUsersCreator();
              (0, _notifications.sendSuccessNotification)(t('User deleted successfully'));
              (0, _notifications.sendSuccessNotification)(t('Practitioner unassigned successfully'));
              (0, _notifications.sendSuccessNotification)(t('Practitioner deactivated successfully'));
            })["catch"](function (_) {
              (0, _notifications.sendErrorNotification)(t('There was a problem deleting User and Practitioner'));
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteUser(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;

function getPractitionerByUserId(_x6, _x7, _x8) {
  return _getPractitionerByUserId.apply(this, arguments);
}

function _getPractitionerByUserId() {
  _getPractitionerByUserId = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(practitionerEndpoint, userId, opensrpBaseURL) {
    var openSrpService, practitioner;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            openSrpService = new _reactUtils.OpenSRPService(practitionerEndpoint + '/' + userId, opensrpBaseURL);
            _context2.next = 3;
            return openSrpService.list();

          case 3:
            practitioner = _context2.sent;
            return _context2.abrupt("return", practitioner);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPractitionerByUserId.apply(this, arguments);
}

function unassignAndDeactivatePractitioner(_x9, _x10, _x11, _x12) {
  return _unassignAndDeactivatePractitioner.apply(this, arguments);
}

function _unassignAndDeactivatePractitioner() {
  _unassignAndDeactivatePractitioner = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(deletePractitionerRoleEndpoint, deactivatePractitionerEndpoint, practitioner, opensrpBaseURL) {
    var openSrpDeletePractitionerRole, openSrpDeactivatePractitioner;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            openSrpDeletePractitionerRole = new _reactUtils.OpenSRPService("".concat(deletePractitionerRoleEndpoint).concat(practitioner.identifier), opensrpBaseURL);
            openSrpDeactivatePractitioner = new _reactUtils.OpenSRPService(deactivatePractitionerEndpoint, opensrpBaseURL);
            return _context3.abrupt("return", Promise.all([openSrpDeletePractitionerRole["delete"](), openSrpDeactivatePractitioner.update(_objectSpread(_objectSpread({}, practitioner), {}, {
              active: false
            }))]));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _unassignAndDeactivatePractitioner.apply(this, arguments);
}