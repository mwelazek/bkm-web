"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ErrorBoundaryFallback = require("./components/ErrorBoundaryFallback");

Object.keys(_ErrorBoundaryFallback).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ErrorBoundaryFallback[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ErrorBoundaryFallback[key];
    }
  });
});