"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMedication = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseMedication = function parseMedication(obj) {
  return {
    status: (0, _lodash.get)(obj, 'status'),
    code: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'code')),
    manufacturer: (0, _lodash.get)(obj, 'manufacturer'),
    id: (0, _lodash.get)(obj, 'id')
  };
};

exports.parseMedication = parseMedication;

var columns = function columns(t) {
  return [{
    title: t('Id'),
    dataIndex: 'id'
  }, {
    title: t('Medication'),
    dataIndex: 'details',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }, {
    title: t('Manufacturer'),
    dataIndex: 'manufacturer',
    value: function value(_value) {
      var _value$display;

      return (_value$display = _value === null || _value === void 0 ? void 0 : _value.display) !== null && _value$display !== void 0 ? _value$display : _value === null || _value === void 0 ? void 0 : _value.reference;
    }
  }];
};

exports.columns = columns;