"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseImmunizationRecommendation = exports.columns = void 0;

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseImmunizationRecommendation = function parseImmunizationRecommendation(obj) {
  return {
    created: (0, _lodash.get)(obj, 'date'),
    dosesNum: (0, _lodash.get)(obj, 'recommendation.doseNumberPositiveInt'),
    nextDoseDate: (0, _lodash.get)(obj, 'recommendation.0.dateCriterion.0.value')
  };
};

exports.parseImmunizationRecommendation = parseImmunizationRecommendation;
var dateCreatedSorter = (0, _utils.sorterFn)('created', true);

var columns = function columns(t) {
  return [{
    title: t('Date Created'),
    dataIndex: 'created',
    render: function render(value) {
      return t('{{val, datetime}}', {
        val: new Date(value)
      });
    },
    sorter: dateCreatedSorter
  }, {
    title: t('Next Dose Date'),
    dataIndex: 'nextDoseDate'
  }, {
    title: t('Number of doses'),
    dataIndex: 'dosesNum'
  }];
};

exports.columns = columns;