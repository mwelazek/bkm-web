"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = require("./notifications");

Object.keys(_notifications).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _notifications[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notifications[key];
    }
  });
});