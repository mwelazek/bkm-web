"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.defaultErrorCallback = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serverService = require("@opensrp/server-service");

var defaultErrorCallback = function defaultErrorCallback() {
  return;
};

exports.defaultErrorCallback = defaultErrorCallback;

var logout = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(payload, keycloakLogoutUri, redirectUri, opensrpLogoutUri, idTokenHint) {
    var filterParams, fullKeycloakLogoutUri, opensrpOptionalLogout;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            filterParams = {};

            if (idTokenHint) {
              filterParams = {
                id_token_hint: idTokenHint,
                post_logout_redirect_uri: redirectUri
              };
            }

            fullKeycloakLogoutUri = _serverService.OpenSRPService.getURL(keycloakLogoutUri, filterParams);

            opensrpOptionalLogout = function () {
              var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (opensrpLogoutUri) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return");

                      case 2:
                        _context.next = 4;
                        return (0, _serverService.customFetch)(opensrpLogoutUri, payload);

                      case 4:
                        return _context.abrupt("return", _context.sent);

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function opensrpOptionalLogout() {
                return _ref2.apply(this, arguments);
              };
            }();

            opensrpOptionalLogout().then(function () {
              window.location.href = fullKeycloakLogoutUri;
            })["catch"](function (error) {
              throw error;
            });
            return _context2.abrupt("return", null);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function logout(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

exports.logout = logout;