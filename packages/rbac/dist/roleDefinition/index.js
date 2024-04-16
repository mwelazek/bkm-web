"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRole = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../helpers/utils");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var UserRole = function () {
  function UserRole() {
    var resource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var verb = arguments.length > 1 ? arguments[1] : undefined;
    (0, _classCallCheck2["default"])(this, UserRole);
    (0, _defineProperty2["default"])(this, "permissions", void 0);
    var newMap = new Map();

    if (!verb) {
      this.permissions = newMap;
      return;
    }

    var resources = (0, _utils.makeArray)(resource);

    var _iterator = _createForOfIteratorHelper(resources),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        newMap.set(type, verb);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.permissions = newMap;
  }

  (0, _createClass2["default"])(UserRole, [{
    key: "getPermissionMap",
    value: function getPermissionMap() {
      return this.permissions;
    }
  }, {
    key: "hasRoles",
    value: function hasRoles(roles) {
      var toCheckRoles = (0, _utils.makeArray)(roles);

      var _iterator2 = _createForOfIteratorHelper(toCheckRoles),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var role = _step2.value;

          var _iterator3 = _createForOfIteratorHelper(role.permissions.entries()),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = (0, _slicedToArray2["default"])(_step3.value, 2),
                  key = _step3$value[0],
                  value = _step3$value[1];

              if (!this.permissions.has(key)) {
                return false;
              }

              if (this.permissions.get(key) && value === 0) {
                return false;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return true;
    }
  }, {
    key: "hasPermissions",
    value: function hasPermissions(permissions) {
      var _this = this;

      var strategy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
      var permAsStr = (0, _utils.makeArray)(permissions);
      var permitMaps = (0, _utils.parsePermissionStr)(permAsStr);

      var permitApplies = function permitApplies(permitMap) {
        var _iterator4 = _createForOfIteratorHelper(permitMap.entries()),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _step4$value = (0, _slicedToArray2["default"])(_step4.value, 2),
                resource = _step4$value[0],
                permit = _step4$value[1];

            if (!_this.permissions.has(resource)) {
              return false;
            }

            var activePermit = _this.permissions.get(resource);

            return (activePermit & permit) !== 0;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      };

      switch (strategy) {
        case 'all':
          return permitMaps.every(permitApplies);

        case 'any':
          return permitMaps.some(permitApplies);

        default:
          return false;
      }
    }
  }], [{
    key: "fromResourceMap",
    value: function fromResourceMap(resourceMap) {
      var mapEntries = (0, _toConsumableArray2["default"])(resourceMap.entries());

      if (!mapEntries.length) {
        return;
      }

      var last = mapEntries.pop();
      var resourceType = last[0];
      var verb = last[1];
      var newRole = new UserRole(resourceType, verb);

      var _iterator5 = _createForOfIteratorHelper(mapEntries),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = (0, _slicedToArray2["default"])(_step5.value, 2),
              _resourceType = _step5$value[0],
              _verb = _step5$value[1];

          newRole.permissions.set(_resourceType, _verb);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return newRole;
    }
  }, {
    key: "fromPermissionStrings",
    value: function fromPermissionStrings(permissionStrings) {
      var permAsStr = (0, _utils.makeArray)(permissionStrings);
      var permitMaps = (0, _utils.parsePermissionStr)(permAsStr);
      var combinedPermitMap = (0, _utils.combineResourcePermits)(permitMaps);
      return this.fromResourceMap(combinedPermitMap);
    }
  }, {
    key: "combineRoles",
    value: function combineRoles(roles) {
      var newResourceMap = new Map();

      var _iterator6 = _createForOfIteratorHelper(roles),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var role = _step6.value;

          var _iterator7 = _createForOfIteratorHelper(role.getPermissionMap().entries()),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _step7$value = (0, _slicedToArray2["default"])(_step7.value, 2),
                  key = _step7$value[0],
                  value = _step7$value[1];

              if (newResourceMap.has(key)) {
                newResourceMap.set(key, newResourceMap.get(key) | value);
              } else {
                newResourceMap.set(key, value);
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return UserRole.fromResourceMap(newResourceMap);
    }
  }]);
  return UserRole;
}();

exports.UserRole = UserRole;