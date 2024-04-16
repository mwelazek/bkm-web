"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationRulesFactory = exports.postPutHealthCareService = exports.orgFilterFunction = exports.getOrgSelectOptions = exports.getHealthCareFormFields = exports.generateHealthCarePayload = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _uuid = require("uuid");

var _reactUtils = require("@opensrp/react-utils");

var _lodash = require("lodash");

var _constants = require("../../constants");

var _fhirTeamManagement = require("@opensrp/fhir-team-management");

var _excluded = ["meta"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
    active: [{
      type: 'boolean'
    }, {
      required: true,
      message: t('Required')
    }],
    comment: [{
      type: 'string'
    }, {
      required: false
    }],
    providedBy: [{
      type: 'string'
    }, {
      required: false
    }],
    extraDetails: [{
      type: 'string'
    }, {
      required: false
    }]
  };
};

exports.validationRulesFactory = validationRulesFactory;

var getHealthCareFormFields = function getHealthCareFormFields(obj) {
  if (!obj) {
    return {};
  }

  var id = obj.id,
      name = obj.name,
      active = obj.active,
      identifier = obj.identifier,
      providedBy = obj.providedBy,
      comment = obj.comment,
      extraDetails = obj.extraDetails;
  var identifierObj = (0, _reactUtils.getObjLike)(identifier, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL);
  var formFields = {
    initialObject: obj,
    id: id,
    identifier: (0, _lodash.get)(identifierObj, '0.value'),
    active: active,
    name: name,
    providedBy: (0, _lodash.get)(providedBy, 'reference', undefined),
    comment: comment,
    extraDetails: extraDetails
  };
  return formFields;
};

exports.getHealthCareFormFields = getHealthCareFormFields;

var generateHealthCarePayload = function generateHealthCarePayload(values, orgs, initialValues) {
  var id = values.id,
      rawIdentifier = values.identifier,
      active = values.active,
      name = values.name,
      providedBy = values.providedBy,
      extraDetails = values.extraDetails,
      comment = values.comment;
  var initialObject = initialValues.initialObject;
  var orgsById = (0, _lodash.keyBy)(orgs, function (org) {
    return "".concat(_fhirTeamManagement.organizationResourceType, "/").concat(org.id);
  });
  var payload = {
    resourceType: _constants.healthCareServiceResourceType,
    active: !!active
  };

  if (initialObject) {
    var meta = initialObject.meta,
        rest = (0, _objectWithoutProperties2["default"])(initialObject, _excluded);
    payload = _objectSpread(_objectSpread({}, rest), payload);
  }

  if (name) {
    payload.name = name;
  }

  if (id) {
    payload.id = id;
  } else {
    payload.id = (0, _uuid.v4)();
  }

  var identifier = rawIdentifier;

  if (!rawIdentifier) {
    identifier = (0, _uuid.v4)();
  }

  payload.identifier = [{
    value: identifier,
    use: _reactUtils.IdentifierUseCodes.OFFICIAL
  }];

  if (providedBy) {
    payload.providedBy = {
      reference: providedBy,
      display: (0, _lodash.get)(orgsById[providedBy], 'name', '')
    };
  }

  if (extraDetails) {
    payload.extraDetails = extraDetails;
  }

  if (comment) {
    payload.comment = comment;
  }

  return payload;
};

exports.generateHealthCarePayload = generateHealthCarePayload;

var getOrgSelectOptions = function getOrgSelectOptions(orgs) {
  return orgs.map(function (org) {
    var _org$name;

    var orgId = "".concat(_fhirTeamManagement.organizationResourceType, "/").concat(org.id);
    return {
      value: orgId,
      label: (_org$name = org.name) !== null && _org$name !== void 0 ? _org$name : orgId
    };
  });
};

exports.getOrgSelectOptions = getOrgSelectOptions;

var orgFilterFunction = function orgFilterFunction(inputValue, option) {
  return !!(option !== null && option !== void 0 && option.label.toLowerCase().includes(inputValue.toLowerCase()));
};

exports.orgFilterFunction = orgFilterFunction;

var postPutHealthCareService = function postPutHealthCareService(baseUrl, payload) {
  var serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.healthCareServiceResourceType);
  return serve.update(payload);
};

exports.postPutHealthCareService = postPutHealthCareService;