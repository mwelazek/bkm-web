"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommodityAddEdit = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _Form = require("./Form");

var _reactRouter = require("react-router");

var _constants = require("../../constants");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _reactQuery = require("react-query");

var _utils = require("./utils");

var _mls = require("../../mls");

var CommodityAddEdit = function CommodityAddEdit(props) {
  var _groupQuery$data$name;

  var fhirBaseUrl = props.fhirBaseURL,
      listId = props.listId;

  var _useParams = (0, _reactRouter.useParams)(),
      resourceId = _useParams.id;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var groupQuery = (0, _reactQuery.useQuery)([_constants.groupResourceType, resourceId], (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _reactUtils.FHIRServiceClass(fhirBaseUrl, _constants.groupResourceType).read(resourceId));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), {
    enabled: !!resourceId
  });

  if (!groupQuery.isIdle && groupQuery.isLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (groupQuery.error && !groupQuery.data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: groupQuery.error.message
    });
  }

  var initialValues = (0, _utils.getGroupFormFields)(groupQuery.data);
  var pageTitle = groupQuery.data ? t('Edit Commodity | {{name}}', {
    name: (_groupQuery$data$name = groupQuery.data.name) !== null && _groupQuery$data$name !== void 0 ? _groupQuery$data$name : ''
  }) : t('Create Commodity');
  var postSuccess = (0, _utils.updateListReferencesFactory)(fhirBaseUrl, listId);
  return _react["default"].createElement("section", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement("div", {
    className: "bg-white p-5"
  }, _react["default"].createElement(_Form.CommodityForm, {
    fhirBaseUrl: fhirBaseUrl,
    initialValues: initialValues,
    cancelUrl: _constants.LIST_COMMODITY_URL,
    successUrl: _constants.LIST_COMMODITY_URL,
    postSuccess: postSuccess
  })));
};

exports.CommodityAddEdit = CommodityAddEdit;