"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewDetailsQuery = exports.startingPageSize = exports.startingPage = exports.searchQuery = exports.pageSizeQuery = exports.pageQuery = exports.matchesOnName = exports.getStringParam = exports.getNumberParam = exports.getNextUrlOnSearch = void 0;
var pageSizeQuery = 'pageSize';
exports.pageSizeQuery = pageSizeQuery;
var pageQuery = 'page';
exports.pageQuery = pageQuery;
var searchQuery = 'search';
exports.searchQuery = searchQuery;
var viewDetailsQuery = 'viewDetails';
exports.viewDetailsQuery = viewDetailsQuery;

var getStringParam = function getStringParam(location, paramKey) {
  var sParams = new URLSearchParams(location.search);
  return sParams.get(paramKey);
};

exports.getStringParam = getStringParam;

var getNumberParam = function getNumberParam(location, paramKey) {
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var sParams = new URLSearchParams(location.search);
  var rawParamVal = sParams.get(paramKey);
  var paramVal = rawParamVal ? Number(rawParamVal) : NaN;
  return isNaN(paramVal) ? fallback : paramVal;
};

exports.getNumberParam = getNumberParam;
var startingPage = 1;
exports.startingPage = startingPage;
var startingPageSize = 20;
exports.startingPageSize = startingPageSize;

var getNextUrlOnSearch = function getNextUrlOnSearch(event, location, match) {
  var searchText = event.target.value;
  var nextUrl = match.path;
  var currentSParams = new URLSearchParams(location.search);

  if (searchText) {
    currentSParams.set(searchQuery, searchText);
    currentSParams.set(pageQuery, startingPage.toString());
    currentSParams.set(pageSizeQuery, startingPageSize.toString());
  } else {
    currentSParams["delete"](searchQuery);
  }

  nextUrl = ''.concat(nextUrl, '?').concat(currentSParams.toString());
  return nextUrl;
};

exports.getNextUrlOnSearch = getNextUrlOnSearch;

var matchesOnName = function matchesOnName(obj, search) {
  var name = obj.name;

  if (name === undefined) {
    return false;
  }

  return name.toLowerCase().includes(search.toLowerCase());
};

exports.matchesOnName = matchesOnName;