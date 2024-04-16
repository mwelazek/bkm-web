"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupName = exports.fetchKeycloakUserGroups = exports.USER_GROUPS_FETCHED = exports.REMOVE_USER_GROUPS = void 0;
exports.getKeycloakUserGroupsArray = getKeycloakUserGroupsArray;
exports.getKeycloakUserGroupsById = getKeycloakUserGroupsById;
exports.makeKeycloakUserGroupsSelector = exports.initialState = exports.getUserGroupsIds = exports.getUserGroupByName = exports.getSearchText = exports.getKeycloakUserGroupsByIds = void 0;
exports.reducer = reducer;
exports.removeKeycloakUserGroups = exports.reducerName = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = require("lodash");

var _fast_array_intersect = _interopRequireDefault(require("fast_array_intersect"));

var _reselect = require("reselect");

var _seamlessImmutable = _interopRequireDefault(require("seamless-immutable"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var reducerName = 'keycloakUserGroups';
exports.reducerName = reducerName;
var USER_GROUPS_FETCHED = 'keycloak/reducer/userGroups/USER_GROUPS_FETCHED';
exports.USER_GROUPS_FETCHED = USER_GROUPS_FETCHED;
var REMOVE_USER_GROUPS = 'keycloak/reducer/userGroups/REMOVE_USER_GROUPS';
exports.REMOVE_USER_GROUPS = REMOVE_USER_GROUPS;

var fetchKeycloakUserGroups = function fetchKeycloakUserGroups() {
  var userGroupsList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    userGroupsById: (0, _lodash.keyBy)(userGroupsList, function (userGroup) {
      return userGroup.id;
    }),
    type: USER_GROUPS_FETCHED
  };
};

exports.fetchKeycloakUserGroups = fetchKeycloakUserGroups;

var removeKeycloakUserGroups = function removeKeycloakUserGroups() {
  return {
    userGroupsById: {},
    type: REMOVE_USER_GROUPS
  };
};

exports.removeKeycloakUserGroups = removeKeycloakUserGroups;
var initialState = (0, _seamlessImmutable["default"])({
  userGroupsById: {}
});
exports.initialState = initialState;

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case USER_GROUPS_FETCHED:
      return (0, _seamlessImmutable["default"])(_objectSpread(_objectSpread({}, state), {}, {
        userGroupsById: _objectSpread(_objectSpread({}, state.userGroupsById), action.userGroupsById)
      }));

    case REMOVE_USER_GROUPS:
      return (0, _seamlessImmutable["default"])(_objectSpread(_objectSpread({}, state), {}, {
        userGroupsById: action.userGroupsById
      }));

    default:
      return state;
  }
}

var getUserGroupsIds = function getUserGroupsIds(_, props) {
  return props.id;
};

exports.getUserGroupsIds = getUserGroupsIds;

var getGroupName = function getGroupName(_, props) {
  return props.name;
};

exports.getGroupName = getGroupName;

var getSearchText = function getSearchText(_, props) {
  return props.searchText;
};

exports.getSearchText = getSearchText;

function getKeycloakUserGroupsById(state) {
  return state[reducerName].userGroupsById;
}

function getKeycloakUserGroupsArray(state) {
  return (0, _lodash.values)(getKeycloakUserGroupsById(state));
}

var getUserGroupByName = function getUserGroupByName() {
  return (0, _reselect.createSelector)(getKeycloakUserGroupsArray, getGroupName, function (userGroupsArray, name) {
    if (name === undefined) {
      return userGroupsArray;
    }

    return userGroupsArray.filter(function (userGroup) {
      return userGroup.name.toLowerCase().includes(name.toLowerCase());
    });
  });
};

exports.getUserGroupByName = getUserGroupByName;

var getKeycloakUserGroupsByIds = function getKeycloakUserGroupsByIds() {
  return (0, _reselect.createSelector)(getKeycloakUserGroupsById, getUserGroupsIds, getKeycloakUserGroupsArray, function (userGroupsById, ids, userGroupsArray) {
    if (ids === undefined) {
      return userGroupsArray;
    }

    if (ids.length > 0) {
      return ids.map(function (id) {
        return userGroupsById[id];
      });
    }

    return [];
  });
};

exports.getKeycloakUserGroupsByIds = getKeycloakUserGroupsByIds;
var userGroupsByIdsSelector = getKeycloakUserGroupsByIds();
var userGroupsByNameSelector = getUserGroupByName();

var makeKeycloakUserGroupsSelector = function makeKeycloakUserGroupsSelector() {
  return (0, _reselect.createSelector)(userGroupsByIdsSelector, userGroupsByNameSelector, getSearchText, function (arr1, arr2, searchText) {
    var unfilteredResults = (0, _fast_array_intersect["default"])([arr1, arr2], JSON.stringify);

    var matchesUserName = function matchesUserName(userGroup) {
      if (searchText === undefined) {
        return true;
      }

      return userGroup.name.toLowerCase().includes(searchText.toLowerCase());
    };

    return unfilteredResults.filter(function (group) {
      return matchesUserName(group);
    });
  });
};

exports.makeKeycloakUserGroupsSelector = makeKeycloakUserGroupsSelector;