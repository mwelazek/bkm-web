"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetLocationHierarchy = exports.useGetLocation = exports.serializeTree = exports.parseFHIRHierarchy = exports.generateFhirLocationTree = exports.convertApiResToTree = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = require("lodash");

var _cycle = _interopRequireDefault(require("cycle"));

var _treeModel = _interopRequireDefault(require("tree-model"));

var _reactQuery = require("react-query");

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var parseFhirChildren = function parseFhirChildren(rawNodeMap) {
  return rawNodeMap.map(function (child) {
    var _treeNode$children;

    var treeNode = child.treeNode;

    var parsedNode = _objectSpread(_objectSpread({}, treeNode), {}, {
      children: parseFhirChildren((_treeNode$children = treeNode.children) !== null && _treeNode$children !== void 0 ? _treeNode$children : [])
    });

    return parsedNode;
  });
};

var parseFHIRHierarchy = function parseFHIRHierarchy(fhirTree) {
  var _rawNode$children;

  var rawClone = (0, _lodash.cloneDeep)(fhirTree);
  var listOfNodes = rawClone.LocationHierarchyTree.locationsHierarchy.listOfNodes;
  var rawNode = listOfNodes.treeNode[0];

  var parsedNode = _objectSpread(_objectSpread({}, rawNode), {}, {
    children: parseFhirChildren((_rawNode$children = rawNode.children) !== null && _rawNode$children !== void 0 ? _rawNode$children : [])
  });

  return parsedNode;
};

exports.parseFHIRHierarchy = parseFHIRHierarchy;

var generateFhirLocationTree = function generateFhirLocationTree(rootNode) {
  var tree = new _treeModel["default"]();
  var hierarchy = parseFHIRHierarchy(rootNode);
  var root = tree.parse(hierarchy);
  return root;
};

exports.generateFhirLocationTree = generateFhirLocationTree;

var convertApiResToTree = function convertApiResToTree(apiRes) {
  var _apiRes$entry;

  var rootNode = (_apiRes$entry = apiRes.entry) === null || _apiRes$entry === void 0 ? void 0 : _apiRes$entry[0].resource;

  if (!rootNode) {
    return;
  }

  return generateFhirLocationTree(rootNode);
};

exports.convertApiResToTree = convertApiResToTree;

var serializeTree = function serializeTree(trees) {
  if (!trees) {
    return JSON.stringify(undefined);
  }

  var sanitizeTrees = Array.isArray(trees) ? trees : [trees];
  return JSON.stringify(sanitizeTrees.map(function (tree) {
    return JSON.stringify(_cycle["default"].decycle(tree));
  }));
};

exports.serializeTree = serializeTree;

var useGetLocationHierarchy = function useGetLocationHierarchy(baseUrl, rootId) {
  var queryOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hierarchyParams = {
    _id: rootId
  };
  return (0, _reactQuery.useQuery)([_constants.locationHierarchyResourceType, hierarchyParams], (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _reactUtils.FHIRServiceClass(baseUrl, _constants.locationHierarchyResourceType).list(hierarchyParams));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), _objectSpread({
    select: function select(res) {
      return convertApiResToTree(res);
    },
    refetchInterval: false,
    staleTime: Infinity
  }, queryOptions));
};

exports.useGetLocationHierarchy = useGetLocationHierarchy;

var useGetLocation = function useGetLocation(baseUrl, locId) {
  var serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.locationResourceType);
  return (0, _reactQuery.useQuery)([_constants.locationResourceType, locId], function () {
    return serve.read(locId);
  }, {
    select: function select(res) {
      return res;
    },
    enabled: !!locId
  });
};

exports.useGetLocation = useGetLocation;