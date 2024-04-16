"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultEditUserGroupProps = exports.CreateEditUserGroup = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reactRedux = require("react-redux");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _notifications = require("@opensrp/notifications");

var _Form = require("./Form");

var _constants = require("../../constants");

var _mls = require("../../mls");

var _userGroups = require("../../ducks/userGroups");

var _utils = require("../UserRolesList/utils");

var _utils2 = require("./utils");

var _userRoles = require("../../ducks/userRoles");

_reduxReducerRegistry["default"].register(_userGroups.reducerName, _userGroups.reducer);

var userGroupsSelector = (0, _userGroups.makeKeycloakUserGroupsSelector)();
var userRolesSelector = (0, _userRoles.makeKeycloakUserRolesSelector)();
var defaultEditUserGroupProps = {
  keycloakBaseURL: ''
};
exports.defaultEditUserGroupProps = defaultEditUserGroupProps;

var CreateEditUserGroup = function CreateEditUserGroup(props) {
  var keycloakBaseURL = props.keycloakBaseURL;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      isLoading = _React$useState2[0],
      setIsLoading = _React$useState2[1];

  var _React$useState3 = _react["default"].useState([]),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      availableRoles = _React$useState4[0],
      setAvailableRoles = _React$useState4[1];

  var _React$useState5 = _react["default"].useState([]),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      assignedRoles = _React$useState6[0],
      setAssignedRoles = _React$useState6[1];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var dispatch = (0, _reactRedux.useDispatch)();
  var userGroupId = props.match.params[_constants.ROUTE_PARAM_USER_GROUP_ID];
  var keycloakUserGroup = (0, _reactRedux.useSelector)(function (state) {
    return userGroupsSelector(state, {
      id: [userGroupId]
    });
  });
  var allRoles = (0, _reactRedux.useSelector)(function (state) {
    return userRolesSelector(state, {});
  });
  var initialValues = keycloakUserGroup.length ? keycloakUserGroup[0] : _Form.defaultInitialValues;

  _react["default"].useEffect(function () {
    if (userGroupId) {
      setIsLoading(true);
      var groupPromise = (0, _utils2.fetchSingleGroup)(userGroupId, keycloakBaseURL, dispatch, t);
      var allRolesPromise = (0, _utils.fetchAllRoles)(keycloakBaseURL, dispatch, t);
      var availableRolesPromise = (0, _utils2.fetchRoleMappings)(userGroupId, keycloakBaseURL, _constants.KEYCLOAK_URL_AVAILABLE_ROLES, setAvailableRoles, t);
      var assignedRolesPromise = (0, _utils2.fetchRoleMappings)(userGroupId, keycloakBaseURL, _constants.KEYCLOAK_URL_ASSIGNED_ROLES, setAssignedRoles, t);
      Promise.all([groupPromise, allRolesPromise, availableRolesPromise, assignedRolesPromise])["catch"](function () {
        return (0, _notifications.sendErrorNotification)(t('There was a problem fetching user groups'));
      })["finally"](function () {
        return setIsLoading(false);
      });
    }
  }, [initialValues.id, props.location]);

  if (isLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  var userGroupFormProps = {
    allRoles: allRoles,
    assignedRoles: assignedRoles,
    availableRoles: availableRoles,
    initialValues: initialValues,
    keycloakBaseURL: keycloakBaseURL
  };
  return _react["default"].createElement(_antd.Row, null, _react["default"].createElement(_antd.Col, {
    span: 24
  }, _react["default"].createElement(_Form.UserGroupForm, userGroupFormProps)));
};

exports.CreateEditUserGroup = CreateEditUserGroup;
CreateEditUserGroup.defaultProps = defaultEditUserGroupProps;