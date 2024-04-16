"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseProcedure = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseProcedure = function parseProcedure(obj) {
  return {
    type: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'type')),
    status: (0, _lodash.get)(obj, 'status'),
    performedDateTime: (0, _lodash.get)(obj, 'performedDateTime'),
    procedure: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'code'))
  };
};

exports.parseProcedure = parseProcedure;
var dateSorterFn = (0, _utils.sorterFn)('date', true);

var columns = function columns(t) {
  return [{
    title: t('Id'),
    dataIndex: 'id'
  }, {
    title: t('Performed Date'),
    dataIndex: 'date',
    sorter: dateSorterFn,
    render: function render(value) {
      return t('{{val, datetime}}', {
        val: new Date(value)
      });
    }
  }, {
    title: t('Procedure'),
    dataIndex: 'procedure',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }, {
    title: t('Status'),
    dataIndex: 'status'
  }];
};

exports.columns = columns;