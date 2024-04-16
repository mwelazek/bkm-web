"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewDetails = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _reactQuery = require("react-query");

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../../constants");

var _mls = require("../../mls");

var _lodash = require("lodash");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function categorizeIncludedResources(resources, careTeamId) {
  var _thisCareTeam$subject, _thisCareTeam$partici, _thisCareTeam$managin;

  var resByIds = (0, _lodash.keyBy)(resources, function (resource) {
    return "".concat(resource.resourceType, "/").concat(resource.id);
  });
  var thisCareTeam = resByIds["".concat(_constants.careTeamResourceType, "/").concat(careTeamId)];
  var subjectRef = (_thisCareTeam$subject = thisCareTeam.subject) === null || _thisCareTeam$subject === void 0 ? void 0 : _thisCareTeam$subject.reference;
  var subjectResource = subjectRef ? resByIds[subjectRef] : undefined;
  var participants = [];
  var managingOrganizations = [];
  (_thisCareTeam$partici = thisCareTeam.participant) === null || _thisCareTeam$partici === void 0 ? void 0 : _thisCareTeam$partici.forEach(function (participant) {
    var _participant$member;

    var ref = (_participant$member = participant.member) === null || _participant$member === void 0 ? void 0 : _participant$member.reference;
    var referencedResource = resByIds[ref !== null && ref !== void 0 ? ref : ''];

    if (referencedResource) {
      participants.push(referencedResource);
    }
  });
  (_thisCareTeam$managin = thisCareTeam.managingOrganization) === null || _thisCareTeam$managin === void 0 ? void 0 : _thisCareTeam$managin.forEach(function (organization) {
    var ref = organization.reference;
    var referencedResource = resByIds[ref !== null && ref !== void 0 ? ref : ''];

    if (referencedResource) {
      managingOrganizations.push(referencedResource);
    }
  });
  var participantByResourceType = (0, _lodash.groupBy)(participants, 'resourceType');
  return {
    subjectResource: subjectResource,
    participantByResourceType: participantByResourceType,
    thisCareTeam: thisCareTeam,
    managingOrganizations: managingOrganizations
  };
}

var ViewDetails = function ViewDetails(props) {
  var _careTeamKeyValues;

  var careTeamId = props.careTeamId,
      fhirBaseURL = props.fhirBaseURL;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useSearchParams = (0, _reactUtils.useSearchParams)(),
      removeParam = _useSearchParams.removeParam;

  var _useQuery = (0, _reactQuery.useQuery)({
    queryKey: [_constants.careTeamResourceType, careTeamId],
    queryFn: function queryFn() {
      return new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.careTeamResourceType).list({
        _id: careTeamId,
        _include: "".concat(_constants.careTeamResourceType, ":*")
      });
    },
    enabled: !!careTeamId,
    select: function select(res) {
      var resEntries = (0, _reactUtils.getResourcesFromBundle)(res);
      return categorizeIncludedResources(resEntries, careTeamId);
    }
  }),
      data = _useQuery.data,
      isLoading = _useQuery.isLoading,
      error = _useQuery.error;

  var careTeam = data === null || data === void 0 ? void 0 : data.thisCareTeam;
  var participantByResourceType = data === null || data === void 0 ? void 0 : data.participantByResourceType;
  var managingOrganizations = data === null || data === void 0 ? void 0 : data.managingOrganizations;
  var officialIdentifier = (0, _reactUtils.getObjLike)(careTeam === null || careTeam === void 0 ? void 0 : careTeam.identifier, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL);
  var careTeamKeyValues = (_careTeamKeyValues = {}, (0, _defineProperty2["default"])(_careTeamKeyValues, t('CareTeam ID'), careTeam === null || careTeam === void 0 ? void 0 : careTeam.id), (0, _defineProperty2["default"])(_careTeamKeyValues, t('Identifier'), (0, _lodash.get)(officialIdentifier, '0.value')), (0, _defineProperty2["default"])(_careTeamKeyValues, t('Name'), careTeam === null || careTeam === void 0 ? void 0 : careTeam.name), (0, _defineProperty2["default"])(_careTeamKeyValues, t('status'), careTeam === null || careTeam === void 0 ? void 0 : careTeam.status), (0, _defineProperty2["default"])(_careTeamKeyValues, t('Participants'), _react["default"].createElement("ul", null, Object.entries(participantByResourceType !== null && participantByResourceType !== void 0 ? participantByResourceType : {}).map(function (_ref, index) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        resourceType = _ref2[0],
        resources = _ref2[1];

    return _react["default"].createElement("li", {
      key: index
    }, function () {
      var subKeyValues = (0, _defineProperty2["default"])({}, resourceType, _react["default"].createElement("ul", {
        id: "care-team-participants"
      }, resources.map(function (resource) {
        var res = resource;
        var practitionerName = (0, _reactUtils.getObjLike)(res.name, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL)[0];
        return _react["default"].createElement("li", {
          key: resource.id
        }, typeof res.name === 'string' ? res.name : (0, _reactUtils.parseFhirHumanName)(practitionerName));
      })));
      return _react["default"].createElement(_react.Fragment, {
        key: index
      }, resources.length && (0, _reactUtils.renderObjectAsKeyvalue)(subKeyValues));
    }());
  }))), (0, _defineProperty2["default"])(_careTeamKeyValues, t('Managing organizations'), managingOrganizations !== null && managingOrganizations !== void 0 && managingOrganizations.length ? _react["default"].createElement("ul", {
    id: "managing-organizations"
  }, managingOrganizations.map(function (organization) {
    return _react["default"].createElement("li", {
      key: organization.id
    }, organization.name);
  })) : _react["default"].createElement(_antd.Alert, {
    description: t('No managing organizations found'),
    type: "warning"
  })), _careTeamKeyValues);
  return _react["default"].createElement(_antd.Col, {
    className: "view-details-content"
  }, _react["default"].createElement("div", {
    className: "flex-right"
  }, _react["default"].createElement(_antd.Button, {
    "data-testid": "cancel",
    icon: _react["default"].createElement(_icons.CloseOutlined, null),
    shape: "circle",
    type: "text",
    onClick: function onClick() {
      return removeParam(_reactUtils.viewDetailsQuery);
    }
  })), error && !data ? _react["default"].createElement(_reactUtils.BrokenPage, {
    errorMessage: "".concat(error)
  }) : _react["default"].createElement(_react["default"].Fragment, null, isLoading ? _react["default"].createElement(_antd.Alert, {
    description: t('Fetching Care team'),
    type: "info",
    showIcon: true,
    icon: _react["default"].createElement(_icons.SyncOutlined, {
      spin: true
    })
  }) : careTeam ? (0, _reactUtils.renderObjectAsKeyvalue)(careTeamKeyValues) : _react["default"].createElement(_antd.Alert, {
    description: t('Care Team not found'),
    type: "warning"
  })));
};

exports.ViewDetails = ViewDetails;