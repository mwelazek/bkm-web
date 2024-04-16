"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactUtils = require("@opensrp/react-utils");

var _reactHelmet = require("react-helmet");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _LocationUnitGroupDetail = _interopRequireDefault(require("../LocationUnitGroupDetail"));

var _reactRedux = require("react-redux");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _locationUnitGroups = _interopRequireWildcard(require("../../ducks/location-unit-groups"));

var _constants = require("../../constants");

var _mls = require("../../mls");

var _Table = _interopRequireDefault(require("./Table"));

require("./LocationUnitGroupList.css");

var _reactRouterDom = require("react-router-dom");

var _notifications = require("@opensrp/notifications");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_reduxReducerRegistry["default"].register(_locationUnitGroups.reducerName, _locationUnitGroups["default"]);

var LocationUnitGroupList = function LocationUnitGroupList(props) {
  var locationsArray = (0, _reactRedux.useSelector)(function (state) {
    return (0, _locationUnitGroups.getLocationUnitGroupsArray)(state);
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      detail = _useState2[0],
      setDetail = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      filter = _useState8[0],
      setfilterData = _useState8[1];

  var opensrpBaseURL = props.opensrpBaseURL;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var history = (0, _reactRouterDom.useHistory)();
  (0, _react.useEffect)(function () {
    if (isLoading) {
      var serve = new _reactUtils.OpenSRPService(_constants.LOCATION_UNIT_GROUP_ALL, opensrpBaseURL);
      serve.list({
        is_jurisdiction: true,
        serverVersion: 0
      }).then(function (response) {
        dispatch((0, _locationUnitGroups.fetchLocationUnitGroups)(response));
        setIsLoading(false);
      })["catch"](function () {
        return (0, _notifications.sendErrorNotification)(t('There was a problem fetching Location Unit Groups'));
      });
    }
  });
  var tableData = locationsArray;

  var onChange = function onChange(e) {
    var currentValue = e.target.value;
    setValue(currentValue);
    var filteredData = tableData.filter(function (entry) {
      return entry.name.toLowerCase().includes(currentValue.toLowerCase());
    });
    setfilterData(filteredData);
  };

  if (isLoading) return _react["default"].createElement(_antd.Spin, {
    className: "custom-spinner",
    size: 'large'
  });
  return _react["default"].createElement("section", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, t('Location Unit Group'))), _react["default"].createElement(_reactUtils.PageHeader, {
    title: t('Location Unit Group Management')
  }), _react["default"].createElement(_antd.Row, null, _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3 border-left",
    span: detail ? 19 : 24
  }, _react["default"].createElement("div", {
    className: "mb-3 d-flex justify-content-between p-3"
  }, _react["default"].createElement(_antd.Input, {
    className: "w-auto",
    placeholder: t('Search'),
    size: "large",
    value: value,
    prefix: _react["default"].createElement(_icons.SearchOutlined, null),
    onChange: onChange
  }), _react["default"].createElement("div", null, _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return history.push(_constants.URL_LOCATION_UNIT_GROUP_ADD);
    }
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('Add Location Unit Group')))), _react["default"].createElement("div", {
    className: "bg-white p-3"
  }, _react["default"].createElement(_Table["default"], {
    opensrpBaseURL: opensrpBaseURL,
    data: value.length < 1 ? tableData : filter,
    onViewDetails: function onViewDetails(e) {
      return setDetail(e);
    }
  }))), detail ? _react["default"].createElement(_antd.Col, {
    className: "pl-3",
    span: 5
  }, _react["default"].createElement(_LocationUnitGroupDetail["default"], (0, _extends2["default"])({
    onClose: function onClose() {
      return setDetail(null);
    }
  }, detail))) : ''));
};

var _default = LocationUnitGroupList;
exports["default"] = _default;