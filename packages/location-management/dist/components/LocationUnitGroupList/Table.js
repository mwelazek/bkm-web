"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDelete = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../../constants");

var _reactRouterDom = require("react-router-dom");

var _notifications = require("@opensrp/notifications");

var _mls = require("../../mls");

var onDelete = function onDelete(record, opensrpBaseURL, t) {
  var clientService = new _reactUtils.OpenSRPService(_constants.LOCATION_UNIT_GROUP_DELETE + record.id.toString(), opensrpBaseURL);
  clientService["delete"]().then(function () {
    return (0, _notifications.sendSuccessNotification)('Successfully Deleted!');
  })["catch"](function () {
    return (0, _notifications.sendErrorNotification)(t('There was a problem deleting group'));
  });
};

exports.onDelete = onDelete;

var Table = function Table(props) {
  var onViewDetails = props.onViewDetails,
      opensrpBaseURL = props.opensrpBaseURL;
  var data = props.data.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var columns = [{
    title: t('Name'),
    dataIndex: 'name',
    sorter: function sorter(a, b) {
      return a.name.localeCompare(b.name);
    }
  }];

  var getItems = function getItems(record) {
    return [{
      key: '1',
      label: _react["default"].createElement(_antd.Button, {
        className: "viewdetails",
        "data-testid": "viewdetails",
        onClick: function onClick() {
          return onViewDetails ? onViewDetails(record) : {};
        }
      }, t('View Details'))
    }, {
      key: '2',
      label: _react["default"].createElement(_antd.Button, {
        className: "delete",
        "data-testid": "delete",
        onClick: function onClick() {
          return onDelete(record, opensrpBaseURL, t);
        }
      }, t('Deactivate'))
    }];
  };

  return _react["default"].createElement(_reactUtils.TableLayout, {
    id: "LocationUnitGroupList",
    persistState: true,
    datasource: data,
    columns: columns,
    actions: {
      title: t('Actions'),
      width: '10%',
      render: function render(_, record) {
        return _react["default"].createElement("span", null, _react["default"].createElement(_reactRouterDom.Link, {
          to: "".concat(_constants.URL_LOCATION_UNIT_GROUP_EDIT, "/").concat(record.id.toString()),
          className: "m-0 p-1"
        }, t('Edit')), _react["default"].createElement(_antd.Divider, {
          type: "vertical"
        }), _react["default"].createElement(_antd.Dropdown, {
          menu: {
            items: getItems(record)
          },
          placement: "bottomLeft",
          arrow: true,
          trigger: ['click']
        }, _react["default"].createElement(_icons.MoreOutlined, {
          className: "more-options"
        })));
      }
    }
  });
};

var _default = Table;
exports["default"] = _default;