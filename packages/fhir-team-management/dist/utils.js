"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePractitionerRoles = exports.practitionersFilterFunction = exports.postPutOrganization = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _reactUtils = require("@opensrp/react-utils");

var _lodash = require("lodash");

var _constants = require("./constants");

var _uuid = require("uuid");

var _userManagement = require("@opensrp/user-management");

var _excluded = ["organization"];

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var postPutOrganization = function postPutOrganization(baseUrl, payload) {
  var serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.organizationResourceType);
  return serve.update(payload);
};

exports.postPutOrganization = postPutOrganization;

var practitionersFilterFunction = function practitionersFilterFunction(inputValue, option) {
  return !!(option !== null && option !== void 0 && option.label.toLowerCase().includes(inputValue.toLowerCase()));
};

exports.practitionersFilterFunction = practitionersFilterFunction;

var arrKeyBy = function arrKeyBy(arr) {
  return (0, _lodash.transform)(arr, function (acc, value) {
    acc[value] = value;
  }, {});
};

var updatePractitionerRoles = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(baseUrl, values, initialValues, organization, practitioners, existingRoles) {
    var _values$members, _initialValues$member;

    var orgId, members, initialMembers, membersById, initialMembersById, practitionersById, toAdd, toRemove, existingRolesByOrgPractIds, serve, removePromises, practitionerRolesModifyPromises, organizationPayload, existingPractitionerRoles, existingPractitionerRolesPromises, practitionersWithExistingPractitionerRoles, practitionersWithoutExistingPractitionerRoles, _iterator, _step, _loop;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            orgId = organization.id;
            members = (_values$members = values.members) !== null && _values$members !== void 0 ? _values$members : [];
            initialMembers = (_initialValues$member = initialValues.members) !== null && _initialValues$member !== void 0 ? _initialValues$member : [];
            membersById = arrKeyBy(members);
            initialMembersById = arrKeyBy(initialMembers);
            practitionersById = (0, _lodash.keyBy)(practitioners, function (practitioner) {
              return "".concat(_constants.practitionerResourceType, "/").concat(practitioner.id);
            });
            toAdd = [];
            toRemove = [];
            members.forEach(function (id) {
              if (!initialMembersById[id]) {
                toAdd.push(id);
              }
            });
            initialMembers.forEach(function (id) {
              if (!membersById[id]) {
                toRemove.push(id);
              }
            });
            existingRolesByOrgPractIds = (0, _lodash.transform)(existingRoles, function (acc, value) {
              var _value$organization, _value$practitioner;

              var orgReference = (_value$organization = value.organization) === null || _value$organization === void 0 ? void 0 : _value$organization.reference;

              if (!acc[orgReference]) {
                acc[orgReference] = {};
              }

              acc[orgReference][(_value$practitioner = value.practitioner) === null || _value$practitioner === void 0 ? void 0 : _value$practitioner.reference] = value;
            }, {});
            serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.practitionerRoleResourceType);
            removePromises = toRemove.map(function (practId) {
              var organizationId = orgId;
              var role = existingRolesByOrgPractIds["".concat(_constants.organizationResourceType, "/").concat(organizationId)][practId];
              var organization = role.organization,
                  rest = (0, _objectWithoutProperties2["default"])(role, _excluded);
              return function () {
                return serve.update(rest);
              };
            });
            practitionerRolesModifyPromises = [];

            if (!(toAdd.length > 0)) {
              _context.next = 25;
              break;
            }

            organizationPayload = {
              reference: "".concat(_constants.organizationResourceType, "/").concat(orgId),
              display: organization.name
            };
            _context.next = 18;
            return (0, _reactUtils.loadAllResources)(baseUrl, _constants.practitionerRoleResourceType, {
              practitioner: toAdd.join()
            }).then(function (resp) {
              return (0, _reactUtils.getResourcesFromBundle)(resp);
            });

          case 18:
            existingPractitionerRoles = _context.sent;
            existingPractitionerRolesPromises = existingPractitionerRoles.map(function (practitionerRole) {
              return _objectSpread(_objectSpread({}, practitionerRole), {}, {
                organization: organizationPayload
              });
            }).map(function (practitionerRole) {
              return function () {
                return serve.update(practitionerRole);
              };
            });
            practitionerRolesModifyPromises.push.apply(practitionerRolesModifyPromises, (0, _toConsumableArray2["default"])(existingPractitionerRolesPromises));
            practitionersWithExistingPractitionerRoles = existingPractitionerRoles.map(function (existingPractitionerRole) {
              var _existingPractitioner;

              return (_existingPractitioner = existingPractitionerRole.practitioner) === null || _existingPractitioner === void 0 ? void 0 : _existingPractitioner.reference;
            });
            practitionersWithoutExistingPractitionerRoles = toAdd.filter(function (practitionerId) {
              return !practitionersWithExistingPractitionerRoles.includes(practitionerId);
            });
            _iterator = _createForOfIteratorHelper(practitionersWithoutExistingPractitionerRoles);

            try {
              _loop = function _loop() {
                var _practitioner$identif;

                var practitionerID = _step.value;
                var newPractitionerRoleResourceID = (0, _uuid.v4)();
                var practitioner = practitionersById[practitionerID];
                var practitionerSecondaryIdentifier = (_practitioner$identif = practitioner.identifier) === null || _practitioner$identif === void 0 ? void 0 : _practitioner$identif.find(function (identifier) {
                  return identifier.use === 'secondary';
                });
                var practitionerDisplayName = (0, _reactUtils.getObjLike)(practitioner.name, 'use', _constants.HumanNameUseCodes.OFFICIAL, true)[0];
                var newPractitionerRole = {
                  resourceType: _constants.practitionerRoleResourceType,
                  id: newPractitionerRoleResourceID,
                  identifier: [{
                    use: _reactUtils.IdentifierUseCodes.OFFICIAL,
                    value: newPractitionerRoleResourceID
                  }].concat((0, _toConsumableArray2["default"])(practitionerSecondaryIdentifier ? [practitionerSecondaryIdentifier] : [])),
                  active: true,
                  practitioner: {
                    reference: practitionerID,
                    display: (0, _reactUtils.parseFhirHumanName)(practitionerDisplayName)
                  },
                  organization: organizationPayload,
                  code: [{
                    coding: [{
                      system: 'http://snomed.info/sct',
                      code: _userManagement.PRACTITIONER_USER_TYPE_CODE,
                      display: 'Assigned practitioner'
                    }]
                  }]
                };
                practitionerRolesModifyPromises.push(function () {
                  return serve.update(newPractitionerRole);
                });
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

          case 25:
            return _context.abrupt("return", Promise.all([].concat((0, _toConsumableArray2["default"])(removePromises), practitionerRolesModifyPromises).map(function (p) {
              return p();
            })));

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updatePractitionerRoles(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

exports.updatePractitionerRoles = updatePractitionerRoles;