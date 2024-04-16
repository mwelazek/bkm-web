"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupList = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _GroupDetail = require("../BaseComponents/GroupDetail");

var _icons = require("@ant-design/icons");

var _reactRouterDom = require("react-router-dom");

var _mls = require("../../mls");

var _BaseGroupsListView = require("../BaseComponents/BaseGroupsListView");

var _reactUtils = require("@opensrp/react-utils");

var _rbac = require("@opensrp/rbac");

var keyValueDetailRender = function keyValueDetailRender(obj, t) {
  var _keyValues;

  var _parseGroup = (0, _GroupDetail.parseGroup)(obj),
      name = _parseGroup.name,
      active = _parseGroup.active,
      lastUpdated = _parseGroup.lastUpdated,
      id = _parseGroup.id,
      quantity = _parseGroup.quantity,
      members = _parseGroup.members;

  var keyValues = (_keyValues = {}, (0, _defineProperty2["default"])(_keyValues, t('Id'), id), (0, _defineProperty2["default"])(_keyValues, t('Name'), name), (0, _defineProperty2["default"])(_keyValues, t('Active'), active ? t('Active') : t('Inactive')), (0, _defineProperty2["default"])(_keyValues, t('Last updated'), t('{{val, datetime}}', {
    val: new Date(lastUpdated)
  })), (0, _defineProperty2["default"])(_keyValues, t('No. of Members'), quantity), (0, _defineProperty2["default"])(_keyValues, t('Members'), members === null || members === void 0 ? void 0 : members.map(function (member) {
    return member.entity.display;
  }).join(', ')), _keyValues);
  return _react["default"].createElement(_antd.Space, {
    direction: "vertical"
  }, Object.entries(keyValues).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var props = (0, _defineProperty2["default"])({}, key, value);
    return value ? _react["default"].createElement("div", {
      key: key,
      "data-testid": "key-value"
    }, _react["default"].createElement(_reactUtils.SingleKeyNestedValue, props)) : null;
  }));
};

var GroupList = function GroupList(props) {
  var fhirBaseURL = props.fhirBaseURL;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useSearchParams = (0, _reactUtils.useSearchParams)(),
      addParam = _useSearchParams.addParam;

  var getItems = function getItems(record) {
    return [{
      key: '1',
      label: _react["default"].createElement(_antd.Button, {
        type: "link",
        "data-testid": "view-details",
        onClick: function onClick() {
          addParam(_reactUtils.viewDetailsQuery, record.id);
        }
      }, t('View Details'))
    }];
  };

  var getColumns = function getColumns(t) {
    return [{
      title: t('Name'),
      dataIndex: 'name',
      key: 'name'
    }, {
      title: t('Active'),
      dataIndex: 'active',
      key: 'active',
      render: function render(value) {
        return _react["default"].createElement("div", null, value ? 'Yes' : 'No');
      }
    }, {
      title: t('Last Updated'),
      dataIndex: 'lastUpdated',
      key: 'lastUpdated',
      render: function render(value) {
        return t('{{val,datetime}}', {
          val: new Date(value)
        });
      }
    }, {
      title: t('Actions'),
      width: '10%',
      render: function render(_, record) {
        return _react["default"].createElement("span", {
          className: "d-flex align-items-center"
        }, _react["default"].createElement(_rbac.RbacCheck, {
          permissions: ['Group.update']
        }, _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Link, {
          to: "#",
          className: "m-0 p-1",
          onClick: function onClick(e) {
            return e.preventDefault();
          }
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
          "data-testid": "action-dropdown",
          className: "more-options"
        })));
      }
    }];
  };

  var baseListViewProps = {
    getColumns: getColumns,
    keyValueMapperRenderProp: keyValueDetailRender,
    createButtonLabel: t('Add Group'),
    fhirBaseURL: fhirBaseURL,
    pageTitle: t('Groups List')
  };
  return _react["default"].createElement(_BaseGroupsListView.BaseListView, baseListViewProps);
};

exports.GroupList = GroupList;