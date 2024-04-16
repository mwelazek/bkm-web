"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLocation = exports.nameSorterFn = exports.columns = void 0;

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseLocation = function parseLocation(obj) {
  return {
    name: (0, _lodash.get)(obj, 'name'),
    alias: (0, _lodash.get)(obj, 'alias'),
    id: (0, _lodash.get)(obj, 'id'),
    type: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'type')),
    city: (0, _lodash.get)(obj, 'address.city'),
    country: (0, _lodash.get)(obj, 'address.country'),
    state: (0, _lodash.get)(obj, 'address.state')
  };
};

exports.parseLocation = parseLocation;
var nameSorterFn = (0, _utils.sorterFn)('name');
exports.nameSorterFn = nameSorterFn;

var columns = function columns(t) {
  return [{
    title: t('Name'),
    dataIndex: 'name',
    editable: true,
    sorter: nameSorterFn
  }, {
    title: t('City'),
    dataIndex: 'city'
  }, {
    title: t('State'),
    dataIndex: 'state'
  }, {
    title: t('Country'),
    dataIndex: 'country'
  }];
};

exports.columns = columns;