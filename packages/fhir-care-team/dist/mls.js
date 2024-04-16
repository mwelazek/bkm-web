"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = exports.namespace = void 0;

var _i18n = require("@opensrp/i18n");

var namespace = 'fhir-care-team';
exports.namespace = namespace;

var useTranslation = function useTranslation(ns, options) {
  return (0, _i18n.useTranslation)(ns ? ns : namespace, options);
};

exports.useTranslation = useTranslation;