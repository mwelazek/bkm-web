"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtraFields = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _notifications = require("@opensrp/notifications");

var _constants = require("../../../constants");

var _dataLoaders = require("../../../helpers/dataLoaders");

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _antd = require("antd");

var _serverService = require("@opensrp/server-service");

var _mls = require("../../../mls");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var List = _antd.Form.List,
    FormItem = _antd.Form.Item;
var defaultExtraFieldProps = {
  baseURL: _serverService.OPENSRP_API_BASE_URL,
  disabled: false,
  hidden: false
};

var ExtraFields = function ExtraFields(props) {
  var baseURL = props.baseURL,
      disabled = props.disabled,
      hidden = props.hidden;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      settings = _useState2[0],
      setSettings = _useState2[1];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var validationRules = (0, _utils.validationRulesFactory)(t);
  (0, _react.useEffect)(function () {
    (0, _dataLoaders.loadSettings)(_constants.LOCATION_UNIT_EXTRA_FIELDS_IDENTIFIER, baseURL, setSettings)["catch"](function (err) {
      return (0, _notifications.sendErrorNotification)(err.message);
    })["finally"](function () {});
  }, [baseURL]);
  return _react["default"].createElement(List, {
    name: "extraFields"
  }, function (_) {
    return settings.map(function (setting, index) {
      return _react["default"].createElement(FormItem, {
        key: setting.uuid,
        label: setting.label,
        name: [index, setting.label],
        className: "extra-fields",
        id: "extraFields-".concat(index),
        rules: validationRules.extraFields,
        hidden: hidden
      }, _react["default"].createElement(_antd.Input, {
        type: "text",
        disabled: disabled
      }));
    });
  });
};

exports.ExtraFields = ExtraFields;
ExtraFields.defaultProps = defaultExtraFieldProps;