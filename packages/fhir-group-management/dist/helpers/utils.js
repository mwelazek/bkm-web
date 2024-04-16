"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supplyMgSnomedCode = exports.snomedCodeSystem = exports.getUnitMeasureCharacteristic = exports.characteristicUnitMeasureCode = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getUnitMeasureCharacteristic = function getUnitMeasureCharacteristic(obj) {
  var _obj$characteristic;

  var _iterator = _createForOfIteratorHelper((_obj$characteristic = obj.characteristic) !== null && _obj$characteristic !== void 0 ? _obj$characteristic : []),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _characteristic$code$;

      var characteristic = _step.value;
      var characteristicCoding = (_characteristic$code$ = characteristic.code.coding) !== null && _characteristic$code$ !== void 0 ? _characteristic$code$ : [];

      var _iterator2 = _createForOfIteratorHelper(characteristicCoding),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _coding$system;

          var coding = _step2.value;

          if (((_coding$system = coding.system) === null || _coding$system === void 0 ? void 0 : _coding$system.toLowerCase()) === snomedCodeSystem.toLowerCase() && coding.code === characteristicUnitMeasureCode) {
            return characteristic;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

exports.getUnitMeasureCharacteristic = getUnitMeasureCharacteristic;
var snomedCodeSystem = 'http://snomed.info/sct';
exports.snomedCodeSystem = snomedCodeSystem;
var supplyMgSnomedCode = '386452003';
exports.supplyMgSnomedCode = supplyMgSnomedCode;
var characteristicUnitMeasureCode = '767524001';
exports.characteristicUnitMeasureCode = characteristicUnitMeasureCode;