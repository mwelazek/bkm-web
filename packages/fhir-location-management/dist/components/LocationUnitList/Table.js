"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _reactRouterDom = require("react-router-dom");

var _constants = require("../../constants");

var _reactUtils = require("@opensrp/react-utils");

var _mls = require("../../mls");

var _rbac = require("@opensrp/rbac");

var Table = function Table(props) {
  var onViewDetails = props.onViewDetails;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var columns = [{
    title: t('Name'),
    dataIndex: 'name'
  }, {
    title: t('Parent'),
    dataIndex: 'partOf'
  }, {
    title: t('Physical Type'),
    dataIndex: 'physicalType'
  }, {
    title: t('Status'),
    dataIndex: 'status'
  }];

  var getItems = function getItems(record) {
    return [{
      key: '1',
      label: _react["default"].createElement(_antd.Button, {
        type: "link",
        "data-testid": "view-location",
        onClick: function onClick() {
          onViewDetails === null || onViewDetails === void 0 ? void 0 : onViewDetails(record);
        }
      }, t('View details'))
    }];
  };

  return _react["default"].createElement(_reactUtils.TableLayout, {
    id: "LocationUnitList",
    persistState: true,
    datasource: props.data,
    columns: columns,
    actions: {
      title: t('Actions'),
      width: '10%',
      render: function render(_, record) {
        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_rbac.RbacCheck, {
          permissions: ['Location.update']
        }, _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Link, {
          to: "".concat(_constants.URL_LOCATION_UNIT_EDIT, "/").concat(record.id),
          className: "m-0 p-1"
        }, t('Edit')), _react["default"].createElement(_antd.Divider, {
          type: "vertical"
        }))), _react["default"].createElement(_antd.Dropdown, {
          menu: {
            items: getItems(record)
          },
          placement: "bottomRight",
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