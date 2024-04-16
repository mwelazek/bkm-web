"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpensrpWebI18nProvider = OpensrpWebI18nProvider;
exports.opensrpI18nInstance = void 0;

var _reactI18next = require("react-i18next");

var _pkgConfig = require("@opensrp/pkg-config");

var _i18next = _interopRequireDefault(require("i18next"));

var _resources = require("./resources");

var _react = _interopRequireDefault(require("react"));

var newInstance = _i18next["default"].createInstance();

exports.opensrpI18nInstance = newInstance;
var languageCode = (0, _pkgConfig.getConfig)('languageCode');
var projectCode = (0, _pkgConfig.getConfig)('projectCode');
var fallbackLng = "en-core";
var configuredLng = "".concat(languageCode, "-").concat(projectCode);
newInstance.use(_reactI18next.initReactI18next).init({
  resources: _resources.resources,
  lng: configuredLng,
  fallbackLng: fallbackLng,
  interpolation: {
    escapeValue: false
  },
  returnEmptyString: false,
  nsSeparator: '::',
  keySeparator: false,
  debug: false,
  react: {
    useSuspense: process.env.NODE_ENV === 'test' ? false : true
  }
})["catch"](function (_) {});

function OpensrpWebI18nProvider(props) {
  return _react["default"].createElement(_reactI18next.I18nextProvider, {
    i18n: newInstance
  }, props.children);
}