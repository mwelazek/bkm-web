"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PatientsList = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = require("react-helmet");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../../constants");

var _mls = require("../../mls");

var _Patient = require("../PatientDetails/ResourceSchema/Patient");

var _lodash = require("lodash");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var PatientsList = function PatientsList(props) {
  var _data$records;

  var fhirBaseURL = props.fhirBaseURL;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      fhirSortFilters = _useState2[0],
      setFhirSortFilters = _useState2[1];

  var _useSimpleTabularView = (0, _reactUtils.useSimpleTabularView)(fhirBaseURL, _constants.patientResourceType, fhirSortFilters),
      searchFormProps = _useSimpleTabularView.searchFormProps,
      tablePaginationProps = _useSimpleTabularView.tablePaginationProps,
      queryValues = _useSimpleTabularView.queryValues;

  var data = queryValues.data,
      isFetching = queryValues.isFetching,
      isLoading = queryValues.isLoading,
      error = queryValues.error;

  if (error && !data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: error.message
    });
  }

  var tableData = ((_data$records = data === null || data === void 0 ? void 0 : data.records) !== null && _data$records !== void 0 ? _data$records : []).map(function (patient) {
    var patientValues = (0, _Patient.parsePatient)(patient);
    return _objectSpread(_objectSpread({}, patientValues), {}, {
      key: patientValues.id
    });
  });
  var tableProps = {
    datasource: tableData,
    columns: (0, _Patient.serverSideSortedColumns)(t),
    loading: isFetching || isLoading,
    pagination: tablePaginationProps,
    onChange: function onChange(_, __, sorter) {
      var sorters = Array.isArray(sorter) ? sorter : [sorter];
      var sortQueryString = sorters.reduce(function (acc, value) {
        var field = value.field,
            order = value.order;
        var sortableKey = (0, _lodash.get)(_Patient.sortMap, field);

        if (!sortableKey) {
          return acc;
        }

        if (order && order === 'ascend') {
          return "".concat(acc).concat(sortableKey);
        } else if (order) {
          return "".concat(acc, "-").concat(sortableKey);
        }

        return acc;
      }, '');

      if (sortQueryString) {
        setFhirSortFilters({
          _sort: sortQueryString
        });
      }
    }
  };
  return _react["default"].createElement("div", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, t('Patients'))), _react["default"].createElement(_reactUtils.PageHeader, {
    title: t('Patients')
  }), _react["default"].createElement(_antd.Row, {
    className: "list-view"
  }, _react["default"].createElement(_antd.Col, {
    className: 'main-content',
    span: 24
  }, _react["default"].createElement("div", {
    className: "main-content__header"
  }, _react["default"].createElement(_reactUtils.SearchForm, searchFormProps)), _react["default"].createElement(_reactUtils.TableLayout, tableProps))));
};

exports.PatientsList = PatientsList;