"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTotalLocationunitgroups = exports.removeLocationUnitGroups = exports.reducerName = exports.reducer = exports.getTotalLocationUnitGroups = exports.getLocationUnitGroupsById = exports.getLocationUnitGroupsArray = exports.getLocationUnitGroupById = exports.fetchLocationUnitGroups = exports["default"] = void 0;

var _reducerFactory = require("@opensrp/reducer-factory");

var reducerName = 'location-unit-groups';
exports.reducerName = reducerName;
var reducer = (0, _reducerFactory.reducerFactory)(reducerName);
exports.reducer = reducer;
var fetchLocationUnitGroups = (0, _reducerFactory.fetchActionCreatorFactory)(reducerName, 'id');
exports.fetchLocationUnitGroups = fetchLocationUnitGroups;
var removeLocationUnitGroups = (0, _reducerFactory.removeActionCreatorFactory)(reducerName);
exports.removeLocationUnitGroups = removeLocationUnitGroups;
var setTotalLocationunitgroups = (0, _reducerFactory.setTotalRecordsFactory)(reducerName);
exports.setTotalLocationunitgroups = setTotalLocationunitgroups;
var getLocationUnitGroupsById = (0, _reducerFactory.getItemsByIdFactory)(reducerName);
exports.getLocationUnitGroupsById = getLocationUnitGroupsById;
var getLocationUnitGroupById = (0, _reducerFactory.getItemByIdFactory)(reducerName);
exports.getLocationUnitGroupById = getLocationUnitGroupById;
var getLocationUnitGroupsArray = (0, _reducerFactory.getItemsArrayFactory)(reducerName);
exports.getLocationUnitGroupsArray = getLocationUnitGroupsArray;
var getTotalLocationUnitGroups = (0, _reducerFactory.getTotalRecordsFactory)(reducerName);
exports.getTotalLocationUnitGroups = getTotalLocationUnitGroups;
var _default = reducer;
exports["default"] = _default;