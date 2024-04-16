"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendInfoNotification = exports.sendErrorNotification = void 0;
exports.sendSuccessNotification = sendSuccessNotification;
exports.sendWarningNotification = void 0;

var _antd = require("antd");

function sendSuccessNotification(message, description) {
  _antd.notification.success({
    message: message,
    description: description,
    duration: 2
  });
}

var sendInfoNotification = function sendInfoNotification(message, description) {
  _antd.notification.info({
    message: message,
    description: description,
    duration: 2
  });
};

exports.sendInfoNotification = sendInfoNotification;

var sendWarningNotification = function sendWarningNotification(message, description) {
  _antd.notification.warning({
    message: message,
    description: description,
    duration: 2
  });
};

exports.sendWarningNotification = sendWarningNotification;

var sendErrorNotification = function sendErrorNotification(message, description) {
  _antd.notification.error({
    message: message,
    description: description,
    duration: 2
  });
};

exports.sendErrorNotification = sendErrorNotification;