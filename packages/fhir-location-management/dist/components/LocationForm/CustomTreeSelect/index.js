"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTreeSelect = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../../helpers/utils");

var _antd = require("antd");

var _utils2 = require("../utils");

var _excluded = ["value", "fullDataCallback", "disabledTreeNodesCallback", "tree"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var CustomTreeSelect = function CustomTreeSelect(props) {
  var _tree$children;

  var value = props.value,
      fullDataCallback = props.fullDataCallback,
      disabledTreeNodesCallback = props.disabledTreeNodesCallback,
      tree = props.tree,
      restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  (0, _react.useEffect)(function () {
    var node = tree.first(function (node) {
      return node.model.nodeId === value;
    });

    if (node) {
      fullDataCallback === null || fullDataCallback === void 0 ? void 0 : fullDataCallback(node);
    } else {
      fullDataCallback === null || fullDataCallback === void 0 ? void 0 : fullDataCallback(tree);
    }
  }, [(0, _utils.serializeTree)(tree), fullDataCallback, value]);
  var userDefinedRoots = (_tree$children = tree.children) !== null && _tree$children !== void 0 ? _tree$children : [];
  var selectOptions = (0, _utils2.treeToOptions)(userDefinedRoots, disabledTreeNodesCallback);

  var treeSelectProps = _objectSpread(_objectSpread({}, restProps), {}, {
    treeData: selectOptions,
    value: value
  });

  return _react["default"].createElement(_antd.TreeSelect, treeSelectProps);
};

exports.CustomTreeSelect = CustomTreeSelect;