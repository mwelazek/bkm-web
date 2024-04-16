"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAPIStateSelector = exports.getExtraData = exports.fetchOauthProviderState = exports.fetchApiToken = exports.fetchAccessToken = void 0;

var _sessionReducer = require("@onaio/session-reducer");

var _reselect = require("reselect");

var fetchAccessToken = function fetchAccessToken(_, props) {
  return props.accessToken ? props.accessToken : null;
};

exports.fetchAccessToken = fetchAccessToken;

var fetchApiToken = function fetchApiToken(_, props) {
  return props.apiToken ? props.apiToken : null;
};

exports.fetchApiToken = fetchApiToken;

var fetchOauthProviderState = function fetchOauthProviderState(_, props) {
  return props.providerState ? props.providerState : null;
};

exports.fetchOauthProviderState = fetchOauthProviderState;

var getExtraData = function getExtraData(state) {
  return state[_sessionReducer.reducerName].extraData;
};

exports.getExtraData = getExtraData;

var makeAPIStateSelector = function makeAPIStateSelector() {
  return (0, _reselect.createSelector)([fetchAccessToken, fetchApiToken, fetchOauthProviderState, getExtraData], function (accessToken, apiToken, oauthState, extraData) {
    if (accessToken) {
      return extraData.oAuth2Data && extraData.oAuth2Data.access_token ? extraData.oAuth2Data.access_token : null;
    } else if (apiToken) {
      return extraData.api_token ? extraData.api_token : null;
    } else if (oauthState) {
      return extraData.oAuth2Data && extraData.oAuth2Data.state ? extraData.oAuth2Data.state : null;
    }
  });
};

exports.makeAPIStateSelector = makeAPIStateSelector;