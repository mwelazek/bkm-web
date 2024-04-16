"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationRulesFactory = exports.getPractitionerOptions = exports.getOrgTypeSelectOptions = exports.getOrgFormFields = exports.getAssignedPractsOptions = exports.generateOrgPayload = exports.FindAssignedLocations = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _constants = require("../../constants");

var _reactUtils = require("@opensrp/react-utils");

var _lodash = require("lodash");

var _uuid = require("uuid");

var _pkgConfig = require("@opensrp/pkg-config");

var validationRulesFactory = function validationRulesFactory(t) {
  return {
    id: [{
      type: 'string'
    }],
    identifier: [{
      type: 'string'
    }],
    name: [{
      type: 'string',
      message: t('Must be a valid string')
    }, {
      required: true,
      message: t('Required')
    }],
    alias: [{
      type: 'string',
      message: t('Must be a valid string')
    }, {
      required: false
    }],
    status: [{
      type: 'boolean'
    }, {
      required: true,
      message: t('Required')
    }],
    type: [{
      type: 'string'
    }, {
      required: false
    }],
    members: [{
      type: 'array'
    }, {
      required: false
    }]
  };
};

exports.validationRulesFactory = validationRulesFactory;

var getOrgFormFields = function getOrgFormFields(org) {
  var _identifierObj$, _valueSetCodings$;

  var assignedPractitioners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!org) {
    return {
      type: 'team',
      active: true
    };
  }

  var id = org.id,
      name = org.name,
      alias = org.alias,
      active = org.active,
      identifier = org.identifier,
      type = org.type;
  var allTypeCodings = (0, _lodash.flatten)((type !== null && type !== void 0 ? type : []).map(function (codeConcept) {
    var _codeConcept$coding;

    return Object.values((_codeConcept$coding = codeConcept.coding) !== null && _codeConcept$coding !== void 0 ? _codeConcept$coding : {});
  }));
  var valueSetCodings = (0, _reactUtils.getObjLike)(allTypeCodings, 'system', _constants.organizationTypeValueSetUrl, true);
  var identifierObj = (0, _reactUtils.getObjLike)(identifier, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL);
  var formFields = {
    id: id,
    identifier: (_identifierObj$ = identifierObj[0]) === null || _identifierObj$ === void 0 ? void 0 : _identifierObj$.value,
    active: active,
    name: name,
    alias: alias === null || alias === void 0 ? void 0 : alias[0],
    type: (_valueSetCodings$ = valueSetCodings[0]) === null || _valueSetCodings$ === void 0 ? void 0 : _valueSetCodings$.code,
    members: assignedPractitioners.map(function (pract) {
      var _pract$practitioner;

      return (_pract$practitioner = pract.practitioner) === null || _pract$practitioner === void 0 ? void 0 : _pract$practitioner.reference;
    })
  };
  return formFields;
};

exports.getOrgFormFields = getOrgFormFields;

var generateOrgPayload = function generateOrgPayload(values) {
  var id = values.id,
      rawIdentifier = values.identifier,
      active = values.active,
      name = values.name,
      rawAlias = values.alias,
      type = values.type;
  var payload = {
    resourceType: _constants.organizationResourceType,
    active: !!active,
    name: name,
    id: id
  };
  var identifier = rawIdentifier;

  if (!rawIdentifier) {
    identifier = (0, _uuid.v4)();
  }

  payload.identifier = [{
    value: identifier,
    use: _reactUtils.IdentifierUseCodes.OFFICIAL
  }];

  if (rawAlias) {
    payload.alias = [rawAlias];
  }

  if (type) {
    payload.type = [{
      coding: [{
        code: type,
        system: _constants.OrganizationTypeVS.system
      }]
    }];
  }

  if (id === undefined) {
    payload.id = (0, _uuid.v4)();
  }

  return payload;
};

exports.generateOrgPayload = generateOrgPayload;

var getOrgTypeSelectOptions = function getOrgTypeSelectOptions() {
  var system = _constants.OrganizationTypeVS.system,
      codings = _constants.OrganizationTypeVS.codings;
  return codings.map(function (coding) {
    return {
      label: coding.display,
      value: coding.code,
      system: system
    };
  });
};

exports.getOrgTypeSelectOptions = getOrgTypeSelectOptions;

var getAssignedPractsOptions = function getAssignedPractsOptions(roles) {
  return roles.map(function (role) {
    var practitioner = role.practitioner;
    return {
      label: practitioner === null || practitioner === void 0 ? void 0 : practitioner.display,
      value: practitioner === null || practitioner === void 0 ? void 0 : practitioner.reference
    };
  });
};

exports.getAssignedPractsOptions = getAssignedPractsOptions;

var getPractitionerOptions = function getPractitionerOptions(practitioners, existingPractitionerRoles, allPractitionerRoles, assignmentStrategy) {
  var allowedPractitioners = practitioners;
  var rolesWithOrganizations = allPractitionerRoles.filter(function (practRole) {
    var _practRole$organizati;

    return (_practRole$organizati = practRole.organization) === null || _practRole$organizati === void 0 ? void 0 : _practRole$organizati.reference;
  });
  var rolesByPractReference = (0, _lodash.groupBy)(rolesWithOrganizations, 'practitioner.reference');

  if (assignmentStrategy && assignmentStrategy === _pkgConfig.PractToOrgAssignmentStrategy.ONE_TO_ONE) {
    allowedPractitioners = allowedPractitioners.filter(function (pract) {
      var practReference = "".concat(pract.resourceType, "/").concat(pract.id);
      return !rolesByPractReference[practReference];
    });
  }

  var newPractitionerOptions = allowedPractitioners.map(function (pract) {
    var nameObj = (0, _reactUtils.getObjLike)(pract.name, 'use', _constants.HumanNameUseCodes.OFFICIAL)[0];
    var value = "".concat(_constants.practitionerResourceType, "/").concat(pract.id);
    var label = (0, _reactUtils.parseFhirHumanName)(nameObj);
    return {
      value: value,
      label: label !== null && label !== void 0 ? label : value
    };
  });
  var existingPractitionerOptions = existingPractitionerRoles.map(function (role) {
    var _role$practitioner, _role$practitioner2;

    var value = (_role$practitioner = role.practitioner) === null || _role$practitioner === void 0 ? void 0 : _role$practitioner.reference;
    var label = (_role$practitioner2 = role.practitioner) === null || _role$practitioner2 === void 0 ? void 0 : _role$practitioner2.display;
    return {
      value: value,
      label: label !== null && label !== void 0 ? label : value
    };
  });
  return [].concat((0, _toConsumableArray2["default"])(newPractitionerOptions), (0, _toConsumableArray2["default"])(existingPractitionerOptions));
};

exports.getPractitionerOptions = getPractitionerOptions;

var FindAssignedLocations = function FindAssignedLocations(orgAffiliations, id) {
  var locations = [];
  orgAffiliations.forEach(function (affiliation) {
    var organization = affiliation.organization,
        location = affiliation.location;
    var orgReference = organization === null || organization === void 0 ? void 0 : organization.reference;

    if (!orgReference) {
      return;
    }

    if ("".concat(_constants.organizationResourceType, "/").concat(id) === orgReference) {
      location === null || location === void 0 ? void 0 : location.forEach(function (loc) {
        locations.push(loc);
      });
    }
  });
  return locations;
};

exports.FindAssignedLocations = FindAssignedLocations;