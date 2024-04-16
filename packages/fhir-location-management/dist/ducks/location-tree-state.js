"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.getSelectedNode = exports.SET_LOCATION_TREE_STATE = void 0;
exports.reducer = reducer;
exports.reducerName = void 0;
exports.setSelectedNode = setSelectedNode;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _seamlessImmutable = _interopRequireDefault(require("seamless-immutable"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var reducerName = 'location-tree-state';
exports.reducerName = reducerName;
var SET_LOCATION_TREE_STATE = "".concat(reducerName, "/SET_LOCATION_TREE_STATE");
exports.SET_LOCATION_TREE_STATE = SET_LOCATION_TREE_STATE;

function setSelectedNode(node) {
  return {
    selectedNode: node,
    type: SET_LOCATION_TREE_STATE
  };
}

var initialState = (0, _seamlessImmutable["default"])({
  selectedNode: undefined
});
exports.initialState = initialState;

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_LOCATION_TREE_STATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedNode: action.selectedNode
      });

    default:
      return state;
  }
}

var getSelectedNode = function getSelectedNode(state) {
  return state[reducerName].selectedNode;
};

exports.getSelectedNode = getSelectedNode;