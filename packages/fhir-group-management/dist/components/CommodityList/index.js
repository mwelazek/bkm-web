"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCommodity = exports.CommodityList = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _GroupDetail = require("../BaseComponents/GroupDetail");

var _icons = require("@ant-design/icons");

var _constants = require("../../constants");

var _reactRouterDom = require("react-router-dom");

var _mls = require("../../mls");

var _BaseGroupsListView = require("../BaseComponents/BaseGroupsListView");

var _reactUtils = require("@opensrp/react-utils");

var _lodash = require("lodash");

var _utils = require("../..//helpers/utils");

var _reactQuery = require("react-query");

var _notifications = require("@opensrp/notifications");

var _rbac = require("@opensrp/rbac");

var _excluded = ["permissions"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var keyValueDetailRender = function keyValueDetailRender(obj, t) {
  var _keyValues;

  var _parseGroup = (0, _GroupDetail.parseGroup)(obj),
      name = _parseGroup.name,
      active = _parseGroup.active,
      id = _parseGroup.id,
      identifier = _parseGroup.identifier;

  var unitMeasureCharacteristic = (0, _utils.getUnitMeasureCharacteristic)(obj);
  var keyValues = (_keyValues = {}, (0, _defineProperty2["default"])(_keyValues, t('Commodity Id'), id), (0, _defineProperty2["default"])(_keyValues, t('Identifier'), identifier), (0, _defineProperty2["default"])(_keyValues, t('Name'), name), (0, _defineProperty2["default"])(_keyValues, t('Active'), active ? t('Active') : t('Disabled')), (0, _defineProperty2["default"])(_keyValues, t('Unit of measure'), (0, _lodash.get)(unitMeasureCharacteristic, 'valueCodeableConcept.text')), _keyValues);
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

var CommodityList = function CommodityList(props) {
  var fhirBaseURL = props.fhirBaseURL,
      listId = props.listId;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var queryClient = (0, _reactQuery.useQueryClient)();

  var _useSearchParams = (0, _reactUtils.useSearchParams)(),
      addParam = _useSearchParams.addParam;

  var userRole = (0, _rbac.useUserRole)();

  var getItems = function getItems(record) {
    return [{
      key: '1',
      permissions: [],
      label: _react["default"].createElement(_antd.Button, {
        "data-testid": "view-details",
        onClick: function onClick() {
          return addParam(_reactUtils.viewDetailsQuery, record.id);
        },
        type: "link"
      }, t('View Details'))
    }, {
      key: '2',
      permissions: ['Group.delete'],
      label: _react["default"].createElement(_antd.Popconfirm, {
        title: t('Are you sure you want to delete this Commodity?'),
        okText: t('Yes'),
        cancelText: t('No'),
        onConfirm: (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  deleteCommodity(fhirBaseURL, record.obj, listId).then(function () {
                    queryClient.invalidateQueries([_constants.groupResourceType])["catch"](function () {
                      (0, _notifications.sendInfoNotification)(t('Unable to refresh data at the moment, please refresh the page'));
                    });
                    (0, _notifications.sendSuccessNotification)(t('Successfully deleted commodity'));
                  })["catch"](function () {
                    (0, _notifications.sendErrorNotification)(t('Deletion of commodity failed'));
                  });

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))
      }, _react["default"].createElement(_antd.Button, {
        danger: true,
        type: "link",
        style: {
          color: '#'
        }
      }, t('Delete')))
    }].filter(function (item) {
      return userRole.hasPermissions(item.permissions);
    }).map(function (item) {
      var permissions = item.permissions,
          rest = (0, _objectWithoutProperties2["default"])(item, _excluded);
      return rest;
    });
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
        return _react["default"].createElement("div", null, value ? t('Active') : t('Disabled'));
      }
    }, {
      title: t('type'),
      dataIndex: 'type',
      key: 'type'
    }, {
      title: t('Actions'),
      width: '10%',
      render: function render(_, record) {
        return _react["default"].createElement("span", {
          className: "d-flex align-items-center"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: "".concat(_constants.ADD_EDIT_COMMODITY_URL, "/").concat(record.id),
          className: "m-0 p-1"
        }, t('Edit')), _react["default"].createElement(_antd.Divider, {
          type: "vertical"
        }), _react["default"].createElement(_antd.Dropdown, {
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
    createButtonLabel: t('Add Commodity'),
    createButtonUrl: _constants.ADD_EDIT_COMMODITY_URL,
    fhirBaseURL: fhirBaseURL,
    pageTitle: t('Commodity List'),
    extraQueryFilters: {
      code: "".concat(_utils.snomedCodeSystem, "|").concat(_utils.supplyMgSnomedCode),
      '_has:List:item:_id': listId
    }
  };
  return _react["default"].createElement(_BaseGroupsListView.BaseListView, baseListViewProps);
};

exports.CommodityList = CommodityList;

var deleteCommodity = function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(fhirBaseURL, obj, listId) {
    var _list$entry;

    var disabledGroup, serve, listServer, list, leftEntries, listPayload;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (listId) {
              _context2.next = 2;
              break;
            }

            throw new Error('List id is not configured correctly');

          case 2:
            disabledGroup = _objectSpread(_objectSpread({}, obj), {}, {
              active: false
            });
            serve = new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.groupResourceType);
            listServer = new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.listResourceType);
            _context2.next = 7;
            return listServer.read(listId);

          case 7:
            list = _context2.sent;
            leftEntries = ((_list$entry = list.entry) !== null && _list$entry !== void 0 ? _list$entry : []).filter(function (entry) {
              return entry.item.reference !== "".concat(_constants.groupResourceType, "/").concat(obj.id);
            });
            listPayload = _objectSpread(_objectSpread({}, list), {}, {
              entry: leftEntries
            });
            return _context2.abrupt("return", listServer.update(listPayload).then(function () {
              return serve.update(disabledGroup);
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function deleteCommodity(_x, _x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteCommodity = deleteCommodity;