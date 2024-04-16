"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCareTeam = exports.CareTeamList = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _icons = require("@ant-design/icons");

var _reactRouterDom = require("react-router-dom");

var _constants = require("../../constants");

var _ViewDetails = require("../ViewDetails");

var _notifications = require("@opensrp/notifications");

var _mls = require("../../mls");

var _rbac = require("@opensrp/rbac");

var _excluded = ["permissions"];

var deleteCareTeam = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(fhirBaseURL, id, t) {
    var serve;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            serve = new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.FHIR_CARE_TEAM);
            return _context.abrupt("return", serve["delete"](id).then(function () {
              return (0, _notifications.sendSuccessNotification)(t('Successfully Deleted Care Team'));
            })["catch"](function () {
              return (0, _notifications.sendErrorNotification)(t('There was a problem deleting the Care Team'));
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteCareTeam(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.deleteCareTeam = deleteCareTeam;

var getSearchParams = function getSearchParams(search) {
  if (search) {
    return (0, _defineProperty2["default"])({}, "name:contains", search);
  }

  return {};
};

var CareTeamList = function CareTeamList(props) {
  var _sParams$get, _data$records;

  var fhirBaseURL = props.fhirBaseURL;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var history = (0, _reactRouterDom.useHistory)();

  var _useSearchParams = (0, _reactUtils.useSearchParams)(),
      addParam = _useSearchParams.addParam,
      sParams = _useSearchParams.sParams;

  var userRole = (0, _rbac.useUserRole)();
  var resourceId = (_sParams$get = sParams.get(_reactUtils.viewDetailsQuery)) !== null && _sParams$get !== void 0 ? _sParams$get : undefined;

  var _useSimpleTabularView = (0, _reactUtils.useSimpleTabularView)(fhirBaseURL, _constants.careTeamResourceType, getSearchParams),
      _useSimpleTabularView2 = _useSimpleTabularView.queryValues,
      data = _useSimpleTabularView2.data,
      isFetching = _useSimpleTabularView2.isFetching,
      isLoading = _useSimpleTabularView2.isLoading,
      error = _useSimpleTabularView2.error,
      refetch = _useSimpleTabularView2.refetch,
      tablePaginationProps = _useSimpleTabularView.tablePaginationProps,
      searchFormProps = _useSimpleTabularView.searchFormProps;

  if (error && !data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: error.message
    });
  }

  var tableData = ((_data$records = data === null || data === void 0 ? void 0 : data.records) !== null && _data$records !== void 0 ? _data$records : []).map(function (datum) {
    return {
      key: datum.id,
      id: datum.id,
      name: datum.name
    };
  });

  var getItems = function getItems(record) {
    return [{
      key: '1',
      permissions: ['CareTeam.delete'],
      label: _react["default"].createElement(_antd.Popconfirm, {
        title: t('Are you sure you want to delete this Care Team?'),
        okText: t('Yes'),
        className: "delCareteam",
        cancelText: t('No'),
        onConfirm: (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return deleteCareTeam(fhirBaseURL, record.id, t);

                case 2:
                  _context2.next = 4;
                  return refetch();

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))
      }, _react["default"].createElement(_antd.Button, {
        danger: true,
        "data-testid": "deleteBtn",
        type: "link",
        style: {
          color: '#'
        }
      }, t('Delete')))
    }, {
      key: '2',
      permissions: [],
      label: _react["default"].createElement(_antd.Button, {
        type: "link",
        onClick: function onClick() {
          return addParam(_reactUtils.viewDetailsQuery, record.id);
        }
      }, "View Details")
    }].filter(function (item) {
      return userRole.hasPermissions(item.permissions);
    }).map(function (item) {
      var permissions = item.permissions,
          rest = (0, _objectWithoutProperties2["default"])(item, _excluded);
      return rest;
    });
  };

  var columns = [{
    title: t('Name'),
    dataIndex: 'name',
    editable: true
  }, {
    title: t('Actions'),
    width: '10%',
    render: function render(_, record) {
      return _react["default"].createElement("span", {
        className: "d-flex align-items-center"
      }, _react["default"].createElement(_rbac.RbacCheck, {
        permissions: ['CareTeam.update']
      }, _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Link, {
        to: "".concat(_constants.URL_EDIT_CARE_TEAM, "/").concat(record.id.toString()),
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
        className: "more-options",
        "data-testid": "action-dropdown"
      })));
    }
  }];
  var tableProps = {
    datasource: tableData,
    columns: columns,
    loading: isFetching || isLoading,
    pagination: tablePaginationProps
  };
  return _react["default"].createElement("div", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, t('FHIR Care Team'))), _react["default"].createElement(_reactUtils.PageHeader, {
    title: t('FHIR Care Team')
  }), _react["default"].createElement(_antd.Row, {
    className: "list-view"
  }, _react["default"].createElement(_antd.Col, {
    className: "main-content"
  }, _react["default"].createElement("div", {
    className: "main-content__header"
  }, _react["default"].createElement(_reactUtils.SearchForm, searchFormProps), _react["default"].createElement(_rbac.RbacCheck, {
    permissions: ['CareTeam.create']
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: _constants.URL_CREATE_CARE_TEAM
  }, _react["default"].createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return history.push(_constants.URL_CREATE_CARE_TEAM);
    }
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('Create Care Team'))))), _react["default"].createElement(_reactUtils.TableLayout, tableProps)), resourceId && _react["default"].createElement(_ViewDetails.ViewDetails, {
    careTeamId: resourceId,
    fhirBaseURL: fhirBaseURL
  })));
};

exports.CareTeamList = CareTeamList;