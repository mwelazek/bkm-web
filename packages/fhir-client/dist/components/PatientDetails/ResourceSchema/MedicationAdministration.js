"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMedicationAdministration = exports.columns = void 0;

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseMedicationAdministration = function parseMedicationAdministration(obj) {
  return {
    status: (0, _lodash.get)(obj, 'status'),
    id: (0, _lodash.get)(obj, 'id'),
    occurenceDateTime: (0, _lodash.get)(obj, 'occurenceDateTime')
  };
};

exports.parseMedicationAdministration = parseMedicationAdministration;
var statusSorterFn = (0, _utils.sorterFn)('status');

var columns = function columns(t) {
  return [{
    title: t('Id'),
    dataIndex: 'id'
  }, {
    title: t('Status'),
    dataIndex: 'status',
    sorter: statusSorterFn
  }, {
    title: t('Occurence Date'),
    dataIndex: 'occurenceDateTime',
    render: function render(value) {
      return t('{{val, datetime}}', {
        val: new Date(value)
      });
    }
  }];
};

exports.columns = columns;