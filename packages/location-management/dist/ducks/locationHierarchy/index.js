"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TREE_FETCHED = exports.DEFOREST = void 0;
exports.deforest = deforest;
exports.fetchTree = fetchTree;
exports.getTreesByRootId = exports.getTreesByIds = exports.getSearchQuery = exports.getRootJurisdictionId = exports.getLocationsByNameAndId = exports.getLocationsByLevel = exports.getGeoLevel = void 0;
exports.hierarchyReducer = hierarchyReducer;
exports.initialState = exports.hierarchyReducerName = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _seamlessImmutable = _interopRequireDefault(require("seamless-immutable"));

var _utils = require("./utils");

var _reselect = require("reselect");

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var hierarchyReducerName = 'locationHierarchy';
exports.hierarchyReducerName = hierarchyReducerName;
var TREE_FETCHED = 'opensrp/locations/hierarchy/TREE_FETCHED';
exports.TREE_FETCHED = TREE_FETCHED;
var DEFOREST = 'opensrp/locations/hierarchy/DEFOREST';
exports.DEFOREST = DEFOREST;

function fetchTree(apiResponse) {
  var treeId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var tree = (0, _utils.generateJurisdictionTree)(apiResponse);
  return {
    treeByRootId: (0, _defineProperty2["default"])({}, treeId ? treeId : tree.model.id, tree),
    type: TREE_FETCHED
  };
}

function deforest() {
  return {
    treeByRootId: {},
    type: DEFOREST
  };
}

var initialState = (0, _seamlessImmutable["default"])({
  treeByRootId: {}
});
exports.initialState = initialState;

function hierarchyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case TREE_FETCHED:
      return _objectSpread(_objectSpread({}, state), {}, {
        treeByRootId: _objectSpread(_objectSpread({}, state.treeByRootId), action.treeByRootId)
      });

    case DEFOREST:
      return _objectSpread(_objectSpread({}, state), {}, {
        treeByRootId: action.treeByRootId
      });

    default:
      return state;
  }
}

var getRootJurisdictionId = function getRootJurisdictionId(_, props) {
  return props.rootJurisdictionId;
};

exports.getRootJurisdictionId = getRootJurisdictionId;

var getGeoLevel = function getGeoLevel(_, props) {
  return props.geoLevel;
};

exports.getGeoLevel = getGeoLevel;

var getSearchQuery = function getSearchQuery(_, props) {
  return props.searchQuery;
};

exports.getSearchQuery = getSearchQuery;

var getTreesByRootId = function getTreesByRootId(state, _) {
  return state[hierarchyReducerName].treeByRootId;
};

exports.getTreesByRootId = getTreesByRootId;

var getTreesByIds = function getTreesByIds() {
  return (0, _reselect.createSelector)(getTreesByRootId, getRootJurisdictionId, function (treesById, rootIds) {
    var allTreesArray = (0, _lodash.values)(treesById);

    if (rootIds === undefined) {
      return allTreesArray;
    }

    var treesOfInterest = [];
    rootIds.forEach(function (rootId) {
      var treeOfInterest = treesById[rootId];

      if (treeOfInterest) {
        treesOfInterest.push(treeOfInterest);
      }
    });
    return treesOfInterest;
  });
};

exports.getTreesByIds = getTreesByIds;
var treeSelectors = getTreesByIds();

var getLocationsByLevel = function getLocationsByLevel() {
  return (0, _reselect.createSelector)(treeSelectors, getGeoLevel, function (trees, geoLevel) {
    var locationsOfInterest = [];
    trees.forEach(function (tree) {
      locationsOfInterest = [].concat((0, _toConsumableArray2["default"])(locationsOfInterest), (0, _toConsumableArray2["default"])(tree.all(function (node) {
        if (geoLevel === undefined) {
          return true;
        }

        return node.model.node.attributes.geographicLevel === geoLevel;
      })));
    });
    return locationsOfInterest;
  });
};

exports.getLocationsByLevel = getLocationsByLevel;
var geoLevelSelector = getLocationsByLevel();

var getLocationsByNameAndId = function getLocationsByNameAndId() {
  return (0, _reselect.createSelector)(geoLevelSelector, getSearchQuery, function (nodes, searchQuery) {
    if (searchQuery === undefined) {
      return nodes;
    }

    var matchesName = function matchesName(node) {
      return node.model.label.toLowerCase().includes(searchQuery.toLowerCase());
    };

    var matchesId = function matchesId(node) {
      return node.model.id === searchQuery;
    };

    return nodes.filter(function (node) {
      return matchesName(node) || matchesId(node);
    });
  });
};

exports.getLocationsByNameAndId = getLocationsByNameAndId;