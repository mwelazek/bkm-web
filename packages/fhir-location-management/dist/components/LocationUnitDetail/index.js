"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationUnitDetail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _antd = require("antd");

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _icons = require("@ant-design/icons");

var _reactUtils = require("@opensrp/react-utils");

var _reactQuery = require("react-query");

var _constants = require("../../constants");

var _mls = require("../../mls");

var LocationUnitDetail = function LocationUnitDetail(props) {
  var _detailsMap;

  var onClose = props.onClose,
      fhirBaseUrl = props.fhirBaseUrl,
      detailId = props.detailId;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var serve = new _reactUtils.FHIRServiceClass(fhirBaseUrl, _constants.locationResourceType);

  var _useQuery = (0, _reactQuery.useQuery)([_constants.locationResourceType, detailId], (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", serve.read(detailId));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), {
    select: function select(res) {
      return res;
    },
    enabled: !!detailId
  }),
      data = _useQuery.data,
      isLoading = _useQuery.isLoading,
      error = _useQuery.error;

  if (isLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner flex-grow-1"
    });
  }

  if (error && !data) {
    return _react["default"].createElement(_antd.Alert, {
      "data-testid": "error-alert",
      message: "".concat(error),
      type: "error"
    });
  }

  if (!data) {
    return _react["default"].createElement(_antd.Alert, {
      "data-testid": "info-alert",
      message: t('Location resource not found'),
      type: "info"
    });
  }

  var name = data.name,
      status = data.status,
      description = data.description,
      id = data.id,
      identifierArr = data.identifier;
  var identifier = (0, _reactUtils.getObjLike)(identifierArr, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL);
  var detailsMap = (_detailsMap = {}, (0, _defineProperty2["default"])(_detailsMap, t('Location id'), id), (0, _defineProperty2["default"])(_detailsMap, t('identifier'), (0, _lodash.get)(identifier, '0.value')), (0, _defineProperty2["default"])(_detailsMap, t('Name'), name), (0, _defineProperty2["default"])(_detailsMap, t('alias'), (0, _lodash.get)(data, 'alias.0')), (0, _defineProperty2["default"])(_detailsMap, t('Status'), status), (0, _defineProperty2["default"])(_detailsMap, t('Physical type'), (0, _lodash.get)(data, 'physicalType.coding.0.display')), (0, _defineProperty2["default"])(_detailsMap, t('Description'), description), _detailsMap);
  return _react["default"].createElement(_antd.Col, {
    className: "pl-3",
    span: 5
  }, _react["default"].createElement("div", {
    className: "p-4 bg-white",
    "data-testid": "view-details"
  }, _react["default"].createElement(_antd.Button, {
    shape: "circle",
    onClick: onClose,
    className: "float-right",
    type: "text",
    icon: _react["default"].createElement(_icons.CloseOutlined, null)
  }), Object.entries(detailsMap).map(function (_ref2) {
    var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    var singleMapValue = (0, _defineProperty2["default"])({}, key, value);
    return _react["default"].createElement("div", {
      "data-testid": "single-key-value",
      key: key,
      className: "pb-3"
    }, _react["default"].createElement(_reactUtils.SingleKeyNestedValue, singleMapValue));
  })));
};

exports.LocationUnitDetail = LocationUnitDetail;