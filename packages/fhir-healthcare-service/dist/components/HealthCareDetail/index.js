"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHealthCare = exports.ViewDetailsWrapper = exports.ViewDetails = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _lodash = require("lodash");

var _reactQuery = require("react-query");

var _constants = require("../../constants");

var _reactUtils = require("@opensrp/react-utils");

var _mls = require("../../mls");

var parseHealthCare = function parseHealthCare(obj) {
  var comment = obj.comment,
      meta = obj.meta,
      name = obj.name,
      active = obj.active,
      id = obj.id,
      providedBy = obj.providedBy;
  return {
    id: id,
    name: name,
    comment: comment,
    active: active,
    providedBy: providedBy,
    lastUpdated: (0, _lodash.get)(meta, 'lastUpdated')
  };
};

exports.parseHealthCare = parseHealthCare;

var ViewDetails = function ViewDetails(props) {
  var _keyValues;

  var resourceId = props.resourceId,
      fhirBaseURL = props.fhirBaseURL;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useQuery = (0, _reactQuery.useQuery)([_constants.healthCareServiceResourceType, resourceId], function () {
    return new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.healthCareServiceResourceType).read(resourceId);
  }),
      organization = _useQuery.data,
      orgIsLoading = _useQuery.isLoading,
      orgError = _useQuery.error;

  if (orgIsLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (orgError && !organization) {
    return _react["default"].createElement(_antd.Alert, {
      type: "error",
      message: "".concat(orgError)
    });
  }

  var org = organization;

  var _parseHealthCare = parseHealthCare(org),
      id = _parseHealthCare.id,
      name = _parseHealthCare.name,
      comment = _parseHealthCare.comment,
      active = _parseHealthCare.active,
      providedBy = _parseHealthCare.providedBy,
      lastUpdated = _parseHealthCare.lastUpdated;

  var keyValues = (_keyValues = {}, (0, _defineProperty2["default"])(_keyValues, t('Id'), id), (0, _defineProperty2["default"])(_keyValues, t('Name'), name), (0, _defineProperty2["default"])(_keyValues, t('Status'), active ? t('Active') : t('Inactive')), (0, _defineProperty2["default"])(_keyValues, t('Last Updated'), t('{{val, datetime}}', {
    val: new Date(lastUpdated !== null && lastUpdated !== void 0 ? lastUpdated : '')
  })), (0, _defineProperty2["default"])(_keyValues, t('Provided By'), (0, _lodash.get)(providedBy, 'reference.display')), (0, _defineProperty2["default"])(_keyValues, t('Comment'), comment), _keyValues);
  return _react["default"].createElement(_antd.Space, {
    direction: "vertical"
  }, Object.entries(keyValues).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var props = (0, _defineProperty2["default"])({}, key, value);
    return value ? _react["default"].createElement("div", {
      key: key,
      "data-testid": "key-value"
    }, _react["default"].createElement(_reactUtils.SingleKeyNestedValue, props)) : null;
  }));
};

exports.ViewDetails = ViewDetails;

var ViewDetailsWrapper = function ViewDetailsWrapper(props) {
  var resourceId = props.resourceId,
      fhirBaseURL = props.fhirBaseURL;

  var _useSearchParams = (0, _reactUtils.useSearchParams)(),
      removeParam = _useSearchParams.removeParam;

  if (!resourceId) {
    return null;
  }

  return _react["default"].createElement(_antd.Col, {
    className: "view-details-content"
  }, _react["default"].createElement("div", {
    className: "flex-right"
  }, _react["default"].createElement(_antd.Button, {
    "data-testid": "close-button",
    icon: _react["default"].createElement(_icons.CloseOutlined, null),
    shape: "circle",
    type: "text",
    onClick: function onClick() {
      return removeParam(_reactUtils.viewDetailsQuery);
    }
  })), _react["default"].createElement(ViewDetails, {
    resourceId: resourceId,
    fhirBaseURL: fhirBaseURL
  }));
};

exports.ViewDetailsWrapper = ViewDetailsWrapper;