"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseServiceRequest = exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _utils = require("../../../helpers/utils");

var parseServiceRequest = function parseServiceRequest(obj) {
  return {
    authoredOn: (0, _lodash.get)(obj, 'authoredOn'),
    id: (0, _lodash.get)(obj, 'id'),
    category: (0, _utils.getCodeableConcepts)((0, _lodash.get)(obj, 'category'))
  };
};

exports.parseServiceRequest = parseServiceRequest;
var authoredSorterFn = (0, _utils.sorterFn)('authoredOn', true);

var columns = function columns(t) {
  return [{
    title: t('Id'),
    dataIndex: 'id'
  }, {
    title: t('Date authored'),
    dataIndex: 'authoredOn',
    sorter: authoredSorterFn
  }, {
    title: t('Category'),
    dataIndex: 'category',
    render: function render(value) {
      return _react["default"].createElement(_utils.FhirCodesTooltips, {
        codings: value
      });
    }
  }];
};

exports.columns = columns;