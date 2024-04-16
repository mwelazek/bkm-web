"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileNameFromCDHHeader = exports.downloadFile = void 0;
exports.getResourcesFromBundle = getResourcesFromBundle;

function getResourcesFromBundle(bundle) {
  var _bundle$entry, _temp$map;

  var temp = (_bundle$entry = bundle.entry) === null || _bundle$entry === void 0 ? void 0 : _bundle$entry.filter(function (x) {
    return x !== undefined;
  });
  var rtn = (_temp$map = temp === null || temp === void 0 ? void 0 : temp.map(function (e) {
    return e.resource;
  })) !== null && _temp$map !== void 0 ? _temp$map : [];
  return rtn;
}

var downloadFile = function downloadFile(blob, filename) {
  var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'application/octet-stream';
  var blobFile = typeof blob === 'string' ? new Blob([blob], {
    type: contentType
  }) : blob;

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blobFile, filename);
  } else {
    var url = window.URL.createObjectURL(blobFile);
    var link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    setTimeout(function () {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 200);
  }
};

exports.downloadFile = downloadFile;

var getFileNameFromCDHHeader = function getFileNameFromCDHHeader(CDHeader) {
  var fileName = CDHeader.split('filename=')[1].split(';')[0];
  return fileName;
};

exports.getFileNameFromCDHHeader = getFileNameFromCDHHeader;