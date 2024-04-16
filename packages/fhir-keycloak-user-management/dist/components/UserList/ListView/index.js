"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _icons = require("@ant-design/icons");

var _userManagement = require("@opensrp/user-management");

var _utils = require("./utils");

var _tableColumns = require("./tableColumns");

var _reactRouter = require("react-router");

var _reactHelmet = require("react-helmet");

var _reactQuery = require("react-query");

var _sessionReducer = require("@onaio/session-reducer");

var _reactRedux = require("react-redux");

var _ViewDetails = require("../ViewDetails");

var _i18n = require("@opensrp/i18n");

var _rbac = require("@opensrp/rbac");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var UserList = function UserList(props) {
  var _sParams$get, _data$records;

  var fhirBaseURL = props.fhirBaseURL,
      keycloakBaseURL = props.keycloakBaseURL;
  var location = (0, _reactRouter.useLocation)();
  var history = (0, _reactRouter.useHistory)();
  var match = (0, _reactRouter.useRouteMatch)();
  var extraData = (0, _reactRedux.useSelector)(_sessionReducer.getExtraData);
  var queryClient = (0, _reactQuery.useQueryClient)();

  var _useTranslation = (0, _i18n.useTranslation)(),
      t = _useTranslation.t;

  var userRole = (0, _rbac.useUserRole)();

  var _useSearchParams = (0, _reactUtils.useSearchParams)(),
      sParams = _useSearchParams.sParams,
      addParam = _useSearchParams.addParam;

  var resourceId = (_sParams$get = sParams.get(_reactUtils.viewDetailsQuery)) !== null && _sParams$get !== void 0 ? _sParams$get : undefined;

  var _useQuery = (0, _reactQuery.useQuery)([_userManagement.KEYCLOAK_URL_USERS], function () {
    return (0, _utils.loadKeycloakResources)(keycloakBaseURL, _userManagement.KEYCLOAK_URL_USERS);
  }),
      isLoading = _useQuery.isLoading,
      data = _useQuery.data,
      error = _useQuery.error,
      isFetching = _useQuery.isFetching;

  if (error && !data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: error.message
    });
  }

  var tableData = ((_data$records = data === null || data === void 0 ? void 0 : data.records) !== null && _data$records !== void 0 ? _data$records : []).filter(function (user) {
    var searchParam = new URLSearchParams(location.search).get(_reactUtils.searchQuery);

    if (!searchParam) {
      return true;
    }

    var firstName = user.firstName,
        username = user.username,
        lastName = user.lastName;
    return [firstName, username, lastName].filter(function (x) {
      return !!x;
    }).map(function (x) {
      return x.replace(' ', '');
    }).map(function (x) {
      return x.toLowerCase();
    }).some(function (word) {
      return word.includes(searchParam.toLowerCase().replace(' ', ''));
    });
  }).map(function (obj) {
    return _objectSpread(_objectSpread({}, obj), {}, {
      key: obj.id
    });
  });

  var onViewDetails = function onViewDetails(resourceId) {
    return addParam(_reactUtils.viewDetailsQuery, resourceId);
  };

  var columns = (0, _tableColumns.getTableColumns)(keycloakBaseURL, fhirBaseURL, extraData, queryClient, t, onViewDetails, userRole, history);
  var searchFormProps = {
    defaultValue: (0, _reactUtils.getQueryParams)(location)[_reactUtils.searchQuery],
    onChangeHandler: function onChangeHandler(event) {
      var searchText = event.target.value;
      var nextUrl = match.url;
      var currentSParams = new URLSearchParams(location.search);

      if (searchText) {
        currentSParams.set(_reactUtils.searchQuery, searchText);
      } else {
        currentSParams["delete"](_reactUtils.searchQuery);
      }

      nextUrl = ''.concat(nextUrl, '?').concat(currentSParams.toString());
      history.push(nextUrl);
    }
  };
  var tableProps = {
    datasource: tableData,
    columns: columns,
    loading: isFetching || isLoading
  };
  var title = t('User Management');
  return _react["default"].createElement("div", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, title)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: title
  }), _react["default"].createElement(_antd.Row, {
    className: "list-view"
  }, _react["default"].createElement(_antd.Col, {
    className: "main-content"
  }, _react["default"].createElement("div", {
    className: "main-content__header"
  }, _react["default"].createElement(_reactUtils.SearchForm, (0, _extends2["default"])({
    "data-testid": "search-form"
  }, searchFormProps)), _react["default"].createElement(_rbac.RbacCheck, {
    permissions: ['iam_user.create']
  }, _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return history.push(_userManagement.URL_USER_CREATE);
    }
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('Add User')))), _react["default"].createElement(_reactUtils.TableLayout, tableProps)), _react["default"].createElement(_ViewDetails.ViewDetailsWrapper, {
    resourceId: resourceId,
    fhirBaseUrl: fhirBaseURL,
    keycloakBaseUrl: keycloakBaseURL
  })));
};

exports.UserList = UserList;