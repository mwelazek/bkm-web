"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMedicationRequest = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseMedicationRequest = function parseMedicationRequest(obj) {
  return {
    authoredOn: (0, _lodash.get)(obj, 'authoredOn'),
    id: (0, _lodash.get)(obj, 'id'),
    reasonCodes: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'reasonCode'))
  };
};

exports.parseMedicationRequest = parseMedicationRequest;
var authoredSorterFn = (0, _utils.sorterFn)('authoredOn', true);

var columns = function columns(t) {
  return [{
    title: t('Id'),
    dataIndex: 'id'
  }, {
    title: t('Details'),
    dataIndex: 'reasonCodes',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }, {
    title: t('Authored on'),
    dataIndex: 'authoredOn',
    sorter: authoredSorterFn,
    render: function render(value) {
      return t('{{val, datetime}}', {
        val: new Date(value)
      });
    }
  }];
};

exports.columns = columns;