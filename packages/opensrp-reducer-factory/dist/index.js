"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_TOTAL_RECORDS = exports.REMOVE = exports.FETCHED = void 0;
exports.fetchActionCreatorFactory = fetchActionCreatorFactory;
exports.removeActionCreatorFactory = exports.reducerFactory = exports.getTotalRecordsFactory = exports.getItemsByIdFactory = exports.getItemsArrayFactory = exports.getItemByIdFactory = void 0;
exports.setTotalRecordsFactory = setTotalRecordsFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = require("lodash");

var _seamlessImmutable = _interopRequireDefault(require("seamless-immutable"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var FETCHED = 'opensrp/reducer/objects/FETCHED';
exports.FETCHED = FETCHED;
var REMOVE = 'opensrp/reducer/objects/REMOVE';
exports.REMOVE = REMOVE;
var SET_TOTAL_RECORDS = 'opensrp/reducer/objects/SET_TOTAL_RECORDS';
exports.SET_TOTAL_RECORDS = SET_TOTAL_RECORDS;

function fetchActionCreatorFactory(reducerName, idField) {
  return function () {
    var objectsList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return {
      objectsById: (0, _lodash.keyBy)(objectsList, function (object) {
        return object[idField];
      }),
      type: FETCHED,
      overwrite: overwrite,
      reducerName: reducerName
    };
  };
}

var removeActionCreatorFactory = function removeActionCreatorFactory(reducerName) {
  return function () {
    return {
      objectsById: {},
      type: REMOVE,
      reducerName: reducerName
    };
  };
};

exports.removeActionCreatorFactory = removeActionCreatorFactory;

function setTotalRecordsFactory(reducerName) {
  return function (totalCount) {
    return {
      totalRecords: totalCount,
      type: SET_TOTAL_RECORDS,
      reducerName: reducerName
    };
  };
}

var initialState = (0, _seamlessImmutable["default"])({
  objectsById: {},
  totalRecords: 0
});

var reducerFactory = function reducerFactory(reducerName) {
  var fetchedActionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FETCHED;
  var removeActionType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : REMOVE;
  var setTotalRecordsActionType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SET_TOTAL_RECORDS;
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var actionReducerName = action.reducerName;

    if (reducerName !== actionReducerName) {
      return state;
    }

    exports.FETCHED = FETCHED = fetchedActionType;
    exports.REMOVE = REMOVE = removeActionType;
    exports.SET_TOTAL_RECORDS = SET_TOTAL_RECORDS = setTotalRecordsActionType;

    switch (action.type) {
      case FETCHED:
        if (action.overwrite) {
          return (0, _seamlessImmutable["default"])(_objectSpread(_objectSpread({}, state), {}, {
            objectsById: _objectSpread({}, action.objectsById)
          }));
        }

        return (0, _seamlessImmutable["default"])(_objectSpread(_objectSpread({}, state), {}, {
          objectsById: _objectSpread(_objectSpread({}, state.objectsById), action.objectsById)
        }));

      case REMOVE:
        return (0, _seamlessImmutable["default"])(_objectSpread(_objectSpread({}, state), {}, {
          objectsById: action.objectsById
        }));

      case SET_TOTAL_RECORDS:
        return (0, _seamlessImmutable["default"])(_objectSpread(_objectSpread({}, state), {}, {
          totalRecords: action.totalRecords
        }));

      default:
        return state;
    }
  };
};

exports.reducerFactory = reducerFactory;

var getItemsByIdFactory = function getItemsByIdFactory(reducerName) {
  return function (state) {
    return state[reducerName].objectsById;
  };
};

exports.getItemsByIdFactory = getItemsByIdFactory;

var getItemsArrayFactory = function getItemsArrayFactory(reducerName) {
  return function (state) {
    var getItemsById = getItemsByIdFactory(reducerName);
    return (0, _lodash.values)(getItemsById(state));
  };
};

exports.getItemsArrayFactory = getItemsArrayFactory;

var getItemByIdFactory = function getItemByIdFactory(reducerName) {
  return function (state, id) {
    return (0, _lodash.get)(getItemsByIdFactory(reducerName)(state), id) ? (0, _lodash.get)(getItemsByIdFactory(reducerName)(state), id) : null;
  };
};

exports.getItemByIdFactory = getItemByIdFactory;

var getTotalRecordsFactory = function getTotalRecordsFactory(reducerName) {
  return function (state) {
    return state[reducerName].totalRecords;
  };
};

exports.getTotalRecordsFactory = getTotalRecordsFactory;