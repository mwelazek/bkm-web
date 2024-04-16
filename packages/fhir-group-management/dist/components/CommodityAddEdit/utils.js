"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitOfMeasure = exports.TypeOfGroup = void 0;
exports.createSupplyManagementList = createSupplyManagementList;
exports.getGroupTypeOptions = exports.getGroupFormFields = exports.generateGroupPayload = exports.defaultCode = exports.defaultCharacteristic = void 0;
exports.getOrCreateList = getOrCreateList;
exports.validationRulesFactory = exports.updateListReferencesFactory = exports.postPutGroup = exports.groupSelectfilterFunction = exports.getUnitOfMeasureOptions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uuid = require("uuid");

var _reactUtils = require("@opensrp/react-utils");

var _lodash = require("lodash");

var _constants = require("../../constants");

var _utils = require("../../helpers/utils");

var _excluded = ["meta"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var UnitOfMeasure;
exports.UnitOfMeasure = UnitOfMeasure;

(function (UnitOfMeasure) {
  UnitOfMeasure["Pieces"] = "Pieces";
  UnitOfMeasure["Tablets"] = "Tablets";
  UnitOfMeasure["Ampoules"] = "Ampoules";
  UnitOfMeasure["Strips"] = "Strips";
  UnitOfMeasure["Cycles"] = "Cycles";
  UnitOfMeasure["Bottles"] = "Bottles";
  UnitOfMeasure["TestKits"] = "Test kits";
  UnitOfMeasure["Sachets"] = "Sachets";
  UnitOfMeasure["Straps"] = "Straps";
})(UnitOfMeasure || (exports.UnitOfMeasure = UnitOfMeasure = {}));

var TypeOfGroup;
exports.TypeOfGroup = TypeOfGroup;

(function (TypeOfGroup) {
  TypeOfGroup["Medication"] = "medication";
  TypeOfGroup["Decive"] = "device";
})(TypeOfGroup || (exports.TypeOfGroup = TypeOfGroup = {}));

var defaultCharacteristic = {
  code: {
    coding: [{
      system: _utils.snomedCodeSystem,
      code: _utils.characteristicUnitMeasureCode,
      display: 'Unit of measure'
    }]
  },
  valueCodeableConcept: {
    coding: [{
      system: _utils.snomedCodeSystem,
      code: '767525000',
      display: 'Unit'
    }],
    text: undefined
  }
};
exports.defaultCharacteristic = defaultCharacteristic;
var defaultCode = {
  coding: [{
    system: _utils.snomedCodeSystem,
    code: _utils.supplyMgSnomedCode,
    display: 'Supply management'
  }]
};
exports.defaultCode = defaultCode;

var validationRulesFactory = function validationRulesFactory(t) {
  var _ref;

  return _ref = {}, (0, _defineProperty2["default"])(_ref, _constants.id, [{
    type: 'string'
  }]), (0, _defineProperty2["default"])(_ref, _constants.identifier, [{
    type: 'string'
  }]), (0, _defineProperty2["default"])(_ref, _constants.name, [{
    type: 'string',
    message: t('Must be a valid string')
  }, {
    required: true,
    message: t('Required')
  }]), (0, _defineProperty2["default"])(_ref, _constants.active, [{
    type: 'boolean'
  }, {
    required: true,
    message: t('Required')
  }]), (0, _defineProperty2["default"])(_ref, _constants.type, [{
    type: 'enum',
    "enum": Object.values(TypeOfGroup),
    required: true
  }]), (0, _defineProperty2["default"])(_ref, _constants.unitOfMeasure, [{
    type: 'enum',
    "enum": Object.values(UnitOfMeasure),
    required: true
  }]), _ref;
};

exports.validationRulesFactory = validationRulesFactory;

var getGroupFormFields = function getGroupFormFields(obj) {
  if (!obj) {
    return {
      initialObject: {
        code: defaultCode
      },
      active: true
    };
  }

  var id = obj.id,
      name = obj.name,
      active = obj.active,
      identifier = obj.identifier,
      type = obj.type;
  var identifierObj = (0, _reactUtils.getObjLike)(identifier, 'use', _reactUtils.IdentifierUseCodes.OFFICIAL);
  var unitMeasureCharacteristic = (0, _utils.getUnitMeasureCharacteristic)(obj);
  var formFields = {
    initialObject: obj,
    id: id,
    identifier: (0, _lodash.get)(identifierObj, '0.value'),
    active: active,
    name: name,
    type: type,
    unitOfMeasure: (0, _lodash.get)(unitMeasureCharacteristic, 'valueCodeableConcept.text', undefined)
  };
  return formFields;
};

exports.getGroupFormFields = getGroupFormFields;

var generateGroupPayload = function generateGroupPayload(values, initialValues) {
  var id = values.id,
      rawIdentifier = values.identifier,
      active = values.active,
      name = values.name,
      type = values.type,
      unitOfMeasure = values.unitOfMeasure;
  var initialObject = initialValues.initialObject;
  var payload = {
    resourceType: _constants.groupResourceType,
    active: !!active
  };

  if (initialObject) {
    var meta = initialObject.meta,
        rest = (0, _objectWithoutProperties2["default"])(initialObject, _excluded);
    payload = _objectSpread(_objectSpread({}, rest), payload);
  }

  if (name) {
    payload.name = name;
  }

  if (id) {
    payload.id = id;
  } else {
    payload.id = (0, _uuid.v4)();
  }

  var identifier = rawIdentifier;

  if (!rawIdentifier) {
    identifier = (0, _uuid.v4)();
  }

  payload.identifier = [{
    value: identifier,
    use: _reactUtils.IdentifierUseCodes.OFFICIAL
  }];

  if (type) {
    payload.type = type;
  }

  if (unitOfMeasure) {
    var unitMeasureBackBone = (0, _utils.getUnitMeasureCharacteristic)(payload);

    if (unitMeasureBackBone) {
      (0, _lodash.set)(unitMeasureBackBone, 'valueCodeableConcept.text', unitOfMeasure);
    } else {
      var _payload$characterist;

      var updatedCharacteristic = (0, _lodash.set)(defaultCharacteristic, 'valueCodeableConcept.text', unitOfMeasure);
      payload.characteristic = [].concat((0, _toConsumableArray2["default"])((_payload$characterist = payload.characteristic) !== null && _payload$characterist !== void 0 ? _payload$characterist : []), [updatedCharacteristic]);
    }
  }

  return payload;
};

exports.generateGroupPayload = generateGroupPayload;

var getGroupTypeOptions = function getGroupTypeOptions() {
  return (0, _lodash.values)(TypeOfGroup).map(function (group) {
    return {
      value: group,
      label: (0, _lodash.capitalize)(group)
    };
  });
};

exports.getGroupTypeOptions = getGroupTypeOptions;

var getUnitOfMeasureOptions = function getUnitOfMeasureOptions() {
  return (0, _lodash.values)(UnitOfMeasure).map(function (measure) {
    return {
      value: measure,
      label: (0, _lodash.capitalize)(measure)
    };
  });
};

exports.getUnitOfMeasureOptions = getUnitOfMeasureOptions;

var groupSelectfilterFunction = function groupSelectfilterFunction(inputValue, option) {
  return !!(option !== null && option !== void 0 && option.label.toLowerCase().includes(inputValue.toLowerCase()));
};

exports.groupSelectfilterFunction = groupSelectfilterFunction;

var postPutGroup = function postPutGroup(baseUrl, payload) {
  var serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.groupResourceType);
  return serve.update(payload);
};

