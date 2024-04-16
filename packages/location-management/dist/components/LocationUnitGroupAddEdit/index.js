"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LocationUnitGroupAddEdit = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = require("react-helmet");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _locationUnits = require("../../ducks/location-units");

var _Form = _interopRequireDefault(require("./Form"));

var _reactRouter = require("react-router");

var _mls = require("../../mls");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_reduxReducerRegistry["default"].register(_locationUnits.locationUnitsReducerName, _locationUnits.locationUnitsReducer);

var LocationUnitGroupAddEdit = function LocationUnitGroupAddEdit(props) {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var params = (0, _reactRouter.useParams)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var opensrpBaseURL = props.opensrpBaseURL;
  return _react["default"].createElement(_antd.Row, {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, params.id ? t('Edit Location Unit Group') : t('Add Location Unit Group'))), _react["default"].createElement(_reactUtils.PageHeader, {
    title: params.id ? t('Edit Location Unit Group | {{title}}', {
      title: title
    }) : t('Add Location Unit Group')
  }), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-4",
    span: 24
  }, _react["default"].createElement(_Form["default"], {
    setEditTitle: setTitle,
    opensrpBaseURL: opensrpBaseURL,
    id: params.id
  })));
};

exports.LocationUnitGroupAddEdit = LocationUnitGroupAddEdit;
var _default = LocationUnitGroupAddEdit;
exports["default"] = _default;