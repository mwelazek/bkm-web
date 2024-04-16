"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = exports.getAllConfigs = exports.PractToOrgAssignmentStrategy = void 0;
exports.setAllConfigs = setAllConfigs;
exports.setConfig = setConfig;
exports.useGlobalConfigs = exports.supportedRbacStrategies = exports.supportedProjectCode = exports.supportedLanguageCodes = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _reactHooksGlobalState = require("react-hooks-global-state");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var supportedLanguageCodes = ['en', 'sw', 'fr', 'ar', 'th', 'vi'];
exports.supportedLanguageCodes = supportedLanguageCodes;
var supportedProjectCode = ['eusm', 'core', 'echis'];
exports.supportedProjectCode = supportedProjectCode;
var supportedRbacStrategies = ['keycloak'];
exports.supportedRbacStrategies = supportedRbacStrategies;
var PractToOrgAssignmentStrategy;
exports.PractToOrgAssignmentStrategy = PractToOrgAssignmentStrategy;

(function (PractToOrgAssignmentStrategy) {
  PractToOrgAssignmentStrategy["ONE_TO_ONE"] = "ONE_TO_ONE";
  PractToOrgAssignmentStrategy["ONE_TO_MANY"] = "ONE_TO_MANY";
})(PractToOrgAssignmentStrategy || (exports.PractToOrgAssignmentStrategy = PractToOrgAssignmentStrategy = {}));

var defaultConfigs = {
  languageCode: 'en',
  appLoginURL: undefined,
  keycloakBaseURL: undefined,
  opensrpBaseURL: undefined,
  fhirBaseURL: undefined,
  tablespref: undefined,
  defaultTablesPageSize: 5,
  projectCode: 'core',
  rbacStrategy: 'keycloak',
  practToOrgAssignmentStrategy: PractToOrgAssignmentStrategy.ONE_TO_MANY
};
var localstorage = localStorage.getItem(_constants.USER_PREFERENCE_KEY) ? JSON.parse(localStorage.getItem(_constants.USER_PREFERENCE_KEY)) : {};

var _createGlobalState = (0, _reactHooksGlobalState.createGlobalState)(_objectSpread(_objectSpread({}, defaultConfigs), localstorage)),
    useGlobalState = _createGlobalState.useGlobalState,
    getGlobalState = _createGlobalState.getGlobalState,
    setGlobalState = _createGlobalState.setGlobalState,
    unexposedGettersSetters = (0, _objectWithoutProperties2["default"])(_createGlobalState, ["useGlobalState", "getGlobalState", "setGlobalState"]);

var useGlobalConfigs = useGlobalState;
exports.useGlobalConfigs = useGlobalConfigs;
var getConfig = getGlobalState;
exports.getConfig = getConfig;

function setConfig(key, value) {
  var newstate = {};
  newstate[key] = value;
  saveToLocal(newstate);
  setGlobalState(key, value);
}

var otherGettersSetters = unexposedGettersSetters;
var getAllConfigs = otherGettersSetters.getState;
exports.getAllConfigs = getAllConfigs;

function setAllConfigs(value) {
  saveToLocal(value);
  otherGettersSetters.setState(value);
}

function saveToLocal(config) {
  localstorage = {
    tablespref: config.tablespref
  };
  localStorage.setItem(_constants.USER_PREFERENCE_KEY, JSON.stringify(localstorage));
}