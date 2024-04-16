"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var _constants = require("../../constants");

var _mls = require("../../mls");

var _reactUtils = require("@opensrp/react-utils");

var Table = function Table(props) {
  var onViewDetails = props.onViewDetails;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var columns = [{
    title: t('Name'),
    dataIndex: 'label',
    sorter: function sorter(a, b) {
      return a.label.localeCompare(b.label);
    }
  }, {
    title: t('Level'),
    dataIndex: 'geographicLevel',
    sorter: function sorter(a, b) {
      return a.geographicLevel - b.geographicLevel;
    }
  }];
  return _react["default"].createElement(_reactUtils.TableLayout, {
    id: "LocationUnitList",
    persistState: true,
    datasource: props.data,
    columns: columns,
    actions: {
      title: t('Actions'),
      width: '10%',
      render: function render(_, record) {
        return _react["default"].createElement("span", {
          className: "Actions"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: "".concat(_constants.URL_LOCATION_UNIT_EDIT, "/").concat(record.id),
          className: "m-0 p-1"
        }, t('Edit')), _react["default"].createElement(_antd.Divider, {
          type: "vertical"
        }), _react["default"].createElement(_antd.Button, {
          type: "link",
          className: "m-0 p-1",
          onClick: function onClick() {
            if (onViewDetails) onViewDetails(record);
          }
        }, t('View Details')));
      }
    }
  });
};

var _default = Table;
exports["default"] = _default;