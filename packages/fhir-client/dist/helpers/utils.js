"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FhirPeriod = exports.FhirCodesTooltips = void 0;
exports.PatientDetailsTable = PatientDetailsTable;
exports.sorterFn = exports.getCodeableConcepts = void 0;

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _react = _interopRequireDefault(require("react"));

var _mls = require("../mls");

var _lodash = require("lodash");

var Text = _antd.Typography.Text;

var sorterFn = function sorterFn(accessor) {
  var isDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (a, b) {
    var first = (0, _lodash.get)(a, accessor);
    var second = (0, _lodash.get)(b, accessor);
    if (first === undefined) return 1;
    if (second === undefined) return -1;

    if (isDate) {
      return Date.parse(first) - Date.parse(second);
    } else {
      return first.localeCompare(second);
    }
  };
};

exports.sorterFn = sorterFn;

var FhirPeriod = function FhirPeriod(props) {
  var start = props.start,
      end = props.end;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Text, null, t('{{val, datetime}}', {
    val: new Date(start !== null && start !== void 0 ? start : '')
  })), "-", _react["default"].createElement(Text, null, t('{{val, datetime}}', {
    val: new Date(end !== null && end !== void 0 ? end : '')
  })));
};

exports.FhirPeriod = FhirPeriod;

var FhirCodesTooltips = function FhirCodesTooltips(_ref) {
  var codings = _ref.codings;
  return _react["default"].createElement(_react["default"].Fragment, null, (codings !== null && codings !== void 0 ? codings : []).map(function (coding) {
    return _react["default"].createElement(_antd.Tooltip, {
      key: coding.code,
      title: coding.system || ''
    }, _react["default"].createElement("span", null, coding.display));
  }));
};

exports.FhirCodesTooltips = FhirCodesTooltips;

var getCodeableConcepts = function getCodeableConcepts(concepts) {
  var arrayConcepts = concepts ? Array.isArray(concepts) ? concepts : [concepts] : [];
  var rtn = arrayConcepts.map(function (codeableConcept) {
    var _codeableConcept$codi;

    return (_codeableConcept$codi = codeableConcept.coding) !== null && _codeableConcept$codi !== void 0 ? _codeableConcept$codi : [];
  }).flat();
  return rtn;
};

exports.getCodeableConcepts = getCodeableConcepts;

function PatientDetailsTable(props) {
  var resources = props.resources,
      parseResource = props.parseResource,
      columns = props.columns;
  var tableProps = {
    datasource: resources.map(parseResource),
    columns: columns
  };
  return _react["default"].createElement(_reactUtils.TableLayout, tableProps);
}