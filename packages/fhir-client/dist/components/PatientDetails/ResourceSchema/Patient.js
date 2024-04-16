"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortMap = exports.serverSideSortedColumns = exports.parsePatient = exports.columns = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../helpers/utils");

var _utils2 = require("../../PatientsList/utils");

var _constants = require("../../../constants");

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var _sortMap;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Text = _antd.Typography.Text;
var id = 'id';
var name = 'name';
var dob = 'dob';
var gender = 'gender';
var deceased = 'deceased';
var active = 'active';

var parsePatient = function parsePatient(patient) {
  var _getPatientName, _ref;

  var birthDate = patient.birthDate,
      deceasedBoolean = patient.deceasedBoolean;
  return _ref = {}, (0, _defineProperty2["default"])(_ref, id, patient.id), (0, _defineProperty2["default"])(_ref, name, (_getPatientName = (0, _utils2.getPatientName)(patient)) !== null && _getPatientName !== void 0 ? _getPatientName : id), (0, _defineProperty2["default"])(_ref, dob, birthDate), (0, _defineProperty2["default"])(_ref, gender, patient.gender), (0, _defineProperty2["default"])(_ref, deceased, deceasedBoolean), (0, _defineProperty2["default"])(_ref, active, patient.active), _ref;
};

exports.parsePatient = parsePatient;
var dobSorterFn = (0, _utils.sorterFn)(dob, true);

var columns = function columns(t) {
  return [{
    title: t('Name'),
    dataIndex: name,
    key: name,
    render: function render(name, record) {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", null, name, " ", record.deceased ? _react["default"].createElement(_antd.Tag, {
        color: "red"
      }, "Deceased") : null));
    }
  }, {
    title: t('Date Of Birth'),
    dataIndex: dob,
    key: dob,
    sorter: dobSorterFn,
    render: function render(value) {
      return t('{{val, datetime}}', {
        val: new Date(value)
      });
    }
  }, {
    title: t('Status'),
    dataIndex: active,
    key: active,
    render: function render(value) {
      return _react["default"].createElement(Text, null, value === true ? t('Active') : t('Inactive'));
    }
  }, {
    title: t('Gender'),
    dataIndex: gender,
    key: gender
  }, {
    title: t('Actions'),
    width: '20%',
    render: function render(record) {
      return _react["default"].createElement("span", {
        className: "d-flex justify-content-start align-items-center"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "".concat(_constants.LIST_PATIENTS_URL, "/").concat(record.id),
        className: "m-0 p-1"
      }, t('View')));
    }
  }];
};

exports.columns = columns;
var sortMap = (_sortMap = {}, (0, _defineProperty2["default"])(_sortMap, id, 'identifier'), (0, _defineProperty2["default"])(_sortMap, name, 'name'), (0, _defineProperty2["default"])(_sortMap, dob, 'birthdate'), _sortMap);
exports.sortMap = sortMap;

var serverSideSortedColumns = function serverSideSortedColumns(t) {
  return columns(t).map(function (column) {
    var newColumn = _objectSpread({}, column);

    if (typeof column.sorter === 'function') {
      newColumn.sorter = true;
    }

    return newColumn;
  });
};

exports.serverSideSortedColumns = serverSideSortedColumns;