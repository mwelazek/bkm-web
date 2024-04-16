"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseOrganization = exports.ViewDetailsWrapper = exports.ViewDetails = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _reactQuery = require("react-query");

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../../../constants");

var _lodash = require("lodash");

require("./index.css");

var _mls = require("../../../mls");

var _utils = require("../../AddEditOrganization/utils");

var parseOrganization = function parseOrganization(org) {
  var identifierObj = (0, _reactUtils.getObjLike)(org.identifier, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL);
  var identifier = (0, _lodash.get)(identifierObj, '0.value');
  return {
    id: org.id,
    identifier: identifier,
    active: org.active,
    name: org.name,
    type: (0, _lodash.get)(org, 'type.0.coding.0.display'),
    alias: org.alias,
    partOf: (0, _lodash.get)(org, 'partOf.display')
  };
};

exports.parseOrganization = parseOrganization;

var ViewDetails = function ViewDetails(props) {
  var _organizationKeyValue;

  var resourceId = props.resourceId,
      fhirBaseURL = props.fhirBaseURL;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useQuery = (0, _reactQuery.useQuery)([_constants.organizationResourceType, resourceId], function () {
    return new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.organizationResourceType).read(resourceId);
  }),
      organization = _useQuery.data,
      orgIsLoading = _useQuery.isLoading,
      orgError = _useQuery.error;

  var _useQuery2 = (0, _reactQuery.useQuery)([_constants.organizationAffiliationResourceType, resourceId], function () {
    return (0, _reactUtils.loadAllResources)(fhirBaseURL, _constants.organizationAffiliationResourceType);
  }, {
    select: function select(res) {
      return (0, _reactUtils.getResourcesFromBundle)(res);
    }
  }),
      affiliationsData = _useQuery2.data,
      affiliationsLoading = _useQuery2.isLoading,
      affiliationsError = _useQuery2.error;

  var _useQuery3 = (0, _reactQuery.useQuery)([_constants.practitionerRoleResourceType, resourceId], function () {
    return new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.practitionerRoleResourceType).list({
      _include: 'PractitionerRole:practitioner',
      organization: resourceId
    }).then(function (bundle) {
      return (0, _reactUtils.getResourcesFromBundle)(bundle).filter(function (resource) {
        return resource.resourceType === _constants.practitionerResourceType;
      });
    });
  }),
      assignedPractitioners = _useQuery3.data,
      assignedPractitionersLoading = _useQuery3.isLoading;

  if (orgIsLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (orgError && !organization || affiliationsError && !affiliationsData) {
    return _react["default"].createElement(_antd.Alert, {
      type: "error",
      message: "".concat(orgError || affiliationsError)
    });
  }

  var org = organization;

  var _parseOrganization = parseOrganization(org),
      active = _parseOrganization.active,
      id = _parseOrganization.id,
      identifier = _parseOrganization.identifier;

  var assignedLocations = (0, _utils.FindAssignedLocations)(affiliationsData !== null && affiliationsData !== void 0 ? affiliationsData : [], id);
  var practitionerKeyValues = (0, _defineProperty2["default"])({}, t('Team practitioners'), _react["default"].createElement("ul", {
    id: "practitioner-teams"
  }, (assignedPractitioners !== null && assignedPractitioners !== void 0 ? assignedPractitioners : []).map(function (practitioner) {
    var officialNames = (0, _reactUtils.getObjLike)(practitioner.name, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL);
    var firstOficialName = officialNames[0];
    return _react["default"].createElement("li", {
      key: practitioner.id
    }, (0, _reactUtils.parseFhirHumanName)(firstOficialName));
  })));
  var locationsKeyValues = (0, _defineProperty2["default"])({}, t('Assigned locations'), _react["default"].createElement("ul", {
    id: "assigned-locations"
  }, assignedLocations.map(function (location) {
    return _react["default"].createElement("li", {
      key: location.reference
    }, location.display);
  })));
  var organizationKeyValues = (_organizationKeyValue = {}, (0, _defineProperty2["default"])(_organizationKeyValue, t('Team id'), id), (0, _defineProperty2["default"])(_organizationKeyValue, t('Team identifier'), identifier), (0, _defineProperty2["default"])(_organizationKeyValue, t('Team status'), active ? t('Active') : t('Disabled')), _organizationKeyValue);
  return _react["default"].createElement(_antd.Space, {
    direction: "vertical"
  }, (0, _reactUtils.renderObjectAsKeyvalue)(organizationKeyValues), assignedPractitionersLoading ? _react["default"].createElement(_antd.Alert, {
    description: t('Fetching assigned practitioners'),
    type: "info"
  }) : assignedPractitioners !== null && assignedPractitioners !== void 0 && assignedPractitioners.length ? (0, _reactUtils.renderObjectAsKeyvalue)(practitionerKeyValues) : _react["default"].createElement(_antd.Alert, {
    description: t('Organization does not have any assigned practitioners'),
    type: "warning"
  }), affiliationsLoading ? _react["default"].createElement(_antd.Alert, {
    description: t('Fetching assigned locations'),
    type: "info"
  }) : assignedLocations.length ? (0, _reactUtils.renderObjectAsKeyvalue)(locationsKeyValues) : _react["default"].createElement(_antd.Alert, {
    description: t('Organization does not have any assigned locations'),
    type: "warning"
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