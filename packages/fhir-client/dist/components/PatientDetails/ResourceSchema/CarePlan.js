"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCareplan = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseCareplan = function parseCareplan(obj) {
  return {
    title: (0, _lodash.get)(obj, 'title'),
    period: (0, _lodash.get)(obj, 'period'),
    categories: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'category')),
    status: (0, _lodash.get)(obj, 'status'),
    id: (0, _lodash.get)(obj, 'id')
  };
};

exports.parseCareplan = parseCareplan;

var columns = function columns(t) {
  return [{
    title: t('Title'),
    dataIndex: 'title',
    sorter: (0, _utils.sorterFn)('title')
  }, {
    title: t('Category'),
    dataIndex: 'categories',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }, {
    title: t('Period'),
    dataIndex: 'period',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirPeriod, value);
    }
  }, {
    title: t('Status'),
    dataIndex: 'status'
  }];
};

exports.columns = columns;