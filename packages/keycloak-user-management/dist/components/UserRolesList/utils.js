"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAllRoles = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _notifications = require("@opensrp/notifications");

var _keycloakService = require("@opensrp/keycloak-service");

var _constants = require("../../constants");

var _userRoles = require("../../ducks/userRoles");

var fetchAllRoles = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(keycloakBaseURL, dispatch, t) {
    var keycloakService;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            keycloakService = new _keycloakService.KeycloakService(_constants.KEYCLOAK_URL_USER_ROLES, keycloakBaseURL);
            _context.next = 3;
            return keycloakService.list().then(function (response) {
              dispatch((0, _userRoles.fetchKeycloakUserRoles)(response));
            })["catch"](function (_) {
              (0, _notifications.sendErrorNotification)(t('There was a problem fetching realm roles'));
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchAllRoles(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchAllRoles = fetchAllRoles;