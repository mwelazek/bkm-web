"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultUserFormInitialValues = exports.UserForm = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _utils = require("./utils");

var _notifications = require("@opensrp/notifications");

require("../../../index.css");

var _types = require("./types");

var _mls = require("../../../mls");

var _constants = require("../../../constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var UserForm = function UserForm(props) {
  var _initialValues$enable;

  var initialValues = props.initialValues,
      keycloakBaseURL = props.keycloakBaseURL,
      baseUrl = props.baseUrl,
      practitionerUpdaterFactory = props.practitionerUpdaterFactory,
      extraData = props.extraData,
      userGroups = props.userGroups,
      renderFields = props.renderFields,
      hiddenFields = props.hiddenFields,
      isFHIRInstance = props.isFHIRInstance;

  var shouldRender = function shouldRender(fieldName) {
    return !!(renderFields !== null && renderFields !== void 0 && renderFields.includes(fieldName));
  };

  var isHidden = function isHidden(fieldName) {
    return !!(hiddenFields !== null && hiddenFields !== void 0 && hiddenFields.includes(fieldName));
  };

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var practitionerUpdater = practitionerUpdaterFactory(baseUrl);

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = (0, _slicedToArray2["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isSubmitting = _useState2[0],
      setSubmitting = _useState2[1];

  var history = (0, _reactRouter.useHistory)();
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
  var status = [{
    label: t('Yes'),
    value: true
  }, {
    label: t('No'),
    value: false
  }];
  (0, _react.useEffect)(function () {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  var _useState3 = (0, _react.useState)((_initialValues$enable = initialValues.enabled) !== null && _initialValues$enable !== void 0 ? _initialValues$enable : false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      userEnabled = _useState4[0],
      setUserEnabled = _useState4[1];

  (0, _react.useEffect)(function () {
    if (!userEnabled) {
      form.setFields([{
        name: 'active',
        value: false
      }]);
    } else {
      form.setFields([{
        name: 'active',
        value: initialValues.active
      }]);
    }
  }, [form, initialValues, userEnabled]);
  return _react["default"].createElement(_antd.Row, {
    className: "content-section"
  }, _react["default"].createElement(_reactUtils.PageHeader, {
    title: props.initialValues.id ? t('Edit User | {{username}}', {
      username: initialValues.username
    }) : t('Add User')
  }), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3",
    span: 24
  }, _react["default"].createElement(_antd.Form, (0, _extends2["default"])({}, layout, {
    form: form,
    initialValues: initialValues,
    onFinish: function onFinish(values) {
      setSubmitting(true);
      (0, _utils.submitForm)(_objectSpread(_objectSpread({}, initialValues), values), keycloakBaseURL, userGroups, initialValues.userGroups, practitionerUpdater, t)["catch"](function (_) {
        if (props.initialValues.id) {
          (0, _notifications.sendErrorNotification)(t('There was a problem updating user details'));
        }

        (0, _notifications.sendErrorNotification)(t('There was a problem creating User'));
      })["finally"](function () {
        return setSubmitting(false);
      });
    }
  }), _react["default"].createElement(_antd.Form.Item, {
    name: "firstName",
    id: "firstName",
    label: t('First Name'),
    rules: [{
      required: true,
      message: t('First Name is required')
    }]
  }, _react["default"].createElement(_antd.Input, null)), _react["default"].createElement(_antd.Form.Item, {
    name: "lastName",
    id: "lastName",
    label: t('Last Name'),
    rules: [{
      required: true,
      message: t('Last Name is required')
    }]
  }, _react["default"].createElement(_antd.Input, null)), _react["default"].createElement(_antd.Form.Item, {
    name: "email",
    id: "email",
    label: t('Email')
  }, _react["default"].createElement(_antd.Input, null)), _react["default"].createElement(_antd.Form.Item, {
    name: "username",
    id: "username",
    label: t('Username'),
    rules: [{
      required: true,
      message: t('Username is required')
    }]
  }, _react["default"].createElement(_antd.Input, {
    disabled: initialValues.id ? true : false
  })), shouldRender(_types.CONTACT_FORM_FIELD) ? _react["default"].createElement(_antd.Form.Item, {
    id: _types.CONTACT_FORM_FIELD,
    rules: [{
      type: 'string',
      pattern: /^0\d{9}$/,
      message: t('Contact should be 10 digits and start with 0')
    }, {
      required: !isHidden(_types.CONTACT_FORM_FIELD),
      message: t('Contact is required')
    }],
    hidden: isHidden(_types.CONTACT_FORM_FIELD),
    name: _types.CONTACT_FORM_FIELD,
    label: t('Contact')
  }, _react["default"].createElement(_antd.Input, null)) : null, isFHIRInstance ? _react["default"].createElement(_antd.Form.Item, {
    id: "userType",
    name: "userType",
    label: t('User Type')
  }, _react["default"].createElement(_antd.Radio.Group, {
    options: [{
      label: t('Practitioner'),
      value: _constants.PRACTITIONER
    }, {
      label: t('Supervisor'),
      value: _constants.SUPERVISOR
    }],
    name: "userType"
  })) : null, _react["default"].createElement(_antd.Form.Item, {
    id: "enabled",
    name: "enabled",
    label: t('Enable user')
  }, _react["default"].createElement(_antd.Radio.Group, {
    options: status,
    name: "enabled",
    onChange: function onChange(e) {
      return setUserEnabled(e.target.value);
    }
  })), initialValues.id && initialValues.id !== extraData.user_id ? _react["default"].createElement(_antd.Form.Item, {
    id: "practitionerToggle",
    name: "active",
    label: t('Mark as Practitioner')
  }, _react["default"].createElement(_antd.Radio.Group, {
    name: "active"
  }, status.map(function (e) {
    return _react["default"].createElement(_antd.Radio, {
      name: "active",
      key: e.label,
      value: e.value,
      disabled: !userEnabled
    }, e.label);
  }))) : null, _react["default"].createElement(_antd.Form.Item, {
    name: "userGroups",
    id: "userGroups",
    label: t('Keycloak User Group')
  }, _react["default"].createElement(_antd.Select, {
    mode: "multiple",
    allowClear: true,
    placeholder: t('Please select'),
    style: {
      width: '100%'
    },
    options: (0, _utils.getUserGroupsOptions)(userGroups),
    filterOption: _utils.userGroupOptionsFilter
  })), isFHIRInstance ? _react["default"].createElement(_antd.Form.Item, {
    id: "fhirCoreAppId",
    name: "fhirCoreAppId",
    label: t('Application ID'),
    rules: [{
      required: true,
      message: t('Application Id is required')
    }],
    "data-testid": "fhirCoreAppId"
  }, _react["default"].createElement(_reactUtils.FhirSelect, {
    baseUrl: baseUrl,
    resourceType: _constants.compositionResourceType,
    transformOption: _utils.getCompositionOptions,
    extraQueryParams: _utils.compositionUrlFilter,
    showSearch: true
  })) : null, _react["default"].createElement(_antd.Form.Item, tailLayout, _react["default"].createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    className: "create-user"
  }, isSubmitting ? t('SAVING') : t('Save')), _react["default"].createElement(_antd.Button, {
    onClick: function onClick() {
      return history.goBack();
    },
    className: "cancel-user"
  }, t('Cancel'))))));
};

exports.UserForm = UserForm;
var defaultUserFormInitialValues = {
  firstName: '',
  id: '',
  lastName: '',
  username: '',
  active: true,
  userType: 'practitioner',
  userGroups: undefined,
  practitioner: undefined,
  contact: undefined,
  enabled: true,
  fhirCoreAppId: undefined
};
exports.defaultUserFormInitialValues = defaultUserFormInitialValues;
UserForm.defaultProps = {
  initialValues: defaultUserFormInitialValues,
  practitionerUpdaterFactory: _utils.postPutPractitioner
};