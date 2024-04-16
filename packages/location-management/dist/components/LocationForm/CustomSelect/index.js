"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomSelect = CustomSelect;
exports.getSelectedFullData = getSelectedFullData;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _antd = require("antd");

var _react = _interopRequireWildcard(require("react"));

var _notifications = require("@opensrp/notifications");

var _excluded = ["loadData", "getOptions", "value", "fullDataCallback", "getSelectedFullData"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getSelectedFullData(data, getOptions, value) {
  var selected = data.filter(function (dt) {
    var option = getOptions([dt])[0];
    return Array.isArray(value) && option.value && value.includes(option.value) || value === option.value;
  });
  return selected;
}

var defaultServiceTypeProps = {
  loadData: function loadData() {
    return Promise.resolve();
  },
  getOptions: function getOptions() {
    return [];
  },
  getSelectedFullData: getSelectedFullData,
  showSearch: true,
  filterOption: function filterOption(inputValue, option) {
    var _option$label;

    return !!(option !== null && option !== void 0 && (_option$label = option.label) !== null && _option$label !== void 0 && _option$label.toString().toLowerCase().includes(inputValue.toLowerCase()));
  }
};

function CustomSelect(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var loadData = props.loadData,
      getOptions = props.getOptions,
      value = props.value,
      fullDataCallback = props.fullDataCallback,
      getSelectedFullData = props.getSelectedFullData,
      restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  (0, _react.useEffect)(function () {
    loadData(setData)["catch"](function (err) {
      return (0, _notifications.sendErrorNotification)(err.message);
    })["finally"](function () {
      setLoading(false);
    });
  }, []);
  (0, _react.useEffect)(function () {
    var selected = getSelectedFullData(data, getOptions, value);
    fullDataCallback === null || fullDataCallback === void 0 ? void 0 : fullDataCallback(selected);
  }, [data, fullDataCallback, getOptions, getSelectedFullData, value]);
  var selectOptions = getOptions(data);

  var selectProps = _objectSpread(_objectSpread({}, restProps), {}, {
    options: selectOptions,
    loading: loading,
    value: value
  });

  return _react["default"].createElement(_antd.Select, selectProps);
}

CustomSelect.defaultProps = defaultServiceTypeProps;