"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTreeSelect = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _dataLoaders = require("../../../helpers/dataLoaders");

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../../constants");

var _notifications = require("@opensrp/notifications");

var _utils = require("../../../ducks/locationHierarchy/utils");

var _antd = require("antd");

var _utils2 = require("../utils");

var _excluded = ["baseURL", "value", "fullDataCallback", "disabledTreeNodesCallback", "filterByParentId"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var defaultProps = {
  baseURL: _constants.baseURL
};

var CustomTreeSelect = function CustomTreeSelect(props) {
  var baseURL = props.baseURL,
      value = props.value,
      fullDataCallback = props.fullDataCallback,
      disabledTreeNodesCallback = props.disabledTreeNodesCallback,
      filterByParentId = props.filterByParentId,
      restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      loadingJurisdictions = _useState2[0],
      setLoadingJurisdictions = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      loadingTrees = _useState4[0],
      setLoadingTrees = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      rootLocations = _useState6[0],
      setRootLocations = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      trees = _useState8[0],
      updateTrees = _useState8[1];

  (0, _react.useEffect)(function () {
    (0, _dataLoaders.loadJurisdictions)(undefined, baseURL, undefined, undefined, undefined, filterByParentId).then(function (res) {
      if (res) setRootLocations(res);
    })["catch"](function (err) {
      return (0, _notifications.sendErrorNotification)(err.message);
    })["finally"](function () {
      return setLoadingJurisdictions(false);
    });
  }, []);
  (0, _react.useEffect)(function () {
    var thisTrees = [];

    if (rootLocations.length > 0) {
      var promises = rootLocations.map(function (location) {
        return location.id.toString();
      }).map(function (rootId) {
        return (0, _dataLoaders.loadHierarchy)(rootId, undefined, baseURL, undefined).then(function (res) {
          if (res) {
            var tree = (0, _utils.generateJurisdictionTree)(res);
            thisTrees.push(tree);
          }
        });
      });
      Promise.all(promises).then(function () {
        updateTrees(thisTrees);
      })["catch"](function (err) {
        return (0, _notifications.sendErrorNotification)(err.message);
      })["finally"](function () {
        return setLoadingTrees(false);
      });
    } else {
      setLoadingTrees(false);
    }
  }, [JSON.stringify(rootLocations)]);
  (0, _react.useEffect)(function () {
    var node;

    var _iterator = _createForOfIteratorHelper(trees),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tree = _step.value;
        node = tree.first(function (node) {
          return node.model.id === value;
        });

        if (node) {
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    fullDataCallback === null || fullDataCallback === void 0 ? void 0 : fullDataCallback(node);
  }, [fullDataCallback, trees, value]);
  var selectOptions = (0, _utils2.treeToOptions)(trees, disabledTreeNodesCallback);

  var treeSelectProps = _objectSpread(_objectSpread({}, restProps), {}, {
    treeData: selectOptions,
    loading: loadingJurisdictions || loadingTrees,
    value: value
  });

  return _react["default"].createElement(_antd.TreeSelect, treeSelectProps);
};

exports.CustomTreeSelect = CustomTreeSelect;
CustomTreeSelect.defaultProps = defaultProps;