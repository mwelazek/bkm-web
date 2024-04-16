"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.UserList = exports.ConnectedUserList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactUtils = require("@opensrp/react-utils");

var _antd = require("antd");

var _keycloakService = require("@opensrp/keycloak-service");

var _reactRedux = require("react-redux");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _icons = require("@ant-design/icons");

var _user = require("../../ducks/user");

var _constants = require("../../constants");

var _mls = require("../../mls");

var _utils = require("./utils");

var _sessionReducer = require("@onaio/session-reducer");

var _reactRouter = require("react-router");

var _notifications = require("@opensrp/notifications");

var _TableActions = require("./TableActions");

var _UserDetails = require("../UserDetails");

var _rbac = require("@opensrp/rbac");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

_reduxReducerRegistry["default"].register(_user.reducerName, _user.reducer);

var defaultProps = {
  serviceClass: _keycloakService.KeycloakService,
  fetchKeycloakUsersCreator: _user.fetchKeycloakUsers,
  removeKeycloakUsersCreator: _user.removeKeycloakUsers,
  keycloakUsers: [],
  keycloakBaseURL: '',
  opensrpBaseURL: '',
  extraData: {},
  usersPageSize: 20
};
exports.defaultProps = defaultProps;

var UserList = function UserList(props) {
  var _getQueryParams$SEARC;

  var serviceClass = props.serviceClass,
      fetchKeycloakUsersCreator = props.fetchKeycloakUsersCreator,
      removeKeycloakUsersCreator = props.removeKeycloakUsersCreator,
      keycloakBaseURL = props.keycloakBaseURL,
      opensrpBaseURL = props.opensrpBaseURL,
      extraData = props.extraData,
      usersPageSize = props.usersPageSize;
  var history = (0, _reactRouter.useHistory)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var searchParam = (_getQueryParams$SEARC = (0, _reactUtils.getQueryParams)(props.location)[_constants.SEARCH_QUERY_PARAM]) !== null && _getQueryParams$SEARC !== void 0 ? _getQueryParams$SEARC : '';

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      sortedInfo = _useState2[0],
      setSortedInfo = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      userDetails = _useState4[0],
      setUserDetails = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      openDetails = _useState6[0],
      setOpenDetails = _useState6[1];

  function FetchData(_x, _x2, _x3) {
    return _FetchData.apply(this, arguments);
  }

  function _FetchData() {
    _FetchData = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(page, pageSize, searchquery) {
      var filterParams, usersService, keycloakUsers;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              filterParams = {
                first: page * pageSize - pageSize,
                max: pageSize
              };
              if (searchquery) filterParams = _objectSpread(_objectSpread({}, filterParams), {}, {
                search: searchParam
              });
              usersService = new serviceClass(_constants.KEYCLOAK_URL_USERS, keycloakBaseURL);
              _context4.next = 5;
              return usersService.list(filterParams);

            case 5:
              keycloakUsers = _context4.sent;
              fetchKeycloakUsersCreator(keycloakUsers, true);
              return _context4.abrupt("return", keycloakUsers);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _FetchData.apply(this, arguments);
  }

  var isSearchActive = searchParam && searchParam.length;

  var fetchPractitioner = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(userId) {
      var serve, practitioner;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              serve = new _reactUtils.OpenSRPService(_constants.OPENSRP_CREATE_PRACTITIONER_ENDPOINT, opensrpBaseURL);
              _context.prev = 1;
              _context.next = 4;
              return serve.read(userId);

            case 4:
              practitioner = _context.sent;
              return _context.abrupt("return", practitioner);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              (0, _notifications.sendErrorNotification)(t('There was a problem fetching Practitioner tied to this User'));
              return _context.abrupt("return", undefined);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function fetchPractitioner(_x4) {
      return _ref.apply(this, arguments);
    };
  }();

  var fetchAssignedTeams = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(practitionerId) {
      var serve, organizations;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              serve = new _reactUtils.OpenSRPService(_constants.ORGANIZATION_BY_PRACTITIONER, opensrpBaseURL);
              _context2.prev = 1;
              _context2.next = 4;
              return serve.read(practitionerId);

            case 4:
              organizations = _context2.sent;
              return _context2.abrupt("return", organizations);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              (0, _notifications.sendErrorNotification)(t('There was a problem fetching teams assigned to Practitioner'));
              return _context2.abrupt("return", []);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function fetchAssignedTeams(_x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  var setDetailsCallback = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(keycloakUser) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              onCloseCallback();
              setOpenDetails(true);
              fetchPractitioner(keycloakUser.id).then(function (practitioner) {
                if (practitioner) {
                  fetchAssignedTeams(practitioner.identifier).then(function (assignedTeams) {
                    setUserDetails({
                      keycloakUser: keycloakUser,
                      practitioner: practitioner,
                      assignedTeams: assignedTeams
                    });
                  })["catch"](function () {
                    (0, _notifications.sendErrorNotification)(t('There was a problem fetching assigned teams'));
                  });
                } else {
                  setUserDetails({
                    keycloakUser: keycloakUser,
                    practitioner: practitioner,
                    assignedTeams: []
                  });
                }
              })["catch"](function () {
                (0, _notifications.sendErrorNotification)(t('There was a problem fetching practitioner'));
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function setDetailsCallback(_x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  var onCloseCallback = function onCloseCallback() {
    setUserDetails(null);
    setOpenDetails(false);
  };

  return _react["default"].createElement("section", {
    className: "content-section"
  }, _react["default"].createElement(_reactUtils.PageHeader, {
    title: t('User Management')
  }), _react["default"].createElement(_antd.Row, {
    className: "list-view"
  }, _react["default"].createElement(_antd.Col, {
    className: "main-content",
    span: openDetails ? 19 : 24
  }, _react["default"].createElement("div", {
    className: "main-content__header"
  }, _react["default"].createElement(_reactUtils.SearchForm, {
    defaultValue: (0, _reactUtils.getQueryParams)(props.location)[_constants.SEARCH_QUERY_PARAM],
    onChange: (0, _reactUtils.createChangeHandler)(_constants.SEARCH_QUERY_PARAM, props),
    size: 'middle'
  }), _react["default"].createElement(_rbac.RbacCheck, {
    permissions: ['iam_user.create']
  }, _react["default"].createElement(_antd.Space, {
    style: {
      marginBottom: 16,
      "float": 'right'
    }
  }, _react["default"].createElement(_antd.Button, {
    type: "primary",
    className: "create-user",
    onClick: function onClick() {
      return history.push(_constants.URL_USER_CREATE);
    }
  }, _react["default"].createElement(_icons.PlusOutlined, null), t('Add User'))))), _react["default"].createElement(_antd.Space, null, _react["default"].createElement(_reactUtils.PaginateData, {
    queryFn: FetchData,
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching Users'));
    },
    queryPram: {
      searchParam: searchParam
    },
    pageSize: usersPageSize,
    queryid: _constants.UserQueryId,
    total: function total() {
      var usersCountService = new serviceClass("".concat(_constants.KEYCLOAK_URL_USERS_COUNT), keycloakBaseURL);
      var filterParams = undefined;
      if (isSearchActive) filterParams = {
        search: searchParam
      };
      return usersCountService.list(filterParams);
    }
  }, function (tableProps) {
    return _react["default"].createElement(_reactUtils.TableLayout, (0, _extends2["default"])({}, tableProps, {
      columns: (0, _utils.getTableColumns)(t, sortedInfo),
      dataKeyAccessor: "id",
      onChange: function onChange(_, __, sorter) {
        return setSortedInfo(sorter);
      },
      actions: {
        title: 'Actions',
        render: function render(_, record) {
          var tableActionsProps = {
            removeKeycloakUsersCreator: removeKeycloakUsersCreator,
            keycloakBaseURL: keycloakBaseURL,
            opensrpBaseURL: opensrpBaseURL,
            record: record,
            extraData: extraData,
            setDetailsCallback: setDetailsCallback
          };
          return _react["default"].createElement(_TableActions.TableActions, tableActionsProps);
        }
      }
    }));
  }))), openDetails ? _react["default"].createElement(_antd.Col, {
    className: "pl-3",
    span: 5
  }, _react["default"].createElement(_UserDetails.UserDetails, (0, _extends2["default"])({
    onClose: function onClose() {
      return onCloseCallback();
    }
  }, userDetails))) : null));
};

exports.UserList = UserList;
UserList.defaultProps = defaultProps;

var mapStateToProps = function mapStateToProps(state) {
  var extraData = (0, _sessionReducer.getExtraData)(state);
  return {
    extraData: extraData
  };
};

var mapDispatchToProps = {
  fetchKeycloakUsersCreator: _user.fetchKeycloakUsers,
  removeKeycloakUsersCreator: _user.removeKeycloakUsers
};
var ConnectedUserList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserList);
exports.ConnectedUserList = ConnectedUserList;