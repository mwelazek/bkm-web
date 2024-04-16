"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMedicationStatement = exports.columns = void 0;

var _lodash = require("lodash");

var parseMedicationStatement = function parseMedicationStatement(obj) {
  return {
    status: (0, _lodash.get)(obj, 'status'),
    id: (0, _lodash.get)(obj, 'id'),
    dateAsserted: (0, _lodash.get)(obj, 'dateAsserted')
  };
};

exports.parseMedicationStatement = parseMedicationStatement;

var columns = function columns(t) {
  return [{
    title: 'Id',
    dataIndex: 'id'
  }, {
    title: 'Status',
    dataIndex: 'status'
  }, {
    title: t('Date asserted'),
    dataIndex: 'dateAsserted'
  }];
};

exports.columns = columns;