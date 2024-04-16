"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCondition = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseCondition = function parseCondition(obj) {
  return {
    condition: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'code')),
    severity: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'severity')),
    verificationStatus: (0, _lodash.get)(obj, 'verificationStatus')
  };
};

exports.parseCondition = parseCondition;

var columns = function columns(t) {
  return [{
    title: t('Condition'),
    dataIndex: 'condition',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }, {
    title: t('Severity'),
    dataIndex: 'severity',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }, {
    title: t('Verification Status'),
    dataIndex: 'vstatus'
  }];
};

exports.columns = columns;