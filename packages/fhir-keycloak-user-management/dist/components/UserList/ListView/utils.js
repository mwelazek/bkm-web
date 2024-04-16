"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadKeycloakResources = exports.deleteUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _keycloakService = require("@opensrp/keycloak-service/");

var _constants = require("../../../constants");

var _notifications = require("@opensrp/notifications");

var _userManagement = require("@opensrp/user-management");

var _reactUtils = require("@opensrp/react-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var deleteUser = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(keycloakBaseURL, baseUrl, userId, t) {
    var deleteKeycloakUser, practitionerServe, practsForThisUser, updatedPracts, groupsServe, groupsForThisUser, updatedGroups, practitionerRoleServe, practitionerRolesForThisUser, updatedPractitionerRoles;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            deleteKeycloakUser = new _keycloakService.KeycloakService("".concat(_userManagement.KEYCLOAK_URL_USERS, "/").concat(userId), keycloakBaseURL);
            practitionerServe = new _reactUtils.FHIRServiceClass(baseUrl, _constants.practitionerResourceType);
            _context.next = 4;
            return practitionerServe.list({
              identifier: userId
            }).then(function (res) {
              return (0, _reactUtils.getResourcesFromBundle)(res);
            });

          case 4:
            practsForThisUser = _context.sent;
            updatedPracts = practsForThisUser.map(function (obj) {
              return _objectSpread(_objectSpread({}, obj), {}, {
                active: false
              });
            });
            groupsServe = new _reactUtils.FHIRServiceClass(baseUrl, 'Group');
            _context.next = 9;
            return groupsServe.list({
              identifier: userId
            }).then(function (res) {
              return (0, _reactUtils.getResourcesFromBundle)(res);
            });

          case 9:
            groupsForThisUser = _context.sent;
            updatedGroups = groupsForThisUser.map(function (obj) {
              return _objectSpread(_objectSpread({}, obj), {}, {
                active: false
              });
            });
            practitionerRoleServe = new _reactUtils.FHIRServiceClass(baseUrl, _constants.practitionerRoleResourceType);
            _context.next = 14;
            return practitionerRoleServe.list({
              identifier: userId
            }).then(function (res) {
              return (0, _reactUtils.getResourcesFromBundle)(res);
            });

          case 14:
            practitionerRolesForThisUser = _context.sent;
            updatedPractitionerRoles = practitionerRolesForThisUser.map(function (obj) {
              return _objectSpread(_objectSpread({}, obj), {}, {
                active: false
              });
            });
            return _context.abrupt("return", Promise.allSettled([deleteKeycloakUser["delete"]()].concat((0, _toConsumableArray2["default"])(updatedPracts.map(function (obj) {
              return practitionerServe.update(obj);
            })), (0, _toConsumableArray2["default"])(updatedGroups.map(function (group) {
              return groupsServe.update(group);
            })), (0, _toConsumableArray2["default"])(updatedPractitionerRoles.map(function (obj) {
              return practitionerRoleServe.update(obj);
            })))).then(function () {
              (0, _notifications.sendSuccessNotification)(t('User deleted successfully'));
              (0, _notifications.sendSuccessNotification)(t('Practitioner deactivated'));
              (0, _notifications.sendSuccessNotification)(t('Group deactivated'));
              (0, _notifications.sendSuccessNotification)(t('Practitioner role deactivated'));
            })["catch"](function (error) {
              return (0, _notifications.sendErrorNotification)(error.message);
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteUser(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;

var loadKeycloakResources = function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(baseUrl, endpoint) {
    var params,
        count,
        search,
        paginationFilters,
        records,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
            _context2.next = 3;
            return new _keycloakService.KeycloakService("".concat(endpoint, "/").concat(_constants.keycloakCountEndpoint), baseUrl).list();

          case 3:
            count = _context2.sent;

            if (count) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", {
              total: count,
              records: []
            });

          case 6:
            search = params.search;
            paginationFilters = {
              max: count
            };

            if (search) {
              paginationFilters['search'] = search;
            }

            _context2.next = 11;
            return new _keycloakService.KeycloakService(endpoint, baseUrl).list(paginationFilters);

          case 11:
            records = _context2.sent;
            return _context2.abrupt("return", {
              total: count,
              records: records
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loadKeycloakResources(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loadKeycloakResources = loadKeycloakResources;