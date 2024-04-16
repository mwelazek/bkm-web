"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LocationUnitList = void 0;
exports.loadSingleLocation = loadSingleLocation;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = require("react-helmet");

var _reactUtils = require("@opensrp/react-utils");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _LocationUnitDetail = _interopRequireDefault(require("../LocationUnitDetail"));

var _reactRouterDom = require("react-router-dom");

var _locationUnits = require("../../ducks/location-units");

var _constants = require("../../constants");

var _reactQuery = require("react-query");

var _mls = require("../../mls");

var _Table = _interopRequireDefault(require("./Table"));

var _LocationTree = _interopRequireDefault(require("../LocationTree"));

var _notifications = require("@opensrp/notifications");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _locationHierarchy = require("../../ducks/location-hierarchy");

var _utils = require("../../ducks/locationHierarchy/utils");

require("./LocationUnitList.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_reduxReducerRegistry["default"].register(_locationUnits.locationUnitsReducerName, _locationUnits.locationUnitsReducer);

_reduxReducerRegistry["default"].register(_locationHierarchy.reducerName, _locationHierarchy.reducer);

function loadSingleLocation(_x, _x2, _x3, _x4) {
  return _loadSingleLocation.apply(this, arguments);
}

function _loadSingleLocation() {
  _loadSingleLocation = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(row, opensrpBaseURL, setDetail, t) {
    var serve;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setDetail('loading');
            serve = new _reactUtils.OpenSRPService(_constants.LOCATION_UNIT_ENDPOINT, opensrpBaseURL);
            _context2.next = 4;
            return serve.read(row.id, {
              is_jurisdiction: true
            }).then(function (res) {
              setDetail(res);
            })["catch"](function () {
              return (0, _notifications.sendErrorNotification)(t('There was a problem fetching Location Unit details'));
            });

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadSingleLocation.apply(this, arguments);
}

var LocationUnitList = function LocationUnitList(props) {
  var _locationUnits$data, _ref;

  var opensrpBaseURL = props.opensrpBaseURL,
      filterByParentId = props.filterByParentId;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      detail = _useState2[0],
      setDetail = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      currentClickedNode = _useState4[0],
      setCurrentClickedNode = _useState4[1];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var history = (0, _reactRouterDom.useHistory)();
  var locationUnits = (0, _reactQuery.useQuery)(_constants.LOCATION_UNIT_FIND_BY_PROPERTIES, function () {
    return (0, _utils.getBaseTreeNode)(opensrpBaseURL, filterByParentId);
  }, {
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching Location Units'));
    },
    select: function select(res) {
      return res;
    }
  });

  var handleAddLocation = function handleAddLocation() {
    var query = '?';
    if (currentClickedNode) query += "parentId=".concat(currentClickedNode.id);
    history.push({
      pathname: _constants.URL_LOCATION_UNIT_ADD,
      search: query
    });
  };

  var treeDataQuery = (0, _reactQuery.useQueries)(((_locationUnits$data = locationUnits.data) !== null && _locationUnits$data !== void 0 ? _locationUnits$data : []).map(function (location) {
    return {
      queryKey: [_constants.LOCATION_HIERARCHY, location.id],
      queryFn: function queryFn() {
        return new _reactUtils.OpenSRPService(_constants.LOCATION_HIERARCHY, opensrpBaseURL).read(location.id);
      },
      onError: function onError() {
        return (0, _notifications.sendErrorNotification)(t('There was a problem fetching the location hierachy'));
      },
      select: function select(res) {
        return (0, _utils.generateJurisdictionTree)(res);
      }
    };
  }));
  var treeData = treeDataQuery.map(function (query) {
    return query.data;
  }).filter(function (e) {
    return e !== undefined;
  });
  var toDispNodes = (_ref = currentClickedNode ? currentClickedNode.children : treeData) !== null && _ref !== void 0 ? _ref : [];
  var sortedNodes = (0, _toConsumableArray2["default"])(toDispNodes).sort(function (a, b) {
    return a.model.node.name.localeCompare(b.model.node.name);
  });
  var tableNodes = sortedNodes;

  if (currentClickedNode) {
    tableNodes = [currentClickedNode].concat((0, _toConsumableArray2["default"])(sortedNodes));
  }

  var tableData = tableNodes.map(function (locationNode) {
    var location = locationNode.model;
    return {
      label: location.label,
      id: location.id,
      geographicLevel: location.node.attributes.geographicLevel
    };
  });

  if (locationUnits.isLoading || treeDataQuery.length > 0 && treeDataQuery.every(function (query) {
    return query.isLoading;
  })) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  return _react["default"].createElement("section", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, t('Location Unit'))), _react["default"].createElement(_reactUtils.PageHeader, {
    title: t('Location Unit Management')
  }), _react["default"].createElement(_antd.Row, null, _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3",
    span: 6
  }, _react["default"].createElement(_LocationTree["default"], {
    data: treeData,
    selectedNode: currentClickedNode,
    onSelect: function onSelect(node) {
      return setCurrentClickedNode(node);
    }
  })), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3 border-left",
    span: detail ? 13 : 18
  }, _react["default"].createElement("div", {
    className: "mb-3 d-flex justify-content-between p-3"
  }, _react["default"].createElement("h6", {
    className: "mt-4"
  }, currentClickedNode ? tableData[0].label : t('Location Unit')), _react["default"].createElement("div", null, _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: handleAddLocation
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('Add Location Unit')))), _react["default"].createElement("div", {
    className: "bg-white p-3"
  }, _react["default"].createElement(_Table["default"], {
    data: tableData,
    onViewDetails: function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(row) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return loadSingleLocation(row, opensrpBaseURL, setDetail, t);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x5) {
        return _ref2.apply(this, arguments);
      };
    }()
  }))), detail ? _react["default"].createElement(_antd.Col, {
    className: "pl-3",
    span: 5
  }, detail === 'loading' ? _react["default"].createElement(_antd.Spin, {
    size: "large"
  }) : _react["default"].createElement(_LocationUnitDetail["default"], (0, _extends2["default"])({
    onClose: function onClose() {
      return setDetail(null);
    }
  }, detail))) : ''));
};

exports.LocationUnitList = LocationUnitList;
var _default = LocationUnitList;
exports["default"] = _default;