"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocationFormFields = exports.generateLocationUnit = exports.defaultFormField = void 0;
exports.postPutLocationUnit = postPutLocationUnit;
exports.validationRulesFactory = exports.treeToOptions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uuid = require("uuid");

var _lodash = require("lodash");

var _reactUtils = require("@opensrp/react-utils");

var _types = require("../../helpers/types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultFormField = {
  id: '',
  name: '',
  parentId: undefined,
  status: _types.LocationUnitStatus.ACTIVE,
  isJurisdiction: true,
  description: undefined,
  alias: undefined
};
exports.defaultFormField = defaultFormField;

var getLocationFormFields = function getLocationFormFields(location, parentId) {
  var _location$partOf;

  return _objectSpread(_objectSpread({}, location !== null && location !== void 0 ? location : defaultFormField), {}, {
    isJurisdiction: true,
    parentId: parentId !== null && parentId !== void 0 ? parentId : location === null || location === void 0 ? void 0 : (_location$partOf = location.partOf) === null || _location$partOf === void 0 ? void 0 : _location$partOf.reference
  });
};

exports.getLocationFormFields = getLocationFormFields;

var generateLocationUnit = function generateLocationUnit(formValues, initialValues, parentNode) {
  var id = formValues.id,
      name = formValues.name,
      status = formValues.status,
      description = formValues.description,
      alias = formValues.alias,
      isJurisdiction = formValues.isJurisdiction;
  var uuid = (0, _lodash.get)(initialValues, 'identifier.0.value');
  var thisLocationsIdentifier = uuid ? uuid : (0, _uuid.v4)();
  var partOf;

  if (parentNode) {
    partOf = {
      reference: parentNode.model.nodeId,
      display: parentNode.model.node.name
    };
  }

  var payload = {
    resourceType: 'Location',
    status: status,
    name: name,
    alias: alias,
    description: description,
    partOf: partOf,
    identifier: [{
      use: 'official',
      value: thisLocationsIdentifier
    }],
    physicalType: {
      coding: [{
        system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
        code: isJurisdiction ? 'jdn' : 'bu',
        display: isJurisdiction ? 'Jurisdiction' : 'Building'
      }]
    }
  };

  if (id) {
    payload.id = id;
  } else {
    payload.id = (0, _uuid.v4)();
  }

  return payload;
};

exports.generateLocationUnit = generateLocationUnit;

var validationRulesFactory = function validationRulesFactory(t) {
  return {
    id: [{
      type: 'string'
    }],
    parentId: [{
      type: 'string',
      message: t("Parent ID can only contain letters, numbers and spaces")
    }, {
      required: false
    }],
    name: [{
      type: 'string',
      message: t("Name can only contain letters, numbers and spaces")
    }, {
      required: true,
      message: t("Name is required")
    }],
    alias: [{
      type: 'string',
      message: t("Name can only contain letters, numbers and spaces")
    }, {
      required: true,
      message: t("Alias is required")
    }],
    status: [{
      type: 'string'
    }, {
      required: true,
      message: t("Status is required")
    }],
    isJurisdiction: [{
      type: 'boolean'
    }, {
      required: false
    }],
    description: [{
      type: 'string'
    }, {
      required: false
    }]
  };
};

exports.validationRulesFactory = validationRulesFactory;

var treeToOptions = function treeToOptions(trees, parentIdDisabledCallback) {
  var recurseCreateOptions = function recurseCreateOptions(node) {
    var optionValue = _objectSpread({
      value: node.model.nodeId,
      title: node.model.node.name
    }, parentIdDisabledCallback ? {
      disabled: parentIdDisabledCallback(node)
    } : {});

    if (node.hasChildren()) {
      optionValue.children = node.children.map(recurseCreateOptions);
    }

    return optionValue;
  };

  return trees.map(recurseCreateOptions);
};

exports.treeToOptions = treeToOptions;

function postPutLocationUnit(_x, _x2) {
  return _postPutLocationUnit.apply(this, arguments);
}

function _postPutLocationUnit() {
  _postPutLocationUnit = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(payload, baseUrl) {
    var serve;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            serve = new _reactUtils.FHIRServiceClass(baseUrl, 'Location');
            return _context.abrupt("return", serve.update(payload)["catch"](function (err) {
              throw err;
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _postPutLocationUnit.apply(this, arguments);
}