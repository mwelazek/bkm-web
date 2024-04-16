"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseObservation = exports.columns = void 0;

var _lodash = require("lodash");

var _utils = require("../../PatientsList/utils");

var _utils2 = require("../../../helpers/utils");

var parseObservation = function parseObservation(obj) {
  return {
    observationValue: (0, _utils.buildObservationValueString)(obj),
    status: (0, _lodash.get)(obj, 'status'),
    id: (0, _lodash.get)(obj, 'id'),
    issued: (0, _lodash.get)(obj, 'issued')
  };
};

exports.parseObservation = parseObservation;
var issuedSorterFn = (0, _utils2.sorterFn)('issued', true);

var columns = function columns(t) {
  return [{
    title: t('Id'),
    dataIndex: 'id'
  }, {
    title: t('Observation value'),
    dataIndex: 'observationValue'
  }, {
    title: t('Status'),
    dataIndex: 'status'
  }, {
    title: t('Observation Issue Date'),
    dataIndex: 'issued',
    render: function render(value) {
      return t('{{val, datetime}}', {
        val: new Date(value)
      });
    },
    sorter: issuedSorterFn
  }];
};

exports.columns = columns;