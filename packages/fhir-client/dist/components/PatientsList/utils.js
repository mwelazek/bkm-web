"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildObservationValueString = buildObservationValueString;
exports.getObservationLabel = getObservationLabel;
exports.getPath = getPath;
exports.getPatientName = getPatientName;

var _get = _interopRequireDefault(require("lodash/get"));

var _reactUtils = require("@opensrp/react-utils");

function getPatientName(patient) {
  var _patient$name;

  if (!patient) {
    return '';
  }

  var name = (_patient$name = patient.name) === null || _patient$name === void 0 ? void 0 : _patient$name[0];
  return (0, _reactUtils.parseFhirHumanName)(name);
}

function getPath(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return path.split('.').reduce(function (out, key) {
    return out ? out[key] : undefined;
  }, obj);
}

function getObservationLabel(obj) {
  return (0, _get["default"])(obj, 'code.coding.0.display') || (0, _get["default"])(obj, 'code.text') || (0, _get["default"])(obj, 'valueQuantity.code');
}

function buildObservationValueString(obj) {
  var quantValue = '';

  if (obj.component && Array.isArray(obj.component)) {
    obj.component.forEach(function (c, i) {
      quantValue = quantValue + "".concat(getObservationLabel(c).replace('Blood Pressure', ''), ": ").concat((0, _get["default"])(c, 'valueQuantity.value') || '').concat((0, _get["default"])(c, 'valueQuantity.unit') || '').concat(i > 0 ? '' : ', ');
    });
  } else {
    quantValue = "".concat((0, _get["default"])(obj, 'valueQuantity.value') || '', " ").concat((0, _get["default"])(obj, 'valueQuantity.unit') || '') || 'N/A';
  }

  return quantValue;
}