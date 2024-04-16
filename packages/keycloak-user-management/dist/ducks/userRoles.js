"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchKeycloakUserRoles = exports.USER_ROLES_FETCHED = exports.REMOVE_USER_ROLES = void 0;
exports.getKeycloakUserRolesArray = getKeycloakUserRolesArray;
exports.getKeycloakUserRolesById = getKeycloakUserRolesById;
exports.makeKeycloakUserRolesSelector = exports.initialState = exports.getUserRolesIds = exports.getUserRoleByName = exports.getSearchText = exports.getRoleName = exports.getKeycloakUserRolesByIds = void 0;
exports.reducer = reducer;
exports.removeKeycloakUserRoles = exports.reducerName = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = require("lodash");

var _fast_array_intersect = _interopRequireDefault(require("fast_array_intersect"));

var _reselect = require("reselect");

var _seamlessImmutable = _interopRequireDefault(require("seamless-immutable"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var reducerName = 'keycloakUserRoles';
exports.reducerName = reducerName;
var USER_ROLES_FETCHED = 'keycloak/reducer/userRoles/USER_ROLES_FETCHED';
exports.USER_ROLES_FETCHED = USER_ROLES_FETCHED;
var REMOVE_USER_ROLES = 'keycloak/reducer/userRoles/REMOVE_USER_ROLES';
exports.REMOVE_USER_ROLES = REMOVE_USER_ROLES;

var fetchKeycloakUserRoles = function fetchKeycloakUserRoles() {
  var userRolesList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    userRolesById: (0, _lodash.keyBy)(userRolesList, function (userRole) {
      return userRole.id;
    }),
    type: USER_ROLES_FETCHED
  };
};

exports.fetchKeycloakUserRoles = fetchKeycloakUserRoles;

var removeKeycloakUserRoles = function removeKeycloakUserRoles() {
  return {
    userRolesById: {},
    type: REMOVE_USER_ROLES
  };
};

exports.removeKeycloakUserRoles = removeKeycloakUserRoles;
var initialState = (0, _seamlessImmutable["default"])({
  userRolesById: {}
});
exports.initialState = initialState;

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case USER_ROLES_FETCHED:
      return (0, _seamlessImmutable["default"])(_objectSpread(_objectSpread({}, state), {}, {
        userRolesById: _objectSpread(_objectSpread({}, state.userRolesById), action.userRolesById)
      }));

    case REMOVE_USER_ROLES:
      return (0, _seamlessImmutable["default"])(_objectSpread(_objectSpread({}, state), {}, {
        userRolesById: action.userRolesById
      }));

    default:
      return state;
  }
}

var getUserRolesIds = function getUserRolesIds(_, props) {
  return props.id;
};

exports.getUserRolesIds = getUserRolesIds;

var getRoleName = function getRoleName(_, props) {
  return props.name;
};

exports.getRoleName = getRoleName;

var getSearchText = function getSearchText(_, props) {
  return props.searchText;
};

exports.getSearchText = getSearchText;

function getKeycloakUserRolesById(state) {
  return state[reducerName].userRolesById;
}

function getKeycloakUserRolesArray(state) {
  return (0, _lodash.values)(getKeycloakUserRolesById(state));
}

var getUserRoleByName = function getUserRoleByName() {
  return (0, _reselect.createSelector)(getKeycloakUserRolesArray, getRoleName, function (userRolesArray, name) {
    if (name === undefined) {
      return userRolesArray;
    }

    return userRolesArray.filter(function (userRole) {
      return userRole.name.toLowerCase().includes(name.toLowerCase());
    });
  });
};

exports.getUserRoleByName = getUserRoleByName;

var getKeycloakUserRolesByIds = function getKeycloakUserRolesByIds() {
  return (0, _reselect.createSelector)(getKeycloakUserRolesById, getUserRolesIds, getKeycloakUserRolesArray, function (userRolesById, ids, userRolesArray) {
    if (ids === undefined) {
      return userRolesArray;
    }

    if (ids.length > 0) {
      return ids.map(function (id) {
        return userRolesById[id];
      });
    }

    return [];
  });
};

exports.getKeycloakUserRolesByIds = getKeycloakUserRolesByIds;
var userRolesByIdsSelector = getKeycloakUserRolesByIds();
var userRolesByNameSelector = getUserRoleByName();

var makeKeycloakUserRolesSelector = function makeKeycloakUserRolesSelector() {
  return (0, _reselect.createSelector)(userRolesByIdsSelector, userRolesByNameSelector, getSearchText, function (arr1, arr2, searchText) {
    var unfilteredResults = (0, _fast_array_intersect["default"])([arr1, arr2], JSON.stringify);

    var matchesUserName = function matchesUserName(userRole) {
      if (searchText === undefined) {
        return true;
      }

      return userRole.name.toLowerCase().includes(searchText.toLowerCase());
    };

    return unfilteredResults.filter(function (role) {
      return matchesUserName(role);
    });
  });
};

exports.makeKeycloakUserRolesSelector = makeKeycloakUserRolesSelector;