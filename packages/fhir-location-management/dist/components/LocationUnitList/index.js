"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationUnitList = void 0;
exports.parseTableData = parseTableData;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = require("react-helmet");

var _lodash = require("lodash");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _icons = require("@ant-design/icons");

var _LocationUnitDetail = require("../LocationUnitDetail");

var _reactRouterDom = require("react-router-dom");

var _constants = require("../../constants");

var _Table = _interopRequireDefault(require("./Table"));

var _LocationTree = _interopRequireDefault(require("../LocationTree"));

var _utils = require("../../helpers/utils");

require("./LocationUnitList.css");

var _reactRedux = require("react-redux");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _locationTreeState = require("../../ducks/location-tree-state");

var _mls = require("../../mls");

var _rbac = require("@opensrp/rbac");

var _RootLocationWizard = require("../RootLocationWizard");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_reduxReducerRegistry["default"].register(_locationTreeState.reducerName, _locationTreeState.reducer);

function parseTableData(hierarchy) {
  var data = [];
  hierarchy.forEach(function (location) {
    var _model$node$partOf$di, _model$node$partOf, _model$node, _model$node2;

    var model = location.model;
    data.push({
      id: model.node.id,
      key: model.nodeId,
      name: model.node.name,
      partOf: (_model$node$partOf$di = (_model$node$partOf = model.node.partOf) === null || _model$node$partOf === void 0 ? void 0 : _model$node$partOf.display) !== null && _model$node$partOf$di !== void 0 ? _model$node$partOf$di : '-',
      description: (_model$node = model.node) === null || _model$node === void 0 ? void 0 : _model$node.description,
      status: (_model$node2 = model.node) === null || _model$node2 === void 0 ? void 0 : _model$node2.status,
      physicalType: (0, _lodash.get)(model.node, 'physicalType.coding.0.display')
    });
  });
  return data;
}

var LocationUnitList = function LocationUnitList(props) {
  var _ref;

  var fhirBaseURL = props.fhirBaseURL,
      fhirRootLocationId = props.fhirRootLocationId;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      detailId = _useState2[0],
      setDetailId = _useState2[1];

  var selectedNode = (0, _reactRedux.useSelector)(function (state) {
    return (0, _locationTreeState.getSelectedNode)(state);
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var history = (0, _reactRouterDom.useHistory)();

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      showWizard = _useState4[0],
      setShowWizard = _useState4[1];

  var _useGetLocationHierar = (0, _utils.useGetLocationHierarchy)(fhirBaseURL, fhirRootLocationId, {
    enabled: !showWizard,
    onError: function onError(error) {
      if (error.statusCode === 404) {
        setShowWizard(true);
      }
    }
  }),
      treeData = _useGetLocationHierar.data,
      treeIsLoading = _useGetLocationHierar.isLoading,
      treeError = _useGetLocationHierar.error,
      treeIsFetching = _useGetLocationHierar.isFetching;

  if (treeIsLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (showWizard) {
    return _react["default"].createElement(_RootLocationWizard.RootLocationWizard, {
      fhirBaseUrl: fhirBaseURL,
      rootLocationId: fhirRootLocationId
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

  var tableDispData = parseTableData(tableNodes);
  var pageTitle = t('Location Unit Management');
  return _react["default"].createElement(_react["default"].Fragment, null, treeIsFetching && _react["default"].createElement(_antd.Alert, {
    type: "info",
    message: t('Refreshing data'),
    description: t('Request to update the location hierarchy is taking a bit long to respond.'),
    banner: true,
    showIcon: true
  }), _react["default"].createElement("section", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement(_antd.Row, null, _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3",
    span: 6
  }, _react["default"].createElement(_LocationTree["default"], {
    "data-testid": "hierarchy-display",
    data: treeData.children,
    selectedNode: selectedNode,
    onSelect: function onSelect(node) {
      dispatch((0, _locationTreeState.setSelectedNode)(node));
    }
  })), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3 border-left",
    span: detailId ? 13 : 18
  }, _react["default"].createElement("div", {
    className: "mb-3 d-flex justify-content-between p-3"
  }, _react["default"].createElement("h6", {
    className: "mt-4"
  }, selectedNode ? selectedNode.model.node.name : t('Location Unit')), _react["default"].createElement(_rbac.RbacCheck, {
    permissions: ['Location.create']
  }, _react["default"].createElement("div", null, _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      if (selectedNode) {
        var queryParams = {
          parentId: selectedNode.model.nodeId
        };
        var searchString = new URLSearchParams(queryParams).toString();
        history.push("".concat(_constants.URL_LOCATION_UNIT_ADD, "?").concat(searchString));
      } else {
        history.push(_constants.URL_LOCATION_UNIT_ADD);
      }
    }
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('Add Location Unit'))))), _react["default"].createElement("div", {
    className: "bg-white p-3"
  }, _react["default"].createElement(_Table["default"], {
    data: tableDispData,
    onViewDetails: function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(row) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setDetailId(row.id);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  }))), detailId ? _react["default"].createElement(_LocationUnitDetail.LocationUnitDetail, {
    fhirBaseUrl: fhirBaseURL,
    onClose: function onClose() {
      return setDetailId('');
    },
    detailId: detailId
  }) : null)));
};

exports.LocationUnitList = LocationUnitList;