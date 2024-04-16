"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reformatOrganizationByLocation = exports.postPutAffiliations = exports.orgsFilterFunction = exports.keyAffiliationsByOrgLocIds = exports.getOrgSelectOptions = exports.getOrgOptionsFromAffiliations = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fhirLocationManagement = require("@opensrp/fhir-location-management");

var _lodash = require("lodash");

var _constants = require("../../constants");

var _reactUtils = require("@opensrp/react-utils");

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var reformatOrganizationByLocation = function reformatOrganizationByLocation(orgAffiliations) {
  var orgsByLocations = {};
  orgAffiliations.forEach(function (affiliation) {
    var organization = affiliation.organization,
        location = affiliation.location;
    var orgReference = organization === null || organization === void 0 ? void 0 : organization.reference;

    if (!orgReference) {
      return;
    }

    location === null || location === void 0 ? void 0 : location.forEach(function (loc) {
      var locRef = loc.reference;

      if (!locRef) {
        return;
      }

      if (!orgsByLocations[locRef]) {
        orgsByLocations[locRef] = [];
      }

      orgsByLocations[locRef].push(affiliation);
    });
  });
  return orgsByLocations;
};

exports.reformatOrganizationByLocation = reformatOrganizationByLocation;

var getOrgSelectOptions = function getOrgSelectOptions() {
  var orgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return orgs.map(function (org) {
    return {
      value: "".concat(_constants.organizationResourceType, "/").concat(org.id),
      label: org.name
    };
  });
};

exports.getOrgSelectOptions = getOrgSelectOptions;

var orgsFilterFunction = function orgsFilterFunction(inputValue, option) {
  var _option$label;

  return !!(option !== null && option !== void 0 && (_option$label = option.label) !== null && _option$label !== void 0 && _option$label.toLowerCase().includes(inputValue.toLowerCase()));
};

exports.orgsFilterFunction = orgsFilterFunction;

var getOrgOptionsFromAffiliations = function getOrgOptionsFromAffiliations() {
  var affiliatedOrgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return affiliatedOrgs.map(function (obj) {
    var _obj$organization, _obj$organization2;

    return {
      value: (_obj$organization = obj.organization) === null || _obj$organization === void 0 ? void 0 : _obj$organization.reference,
      label: (_obj$organization2 = obj.organization) === null || _obj$organization2 === void 0 ? void 0 : _obj$organization2.display,
      affiliation: obj
    };
  });
};

exports.getOrgOptionsFromAffiliations = getOrgOptionsFromAffiliations;

var keyAffiliationsByOrgLocIds = function keyAffiliationsByOrgLocIds(affiliations) {
  var affiliationsByOrgLocIds = (0, _lodash.transform)(affiliations, function (acc, value) {
    var _value$organization;

    var orgReference = (_value$organization = value.organization) === null || _value$organization === void 0 ? void 0 : _value$organization.reference;

    if (!acc[orgReference]) {
      acc[orgReference] = {};
    }

    var location = value.location;
    location === null || location === void 0 ? void 0 : location.forEach(function (location) {
      var locReference = location.reference;
      acc[orgReference][locReference] = value;
    });
  }, {});
  return affiliationsByOrgLocIds;
};

exports.keyAffiliationsByOrgLocIds = keyAffiliationsByOrgLocIds;

var postPutAffiliations = function postPutAffiliations(baseUrl, currentOptions, initialOptions, location, allAffiliations) {
  var toAdd = [];
  var toRemove = [];
  var currentOptionsById = (0, _lodash.keyBy)(currentOptions, 'value');
  var initialOptionsById = (0, _lodash.keyBy)(initialOptions, 'value');
  var affsByOrgLoc = keyAffiliationsByOrgLocIds(allAffiliations);
  currentOptions.forEach(function (option) {
    if (!initialOptionsById[option.value]) {
      toAdd.push(option);
    }
  });
  initialOptions.forEach(function (option) {
    if (!currentOptionsById[option.value]) {
      toRemove.push(option);
    }
  });
  var serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.organizationAffiliationResourceType);
  var promises = [];
  toRemove.forEach(function (option) {
    var existingAffiliation = affsByOrgLoc[option.value]["".concat(_fhirLocationManagement.locationResourceType, "/").concat(location.id)];

    if (existingAffiliation) {
      var _existingAffiliation$;

      var locations = (_existingAffiliation$ = existingAffiliation.location) !== null && _existingAffiliation$ !== void 0 ? _existingAffiliation$ : [];
      var remainingLocations = locations.filter(function (loc) {
        return loc.reference !== "".concat(_fhirLocationManagement.locationResourceType, "/").concat(location.id);
      });

      if (remainingLocations.length === 0) {
        promises.push(function () {
          return serve["delete"](existingAffiliation.id);
        });
      } else if (remainingLocations.length !== locations.length) {
        existingAffiliation.location = remainingLocations;
        promises.push(function () {
          return serve.update(existingAffiliation);
        });
      }
    } else {}
  });
  var pyaloadToAddMap = {};
  toAdd.forEach(function (option) {
    var affiliationPayload = getNewAffiliationPayload(option, affsByOrgLoc, location);
    pyaloadToAddMap[affiliationPayload.id] = affiliationPayload;
  });
  Object.values(pyaloadToAddMap).forEach(function (affiliation) {
    return promises.push(function () {
      return serve.update(affiliation);
    });
  });
  return Promise.all(promises.map(function (p) {
    return p();
  }));
};

exports.postPutAffiliations = postPutAffiliations;

function getNewAffiliationPayload(option, affiliationsByOrgLocation, location) {
  var _ref;

  var orgReference = option.value;
  var affiliationByLocation = (_ref = affiliationsByOrgLocation[orgReference]) !== null && _ref !== void 0 ? _ref : {};
  var existingAffiliations = Object.values(affiliationByLocation);

  if (existingAffiliations.length > 0) {
    var _anyAffiliation$locat;

    var anyAffiliation = existingAffiliations[0];

    var updatedAffiliation = _objectSpread(_objectSpread({}, anyAffiliation), {}, {
      location: [].concat((0, _toConsumableArray2["default"])((_anyAffiliation$locat = anyAffiliation.location) !== null && _anyAffiliation$locat !== void 0 ? _anyAffiliation$locat : []), [{
        reference: "".concat(_fhirLocationManagement.locationResourceType, "/").concat(location.id),
        display: location.name
      }])
    });

    return updatedAffiliation;
  } else {
    var affiliationPayload = {
      resourceType: _constants.organizationAffiliationResourceType,
      id: (0, _uuid.v4)(),
      identifier: [{
        use: _reactUtils.IdentifierUseCodes.OFFICIAL,
        value: (0, _uuid.v4)()
      }],
      active: true,
      organization: {
        reference: option.value,
        display: option.label
      },
      location: [{
        reference: "".concat(_fhirLocationManagement.locationResourceType, "/").concat(location.id),
        display: location.name
      }]
    };
    return affiliationPayload;
  }
}