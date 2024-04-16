"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateEditUser = exports.ConnectedCreateEditUser = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _antd = require("antd");

var _reactRedux = require("react-redux");

var _keycloakService = require("@opensrp/keycloak-service");

var _notifications = require("@opensrp/notifications");

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../../constants");

var _mls = require("../../mls");

var _user = require("../../ducks/user");

var _sessionReducer = require("@onaio/session-reducer");

require("../../index.css");

var _UserForm = require("../forms/UserForm");

var _utils = require("../forms/UserForm/utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_reduxReducerRegistry["default"].register(_user.reducerName, _user.reducer);

var getOpenSrpPractitioner = function getOpenSrpPractitioner(baseUrl, userId) {
  var serve = new _reactUtils.OpenSRPService(_constants.OPENSRP_CREATE_PRACTITIONER_ENDPOINT, baseUrl);
  return serve.read(userId);
};

var defaultProps = {
  getPractitionerFun: getOpenSrpPractitioner,
  postPutPractitionerFactory: _utils.postPutPractitioner
};

var CreateEditUser = function CreateEditUser(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      userGroupsLoading = _useState2[0],
      setUserGroupsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      keyCloakUserLoading = _useState4[0],
      setKeyCloakUserLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      userGroupLoading = _useState6[0],
      setUserGroupLoading = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      practitionerLoading = _useState8[0],
      setPractitionerLoading = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      userGroups = _useState10[0],
      setUserGroups = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      assignedUserGroups = _useState12[0],
      setAssignedUserGroups = _useState12[1];

  var _useState13 = (0, _react.useState)(_UserForm.defaultUserFormInitialValues),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      initialValues = _useState14[0],
      setInitialValues = _useState14[1];

  var _useState15 = (0, _react.useState)(),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      practitioner = _useState16[0],
      setPractitioner = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      practitionerRoleLoading = _useState18[0],
      setPractitionerRoleLoading = _useState18[1];

  var _useState19 = (0, _react.useState)(),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      practitionerRole = _useState20[0],
      setPractitionerRole = _useState20[1];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var keycloakUser = props.keycloakUser,
      keycloakBaseURL = props.keycloakBaseURL,
      baseUrl = props.baseUrl,
      extraData = props.extraData,
      fetchKeycloakUsersCreator = props.fetchKeycloakUsersCreator,
      userFormHiddenFields = props.userFormHiddenFields,
      userFormRenderFields = props.userFormRenderFields,
      getPractitionerFun = props.getPractitionerFun,
      postPutPractitionerFactory = props.postPutPractitionerFactory,
      getPractitionerRoleFun = props.getPractitionerRoleFun;
  var userId = props.match.params[_constants.ROUTE_PARAM_USER_ID];
  (0, _react.useEffect)(function () {
    if (!userGroups.length) {
      setUserGroupsLoading(true);
      var serve = new _keycloakService.KeycloakService(_constants.KEYCLOAK_URL_USER_GROUPS, keycloakBaseURL);
      serve.list().then(function (response) {
        return setUserGroups(response);
      })["catch"](function (_) {
        (0, _notifications.sendErrorNotification)(t('There was a problem fetching User Group'));
      })["finally"](function () {
        return setUserGroupsLoading(false);
      });
    }
  }, [keycloakBaseURL, baseUrl, userGroups.length, t]);
  (0, _react.useEffect)(function () {
    if (userId) {
      setKeyCloakUserLoading(true);
      var serve = new _keycloakService.KeycloakService(_constants.KEYCLOAK_URL_USERS, keycloakBaseURL);
      serve.read(userId).then(function (response) {
        if (response) fetchKeycloakUsersCreator([response]);
      })["catch"](function (_) {
        (0, _notifications.sendErrorNotification)(t('There was a problem fetching User'));
      })["finally"](function () {
        return setKeyCloakUserLoading(false);
      });
    }
  }, [userId, keycloakBaseURL, fetchKeycloakUsersCreator, t]);
  (0, _react.useEffect)(function () {
    if (userId) {
      setUserGroupLoading(true);
      var serve = new _keycloakService.KeycloakService(_constants.KEYCLOAK_URL_USERS + '/' + userId + _constants.KEYCLOAK_URL_USER_GROUPS, keycloakBaseURL);
      serve.list().then(function (response) {
        setAssignedUserGroups(response);
      })["catch"](function (_) {
        (0, _notifications.sendErrorNotification)(t('There was a problem fetching User Group'));
      })["finally"](function () {
        return setUserGroupLoading(false);
      });
    }
  }, [userId, keycloakBaseURL, t]);
  (0, _react.useEffect)(function () {
    if (userId) {
      setPractitionerLoading(true);
      getPractitionerFun(baseUrl, userId).then(function (response) {
        var res = response;
        setPractitioner(res);
      })["catch"](function (_) {
        (0, _notifications.sendErrorNotification)(t('There was a problem fetching Practitioner details'));
      })["finally"](function () {
        return setPractitionerLoading(false);
      });
    }
  }, [userId, baseUrl, getPractitionerFun, t]);
  (0, _react.useEffect)(function () {
    if (userId && getPractitionerRoleFun) {
      setPractitionerRoleLoading(true);
      getPractitionerRoleFun(baseUrl, userId).then(function (resp) {
        return setPractitionerRole(resp);
      })["catch"](function () {
        return (0, _notifications.sendErrorNotification)(t('Failed to load practitioner role'));
      })["finally"](function () {
        return setPractitionerRoleLoading(false);
      });
    }
  }, [baseUrl, getPractitionerRoleFun, t, userId]);
  (0, _react.useEffect)(function () {
    setInitialValues((0, _utils.getFormValues)(keycloakUser !== null && keycloakUser !== void 0 ? keycloakUser : undefined, practitioner, assignedUserGroups, practitionerRole));
  }, [keycloakUser, practitioner, assignedUserGroups, practitionerRole]);
  if (userGroupsLoading || keyCloakUserLoading || userGroupLoading || practitionerLoading || practitionerRoleLoading) return _react["default"].createElement(_antd.Spin, {
    size: "large",
    className: "custom-spinner",
    "data-testid": "custom-create-user-spinner"
  });
  return _react["default"].createElement(_antd.Row, null, _react["default"].createElement(_antd.Col, {
    span: 24
  }, _react["default"].createElement(_UserForm.UserForm, {
    initialValues: initialValues,
    keycloakBaseURL: keycloakBaseURL,
    baseUrl: baseUrl,
    userGroups: userGroups,
    extraData: extraData,
    hiddenFields: userFormHiddenFields,
    renderFields: userFormRenderFields,
    practitionerUpdaterFactory: postPutPractitionerFactory,
    isFHIRInstance: !!getPractitionerRoleFun
  })));
};

exports.CreateEditUser = CreateEditUser;
CreateEditUser.defaultProps = defaultProps;

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var userId = ownProps.match.params[_constants.ROUTE_PARAM_USER_ID];
  var keycloakUser = null;

  if (userId) {
    var keycloakUsersSelector = (0, _user.makeKeycloakUsersSelector)();
    var keycloakUsers = keycloakUsersSelector(state, {
      id: [userId]
    });
    keycloakUser = keycloakUsers.length === 1 ? keycloakUsers[0] : null;
  }

  var extraData = (0, _sessionReducer.getExtraData)(state);
  return {
    keycloakUser: keycloakUser,
    extraData: extraData
  };
};

var mapDispatchToProps = {
  fetchKeycloakUsersCreator: _user.fetchKeycloakUsers
};
var ConnectedCreateEditUser = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreateEditUser);
exports.ConnectedCreateEditUser = ConnectedCreateEditUser;