"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentReferenceDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _utils = require("./utils/utils");

var _components = require("./utils/components");

var Panel = _antd.Collapse.Panel;

var DocumentReferenceDetails = function DocumentReferenceDetails(props) {
  var documentResources = props.documentResources,
      fhirBaseApiUrl = props.fhirBaseApiUrl;
  var extractedDocValues = (0, _utils.processDocumentReferences)(documentResources);
  return _react["default"].createElement("div", {
    className: "doc-reference"
  }, _react["default"].createElement(_antd.Collapse, {
    accordion: true
  }, extractedDocValues.map(function (doc) {
    var _doc$title;

    return _react["default"].createElement(Panel, {
      header: _react["default"].createElement(_components.DocTitle, {
        title: (_doc$title = doc.title) !== null && _doc$title !== void 0 ? _doc$title : doc.id,
        status: doc.status
      }),
      "data-test-id": doc.id,
      key: doc.id
    }, _react["default"].createElement(_components.DocPropertyDisplay, {
      parsedDoc: doc,
      fhirBaseUrl: fhirBaseApiUrl
    }));
  })), ",");
};

exports.DocumentReferenceDetails = DocumentReferenceDetails;