"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.parseTableData = parseTableData;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _Form = require("./Form");

var _lodash = require("lodash");

var _fhirLocationManagement = require("@opensrp/fhir-location-management");

var _constants = require("../../constants");

var _utils = require("./utils");

var _reactQuery = require("react-query");

var _mls = require("../../mls");

var _rbac = require("@opensrp/rbac");

var _excluded = ["data", "isLoading", "error"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function parseTableData(locationNode) {
  var data = [];
  locationNode.forEach(function (location) {
    var _partOf$display;

    var model = location.model;
    var _model$node = model.node,
        id = _model$node.id,
        name = _model$node.name,
        status = _model$node.status,
        partOf = _model$node.partOf,
        description = _model$node.description;
    data.push({
      id: id,
      key: model.nodeId,
      name: name,
      partOf: (_partOf$display = partOf === null || partOf === void 0 ? void 0 : partOf.display) !== null && _partOf$display !== void 0 ? _partOf$display : '-',
      description: description,
      status: status,
      physicalType: (0, _lodash.get)(model.node, 'physicalType.coding.0.display'),
      node: location.model.node
    });
  });
  return data;
}

var AffiliationTable = function AffiliationTable(props) {
  var baseUrl = props.baseUrl,
      locationNodes = props.locationNodes;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      seeModal = _useState2[0],
      setSeeModal = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      location = _useState4[0],
      setLocation = _useState4[1];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useQuery = (0, _reactQuery.useQuery)([_constants.organizationAffiliationResourceType], function () {
    return (0, _reactUtils.loadAllResources)(baseUrl, _constants.organizationAffiliationResourceType);
  }, {
    select: function select(res) {
      return (0, _reactUtils.getResourcesFromBundle)(res);
    }
  }),
      affiliationsData = _useQuery.data,
      affiliationsLoading = _useQuery.isLoading,
      affiliationsError = _useQuery.error,
      affiliationsQuery = (0, _objectWithoutProperties2["default"])(_useQuery, _excluded);

  var _useQuery2 = (0, _reactQuery.useQuery)([_constants.organizationResourceType], function () {
    return (0, _reactUtils.loadAllResources)(baseUrl, _constants.organizationResourceType);
  }, {
    select: function select(res) {
      return (0, _reactUtils.getResourcesFromBundle)(res);
    }
  }),
      orgsData = _useQuery2.data,
      orgsLoading = _useQuery2.isLoading,
      orgsError = _useQuery2.error;

  if (affiliationsError && !affiliationsData || orgsError && !orgsData) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: t('Unable to load teams or teams assignments at the moment')
    });
  }

  var tableDispData = parseTableData(locationNodes);
  var affiliationsByLocId = (0, _utils.reformatOrganizationByLocation)(affiliationsData !== null && affiliationsData !== void 0 ? affiliationsData : []);
  var columns = [{
    title: t('Name'),
    dataIndex: 'name'
  }, {
    title: t('Assigned teams'),
    render: function render(_, record) {
      var _affiliationsByLocId$;

      var id = record.id;
      var affiliations = (_affiliationsByLocId$ = affiliationsByLocId["".concat(_fhirLocationManagement.locationResourceType, "/").concat(id)]) !== null && _affiliationsByLocId$ !== void 0 ? _affiliationsByLocId$ : [];
      return affiliations.map(function (affiliation) {
        var _affiliation$organiza;

        return (_affiliation$organiza = affiliation.organization) === null || _affiliation$organiza === void 0 ? void 0 : _affiliation$organiza.display;
      }).join(', ');
    }
  }, {
    title: t('Actions'),
    width: '10%',
    render: function render(_, record) {
      return _react["default"].createElement(_rbac.RbacCheck, {
        permissions: ['OrganizationAffiliation.update']
      }, _react["default"].createElement(_antd.Button, {
        type: "link",
        className: "action-button",
        onClick: function onClick() {
          var node = record.node;
          setLocation(node);
          setSeeModal(true);
        }
      }, t('Edit')));
    }
  }];

  var modalCancel = function modalCancel() {
    return setSeeModal(false);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Form.AffiliationModal, {
    baseUrl: baseUrl,
    location: location,
    visible: seeModal,
    allOrgs: orgsData !== null && orgsData !== void 0 ? orgsData : [],
    affiliationsByLoc: affiliationsByLocId,
    handleCancel: modalCancel,
    allAffiliations: affiliationsData !== null && affiliationsData !== void 0 ? affiliationsData : []
  }), _react["default"].createElement(_reactUtils.TableLayout, {
    loading: orgsLoading || affiliationsLoading || affiliationsQuery.isRefetching,
    id: "org-affiliation",
    persistState: true,
    datasource: tableDispData,
    columns: columns
  }));
};

var _default = AffiliationTable;
exports["default"] = _default;