exports.postPutGroup = postPutGroup;

function getOrCreateList(_x, _x2) {
  return _getOrCreateList.apply(this, arguments);
}

function _getOrCreateList() {
  _getOrCreateList = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(baseUrl, listId) {
    var serve;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.listResourceType);
            return _context2.abrupt("return", serve.read(listId)["catch"](function (err) {
              if (err.statusCode === 404) {
                var listResource = createSupplyManagementList(listId);
                return serve.update(listResource);
              }

              throw err;
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getOrCreateList.apply(this, arguments);
}

var updateListReferencesFactory = function updateListReferencesFactory(baseUrl, listId) {
  return function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(group, edited) {
      var commoditiesListResource, payload, serve;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!edited) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return getOrCreateList(baseUrl, listId);

            case 4:
              commoditiesListResource = _context.sent;
              payload = (0, _lodash.cloneDeep)(commoditiesListResource);

              if (payload.entry) {
                payload.entry.push({
                  item: {
                    reference: "".concat(_constants.groupResourceType, "/").concat(group.id)
                  }
                });
              }

              serve = new _reactUtils.FHIRServiceClass(baseUrl, _constants.listResourceType);
              return _context.abrupt("return", serve.update(payload));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.updateListReferencesFactory = updateListReferencesFactory;

function createSupplyManagementList(id) {
  return {
    resourceType: _constants.listResourceType,
    id: id,
    identifier: [{
      use: _reactUtils.IdentifierUseCodes.OFFICIAL,
      value: id
    }],
    status: 'current',
    mode: 'working',
    title: 'Supply Chain commodities',
    code: {
      coding: [{
        system: 'http://ona.io',
        code: 'supply-chain',
        display: 'Supply Chain Commodity'
      }],
      text: 'Supply Chain Commodity'
    },
    entry: []
  };
}