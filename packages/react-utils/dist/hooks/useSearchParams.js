"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSearchParams = useSearchParams;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reactRouter = require("react-router");

var _util = require("util");

function useSearchParams() {
  var location = (0, _reactRouter.useLocation)();
  var history = (0, _reactRouter.useHistory)();
  var match = (0, _reactRouter.useRouteMatch)();
  var sParams = new URLSearchParams(location.search);
  var addParam = (0, _util.deprecate)(function (queryKey, value) {
    if (!value) {
      return;
    }

    var params = (0, _defineProperty2["default"])({}, queryKey, value);
    addParams(params);
  }, 'addParam is now deprecated, and will be removed in the future, consider using addParams');

  var addParams = function addParams(keyValues) {
    var nextUrl = match.path;

    for (var _i = 0, _Object$entries = Object.entries(keyValues); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (value) {
        sParams.set(key, value);
      }
    }

    nextUrl = ''.concat(nextUrl, '?').concat(sParams.toString());
    history.push(nextUrl);
  };

  var removeParam = function removeParam(queryKey) {
    sParams["delete"](queryKey);
    var newParams = sParams.toString();
    var nextUrl = ''.concat(match.path, '?').concat(newParams.toString());
    history.push(nextUrl);
  };

  return {
    sParams: sParams,
    addParam: addParam,
    addParams: addParams,
    removeParam: removeParam
  };
}