"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TREE_FETCHED = exports.SET_LOCATION_TREE_STATE = exports.FETCH_SINGLE_LOCATION = void 0;
exports.fetchAllHierarchies = fetchAllHierarchies;
exports.initialState = exports.getLocationTreeState = exports.getAllHierarchiesArray = void 0;
exports.reducer = reducer;
exports.reducerName = void 0;
exports.setLocationTreeState = setLocationTreeState;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _seamlessImmutable = _interopRequireDefault(require("seamless-immutable"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var reducerName = 'location-hierarchy';
exports.reducerName = reducerName;
var TREE_FETCHED = 'location-hierarchy/TREE_FETCHED';
exports.TREE_FETCHED = TREE_FETCHED;
var FETCH_SINGLE_LOCATION = 'location-hierarchy/FETCH_SINGLE_LOCATION';
exports.FETCH_SINGLE_LOCATION = FETCH_SINGLE_LOCATION;
var SET_LOCATION_TREE_STATE = 'location-hierarchy/SET_LOCATION_TREE_STATE';
exports.SET_LOCATION_TREE_STATE = SET_LOCATION_TREE_STATE;

function fetchAllHierarchies(hierarchy) {
  return {
    hierarchyObject: hierarchy,
    type: TREE_FETCHED
  };
}

function setLocationTreeState(hierarchy) {
  return {
    hierarchyObject: hierarchy,
    type: SET_LOCATION_TREE_STATE
  };
}

var initialState = (0, _seamlessImmutable["default"])({
  hierarchyArray: [],
  locationTreeState: null
});
exports.initialState = initialState;

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case TREE_FETCHED:
      return _objectSpread(_objectSpread({}, state), {}, {
        hierarchyArray: action.hierarchyObject
      });

    case SET_LOCATION_TREE_STATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        locationTreeState: {
          node: action.hierarchyObject.node,
          keys: action.hierarchyObject.keys
        }
      });

    default:
      return state;
  }
}

var getAllHierarchiesArray = function getAllHierarchiesArray(state) {
  return state[reducerName].hierarchyArray;
};

exports.getAllHierarchiesArray = getAllHierarchiesArray;

var getLocationTreeState = function getLocationTreeState(state) {
  return state[reducerName].locationTreeState;
};

exports.getLocationTreeState = getLocationTreeState;