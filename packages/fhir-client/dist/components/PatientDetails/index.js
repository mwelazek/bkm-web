"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultEditPatientProps = exports.PatientDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _reactHelmet = require("react-helmet");

var _reactRouterDom = require("react-router-dom");

var _fhirclient = _interopRequireDefault(require("fhirclient"));

var _get = _interopRequireDefault(require("lodash/get"));

var _reactUtils = require("@opensrp/react-utils");

var _utils = require("../PatientsList/utils");

var _DocumentReference = require("../DocumentReference");

var _constants = require("../../constants");

var _reactQuery = require("react-query");

var _ResourceSchema = require("./ResourceSchema");

var _utils2 = require("../..//helpers/utils");

var _mls = require("../../mls");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Header = _antd.Layout.Header,
    Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content;
var defaultEditPatientProps = {
  fhirBaseURL: '',
  patientBundleSize: 1000
};
exports.defaultEditPatientProps = defaultEditPatientProps;

var PatientDetails = function PatientDetails(props) {
  var _data$entry, _resourceTypeMap$reso3, _resourcesSchema$reso;

  var fhirBaseURL = props.fhirBaseURL,
      patientBundleSize = props.patientBundleSize;

  var _useParams = (0, _reactRouterDom.useParams)(),
      patientId = _useParams.id;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _React$useState = _react["default"].useState(_constants.patientResourceType),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      resourceType = _React$useState2[0],
      setResourceType = _React$useState2[1];

  var _useQuery = (0, _reactQuery.useQuery)([_constants.patientResourceType, patientId], (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _reactUtils.handleSessionOrTokenExpiry)();

          case 2:
            token = _context.sent;
            _context.next = 5;
            return _fhirclient["default"].client(fhirBaseURL).request({
              url: "Patient/".concat(patientId, "/$everything?_count=").concat(patientBundleSize),
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))),
      error = _useQuery.error,
      data = _useQuery.data,
      isLoading = _useQuery.isLoading;

  if (isLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (error) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: t('There was a problem fetching the patient')
    });
  }

  var resourceTypeMap = {};

  if (data && (_data$entry = data.entry) !== null && _data$entry !== void 0 && _data$entry.length) {
    var _iterator = _createForOfIteratorHelper(data.entry),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var datum = _step.value;
        var resourceTypeStr = datum.resource.resourceType;

        if (!resourceTypeMap[resourceTypeStr]) {
          resourceTypeMap[resourceTypeStr] = {
            count: 1,
            data: [datum.resource]
          };
        } else {
          var _resourceTypeMap$reso, _resourceTypeMap$reso2;

          var resourceCount = resourceTypeMap[resourceTypeStr].count + 1;
          resourceTypeMap[resourceTypeStr] = {
            count: resourceCount,
            data: [].concat((0, _toConsumableArray2["default"])((_resourceTypeMap$reso = (_resourceTypeMap$reso2 = resourceTypeMap[resourceTypeStr]) === null || _resourceTypeMap$reso2 === void 0 ? void 0 : _resourceTypeMap$reso2.data) !== null && _resourceTypeMap$reso !== void 0 ? _resourceTypeMap$reso : []), [datum.resource])
          };
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  var resources = (_resourceTypeMap$reso3 = resourceTypeMap[resourceType]) === null || _resourceTypeMap$reso3 === void 0 ? void 0 : _resourceTypeMap$reso3.data;

  var _ref2 = (_resourcesSchema$reso = _ResourceSchema.resourcesSchema[resourceType]) !== null && _resourcesSchema$reso !== void 0 ? _resourcesSchema$reso : {},
      columnsFactory = _ref2.columns,
      resourceParser = _ref2.resourceParser;

  var columns = columnsFactory === null || columnsFactory === void 0 ? void 0 : columnsFactory(t);
  var patientName = (0, _utils.getPatientName)(resourceTypeMap['Patient'].data[0]);
  var currentPatient = resourceTypeMap['Patient'].data[0];
  var gender = currentPatient.gender,
      birthDate = currentPatient.birthDate;
  var avatarLink = "https://www.gravatar.com/avatar/".concat(patientId, "?s=50&r=any&default=identicon&forcedefault=1");
  return _react["default"].createElement(_antd.Row, {
    id: "patient-details"
  }, _react["default"].createElement(_antd.Col, {
    span: 24
  }, _react["default"].createElement("section", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, t('Patient Details'))), _react["default"].createElement("div", {
    className: "plan-avatar-detail-section"
  }, _react["default"].createElement(_antd.Layout, {
    className: "patient-details-banner"
  }, _react["default"].createElement(Sider, null, _react["default"].createElement(_antd.Avatar, {
    src: avatarLink,
    className: "patient-details-banner_avatar"
  })), _react["default"].createElement(_antd.Layout, null, _react["default"].createElement(Header, null, _react["default"].createElement("h4", null, patientName, ' ', currentPatient.deceasedBoolean || currentPatient.deceasedDateTime ? _react["default"].createElement(_antd.Tag, {
    color: "red"
  }, t('Deceased')) : null)), _react["default"].createElement(Content, null, function () {
    var _ref3, _ref4, _ref5;

    var columnarData = [(_ref3 = {}, (0, _defineProperty2["default"])(_ref3, t('UUID'), (0, _get["default"])(currentPatient, 'identifier.0.value')), (0, _defineProperty2["default"])(_ref3, t('ID'), patientId), (0, _defineProperty2["default"])(_ref3, t('Gender'), gender), _ref3), (_ref4 = {}, (0, _defineProperty2["default"])(_ref4, t('Birth Date'), birthDate), (0, _defineProperty2["default"])(_ref4, t('Phone'), (0, _get["default"])(currentPatient, 'telecom.0.value')), (0, _defineProperty2["default"])(_ref4, t('MRN'), 'Unknown'), _ref4), (_ref5 = {}, (0, _defineProperty2["default"])(_ref5, t('Address'), (0, _get["default"])(currentPatient, 'address.0.line.0') || 'N/A'), (0, _defineProperty2["default"])(_ref5, t('Country'), (0, _get["default"])(currentPatient, 'address.0.country')), _ref5)];
    return _react["default"].createElement("div", {
      className: "patient-details__box"
    }, columnarData.map(function (columnData, idx) {
      return _react["default"].createElement("div", {
        className: "patient-detail-section",
        key: idx
      }, Object.entries(columnData).map(function (_ref6) {
        var _ref7 = (0, _slicedToArray2["default"])(_ref6, 2),
            key = _ref7[0],
            value = _ref7[1];

        return _react["default"].createElement("div", {
          key: key,
          className: "patient-detail__key-value"
        }, _react["default"].createElement("span", null, key, ": "), _react["default"].createElement("span", null, value));
      }));
    }));
  }())))), _react["default"].createElement(_antd.Row, null, _react["default"].createElement(_antd.Col, {
    span: 6
  }, _react["default"].createElement(_antd.Menu, {
    mode: "vertical",
    style: {
      width: 'auto'
    },
    defaultSelectedKeys: [resourceType],
    selectedKeys: [resourceType]
  }, Object.keys(resourceTypeMap).map(function (type) {
    return _react["default"].createElement(_antd.Menu.Item, {
      key: type,
      id: type,
      onClick: function onClick(e) {
        setResourceType(e.key);
      }
    }, type, ' ', _react["default"].createElement(_antd.Badge, {
      count: resourceTypeMap[type].count,
      overflowCount: 500,
      style: {
        backgroundColor: '#777',
        "float": 'right',
        marginTop: '10px'
      }
    }));
  }))), _react["default"].createElement(_antd.Col, {
    span: 18
  }, _react["default"].createElement(_antd.Card, {
    title: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
      style: {
        color: '#1890ff'
      }
    }, _react["default"].createElement(_icons.IdcardOutlined, null), " ", resourceType)),
    bordered: false
  }, function () {
    if (resourceType === 'DocumentReference') {
      return _react["default"].createElement(_DocumentReference.DocumentReferenceDetails, {
        fhirBaseApiUrl: fhirBaseURL,
        documentResources: resourceTypeMap[resourceType].data
      });
    } else {
      if (!columns || !resourceParser) {
        return _react["default"].createElement(_antd.Alert, {
          message: t('Work in progress'),
          type: "info"
        });
      }

      return _react["default"].createElement(_utils2.PatientDetailsTable, {
        columns: columns,
        resources: resources,
        parseResource: resourceParser
      });
    }
  }()))))));
};

exports.PatientDetails = PatientDetails;
PatientDetails.defaultProps = defaultEditPatientProps;