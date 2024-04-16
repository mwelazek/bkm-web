"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrgSelectOptions = exports.getCareTeamFormFields = exports.defaultInitialValues = void 0;
exports.getPatientName = getPatientName;
exports.submitForm = exports.selectFilterFunction = exports.getPractitionerSelectOptions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _connectedReducerRegistry = require("@onaio/connected-reducer-registry");

var _uuid = require("uuid");

var _reactUtils = require("@opensrp/react-utils");

var _notifications = require("@opensrp/notifications");

var _constants = require("../../constants");

var _lodash = require("lodash");

var _defaultInitialValues;

var _excluded = ["meta", "text", "participant"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getCarriedOverParticipants = function getCarriedOverParticipants(values, initialValues) {
  var _initialValues$initia;

  var _ref = (_initialValues$initia = initialValues.initialCareTeam) !== null && _initialValues$initia !== void 0 ? _initialValues$initia : {},
      participant = _ref.participant;

  var participantByKey = (participant !== null && participant !== void 0 ? participant : []).reduce(function (ac, val) {
    var _val$member;

    var reference = (_val$member = val.member) === null || _val$member === void 0 ? void 0 : _val$member.reference;
    return _objectSpread(_objectSpread({}, ac), {}, (0, _defineProperty2["default"])({}, reference, val));
  }, {});

  var currentManagingOrgValuesyId = values[_constants.managingOrganizations].reduce(function (ac, val) {
    return _objectSpread(_objectSpread({}, ac), {}, (0, _defineProperty2["default"])({}, val, val));
  }, {});

  var currentpractitionersById = values[_constants.practitionerParticipants].reduce(function (ac, val) {
    return _objectSpread(_objectSpread({}, ac), {}, (0, _defineProperty2["default"])({}, val, val));
  }, {});

  var cleanParticipants = function cleanParticipants(refs, lookup) {
    refs.forEach(function (ref) {
      if (!lookup[ref]) {
        delete participantByKey[ref];
      }
    });
  };

  cleanParticipants(initialValues.practitionerParticipants, currentpractitionersById);
  cleanParticipants(initialValues.managingOrganizations, currentManagingOrgValuesyId);
  return participantByKey;
};

var submitForm = function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(values, initialValues, fhirBaseURL, organizations, practitioners, t) {
    var initialCareTeam, id, uuid, _ref3, meta, text, participant, nonMetaFields, allPractitionersById, practitionerParticipantsById, organizationsById, managingOrgsById, carriedOverParticipantsById, finalParticipantsById, managingOrgsPayload, careTeamId, payload, serve, successNotificationMessage;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            initialCareTeam = initialValues.initialCareTeam, id = initialValues.id, uuid = initialValues.uuid;
            _ref3 = initialCareTeam !== null && initialCareTeam !== void 0 ? initialCareTeam : {}, meta = _ref3.meta, text = _ref3.text, participant = _ref3.participant, nonMetaFields = (0, _objectWithoutProperties2["default"])(_ref3, _excluded);
            allPractitionersById = (0, _lodash.keyBy)(practitioners, function (practitioner) {
              return "".concat(_constants.practitionerResourceType, "/").concat(practitioner.id);
            });
            practitionerParticipantsById = {};

            values[_constants.practitionerParticipants].forEach(function (id) {
              var fullPractitionerObj = allPractitionersById[id];
              practitionerParticipantsById[id] = {
                member: {
                  reference: id,
                  display: getPatientName(fullPractitionerObj)
                }
              };
            });

            organizationsById = (0, _lodash.keyBy)(organizations, function (org) {
              return "".concat(_constants.organizationResourceType, "/").concat(org.id);
            });
            managingOrgsById = {};

            values[_constants.managingOrganizations].forEach(function (id) {
              var _organizationsById$id;

              var orgName = (_organizationsById$id = organizationsById[id]) === null || _organizationsById$id === void 0 ? void 0 : _organizationsById$id.name;
              var orgDisplay = orgName ? {
                display: organizationsById[id].name
              } : {};
              managingOrgsById[id] = {
                role: [{
                  coding: [{
                    system: 'http://snomed.info/sct',
                    code: '394730007',
                    display: 'Healthcare related organization'
                  }]
                }],
                member: _objectSpread(_objectSpread({}, orgDisplay), {}, {
                  reference: id
                })
              };
            });

            carriedOverParticipantsById = getCarriedOverParticipants(values, initialValues);
            finalParticipantsById = _objectSpread(_objectSpread(_objectSpread({}, carriedOverParticipantsById), practitionerParticipantsById), managingOrgsById);
            managingOrgsPayload = Object.values(managingOrgsById).map(function (obj) {
              return obj.member;
            });
            careTeamId = uuid ? uuid : (0, _uuid.v4)();
            payload = _objectSpread(_objectSpread({}, nonMetaFields), {}, {
              resourceType: _constants.FHIR_CARE_TEAM,
              identifier: [{
                use: 'official',
                value: careTeamId
              }],
              id: id ? id : careTeamId,
              name: values.name,
              status: values.status,
              participant: Object.values(finalParticipantsById),
              managingOrganization: managingOrgsPayload
            });
            serve = new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.FHIR_CARE_TEAM);
            successNotificationMessage = t('Successfully added CareTeams');

            if (id) {
              successNotificationMessage = t('Successfully updated CareTeams');
            }

            _context.next = 18;
            return serve.update(payload).then(function () {
              return (0, _notifications.sendSuccessNotification)(successNotificationMessage);
            })["catch"](function () {
              (0, _notifications.sendErrorNotification)(t('There was a problem fetching the Care Team'));
            })["finally"](function () {
              return _connectedReducerRegistry.history.push(_constants.URL_CARE_TEAM);
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function submitForm(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.submitForm = submitForm;

function getPatientName(obj) {
  if (!obj) {
    return '';
  }

  var names = obj.name;
  var officialName = (0, _reactUtils.getObjLike)(names, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL)[0];
  return (0, _reactUtils.parseFhirHumanName)(officialName);
}

var defaultInitialValues = (_defaultInitialValues = {}, (0, _defineProperty2["default"])(_defaultInitialValues, _constants.uuid, ''), (0, _defineProperty2["default"])(_defaultInitialValues, _constants.id, ''), (0, _defineProperty2["default"])(_defaultInitialValues, _constants.name, ''), (0, _defineProperty2["default"])(_defaultInitialValues, _constants.status, 'active'), (0, _defineProperty2["default"])(_defaultInitialValues, "initialCareTeam", undefined), (0, _defineProperty2["default"])(_defaultInitialValues, _constants.managingOrganizations, []), (0, _defineProperty2["default"])(_defaultInitialValues, _constants.organizationParticipants, []), (0, _defineProperty2["default"])(_defaultInitialValues, _constants.practitionerParticipants, []), _defaultInitialValues);
exports.defaultInitialValues = defaultInitialValues;

var getCareTeamFormFields = function getCareTeamFormFields(careTeam) {
  var _careTeam$managingOrg;

  if (!careTeam) {
    return defaultInitialValues;
  }

  var id = careTeam.id,
      identifier = careTeam.identifier,
      name = careTeam.name,
      status = careTeam.status,
      participant = careTeam.participant;
  var officialIdentifier = (0, _reactUtils.getObjLike)(identifier, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL);
  var participantRefs = (participant !== null && participant !== void 0 ? participant : []).map(function (participant) {
    var _participant$member;

    return (_participant$member = participant.member) === null || _participant$member === void 0 ? void 0 : _participant$member.reference;
  }).filter(function (x) {
    return x !== undefined;
  });
  var practitionerRefs = participantRefs.filter(function (ref) {
    return ref.startsWith(_constants.practitionerResourceType);
  });
  var organizationRefs = participantRefs.filter(function (ref) {
    return ref.startsWith(_constants.organizationResourceType);
  });
  var managingOrgsRefs = ((_careTeam$managingOrg = careTeam.managingOrganization) !== null && _careTeam$managingOrg !== void 0 ? _careTeam$managingOrg : []).map(function (ref) {
    return ref.reference;
  }).filter(function (ref) {
    return !!ref;
  });
  return {
    uuid: (0, _lodash.get)(officialIdentifier, '0.value', undefined),
    id: id,
    name: name,
    status: status,
    initialCareTeam: careTeam,
    practitionerParticipants: practitionerRefs,
    organizationParticipants: organizationRefs,
    managingOrganizations: managingOrgsRefs
  };
};

exports.getCareTeamFormFields = getCareTeamFormFields;

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

var getPractitionerSelectOptions = function getPractitionerSelectOptions() {
  var resources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return resources.map(function (res) {
    return {
      value: "".concat(_constants.practitionerResourceType, "/").concat(res.id),
      label: getPatientName(res)
    };
  });
};

exports.getPractitionerSelectOptions = getPractitionerSelectOptions;

var selectFilterFunction = function selectFilterFunction(inputValue, option) {
  var _option$label;

  return !!(option !== null && option !== void 0 && (_option$label = option.label) !== null && _option$label !== void 0 && _option$label.toLowerCase().includes(inputValue.toLowerCase()));
};

exports.selectFilterFunction = selectFilterFunction;