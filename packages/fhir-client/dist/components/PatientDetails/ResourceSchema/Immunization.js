"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseImmunization = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseImmunization = function parseImmunization(obj) {
  return {
    status: (0, _lodash.get)(obj, 'status'),
    vaccineCode: (0, _lodash.get)(obj, 'vaccineCode'),
    occurenceDateTime: (0, _lodash.get)(obj, 'occurenceDateTime'),
    reasonCode: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'reasonCode')),
    id: (0, _lodash.get)(obj, 'id')
  };
};

exports.parseImmunization = parseImmunization;
var occuredDateTimeSortFn = (0, _utils.sorterFn)('occurenceDateTime', true);

var columns = function columns(t) {
  return [{
    title: t('Id'),
    dataIndex: 'id'
  }, {
    title: t('Status'),
    dataIndex: 'status',
    sorter: _utils.sorterFn
  }, {
    title: t('Administration Date'),
    dataIndex: 'occurenceDateTime',
    sorter: occuredDateTimeSortFn,
    render: function render(value) {
      return t('{{val, datetime}}', {
        val: new Date(value)
      });
    }
  }, {
    title: t('Vaccine Admnistered'),
    dataIndex: 'vaccineCode'
  }, {
    title: t('Reason'),
    dataIndex: 'reasonCode',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }];
};

exports.columns = columns;