"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJurisdictionTree = void 0;
exports.getBaseTreeNode = getBaseTreeNode;
exports.getHierarchyNode = getHierarchyNode;
exports.getHierarchyNodeFromArray = getHierarchyNodeFromArray;
exports.serializeTree = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _lodash = require("lodash");

var _cycle = _interopRequireDefault(require("cycle"));

var _treeModel = _interopRequireDefault(require("tree-model"));

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getFilterParams = _reactUtils.OpenSRPService.getFilterParams;

var parseChildren = function parseChildren(rawNodeMap, parent) {
  var rawHierarchyNode = Object.entries(rawNodeMap).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        _key = _ref2[0],
        value = _ref2[1];

    return value;
  });
  return rawHierarchyNode.map(function (child) {
    var parsedNode = _objectSpread(_objectSpread({}, child), {}, {
      title: child.label,
      key: "".concat(child.id, "-").concat(parent),
      children: child.children ? parseChildren(child.children, parent) : []
    });

    return parsedNode;
  });
};

var parseHierarchy = function parseHierarchy(raw) {
  var rawClone = (0, _lodash.cloneDeep)(raw);
  var map = rawClone.locationsHierarchy.map;
  var rawNode = Object.entries(map).map(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        _key = _ref4[0],
        value = _ref4[1];

    return value;
  })[0];

  var parsedNode = _objectSpread(_objectSpread({}, rawNode), {}, {
    title: rawNode.label,
    key: rawNode.id,
    children: rawNode.children ? parseChildren(rawNode.children, rawNode.id) : []
  });

  return parsedNode;
};

var generateJurisdictionTree = function generateJurisdictionTree(apiResponse) {
  var tree = new _treeModel["default"]();
  var hierarchy = parseHierarchy(apiResponse);
  var root = tree.parse(hierarchy);
  return root;
};

exports.generateJurisdictionTree = generateJurisdictionTree;

function getBaseTreeNode(opensrpBaseURL, filterByParentId) {
  var serve = new _reactUtils.OpenSRPService(_constants.LOCATION_UNIT_FIND_BY_PROPERTIES, opensrpBaseURL);
  return serve.list({
    is_jurisdiction: true,
    return_geometry: false,
    properties_filter: getFilterParams(_objectSpread({
      status: 'Active'
    }, _objectSpread({}, filterByParentId ? {
      parentId: null
    } : {
      geographicLevel: 0
    })))
  });
}

var serializeTree = function serializeTree(trees) {
  return JSON.stringify(trees.map(function (tree) {
    return JSON.stringify(_cycle["default"].decycle(tree));
  }));
};

exports.serializeTree = serializeTree;

function getHierarchyNode(hierarchy, id) {
  var tree = new _treeModel["default"]().parse(hierarchy);
  var result = undefined;
  tree.walk(function (node) {
    if (node.model.id === id) {
      result = node.model;
      return false;
    } else return true;
  });
  return result;
}

function getHierarchyNodeFromArray(hierarchy, id) {
  var result = hierarchy.flatMap(function (tree) {
    var found = getHierarchyNode(tree, id);
    if (found) return found;else return undefined;
  });
  return result.find(function (e) {
    return e !== undefined;
  });
}