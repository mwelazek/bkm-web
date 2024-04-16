"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseKeycloakRoles = exports.parseFHirRoles = exports.adapter = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _constants = require("../constants");

var _roleDefinition = require("../roleDefinition");

var fhirVerbToPermitLookup = {
  GET: _constants.Permit.READ,
  POST: _constants.Permit.CREATE,
  PUT: _constants.Permit.UPDATE,
  DELETE: _constants.Permit.DELETE,
  MANAGE: _constants.Permit.MANAGE
};

var getFhirResourceString = function getFhirResourceString(rawResourceString) {
  var matchedResource = _constants.FhirResources.filter(function (resource) {
    return resource.toUpperCase() === rawResourceString.toUpperCase();
  });

  return matchedResource[0];
};

var parseFHirRoles = function parseFHirRoles(role) {
  var separator = '_';
  var roleParts = role.split(separator);

  if (roleParts.length < 2) {
    return;
  }

  var _roleParts = (0, _toArray2["default"])(roleParts),
      verb = _roleParts[0],
      rest = _roleParts.slice(1);

  var rawResource = rest.join(separator);
  var resource = getFhirResourceString(rawResource);
  var permit = fhirVerbToPermitLookup[verb.toUpperCase()];

  if (resource && permit) {
    return new _roleDefinition.UserRole(resource, permit);
  }
};

exports.parseFHirRoles = parseFHirRoles;
var keycloakRoleMappings = {
  'realm-admin': new _roleDefinition.UserRole(['iam_group', 'iam_role', 'iam_user'], _constants.Permit.MANAGE),
  'view-users': new _roleDefinition.UserRole(['iam_user'], _constants.Permit.READ),
  'manage-users': new _roleDefinition.UserRole(['iam_group', 'iam_role', 'iam_user'], _constants.Permit.MANAGE),
  'query-groups': new _roleDefinition.UserRole(['iam_group'], _constants.Permit.READ),
  'query-users': new _roleDefinition.UserRole(['iam_user'], _constants.Permit.READ)
};

var parseKeycloakRoles = function parseKeycloakRoles(stringRole) {
  var lookedURole = keycloakRoleMappings[stringRole];
  return lookedURole;
};

exports.parseKeycloakRoles = parseKeycloakRoles;
var defaultRoleData = {
  realmAccess: [],
  clientRoles: {}
};

var adapter = function adapter() {
  var _roles$realmAccess, _roles$clientRoles;

  var roles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRoleData;
  var allRoleStrings = (_roles$realmAccess = roles.realmAccess) !== null && _roles$realmAccess !== void 0 ? _roles$realmAccess : [];
  var invalidRoleStrings = [];
  Object.values((_roles$clientRoles = roles.clientRoles) !== null && _roles$clientRoles !== void 0 ? _roles$clientRoles : {}).forEach(function (roleArray) {
    allRoleStrings = [].concat((0, _toConsumableArray2["default"])(allRoleStrings), (0, _toConsumableArray2["default"])(roleArray));
  });
  var allRoles = [];
  allRoleStrings.forEach(function (role) {
    var asRole = parseKeycloakRoles(role);

    if (asRole === undefined) {
      asRole = parseFHirRoles(role);
    }

    if (asRole) {
      allRoles.push(asRole);
    } else {
      invalidRoleStrings.push(role);
    }
  });

  if (invalidRoleStrings.length > 0) {
    console.warn("Could not understand the following roles: ".concat(invalidRoleStrings.join(', ')));
  }

  return _roleDefinition.UserRole.combineRoles(allRoles);
};

exports.adapter = adapter;