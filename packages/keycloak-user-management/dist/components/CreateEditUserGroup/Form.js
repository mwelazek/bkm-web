"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleTransferChange = exports.defaultProps = exports.defaultInitialValues = exports.UserGroupForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _notifications = require("@opensrp/notifications");

var _constants = require("../../constants");

var _mls = require("../../mls");

var _utils = require("./utils");

var _userRoles = require("../../ducks/userRoles");

require("./form.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

_reduxReducerRegistry["default"].register(_userRoles.reducerName, _userRoles.reducer);

var defaultInitialValues = {
  access: {
    view: false,
    manage: false,
    manageMembership: false
  },
  attributes: {},
  clientRoles: {},
  id: '',
  name: '',
  path: '',
  realmRoles: [],
  subGroups: []
};
exports.defaultInitialValues = defaultInitialValues;
var defaultProps = {
  allRoles: [],
  assignedRoles: [],
  availableRoles: [],
  initialValues: defaultInitialValues,
  keycloakBaseURL: ''
};
exports.defaultProps = defaultProps;

var handleTransferChange = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(initialValues, targetSelectedKeys, sourceSelectedKeys, keycloakBaseURL, roles, t) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!targetSelectedKeys.length) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return (0, _utils.removeAssignedRoles)(initialValues.id, keycloakBaseURL, roles, targetSelectedKeys, t);

          case 3:
            _context.next = 8;
            break;

          case 5:
            if (!sourceSelectedKeys.length) {
              _context.next = 8;
              break;
            }

            _context.next = 8;
            return (0, _utils.assignRoles)(initialValues.id, keycloakBaseURL, roles, sourceSelectedKeys, t);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleTransferChange(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

exports.handleTransferChange = handleTransferChange;

var UserGroupForm = function UserGroupForm(props) {
  var initialValues = props.initialValues,
      keycloakBaseURL = props.keycloakBaseURL,
      assignedRoles = props.assignedRoles,
      availableRoles = props.availableRoles,
      allRoles = props.allRoles;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isSubmitting = _useState2[0],
      setIsSubmitting = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      sourceSelectedKeys = _useState4[0],
      setSourceSelectedKeys = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      targetSelectedKeys = _useState6[0],
      setTargetSelectedKeys = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      targetKeys = _useState8[0],
      setTargetKeys = _useState8[1];

  var history = (0, _reactRouter.useHistory)();

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = (0, _slicedToArray2["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

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
        span: 8
      },
      lg: {
        offset: 0,
        span: 6
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
        offset: 8,
        span: 16
      },
      lg: {
        offset: 6,
        span: 14
      }
    }
  };

  _react["default"].useEffect(function () {
    form.setFieldsValue(_objectSpread({}, initialValues));
  }, [form, initialValues]);

  var onChange = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(nextTargetKeys) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              handleTransferChange(initialValues, targetSelectedKeys, sourceSelectedKeys, keycloakBaseURL, allRoles, t)["finally"](function () {
                return setTargetKeys(nextTargetKeys);
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onChange(_x7) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onSelectChange = function onSelectChange(sourceSelectedKeys, targetSelectedKeys) {
    setSourceSelectedKeys((0, _toConsumableArray2["default"])(sourceSelectedKeys));
    setTargetSelectedKeys((0, _toConsumableArray2["default"])(targetSelectedKeys));
  };

  var data = [].concat((0, _toConsumableArray2["default"])(assignedRoles), (0, _toConsumableArray2["default"])(availableRoles)).map(function (item) {
    return {
      key: item.id,
      title: item.name
    };
  });
  var name = initialValues.name;
  return _react["default"].createElement(_antd.Row, {
    className: "content-section user-group"
  }, _react["default"].createElement(_reactUtils.PageHeader, {
    title: props.initialValues.id ? t('Edit User Group | {{name}}', {
      name: name
    }) : t('New User Group')
  }), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3",
    span: 24
  }, _react["default"].createElement(_antd.Form, (0, _extends2["default"])({}, layout, {
    form: form,
    initialValues: _objectSpread({}, initialValues),
    onFinish: function onFinish(values) {
      delete values.roles;
      setIsSubmitting(true);
      (0, _utils.submitForm)(_objectSpread(_objectSpread({}, initialValues), values), keycloakBaseURL, setIsSubmitting, t)["catch"](function () {
        return (0, _notifications.sendErrorNotification)(t('There was a problem submitting the form'));
      });
    }
  }), _react["default"].createElement(_antd.Form.Item, {
    name: "name",
    id: "name",
    label: t('Name'),
    rules: [{
      required: true,
      message: t('Name is required')
    }]
  }, _react["default"].createElement(_antd.Input, null)), initialValues.id ? _react["default"].createElement(_antd.Form.Item, {
    name: "roles",
    id: "roles",
    label: t('Realm Roles')
  }, _react["default"].createElement(_antd.Transfer, {
    dataSource: data,
    titles: [t('Available Roles'), t('Assigned Roles')],
    listStyle: {
      minWidth: 300,
      minHeight: 300
    },
    targetKeys: targetKeys.length ? targetKeys : assignedRoles.map(function (role) {
      return role.id;
    }),
    selectedKeys: [].concat((0, _toConsumableArray2["default"])(sourceSelectedKeys), (0, _toConsumableArray2["default"])(targetSelectedKeys)),
    render: function render(item) {
      return _react["default"].createElement("div", null, item.title);
    },
    disabled: false,
    onChange: onChange,
    onSelectChange: onSelectChange,
    locale: {
      notFoundContent: t('The list is empty'),
      searchPlaceholder: t('Search')
    }
  })) : '', _react["default"].createElement(_antd.Form.Item, tailLayout, _react["default"].createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    className: "create-group"
  }, isSubmitting ? t('Saving') : t('Save')), _react["default"].createElement(_antd.Button, {
    onClick: function onClick() {
      return history.push(_constants.URL_USER_GROUPS);
    },
    className: "cancel-group"
  }, t('Cancel'))))));
};

exports.UserGroupForm = UserGroupForm;
UserGroupForm.defaultProps = defaultProps;