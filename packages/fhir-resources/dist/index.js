"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _questionResponse = require("./QuestionnaireResponse/questionResponse");

Object.keys(_questionResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _questionResponse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _questionResponse[key];
    }
  });
});

var _Questionnaire = require("./Questionnaire/Questionnaire");

Object.keys(_Questionnaire).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Questionnaire[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Questionnaire[key];
    }
  });
});