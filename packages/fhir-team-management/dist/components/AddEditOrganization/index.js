"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AddEditOrganization = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _Form = require("./Form");

var _reactRouter = require("react-router");

var _constants = require("../../constants");

var _notifications = require("@opensrp/notifications");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _reactQuery = require("react-query");

var _utils = require("./utils");

var _mls = require("../../mls");

var _pkgConfig = require("@opensrp/pkg-config");

var AddEditOrganization = function AddEditOrganization(props) {
  var _allPractitionerRoles, _organization$data$na, _practitioners$data, _allPractitionerRoles2;

  var fhirBaseUrl = props.fhirBaseURL;

  var _useParams = (0, _reactRouter.useParams)(),
      orgId = _useParams.id;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var configuredPractAssignmentStrategy = (0, _pkgConfig.getConfig)('practToOrgAssignmentStrategy');
  var organization = (0, _reactQuery.useQuery)([_constants.organizationResourceType, orgId], (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _reactUtils.FHIRServiceClass(fhirBaseUrl, _constants.organizationResourceType).read(orgId));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), {
    enabled: !!orgId
  });
  var practitioners = (0, _reactQuery.useQuery)([_constants.practitionerResourceType], function () {
    return (0, _reactUtils.loadAllResources)(fhirBaseUrl, _constants.practitionerResourceType, {
      active: true
    });
  }, {
    select: function select(res) {
      return (0, _reactUtils.getResourcesFromBundle)(res);
    },
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching practitioners'));
    }
  });
  var allPractitionerRoles = (0, _reactQuery.useQuery)([_constants.practitionerResourceType, _constants.organizationResourceType, orgId], function () {
    return (0, _reactUtils.loadAllResources)(fhirBaseUrl, _constants.practitionerRoleResourceType, {
      active: true
    });
  }, {
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching assigned practitioners'));
    },
    select: function select(res) {
      return (0, _reactUtils.getResourcesFromBundle)(res);
    },
    enabled: !!orgId
  });

  if (organization.isLoading || organization.isFetching || practitioners.isLoading || practitioners.isFetching || allPractitionerRoles.isLoading || allPractitionerRoles.isFetching) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (organization.error && !organization.data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: organization.error.message
    });
  }

  var assignedPractitionerRoles = ((_allPractitionerRoles = allPractitionerRoles.data) !== null && _allPractitionerRoles !== void 0 ? _allPractitionerRoles : []).filter(function (practitionerRole) {
    var _practitionerRole$org;

    return ((_practitionerRole$org = practitionerRole.organization) === null || _practitionerRole$org === void 0 ? void 0 : _practitionerRole$org.reference) === "".concat(_constants.organizationResourceType, "/").concat(organization.data.id);
  });
  var initialValues = (0, _utils.getOrgFormFields)(organization.data, assignedPractitionerRoles);
  var pageTitle = organization.data ? t('Edit team | {{teamName}}', {
    teamName: (_organization$data$na = organization.data.name) !== null && _organization$data$na !== void 0 ? _organization$data$na : ''
  }) : t('Create team');
  return _react["default"].createElement("section", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement("div", {
    className: "bg-white p-5"
  }, _react["default"].createElement(_Form.OrganizationForm, {
    fhirBaseUrl: fhirBaseUrl,
    initialValues: initialValues,
    practitioners: (_practitioners$data = practitioners.data) !== null && _practitioners$data !== void 0 ? _practitioners$data : [],
    existingPractitionerRoles: assignedPractitionerRoles,
    allPractitionerRoles: (_allPractitionerRoles2 = allPractitionerRoles.data) !== null && _allPractitionerRoles2 !== void 0 ? _allPractitionerRoles2 : [],
    cancelUrl: _constants.ORGANIZATION_LIST_URL,
    successUrl: _constants.ORGANIZATION_LIST_URL,
    configuredPractAssignmentStrategy: configuredPractAssignmentStrategy
  })));
};

exports.AddEditOrganization = AddEditOrganization;
var _default = AddEditOrganization;
exports["default"] = _default;