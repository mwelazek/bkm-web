"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HealthCareAddEdit = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _Form = require("./Form");

var _reactRouter = require("react-router");

var _constants = require("../../constants");

var _fhirTeamManagement = require("@opensrp/fhir-team-management");

var _notifications = require("@opensrp/notifications");

var _reactUtils = require("@opensrp/react-utils");

var _antd = require("antd");

var _reactQuery = require("react-query");

var _utils = require("./utils");

var _mls = require("../../mls");

var HealthCareAddEdit = function HealthCareAddEdit(props) {
  var _healthCareService$da, _organizations$data;

  var fhirBaseUrl = props.fhirBaseURL;

  var _useParams = (0, _reactRouter.useParams)(),
      resourceId = _useParams.id;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var healthCareService = (0, _reactQuery.useQuery)([_constants.healthCareServiceResourceType, resourceId], (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _reactUtils.FHIRServiceClass(fhirBaseUrl, _constants.healthCareServiceResourceType).read(resourceId));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), {
    enabled: !!resourceId
  });
  var organizations = (0, _reactQuery.useQuery)([_fhirTeamManagement.organizationResourceType], function () {
    return (0, _reactUtils.loadAllResources)(fhirBaseUrl, _fhirTeamManagement.organizationResourceType);
  }, {
    select: function select(res) {
      return (0, _reactUtils.getResourcesFromBundle)(res);
    },
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('Unable to fetch organizations'));
    }
  });

  if (!healthCareService.isIdle && healthCareService.isLoading || organizations.isLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (healthCareService.error && !healthCareService.data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: healthCareService.error.message
    });
  }

  var initialValues = (0, _utils.getHealthCareFormFields)(healthCareService.data);
  var pageTitle = healthCareService.data ? t('Edit team | {{name}}', {
    name: (_healthCareService$da = healthCareService.data.name) !== null && _healthCareService$da !== void 0 ? _healthCareService$da : ''
  }) : t('Create team');
  return _react["default"].createElement("section", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement("div", {
    className: "bg-white p-5"
  }, _react["default"].createElement(_Form.HealthCareForm, {
    fhirBaseUrl: fhirBaseUrl,
    initialValues: initialValues,
    organizations: (_organizations$data = organizations.data) !== null && _organizations$data !== void 0 ? _organizations$data : [],
    cancelUrl: _constants.LIST_HEALTHCARE_URL,
    successUrl: _constants.LIST_HEALTHCARE_URL
  })));
};

exports.HealthCareAddEdit = HealthCareAddEdit;