"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HealthCareAddEdit = require("./components/HealthCareAddEdit");

Object.keys(_HealthCareAddEdit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HealthCareAddEdit[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _HealthCareAddEdit[key];
    }
  });
});

var _HealthCareList = require("./components/HealthCareList");

Object.keys(_HealthCareList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HealthCareList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _HealthCareList[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});