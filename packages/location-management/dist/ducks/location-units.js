"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTotalLocationUnits = exports.removeLocationUnits = exports.locationsByIdsSelector = exports.locationsArraySelector = exports.locationUnitsReducerName = exports.locationUnitsReducer = exports.getTotalLocationUnits = exports.getLocationsIfJurisdiction = exports.getLocationsBySearch = exports.getLocationsByFilters = exports.getLocationUnitsById = exports.getLocationUnitsArray = exports.getLocationUnitById = exports.getLocationByIds = exports.fetchLocationUnits = exports.defaultFetchLocations = exports.LocationUnitSyncStatus = exports.LocationUnitStatus = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reducerFactory = require("@opensrp/reducer-factory");

var _reselect = require("reselect");

var _lodash = require("lodash");

var _fast_array_intersect = _interopRequireDefault(require("fast_array_intersect"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var LocationUnitStatus;
exports.LocationUnitStatus = LocationUnitStatus;

(function (LocationUnitStatus) {
  LocationUnitStatus["ACTIVE"] = "Active";
  LocationUnitStatus["INACTIVE"] = "InActive";
})(LocationUnitStatus || (exports.LocationUnitStatus = LocationUnitStatus = {}));

var LocationUnitSyncStatus;
exports.LocationUnitSyncStatus = LocationUnitSyncStatus;

(function (LocationUnitSyncStatus) {
  LocationUnitSyncStatus["SYNCED"] = "Synced";
  LocationUnitSyncStatus["NOTSYNCED"] = "NotSynced";
})(LocationUnitSyncStatus || (exports.LocationUnitSyncStatus = LocationUnitSyncStatus = {}));

var locationUnitsReducerName = 'location-units';
exports.locationUnitsReducerName = locationUnitsReducerName;
var locationUnitsReducer = (0, _reducerFactory.reducerFactory)(locationUnitsReducerName);
exports.locationUnitsReducer = locationUnitsReducer;
var defaultFetchLocations = (0, _reducerFactory.fetchActionCreatorFactory)(locationUnitsReducerName, 'id');
exports.defaultFetchLocations = defaultFetchLocations;

var fetchLocationUnits = function fetchLocationUnits() {
  var locations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var isJurisdiction = arguments.length > 1 ? arguments[1] : undefined;
  var withJurisdiction = locations.map(function (loc) {
    return _objectSpread(_objectSpread({}, loc), isJurisdiction === undefined ? {} : {
      isJurisdiction: isJurisdiction
    });
  });
  return defaultFetchLocations(withJurisdiction);
};

exports.fetchLocationUnits = fetchLocationUnits;
var removeLocationUnits = (0, _reducerFactory.removeActionCreatorFactory)(locationUnitsReducerName);
exports.removeLocationUnits = removeLocationUnits;
var setTotalLocationUnits = (0, _reducerFactory.setTotalRecordsFactory)(locationUnitsReducerName);
exports.setTotalLocationUnits = setTotalLocationUnits;
var getLocationUnitsById = (0, _reducerFactory.getItemsByIdFactory)(locationUnitsReducerName);
exports.getLocationUnitsById = getLocationUnitsById;
var getLocationUnitById = (0, _reducerFactory.getItemByIdFactory)(locationUnitsReducerName);
exports.getLocationUnitById = getLocationUnitById;
var getLocationUnitsArray = (0, _reducerFactory.getItemsArrayFactory)(locationUnitsReducerName);
exports.getLocationUnitsArray = getLocationUnitsArray;
var getTotalLocationUnits = (0, _reducerFactory.getTotalRecordsFactory)(locationUnitsReducerName);
exports.getTotalLocationUnits = getTotalLocationUnits;

var getSearchQuery = function getSearchQuery(_, props) {
  return props.searchQuery;
};

var getIsJurisdiction = function getIsJurisdiction(_, props) {
  return props.isJurisdiction;
};

var getIds = function getIds(_, props) {
  return props.ids;
};

var locationsByIdsSelector = function locationsByIdsSelector(state) {
  return state[locationUnitsReducerName].objectsById;
};

exports.locationsByIdsSelector = locationsByIdsSelector;
var locationsArraySelector = (0, _reselect.createSelector)(locationsByIdsSelector, function (locationsByIds) {
  return (0, _lodash.values)(locationsByIds);
});
exports.locationsArraySelector = locationsArraySelector;

var getLocationsIfJurisdiction = function getLocationsIfJurisdiction() {
  return (0, _reselect.createSelector)(locationsArraySelector, getIsJurisdiction, function (locations, isJurisdiction) {
    if (isJurisdiction === undefined) {
      return locations;
    }

    return locations.filter(function (loc) {
      return loc.isJurisdiction === isJurisdiction;
    });
  });
};

exports.getLocationsIfJurisdiction = getLocationsIfJurisdiction;
var locationsIfJurisdictionSelector = getLocationsIfJurisdiction();

var getLocationsBySearch = function getLocationsBySearch() {
  return (0, _reselect.createSelector)(locationsIfJurisdictionSelector, getSearchQuery, function (locations, searchText) {
    if (searchText === undefined) {
      return locations;
    }

    return locations.filter(function (loc) {
      return loc.properties.name.toLowerCase().includes(searchText.toLowerCase()) || loc.id === searchText;
    });
  });
};

exports.getLocationsBySearch = getLocationsBySearch;

var getLocationByIds = function getLocationByIds() {
  return (0, _reselect.createSelector)(locationsByIdsSelector, locationsArraySelector, getIds, function (locationsByIds, locations, ids) {
    if (ids === undefined) {
      return locations;
    }

    var locationsOfInterest = [];
    ids.forEach(function (id) {
      var thisLocation = locationsByIds[id];
      if (thisLocation) locationsOfInterest.push(thisLocation);
    });
    return locationsOfInterest;
  });
};

exports.getLocationByIds = getLocationByIds;
var locationsBySearch = getLocationsBySearch();
var locationsByIds = getLocationByIds();

var getLocationsByFilters = function getLocationsByFilters() {
  return (0, _reselect.createSelector)(locationsBySearch, locationsIfJurisdictionSelector, locationsByIds, function (bySearch, byJurisdiction, byIds) {
    return (0, _fast_array_intersect["default"])([bySearch, byJurisdiction, byIds], JSON.stringify);
  });
};

exports.getLocationsByFilters = getLocationsByFilters;