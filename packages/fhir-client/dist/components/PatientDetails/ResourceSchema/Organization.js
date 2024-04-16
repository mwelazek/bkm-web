"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseOrganization = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseOrganization = function parseOrganization(obj) {
  return {
    type: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'type')),
    name: (0, _lodash.get)(obj, 'name'),
    active: (0, _lodash.get)(obj, 'active')
  };
};

exports.parseOrganization = parseOrganization;
var nameSorterFn = (0, _utils.sorterFn)('name');

var columns = function columns(t) {
  return [{
    title: t('Name'),
    dataIndex: 'name',
    editable: true,
    sorter: nameSorterFn
  }, {
    title: t('Type'),
    dataIndex: 'type',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }, {
    title: t('Status'),
    dataIndex: 'active',
    render: function render(value) {
      return value === true ? 'Active' : 'Inactive';
    }
  }];
};

exports.columns = columns;