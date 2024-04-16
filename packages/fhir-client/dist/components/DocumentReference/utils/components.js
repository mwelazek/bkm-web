"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueSection = exports.Value = exports.DownloadLink = exports.DocTitle = exports.DocPropertyDisplay = exports.Coding = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _antd = require("antd");

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _utils = require("./utils");

var _reactUtils = require("@opensrp/react-utils");

var _reactQuery = require("react-query");

var _icons = require("@ant-design/icons");

var _mls = require("../../../mls");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ValueSection = function ValueSection(props) {
  var dataTestId = props.dataTestId,
      label = props.label,
      children = props.children;
  return _react["default"].createElement("div", {
    className: "fhir-ui__ValueSection",
    "data-testid": dataTestId
  }, _react["default"].createElement("label", {
    className: "fhir-ui__ValueSection-label"
  }, label), _react["default"].createElement("div", {
    className: "fhir-ui__ValueSection-body"
  }, children));
};

exports.ValueSection = ValueSection;

var Value = function Value(props) {
  var dataTestId = props.dataTestId,
      children = props.children,
      label = props.label;
  return _react["default"].createElement("div", {
    className: "fhir-ui__Value"
  }, _react["default"].createElement("label", {
    className: "fhir-ui__Value-label"
  }, label), _react["default"].createElement("div", {
    "data-testid": dataTestId
  }, children));
};

exports.Value = Value;

var DocTitle = function DocTitle(_ref) {
  var title = _ref.title,
      status = _ref.status;
  return _react["default"].createElement(_react["default"].Fragment, null, title, "\xA0\xA0", status ? _react["default"].createElement(_antd.Tag, null, _react["default"].createElement("span", {
    title: "status"
  }), status) : null);
};

exports.DocTitle = DocTitle;

var Coding = function Coding(props) {
  var coding = props.coding;
  var display = (0, _lodash.get)(coding, 'display', '');
  var code = (0, _lodash.get)(coding, 'code', '');
  var system = (0, _lodash.get)(coding, 'system', '');
  var hasAdditionalInfo = code || system;

  if (!code && !display) {
    return null;
  }

  return _react["default"].createElement("div", {
    className: "fhir-datatype__Coding"
  }, display && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    className: "fhir-datatype__Coding__title"
  }, display), " \xA0"), hasAdditionalInfo && _react["default"].createElement("span", {
    className: "fhir-datatype__Coding__code",
    title: system
  }, "(", code, ")"));
};

exports.Coding = Coding;

var DocPropertyDisplay = function DocPropertyDisplay(props) {
  var _ref2, _parsedDoc$title, _parsedDoc$title2;

  var parsedDoc = props.parsedDoc,
      fhirBaseUrl = props.fhirBaseUrl;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var contentColumns = getColumns(fhirBaseUrl, (_ref2 = (_parsedDoc$title = parsedDoc.title) !== null && _parsedDoc$title !== void 0 ? _parsedDoc$title : parsedDoc.id) !== null && _ref2 !== void 0 ? _ref2 : '', t);
  return _react["default"].createElement("div", {
    className: "doc-prop-display"
  }, parsedDoc.title && _react["default"].createElement("h4", {
    className: "doc-resource__title"
  }, _react["default"].createElement(DocTitle, {
    title: (_parsedDoc$title2 = parsedDoc.title) !== null && _parsedDoc$title2 !== void 0 ? _parsedDoc$title2 : parsedDoc.id,
    status: parsedDoc.status
  })), _react["default"].createElement("div", null, !(0, _utils.itemIsEmpty)(parsedDoc.documentType.codeList) && _react["default"].createElement(Value, {
    label: t('Document type')
  }, _react["default"].createElement(Coding, {
    coding: parsedDoc.documentType.code
  })), !(0, _utils.itemIsEmpty)(parsedDoc.securityCodes.codeList) && _react["default"].createElement(Value, {
    label: t('Security label')
  }, _react["default"].createElement(Coding, {
    coding: parsedDoc.securityCodes.code
  })), parsedDoc.createdAt && _react["default"].createElement(Value, {
    label: t('Created at')
  }, _react["default"].createElement("span", null, parsedDoc.createdAt)), !(0, _utils.itemIsEmpty)(parsedDoc.context) && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(ValueSection, {
    label: t('Context')
  }, !(0, _utils.itemIsEmpty)(parsedDoc.context.eventCoding) && _react["default"].createElement(Value, {
    label: t('Event'),
    "data-testid": "context.event"
  }, _react["default"].createElement(Coding, {
    coding: parsedDoc.context.eventCoding
  })), !(0, _utils.itemIsEmpty)(parsedDoc.context.facilityTypeCoding) && _react["default"].createElement(Value, {
    label: t('Facility'),
    "data-testid": "context.facilityType"
  }, _react["default"].createElement(Coding, {
    coding: parsedDoc.context.facilityTypeCoding
  })), !(0, _utils.itemIsEmpty)(parsedDoc.context.practiceSettingCoding) && _react["default"].createElement(Value, {
    label: t('Practice Setting'),
    "data-testid": "context.practiceSetting"
  }, _react["default"].createElement(Coding, {
    coding: parsedDoc.context.practiceSettingCoding
  })), (parsedDoc.context.periodStart || parsedDoc.context.periodEnd) && _react["default"].createElement(Value, {
    label: t('Period'),
    "data-testid": "context.period"
  }, parsedDoc.context.periodStart, " - ", parsedDoc.context.periodEnd))), _react["default"].createElement(ValueSection, {
    label: "Content"
  }, _react["default"].createElement("div", {
    className: "doc-resource__content_table"
  }, _react["default"].createElement(_reactUtils.TableLayout, {
    datasource: parsedDoc.content,
    columns: contentColumns,
    pagination: false
  })))));
};

