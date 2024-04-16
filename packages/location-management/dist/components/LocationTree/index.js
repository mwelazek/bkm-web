"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tree = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

require("./tree.css");

var _mls = require("../../mls");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Tree = function Tree(props) {
  var data = props.data,
      _onSelect = props.onSelect,
      selectedNode = props.selectedNode;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      expandedKeys = _useState2[0],
      setExpandedKeys = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      searchValue = _useState4[0],
      setSearchValue = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      searchExpandedKeys = _useState6[0],
      setSearchExpandedKeys = _useState6[1];

  (0, _react.useEffect)(function () {
    var updateExpandedKeys = function updateExpandedKeys(keys) {
      return setExpandedKeys([].concat((0, _toConsumableArray2["default"])(expandedKeys), (0, _toConsumableArray2["default"])(keys)));
    };

    if (selectedNode) {
      var parentPath = selectedNode.getPath();
      parentPath = parentPath.slice(1, parentPath.length);
      var parentKeys = parentPath.map(function (node) {
        return node.model.id;
      });
      updateExpandedKeys(parentKeys);
    }

    if (searchValue) {
      var matchedNodes = [];
      data.forEach(function (tree) {
        var matchedNodesPerTree = tree.all(function (node) {
          return node.model.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        });
        matchedNodes = [].concat((0, _toConsumableArray2["default"])(matchedNodes), (0, _toConsumableArray2["default"])(matchedNodesPerTree));
      });
      var parentNodeKeys = matchedNodes.map(function (node) {
        if (node.parent) {
          return node.parent.model.id;
        }

        return undefined;
      }).filter(function (key) {
        return key !== undefined;
      });
      setSearchExpandedKeys(parentNodeKeys);
    } else {
      setSearchExpandedKeys([]);
    }
  }, [data, searchValue, selectedNode]);

  function expandHandler(keys, other) {
    var info = other;
    var node = info.node.data;
    var location = node.model;
    var thisNodeKey = location.id;

    if (info.expanded) {
      setExpandedKeys([].concat((0, _toConsumableArray2["default"])(expandedKeys), [thisNodeKey]));
    } else {
      var kys = expandedKeys.filter(function (key) {
        return key !== thisNodeKey;
      });
      setExpandedKeys(kys);
    }
  }

  function onChange(event) {
    var value = event.target.value;
    setSearchValue(value);
  }

  var buildTreeData = _react["default"].useCallback(function (data) {
    return data.map(function (itemNode) {
      var item = itemNode.model;
      var itemTitle = item.title;
      var index = itemTitle.toLowerCase().indexOf(searchValue.toLowerCase());
      var beforeStr = itemTitle.toLowerCase().substring(0, index);
      var afterStr = itemTitle.toLowerCase().substring(index + searchValue.length);

      var title = _react["default"].createElement("span", {
        key: item.id,
        title: itemTitle
      }, searchValue.length > 0 && index > -1 ? _react["default"].createElement(_react["default"].Fragment, null, beforeStr, _react["default"].createElement("span", {
        className: "searchValue"
      }, searchValue), afterStr) : item.title);

      return _objectSpread({
        data: itemNode,
        key: item.id,
        title: title
      }, item.children && {
        children: buildTreeData(itemNode.children)
      });
    });
  }, [searchValue]);

  return _react["default"].createElement("div", null, _react["default"].createElement(_antd.Input, {
    className: "mb-3",
    placeholder: t('Search'),
    size: "large",
    prefix: _react["default"].createElement(_icons.SearchOutlined, null),
    onChange: onChange
  }), _react["default"].createElement(_antd.Tree, {
    autoExpandParent: false,
    selectedKeys: selectedNode ? [selectedNode.model.id] : undefined,
    onExpand: expandHandler,
    expandedKeys: [].concat((0, _toConsumableArray2["default"])(expandedKeys), (0, _toConsumableArray2["default"])(searchExpandedKeys)),
    treeData: buildTreeData(data),
    onSelect: function onSelect(_, other) {
      var info = other;
      var locNode = info.node.data;
      var nodekey = locNode.model.id;

      if (info.selected) {
        setExpandedKeys((0, _toConsumableArray2["default"])(new Set([].concat((0, _toConsumableArray2["default"])(expandedKeys), [nodekey]))));

        _onSelect(locNode);
      } else {
        var kys = expandedKeys.filter(function (key) {
          return key !== nodekey;
        });
        setExpandedKeys(kys);

        _onSelect(undefined);
      }
    }
  }));
};

exports.Tree = Tree;
var _default = Tree;
exports["default"] = _default;