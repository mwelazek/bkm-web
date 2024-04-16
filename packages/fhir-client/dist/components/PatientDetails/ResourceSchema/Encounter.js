"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEncounter = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseEncounter = function parseEncounter(encounter) {
  return {
    type: (0, _utils.getCodeableConcepts)((0, _lodash.get)(encounter, 'type')),
    reason: (0, _utils.getCodeableConcepts)((0, _lodash.get)(encounter, 'reasonCode')),
    status: (0, _lodash.get)(encounter, 'status'),
    classCode: (0, _utils.getCodeableConcepts)((0, _lodash.get)(encounter, 'class')),
    period: (0, _lodash.get)(encounter, 'period'),
    duration: (0, _lodash.get)(encounter, 'duration')
  };
};

exports.parseEncounter = parseEncounter;

var columns = function columns(t) {
  return [{
    title: t('Period'),
    dataIndex: 'period',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirPeriod, value);
    }
  }, {
    title: t('Reason'),
    dataIndex: 'reason',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }, {
    title: t('Status'),
    dataIndex: 'status'
  }, {
    title: t('Class'),
    dataIndex: 'classCode',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }, {
    title: t('Type'),
    dataIndex: 'type',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }];
};

exports.columns = columns;