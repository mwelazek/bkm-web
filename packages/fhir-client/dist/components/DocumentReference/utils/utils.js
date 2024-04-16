"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitContentType = exports.processTopLevelFields = exports.processDocumentReferences = exports.processContextFields = exports.processContentFields = exports.itemIsEmpty = exports.fetchAttachmentForDownload = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = require("lodash");

var _dateFns = require("date-fns");

var _constants = require("../../../constants");

var _fhirclient = _interopRequireDefault(require("fhirclient"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var itemIsEmpty = function itemIsEmpty(coll) {
  if ((0, _lodash.isEmpty)(coll)) {
    return true;
  }

  return !(0, _lodash.some)(coll);
};

exports.itemIsEmpty = itemIsEmpty;

var processTopLevelFields = function processTopLevelFields(docResource) {
  var status = docResource.status,
      type = docResource.type,
      description = docResource.description,
      securityLabel = docResource.securityLabel,
      date = docResource.date,
      id = docResource.id;
  return {
    id: id,
    title: description,
    createdAt: date ? (0, _dateFns.format)(new Date(date), _constants.dateFormat) : undefined,
    status: status,
    documentType: {
      codeList: type === null || type === void 0 ? void 0 : type.coding,
      code: (0, _lodash.get)(type, 'coding.0')
    },
    securityCodes: {
      codeList: securityLabel,
      code: (0, _lodash.get)(securityLabel, '[0].coding[0]')
    }
  };
};

exports.processTopLevelFields = processTopLevelFields;

var processContextFields = function processContextFields(docResource) {
  var start = (0, _lodash.get)(docResource, 'context.period.start');
  var end = (0, _lodash.get)(docResource, 'context.period.end');
  return {
    periodStart: start ? (0, _dateFns.format)(new Date(start), _constants.dateFormat) : undefined,
    periodEnd: end ? (0, _dateFns.format)(new Date(end), _constants.dateFormat) : undefined,
    eventCoding: (0, _lodash.get)(docResource, 'context.event[0].coding[0]'),
    facilityTypeCoding: (0, _lodash.get)(docResource, 'context.facilityType.coding[0]'),
    practiceSettingCoding: (0, _lodash.get)(docResource, 'context.practiceSetting.coding[0]')
  };
};

exports.processContextFields = processContextFields;

var processContentFields = function processContentFields(docResource) {
  return (0, _lodash.get)(docResource, 'content').map(function (content) {
    var data = (0, _lodash.get)(content, 'attachment.data');
    var url = (0, _lodash.get)(content, 'attachment.url');
    var absoluteUrlRegex = /^(?:[a-z]+:)?\/\//;
    var binaryUrlRegex = /Binary\/[\w-]+$/gm;
    var urlIsAbsolute, binaryUrl;

    if (url) {
      urlIsAbsolute = absoluteUrlRegex.test(url);
      var matches = Array.from(url.matchAll(binaryUrlRegex), function (m) {
        return m[0];
      });
      binaryUrl = matches[0];
    }

    var size = (0, _lodash.get)(content, 'attachment.size');
    var formatCode = (0, _lodash.get)(content, 'format.code');
    var formatDisplay = (0, _lodash.get)(content, 'format.display');
    var formatContentType = (0, _lodash.get)(content, 'attachment.contentType');
    return {
      attachment: {
        url: url,
        urlIsAbsolute: urlIsAbsolute,
        binaryUrl: binaryUrl,
        data: data
      },
      size: size,
      formatCode: formatCode,
      formatDisplay: formatDisplay,
      formatContentType: formatContentType
    };
  });
};

exports.processContentFields = processContentFields;

var processDocumentReferences = function processDocumentReferences(docResources) {
  return docResources.map(function (resource) {
    return _objectSpread(_objectSpread({}, processTopLevelFields(resource)), {}, {
      context: processContextFields(resource),
      content: processContentFields(resource)
    });
  });
};

exports.processDocumentReferences = processDocumentReferences;

var splitContentType = function splitContentType(contentType) {
  var splitText = contentType.split('/');
  return {
    discretePart: splitText[0],
    multipart: splitText[1]
  };
};

exports.splitContentType = splitContentType;

var fetchAttachmentForDownload = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(fhirBaseURL, binaryEndpoint) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _fhirclient["default"].client(fhirBaseURL).request({
              url: binaryEndpoint
            }).then(function (res) {
              return res.blob();
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchAttachmentForDownload(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchAttachmentForDownload = fetchAttachmentForDownload;