"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSearchProps = exports.SearchForm = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _lodash = require("lodash");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _utils = require("./utils");

var _icons = require("@ant-design/icons");

var _mls = require("../../mls");

var _excluded = ["onChangeHandler"];

var defaultPrefix = _react["default"].createElement(_icons.SearchOutlined, {
  style: {
    fontSize: '16px',
    fontWeight: 'bold'
  }
});

var defaultSearchProps = {
  onChangeHandler: function onChangeHandler() {
    return;
  },
  size: 'large',
  addonBefore: defaultPrefix,
  allowClear: true
};
exports.defaultSearchProps = defaultSearchProps;

var SearchForm = function SearchForm(props) {
  var _props$placeholder;

  var onChangeHandler = props.onChangeHandler,
      passedOnProps = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  passedOnProps['placeholder'] = (_props$placeholder = props.placeholder) !== null && _props$placeholder !== void 0 ? _props$placeholder : t('Search');

  var debouncedOnChangeHandler = function debouncedOnChangeHandler(event) {
    event.persist();
    var debouncedFn = (0, _lodash.debounce)(function (ev) {
      return onChangeHandler(ev);
    }, _utils.DEBOUNCE_HANDLER_MS);
    debouncedFn(event);
  };

  return _react["default"].createElement("div", {
    className: "search-input-wrapper"
  }, _react["default"].createElement(_antd.Input, (0, _extends2["default"])({
    onChange: debouncedOnChangeHandler
  }, passedOnProps)));
};

exports.SearchForm = SearchForm;
SearchForm.defaultProps = defaultSearchProps;