exports.DocPropertyDisplay = DocPropertyDisplay;

var getColumns = function getColumns(fhirBaseUrl, docTitle, t) {
  return [{
    title: t('S.no'),
    render: function SerialNumber(_, __, index) {
      return _react["default"].createElement("span", null, Number(index) + 1);
    }
  }, {
    title: t('Name'),
    dataIndex: 'formatDisplay'
  }, {
    title: t('Format'),
    dataIndex: 'formatCode'
  }, {
    className: 'doc-resource__content-table-action',
    title: t('Preview/Download'),
    render: function ActionRender(fullObj) {
      var attachment = fullObj.attachment,
          formatContentType = fullObj.formatContentType,
          formatCode = fullObj.formatCode;

      if (!formatContentType) {
        return null;
      }

      var _splitContentType = (0, _utils.splitContentType)(formatContentType),
          discretePart = _splitContentType.discretePart;

      var imgSrcB64Prefix = "data:".concat(formatContentType, ";base64,");
      var filename = "".concat(docTitle, ".").concat(formatCode);
      var imgSrc = "".concat(imgSrcB64Prefix, " ").concat(attachment.data);

      switch (discretePart) {
        case 'image':
          return _react["default"].createElement("img", {
            alt: docTitle,
            src: imgSrc
          });
      }

      if (attachment.binaryUrl) {
        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(DownloadLink, {
          filename: filename,
          linkToResource: attachment === null || attachment === void 0 ? void 0 : attachment.binaryUrl,
          fhirBaseUrl: fhirBaseUrl
        }));
      }
    }
  }];
};

var DownloadLink = function DownloadLink(props) {
  var linkToResource = props.linkToResource,
      fhirBaseUrl = props.fhirBaseUrl,
      filename = props.filename;

  var _useQuery = (0, _reactQuery.useQuery)(linkToResource, function () {
    return (0, _utils.fetchAttachmentForDownload)(fhirBaseUrl, linkToResource);
  }, {
    retry: false
  }),
      isLoading = _useQuery.isLoading,
      data = _useQuery.data,
      isError = _useQuery.isError;

  var _React$useState = _react["default"].useState(),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      dataUrl = _React$useState2[0],
      setDataUrl = _React$useState2[1];

  (0, _react.useEffect)(function () {
    if (data) {
      var dUrl = URL.createObjectURL(data);
      setDataUrl(dUrl);
      return function () {
        URL.revokeObjectURL(dUrl);
      };
    }
  }, [data]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("a", {
    download: filename,
    className: isLoading || isError ? 'disabled-link' : '',
    href: dataUrl
  }, "Download"), "\xA0\xA0", isLoading && _react["default"].createElement(_icons.SyncOutlined, {
    spin: true
  }));
};

exports.DownloadLink = DownloadLink;