"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDiagnosticReport = exports.columns = void 0;

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseDiagnosticReport = function parseDiagnosticReport(obj) {
  return {
    issued: (0, _lodash.get)(obj, 'issued'),
    id: (0, _lodash.get)(obj, 'id'),
    conclusion: (0, _lodash.get)(obj, 'conclusion')
  };
};

exports.parseDiagnosticReport = parseDiagnosticReport;
var issuedSorter = (0, _utils.sorterFn)('issued', true);

var columns = function columns(t) {
  return [{
    title: t('Id'),
    dataIndex: 'id'
  }, {
    title: t('Conclusion'),
    dataIndex: 'conclusion'
  }, {
    title: t('Date issued'),
    dataIndex: 'issued',
    sorter: issuedSorter
  }];
};

exports.columns = columns;