"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroup = exports.ViewDetailsWrapper = exports.ViewDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _constants = require("../../../constants");

var _reactQuery = require("react-query");

var _reactUtils = require("@opensrp/react-utils");

var _lodash = require("lodash");

var _mls = require("../../../mls");

var parseGroup = function parseGroup(obj) {
  var name = obj.name,
      active = obj.active,
      quantity = obj.quantity,
      member = obj.member,
      id = obj.id,
      type = obj.type,
      characteristic = obj.characteristic,
      rawIdentifier = obj.identifier;
  var identifierObj = (0, _reactUtils.getObjLike)(rawIdentifier, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL);
  var identifier = (0, _lodash.get)(identifierObj, '0.value');
  return {
    name: name,
    active: active,
    id: id,
    identifier: identifier,
    lastUpdated: (0, _lodash.get)(obj, 'meta.lastUpdated'),
    members: member,
    quantity: quantity,
    type: type,
    characteristic: characteristic,
    obj: obj
  };
};

exports.parseGroup = parseGroup;

var ViewDetails = function ViewDetails(props) {
  var resourceId = props.resourceId,
      fhirBaseURL = props.fhirBaseURL,
      keyValueMapperRenderProp = props.keyValueMapperRenderProp;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useQuery = (0, _reactQuery.useQuery)([_constants.groupResourceType, resourceId], function () {
    return new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.groupResourceType).read(resourceId);
  }),
      data = _useQuery.data,
      isLoading = _useQuery.isLoading,
      error = _useQuery.error;

  if (isLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (error && !data) {
    return _react["default"].createElement(_antd.Alert, {
      type: "error",
      message: "".concat(error)
    });
  }

  var org = data;
  return keyValueMapperRenderProp(org, t);
};

exports.ViewDetails = ViewDetails;

var ViewDetailsWrapper = function ViewDetailsWrapper(props) {
  var resourceId = props.resourceId,
      fhirBaseURL = props.fhirBaseURL,
      keyValueMapperRenderProp = props.keyValueMapperRenderProp;

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
    fhirBaseURL: fhirBaseURL,
    keyValueMapperRenderProp: keyValueMapperRenderProp
  }));
};

exports.ViewDetailsWrapper = ViewDetailsWrapper;