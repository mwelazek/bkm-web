"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryParams = exports.createChangeHandler = exports.DEBOUNCE_HANDLER_MS = void 0;

var _lodash = require("lodash");

var _querystring = _interopRequireDefault(require("querystring"));

var DEBOUNCE_HANDLER_MS = 1000;
exports.DEBOUNCE_HANDLER_MS = DEBOUNCE_HANDLER_MS;

var getQueryParams = function getQueryParams(location) {
  return _querystring["default"].parse((0, _lodash.trimStart)(location.search, '?'));
};

exports.getQueryParams = getQueryParams;

var createChangeHandler = function createChangeHandler(queryParam, props) {
  return function (event) {
    var targetValue = event.target.value;
    var allQueryParams = getQueryParams(props.location);

    if (targetValue) {
      allQueryParams[queryParam] = targetValue;
    } else {
      delete allQueryParams[queryParam];
    }

    props.history.push("".concat(props.match.url, "?").concat(_querystring["default"].stringify(allQueryParams)));
  };
};

exports.createChangeHandler = createChangeHandler;