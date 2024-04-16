"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineResourcePermits = combineResourcePermits;
exports.makeArray = makeArray;
exports.parsePermissionStr = parsePermissionStr;
exports.permitLiteralKeys = void 0;
exports.validatePermissionStr = validatePermissionStr;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _constants = require("../constants");

var _invariant = _interopRequireDefault(require("invariant"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function makeArray(obj) {
  var asArray = obj;

  if (!Array.isArray(obj)) {
    asArray = [obj];
  }

  return asArray;
}

var lowecasedAuthZResourceTags = [].concat((0, _toConsumableArray2["default"])(_constants.IamResources), (0, _toConsumableArray2["default"])(_constants.FhirResources)).map(function (tag) {
  return tag;
});
var permitLiteralKeys = Object.keys(_constants.Permit).map(function (x) {
  return x.toLowerCase();
});
exports.permitLiteralKeys = permitLiteralKeys;

function validatePermissionStr(permission) {
  var parts = permission.split('.');

  if (parts.length !== 2) {
    return false;
  }

  var _parts = (0, _slicedToArray2["default"])(parts, 2),
      resource = _parts[0],
      permit = _parts[1];

  var resourceIsRecognized = lowecasedAuthZResourceTags.includes(resource);
  var permitIsRecognized = permitLiteralKeys.includes(permit.toLowerCase());

  if (!resourceIsRecognized || !permitIsRecognized) {
    return false;
  }

  return true;
}

function parsePermissionStr(permissions) {
  return permissions.map(function (permission) {
    var newMap = new Map();
    var permissionStrIsValid = validatePermissionStr(permission);
    (0, _invariant["default"])(permissionStrIsValid, "Permission string: '".concat(permission, "' is not internally recognized as a valid permission string."));
    var parts = permission.split('.');
    var resource = parts[0];

    var permit = _constants.Permit[parts[1].toUpperCase()];

    newMap.set(resource, permit);
    return newMap;
  });
}

function combineResourcePermits(resourcePermits) {
  return resourcePermits.reduce(function (acc, map) {
    var _iterator = _createForOfIteratorHelper(map.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
            resource = _step$value[0],
            permit = _step$value[1];

        var existingPermit = acc.get(resource);

        if (existingPermit) {
          acc.set(resource, existingPermit | permit);
        } else {
          acc.set(resource, permit);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return acc;
  }, new Map());
}