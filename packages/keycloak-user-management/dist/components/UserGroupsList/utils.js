"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGroupMembers = exports.loadGroupDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _keycloakService = require("@opensrp/keycloak-service");

var _constants = require("../../constants");

var loadGroupMembers = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(groupId, baseURL) {
    var serve;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            serve = new _keycloakService.KeycloakService("".concat(_constants.KEYCLOAK_URL_USER_GROUPS, "/").concat(groupId, "/members"), baseURL);
            _context.next = 3;
            return serve.list().then(function (response) {
              return response;
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

  return function loadGroupMembers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.loadGroupMembers = loadGroupMembers;

var loadGroupDetails = function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(groupId, baseURL) {
    var serve;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            serve = new _keycloakService.KeycloakService(_constants.KEYCLOAK_URL_USER_GROUPS, baseURL);
            _context2.next = 3;
            return serve.read(groupId).then(function (response) {
              return response;
            });

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loadGroupDetails(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loadGroupDetails = loadGroupDetails;