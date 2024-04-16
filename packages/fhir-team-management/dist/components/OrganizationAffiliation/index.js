"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AffiliationList = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _reactUtils = require("@opensrp/react-utils");

var _antd = require("antd");

var _Table = _interopRequireDefault(require("./Table"));

var _reactRedux = require("react-redux");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _fhirLocationManagement = require("@opensrp/fhir-location-management");

var _mls = require("../../mls");

var _rbac = require("@opensrp/rbac");

var reducerName = _fhirLocationManagement.locationTreeStateDucks.reducerName,
    reducer = _fhirLocationManagement.locationTreeStateDucks.reducer,
    setSelectedNode = _fhirLocationManagement.locationTreeStateDucks.setSelectedNode,
    getSelectedNode = _fhirLocationManagement.locationTreeStateDucks.getSelectedNode;

_reduxReducerRegistry["default"].register(reducerName, reducer);

var AffiliationList = function AffiliationList(props) {
  var _ref;

  var fhirBaseURL = props.fhirBaseURL,
      fhirRootLocationId = props.fhirRootLocationId;
  var selectedNode = (0, _reactRedux.useSelector)(function (state) {
    return getSelectedNode(state);
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useGetLocationHierar = (0, _fhirLocationManagement.useGetLocationHierarchy)(fhirBaseURL, fhirRootLocationId),
      treeData = _useGetLocationHierar.data,
      treeIsLoading = _useGetLocationHierar.isLoading,
      treeError = _useGetLocationHierar.error;

  if (treeIsLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (treeError && !treeData) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: "".concat(treeError.message)
    });
  }

  if (!treeData) {
    return _react["default"].createElement(_reactUtils.Resource404, null);
  }

  var toDispNodes = (_ref = selectedNode ? selectedNode.children : treeData.children) !== null && _ref !== void 0 ? _ref : [];
  var sortedNodes = (0, _toConsumableArray2["default"])(toDispNodes).sort(function (a, b) {
    return a.model.node.name.localeCompare(b.model.node.name);
  });
  var tableNodes = sortedNodes;

  if (selectedNode) {
    tableNodes = [selectedNode].concat((0, _toConsumableArray2["default"])(sortedNodes));
  }

  var pageTitle = t('Team Assignment');
  return _react["default"].createElement("section", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement(_antd.Row, null, _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3",
    span: 6
  }, _react["default"].createElement(_fhirLocationManagement.Tree, {
    "data-testid": "hierarchy-display",
    data: treeData.children,
    selectedNode: selectedNode,
    onSelect: function onSelect(node) {
      dispatch(setSelectedNode(node));
    }
  })), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3 border-left",
    span: 18
  }, _react["default"].createElement("div", {
    className: "bg-white p-3"
  }, _react["default"].createElement(_rbac.RbacCheck, {
    permissions: ['OrganizationAffiliation.read']
  }, _react["default"].createElement(_Table["default"], {
    baseUrl: fhirBaseURL,
    locationNodes: tableNodes
  }))))));
};

exports.AffiliationList = AffiliationList;