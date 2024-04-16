"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _init = require("./init");

Object.keys(_init).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _init[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _init[key];
    }
  });
});

var _reactI18next = require("react-i18next");

Object.keys(_reactI18next).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _reactI18next[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reactI18next[key];
    }
  });
});