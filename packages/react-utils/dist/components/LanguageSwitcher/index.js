"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSwitcher = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var defaultProps = {
  allLanguageOptions: {},
  supportedLanguages: []
};

function getSupportedLanguageOptions(languageOptions, supportedLanguages) {
  var supported = {};
  var supportedLangIsDefined = supportedLanguages && supportedLanguages.length > 0;

  if (!supportedLangIsDefined) {
    return supported;
  }

  Object.keys(languageOptions).forEach(function (languageCode) {
    if (supportedLanguages.includes(languageCode)) {
      var code = languageCode;
      supported[code] = languageOptions[code];
    }
  });
  return supported;
}

var LanguageSwitcher = function LanguageSwitcher(props) {
  var onLanguageChange = props.onLanguageChange,
      fullLanguageOptions = props.allLanguageOptions,
      supportedLanguages = props.supportedLanguages;
  var supportedLanguageOptions = getSupportedLanguageOptions(fullLanguageOptions, supportedLanguages);

  var languageChangeHandler = function languageChangeHandler(_ref) {
    var key = _ref.key;
    onLanguageChange === null || onLanguageChange === void 0 ? void 0 : onLanguageChange(key);
  };

  var dropdownItems = [];

  for (var _i = 0, _Object$entries = Object.entries(supportedLanguageOptions); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
        languageCode = _Object$entries$_i[0],
        label = _Object$entries$_i[1];

    dropdownItems.push({
      key: languageCode,
      label: _react["default"].createElement(_antd.Button, {
        type: "link"
      }, label)
    });
  }

  return _react["default"].createElement(_antd.Dropdown, {
    menu: {
      items: dropdownItems,
      onClick: languageChangeHandler
    },
    placement: "bottomRight",
    trigger: ['click', 'hover']
  }, _react["default"].createElement(_icons.GlobalOutlined, {
    style: {
      fontSize: '17px',
      color: 'white',
      margin: '10px'
    },
    className: "more-options",
    "data-testid": "more-options"
  }));
};

exports.LanguageSwitcher = LanguageSwitcher;
LanguageSwitcher.defaultProps = defaultProps;