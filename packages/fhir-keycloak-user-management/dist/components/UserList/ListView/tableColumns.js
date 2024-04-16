"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTableColumns = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var React = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _utils = require("./utils");

var _reactRouterDom = require("react-router-dom");

var _userManagement = require("@opensrp/user-management");

var _notifications = require("@opensrp/notifications");

var _rbac = require("@opensrp/rbac");

var _excluded = ["permissions"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getTableColumns = function getTableColumns(keycloakBaseUrl, baseUrl, extraData, queryClient, t, onViewDetails, userRole, history) {
  var user_id = extraData.user_id;
  var headerItems = [t('First name'), t('Last name'), t('Username')];
  var dataElements = [];
  var fields = ['firstName', 'lastName', 'username'];
  fields.forEach(function (field, index) {
    dataElements.push({
      title: headerItems[index],
      dataIndex: field,
      key: field,
      sorter: function sorter(a, b) {
        if (a[field] > b[field]) return -1;else if (a[field] < b[field]) return 1;
        return 0;
      },
      ellipsis: true
    });
  });

  var getItems = function getItems(record) {
    return [{
      key: '1',
      permissions: [],
      label: React.createElement(_antd.Button, {
        onClick: function onClick() {
          return onViewDetails(record.id);
        },
        type: "link"
      }, t('View Details'))
    }, {
      key: '2',
      permissions: ['iam_user.delete'],
      label: React.createElement(_antd.Popconfirm, {
        title: t('Are you sure you want to delete this user?'),
        okText: t('Yes'),
        cancelText: t('No'),
        onConfirm: (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _utils.deleteUser)(keycloakBaseUrl, baseUrl, record.id, t);

                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return queryClient.invalidateQueries([_userManagement.KEYCLOAK_URL_USERS]);

                case 5:
                  return _context.abrupt("return", _context.sent);

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](2);
                  return _context.abrupt("return", (0, _notifications.sendErrorNotification)(t('Failed to update data, please refresh the page to see the most recent changes')));

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[2, 8]]);
        }))
      }, user_id && (record.id === user_id ? null : React.createElement(_antd.Button, {
        "data-testid": "delete-user",
        danger: true,
        type: "link",
        style: {
          color: '#'
        }
      }, t('Delete'))))
    }, {
      key: '3',
      permissions: ['iam_user.update'],
      label: React.createElement(_antd.Button, {
        type: "link",
        "data-testid": "credentials",
        onClick: function onClick() {
          history.push("".concat(_userManagement.URL_USER_CREDENTIALS, "/").concat(record.id, "/").concat(record.username));
        }
      }, t('Credentials'))
    }].filter(function (item) {
      return userRole.hasPermissions(item.permissions);
    }).map(function (item) {
      var permissions = item.permissions,
          rest = (0, _objectWithoutProperties2["default"])(item, _excluded);
      return rest;
    });
  };

  dataElements.push({
    title: t('Actions'),
    render: function render(_, record) {
      return React.createElement(React.Fragment, null, React.createElement(_rbac.RbacCheck, {
        permissions: ['iam_user.update']
      }, React.createElement(React.Fragment, null, React.createElement(_reactRouterDom.Link, {
        to: "".concat(_userManagement.URL_USER_EDIT, "/").concat(record.id),
        key: "actions"
      }, t('Edit')), React.createElement(_antd.Divider, {
        type: "vertical"
      }))), React.createElement(_antd.Dropdown, {
        placement: "bottomRight",
        arrow: true,
        trigger: ['click'],
        menu: {
          items: getItems(record)
        }
      }, React.createElement(_icons.MoreOutlined, {
        "data-testid": "action-dropdown",
        className: "more-options"
      })));
    }
  });
  return dataElements;
};

exports.getTableColumns = getTableColumns;