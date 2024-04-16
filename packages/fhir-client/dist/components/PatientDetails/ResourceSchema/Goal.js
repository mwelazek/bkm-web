"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGoal = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseGoal = function parseGoal(obj) {
  return {
    category: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'category')),
    status: (0, _lodash.get)(obj, 'lifeCycleStatus'),
    id: (0, _lodash.get)(obj, 'id'),
    description: (0, _lodash.get)(obj, 'description'),
    priority: (0, _lodash.get)(obj, 'priority'),
    achievementStatus: (0, _lodash.get)(obj, 'achievementStatus')
  };
};

exports.parseGoal = parseGoal;

var columns = function columns(t) {
  return [{
    title: t('Id'),
    dataIndex: 'id'
  }, {
    title: t('Category'),
    dataIndex: 'category',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }, {
    title: t('Description'),
    dataIndex: 'description'
  }, {
    title: t('Status'),
    dataIndex: 'status'
  }, {
    title: t('Achievement status'),
    dataIndex: 'achievementStatus'
  }, {
    title: t('Priority'),
    dataIndex: 'priority'
  }];
};

exports.columns = columns;