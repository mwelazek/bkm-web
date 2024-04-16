"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableActions = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _utils = require("./utils");

var _reactRouterDom = require("react-router-dom");

var _constants = require("../../../constants");

var _reactQuery = require("react-query");

var _notifications = require("@opensrp/notifications");

var _mls = require("../../../mls");

var _rbac = require("@opensrp/rbac");

var _excluded = ["permissions"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TableActions = function TableActions(props) {
  var record = props.record,
      removeKeycloakUsersCreator = props.removeKeycloakUsersCreator,
      keycloakBaseURL = props.keycloakBaseURL,
      opensrpBaseURL = props.opensrpBaseURL,
      extraData = props.extraData,
      setDetailsCallback = props.setDetailsCallback;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var user_id = extraData.user_id;
  var query = (0, _reactQuery.useQueryClient)();
  var history = (0, _reactRouterDom.useHistory)();
  var userRole = React.useContext(_rbac.RoleContext);

  var getItems = function getItems(record) {
    return [{
      key: '1',
      permissions: ['iam_user.delete'],
      label: React.createElement(_antd.Popconfirm, {
        title: t('Are you sure you want to delete this user?'),
        okText: t('Yes'),
        cancelText: t('No'),
        onConfirm: function onConfirm() {
          return (0, _utils.deleteUser)(removeKeycloakUsersCreator, keycloakBaseURL, opensrpBaseURL, record.id, t).then(function () {
            return query.invalidateQueries(_constants.UserQueryId)["catch"](function () {
              return (0, _notifications.sendErrorNotification)(t('Failed to update data, please refresh the page to see the most recent changes'));
            });
          });
        }
      }, user_id && (record.id === user_id ? null : React.createElement(_antd.Button, {
        "data-testid": "delete-user",
        danger: true,
        type: "link",
        style: {
          color: '#'
        }
      }, t('Delete'))))
    }, {
      key: '2',
      permissions: ['iam_user.update'],
      label: React.createElement(_antd.Button, {
        type: "link",
        "data-testid": "credentials",
        onClick: function onClick() {
          return history.push("".concat(_constants.URL_USER_CREDENTIALS, "/").concat(record.id, "/").concat(record.username));
        }
      }, t('Credentials'))
    }, {
      key: '3',
      permissions: [],
      label: React.createElement(_antd.Button, {
        type: "link",
        className: "viewDetails",
        "data-testid": "viewDetails",
        onClick: function onClick() {
          return setDetailsCallback(record);
        }
      }, t('View Details'))
    }].filter(function (item) {
      return userRole.hasPermissions(item.permissions);
    }).map(function (item) {
      var permissions = item.permissions,
          rest = (0, _objectWithoutProperties2["default"])(item, _excluded);
      return rest;
    });
  };

  return React.createElement(React.Fragment, null, React.createElement(_reactRouterDom.Link, {
    to: "".concat(_constants.URL_USER_EDIT, "/").concat(record.id),
    key: "actions"
  }, t('Edit')), React.createElement(_antd.Divider, {
    type: "vertical"
  }), React.createElement(_antd.Dropdown, {
    menu: {
      items: getItems(record)
    },
    placement: "bottomRight",
    arrow: true,
    trigger: ['click']
  }, React.createElement(_antd.Button, {
    type: "link",
    style: {
      padding: 0,
      margin: 0
    }
  }, React.createElement(_icons.MoreOutlined, {
    "data-testid": "action-dropdown",
    className: "more-options",
    style: {
      fontSize: '16px',
      padding: 0,
      margin: 0
    }
  }))));
};

exports.TableActions = TableActions;