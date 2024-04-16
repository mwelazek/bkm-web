"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitForm = exports.defaultCredentialsProps = exports.cancelUserHandler = exports.UserCredentials = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _reactRouter = require("react-router");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _keycloakService = require("@opensrp/keycloak-service");

var _connectedReducerRegistry = require("@onaio/connected-reducer-registry");

require("../../index.css");

var _constants = require("../../constants");

var _mls = require("../../mls");

var _user = require("../../ducks/user");

var _notifications = require("@opensrp/notifications");

_reduxReducerRegistry["default"].register(_user.reducerName, _user.reducer);

var cancelUserHandler = function cancelUserHandler(genericHistory) {
  genericHistory.push(_constants.URL_USER);
};

exports.cancelUserHandler = cancelUserHandler;
var defaultCredentialsProps = {
  fetchKeycloakUsersCreator: _user.fetchKeycloakUsers,
  keycloakUser: null,
  serviceClass: _keycloakService.KeycloakService,
  cancelUserHandler: cancelUserHandler
};
exports.defaultCredentialsProps = defaultCredentialsProps;

var submitForm = function submitForm(values, userId, serviceClass, keycloakBaseURL, t) {
  var serve = new serviceClass("".concat(_constants.KEYCLOAK_URL_USERS, "/").concat(userId).concat(_constants.KEYCLOAK_URL_RESET_PASSWORD), keycloakBaseURL);
  var password = values.password;
  serve.update({
    temporary: false,
    type: 'password',
    value: password
  }).then(function () {
    (0, _notifications.sendSuccessNotification)(t('Credentials updated successfully'));

    _connectedReducerRegistry.history.push(_constants.URL_USER);
  })["catch"](function (e) {
    (0, _notifications.sendErrorNotification)(e.description);
  });
};

exports.submitForm = submitForm;

var UserCredentials = function UserCredentials(props) {
  var serviceClass = props.serviceClass,
      match = props.match,
      keycloakBaseURL = props.keycloakBaseURL;
  var userId = match.params[_constants.ROUTE_PARAM_USER_ID];
  var username = match.params[_constants.ROUTE_PARAM_USERNAME];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var layout = {
    labelCol: {
      xs: {
        offset: 0,
        span: 16
      },
      sm: {
        offset: 2,
        span: 10
      },
      md: {
        offset: 0,
        span: 12
      },
      lg: {
        offset: 0,
        span: 8
      }
    },
    wrapperCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 14
      },
      md: {
        span: 12
      },
      lg: {
        span: 10
      }
    }
  };
  var tailLayout = {
    wrapperCol: {
      xs: {
        offset: 0,
        span: 16
      },
      sm: {
        offset: 12,
        span: 24
      },
      md: {
        offset: 10,
        span: 16
      },
      lg: {
        offset: 8,
        span: 14
      }
    }
  };
  var history = (0, _reactRouter.useHistory)();
  var heading = "".concat(t('User Credentials'), " | ").concat(username);
  return _react["default"].createElement(_antd.Row, {
    className: "content-section"
  }, _react["default"].createElement(_reactUtils.PageHeader, {
    title: heading
  }), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3",
    span: 24
  }, _react["default"].createElement("div", {
    className: "form-container"
  }, _react["default"].createElement(_antd.Form, (0, _extends2["default"])({}, layout, {
    onFinish: function onFinish(values) {
      return submitForm(values, userId, serviceClass, keycloakBaseURL, t);
    }
  }), _react["default"].createElement(_antd.Form.Item, {
    name: "password",
    label: t('Password'),
    rules: [{
      required: true,
      message: t('Password is required')
    }],
    hasFeedback: true
  }, _react["default"].createElement(_antd.Input.Password, null)), _react["default"].createElement(_antd.Form.Item, {
    name: "confirm",
    label: t('Confirm Password'),
    dependencies: ['password'],
    hasFeedback: true,
    rules: [{
      required: true,
      message: t('Confirm Password is required')
    }, function (_ref) {
      var getFieldValue = _ref.getFieldValue;
      return {
        validator: function validator(rule, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }

          return Promise.reject(t('The two passwords that you entered do not match!'));
        }
      };
    }]
  }, _react["default"].createElement(_antd.Input.Password, null)), _react["default"].createElement(_antd.Form.Item, tailLayout, _react["default"].createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    className: "reset-password"
  }, t('Set password')), _react["default"].createElement(_antd.Button, {
    onClick: function onClick() {
      return props.cancelUserHandler(history);
    },
    className: "cancel-user"
  }, t('Cancel')))))));
};

exports.UserCredentials = UserCredentials;
UserCredentials.defaultProps = defaultCredentialsProps;