"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UserRolesList = void 0;
Object.defineProperty(exports, "fetchAllRoles", {
  enumerable: true,
  get: function get() {
    return _utils.fetchAllRoles;
  }
});

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = require("react-helmet");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _reactRedux = require("react-redux");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _notifications = require("@opensrp/notifications");

var _userRoles = require("../../ducks/userRoles");

var _constants = require("../../constants");

var _utils = require("./utils");

var _mls = require("../../mls");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_reduxReducerRegistry["default"].register(_userRoles.reducerName, _userRoles.reducer);

var userRolesSelector = (0, _userRoles.makeKeycloakUserRolesSelector)();
var defaultProps = {
  keycloakBaseURL: ''
};

var UserRolesList = function UserRolesList(props) {
  var dispatch = (0, _reactRedux.useDispatch)();

  var searchQuery = (0, _reactUtils.getQueryParams)(props.location)[_constants.SEARCH_QUERY_PARAM];

  var getUserRolesList = (0, _reactRedux.useSelector)(function (state) {
    return userRolesSelector(state, {
      searchText: searchQuery
    });
  });

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var keycloakBaseURL = props.keycloakBaseURL;
  (0, _react.useEffect)(function () {
    if (isLoading) {
      (0, _utils.fetchAllRoles)(keycloakBaseURL, dispatch, t)["catch"](function () {
        (0, _notifications.sendErrorNotification)(t('There was a problem fetching roles'));
      })["finally"](function () {
        return setIsLoading(false);
      });
    }
  });
  if (isLoading) return _react["default"].createElement(_antd.Spin, {
    size: "large",
    className: "custom-spinner"
  });
  var searchFormProps = {
    defaultValue: (0, _reactUtils.getQueryParams)(props.location)[_constants.SEARCH_QUERY_PARAM],
    onChangeHandler: (0, _reactUtils.createChangeHandler)(_constants.SEARCH_QUERY_PARAM, props)
  };
  var columns = [{
    title: t('Name'),
    dataIndex: 'name',
    sorter: function sorter(a, b) {
      return a.name.localeCompare(b.name);
    }
  }, {
    title: t('Composite'),
    dataIndex: 'composite',
    render: function render(value) {
      return value.toString();
    }
  }, {
    title: t('Description'),
    dataIndex: 'description'
  }];
  var pageTitle = t('User roles');
  return _react["default"].createElement("div", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement(_antd.Row, {
    className: "list-view"
  }, _react["default"].createElement(_antd.Col, {
    className: "main-content"
  }, _react["default"].createElement("div", {
    className: "main-content__header"
  }, _react["default"].createElement(_reactUtils.SearchForm, searchFormProps)), _react["default"].createElement(_reactUtils.TableLayout, {
    id: "UserRolesList",
    persistState: true,
    datasource: getUserRolesList,
    columns: columns
  }))));
};

exports.UserRolesList = UserRolesList;
UserRolesList.defaultProps = defaultProps;
var _default = UserRolesList;
exports["default"] = _default;