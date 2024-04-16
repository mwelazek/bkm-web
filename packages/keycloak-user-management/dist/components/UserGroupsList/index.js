"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UserGroupsList = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = require("react-helmet");

var _reactUtils = require("@opensrp/react-utils");

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var _reactRouter = require("react-router");

var _icons = require("@ant-design/icons");

var _reactRedux = require("react-redux");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _notifications = require("@opensrp/notifications");

var _keycloakService = require("@opensrp/keycloak-service");

var _reactQuery = require("react-query");

var _userGroups = require("../../ducks/userGroups");

var _mls = require("../../mls");

var _constants = require("../../constants");

var _UserGroupDetailView = require("../UserGroupDetailView");

var _utils = require("../UserGroupsList/utils");

var _rbac = require("@opensrp/rbac");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_reduxReducerRegistry["default"].register(_userGroups.reducerName, _userGroups.reducer);

var userGroupsSelector = (0, _userGroups.makeKeycloakUserGroupsSelector)();
var defaultProps = {
  keycloakBaseURL: ''
};

var UserGroupsList = function UserGroupsList(props) {
  var keycloakBaseURL = props.keycloakBaseURL;
  var dispatch = (0, _reactRedux.useDispatch)();

  var searchQuery = (0, _reactUtils.getQueryParams)(props.location)[_constants.SEARCH_QUERY_PARAM];

  var getUserGroupsList = (0, _reactRedux.useSelector)(function (state) {
    return userGroupsSelector(state, {
      searchText: searchQuery
    });
  });

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      groupId = _useState2[0],
      setGroupId = _useState2[1];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var history = (0, _reactRouter.useHistory)();

  var _useQuery = (0, _reactQuery.useQuery)(['fetchKeycloakUserGroups', _constants.KEYCLOAK_URL_USER_GROUPS, keycloakBaseURL], function () {
    return new _keycloakService.KeycloakService(_constants.KEYCLOAK_URL_USER_GROUPS, keycloakBaseURL).list();
  }, {
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching User Groups'));
    },
    onSuccess: function onSuccess(response) {
      return dispatch((0, _userGroups.fetchKeycloakUserGroups)(response));
    }
  }),
      isUserGroupsLoading = _useQuery.isLoading,
      isUserGroupsError = _useQuery.isError;

  var _useQuery2 = (0, _reactQuery.useQuery)(['loadGroupDetails', groupId, keycloakBaseURL], function () {
    return (0, _utils.loadGroupDetails)(groupId, keycloakBaseURL);
  }, {
    enabled: groupId !== null,
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching Group Details'));
    }
  }),
      isGroupDetailsLoading = _useQuery2.isLoading,
      isGroupDetailsError = _useQuery2.isError,
      GroupDetails = _useQuery2.data;

  var _useQuery3 = (0, _reactQuery.useQuery)([_constants.KEYCLOAK_URL_EFFECTIVE_ROLES, groupId, keycloakBaseURL], function () {
    var keycloakService = new _keycloakService.KeycloakService("".concat(_constants.KEYCLOAK_URL_USER_GROUPS, "/").concat(groupId).concat(_constants.KEYCLOAK_URL_EFFECTIVE_ROLES), keycloakBaseURL);
    return keycloakService.list();
  }, {
    enabled: groupId !== null,
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching effective roles'));
    }
  }),
      effectiveRolesLoading = _useQuery3.isLoading,
      effectiveRolesError = _useQuery3.isError,
      effectiveRoles = _useQuery3.data;

  var _useQuery4 = (0, _reactQuery.useQuery)(['loadGroupMembers', groupId, keycloakBaseURL], function () {
    return (0, _utils.loadGroupMembers)(groupId, keycloakBaseURL);
  }, {
    enabled: groupId !== null,
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching Group Members'));
    }
  }),
      isUserGroupMembersLoading = _useQuery4.isLoading,
      isUserGroupMembersError = _useQuery4.isError,
      userGroupMembers = _useQuery4.data;

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
  }];

  if (isUserGroupsLoading) {
    return _react["default"].createElement(_antd.Spin, {
      "data-testid": "group-list-loader",
      size: "large",
      className: "custom-spinner"
    });
  }

  if (isUserGroupsError) return _react["default"].createElement(_reactUtils.Resource404, null);

  var getItems = function getItems(record) {
    return [{
      key: record.id,
      label: _react["default"].createElement(_antd.Button, {
        type: "link",
        "data-testid": "view-details",
        onClick: function onClick() {
          setGroupId(record.id);
        }
      }, t('View Details'))
    }];
  };

  return _react["default"].createElement("div", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, t('User Groups'))), _react["default"].createElement(_reactUtils.PageHeader, {
    title: t('User Groups')
  }), _react["default"].createElement(_antd.Row, {
    className: "list-view"
  }, _react["default"].createElement(_antd.Col, {
    className: 'main-content'
  }, _react["default"].createElement("div", {
    className: "main-content__header"
  }, _react["default"].createElement(_reactUtils.SearchForm, searchFormProps), _react["default"].createElement(_rbac.RbacCheck, {
    permissions: ['iam_group.create']
  }, _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return history.push(_constants.URL_USER_GROUP_CREATE);
    }
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('New User Group')))), _react["default"].createElement(_reactUtils.TableLayout, {
    id: "UserGroupsList",
    persistState: true,
    datasource: getUserGroupsList,
    columns: columns,
    actions: {
      title: t('Actions'),
      width: '10%',
      render: function render(record) {
        return _react["default"].createElement("span", null, _react["default"].createElement(_rbac.RbacCheck, {
          permissions: ['iam_group.update']
        }, _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Link, {
          to: "".concat(_constants.URL_USER_GROUP_EDIT, "/").concat(record.id),
          className: "m-0 p-1"
        }, t('Edit')), _react["default"].createElement(_antd.Divider, {
          type: "vertical"
        }))), _react["default"].createElement(_antd.Dropdown, {
          menu: {
            items: getItems(record)
          },
          placement: "bottomLeft",
          arrow: true,
          trigger: ['click']
        }, _react["default"].createElement(_icons.MoreOutlined, {
          className: "more-options",
          "data-testid": "more-options"
        })));
      }
    }
  })), groupId ? _react["default"].createElement(_antd.Col, {
    className: "pl-3",
    span: 5
  }, _react["default"].createElement(_UserGroupDetailView.ViewDetails, {
    loading: isGroupDetailsLoading || isUserGroupMembersLoading || effectiveRolesLoading,
    error: isGroupDetailsError || isUserGroupMembersError || effectiveRolesError,
    GroupDetails: GroupDetails,
    effectiveRoles: effectiveRoles,
    userGroupMembers: userGroupMembers,
    onClose: function onClose() {
      setGroupId(null);
    }
  })) : null));
};

exports.UserGroupsList = UserGroupsList;
UserGroupsList.defaultProps = defaultProps;
var _default = UserGroupsList;
exports["default"] = _default;