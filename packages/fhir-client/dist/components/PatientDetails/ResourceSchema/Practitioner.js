"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePractitioner = exports.columns = void 0;

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var _reactUtils = require("@opensrp/react-utils");

var parsePractitioner = function parsePractitioner(obj) {
  return {
    name: (0, _reactUtils.parseFhirHumanName)((0, _lodash.get)(obj, 'name.0')),
    gender: (0, _lodash.get)(obj, 'gender'),
    active: (0, _lodash.get)(obj, 'active')
  };
};

exports.parsePractitioner = parsePractitioner;
var nameSorterFn = (0, _utils.sorterFn)('name');

var columns = function columns(t) {
  return [{
    title: t('Name'),
    dataIndex: 'name',
    sorter: nameSorterFn
  }, {
    title: t('Gender'),
    dataIndex: 'gender'
  }, {
    title: t('Status'),
    dataIndex: 'active',
    render: function render(value) {
      return value === true ? 'Active' : 'Inacitve';
    }
  }];
};

exports.columns = columns;