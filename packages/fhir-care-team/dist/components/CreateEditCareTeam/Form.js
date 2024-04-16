"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CareTeamForm = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _notifications = require("@opensrp/notifications");

var _utils = require("./utils");

var _constants = require("../../constants");

var _mls = require("../../mls");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CareTeamForm = function CareTeamForm(props) {
  var fhirBaseURL = props.fhirBaseURL,
      initialValues = props.initialValues,
      practitioners = props.practitioners,
      organizations = props.organizations;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isSubmitting = _useState2[0],
      setIsSubmitting = _useState2[1];

  var history = (0, _reactRouter.useHistory)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = (0, _slicedToArray2["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var orgOptions = (0, _utils.getOrgSelectOptions)(organizations);
  var practOptions = (0, _utils.getPractitionerSelectOptions)(practitioners);
  var statusOptions = [{
    label: t('Active'),
    value: 'active'
  }, {
    label: t('Inactive'),
    value: 'inactive'
  }];
  return _react["default"].createElement(_antd.Row, {
    className: "content-section user-group"
  }, _react["default"].createElement(_reactUtils.PageHeader, {
    title: initialValues.id ? t('Edit Care Team | {{name}}', {
      name: initialValues.name
    }) : t('Create Care Team')
  }), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-3",
    span: 24
  }, _react["default"].createElement(_antd.Form, (0, _extends2["default"])({}, _reactUtils.formItemLayout, {
    form: form,
    initialValues: initialValues,
    onFinish: function onFinish(values) {
      setIsSubmitting(true);
      (0, _utils.submitForm)(values, initialValues, fhirBaseURL, organizations, practitioners, t)["catch"](function () {
        if (initialValues.id) {
          (0, _notifications.sendErrorNotification)(t('There was a problem updating the Care Team'));
        } else {
          (0, _notifications.sendErrorNotification)(t('There was a problem creating the Care Team'));
        }
      })["finally"](function () {
        return setIsSubmitting(false);
      });
    }
  }), _react["default"].createElement(_antd.Form.Item, {
    id: 'id',
    hidden: true,
    name: _constants.id,
    label: t('ID')
  }, _react["default"].createElement(_antd.Input, null)), _react["default"].createElement(_antd.Form.Item, {
    id: 'uuid',
    hidden: true,
    name: _constants.uuid,
    label: t('UUID')
  }, _react["default"].createElement(_antd.Input, null)), _react["default"].createElement(_antd.Form.Item, {
    name: _constants.name,
    id: "name",
    label: t('Name'),
    rules: [{
      required: true,
      message: t('Name is Required')
    }]
  }, _react["default"].createElement(_antd.Input, null)), _react["default"].createElement(_antd.Form.Item, {
    id: "status",
    name: _constants.status,
    label: t('Status')
  }, _react["default"].createElement(_antd.Radio.Group, {
    name: "status"
  }, statusOptions.map(function (e) {
    return _react["default"].createElement(_antd.Radio, {
      name: "status",
      key: e.label,
      value: e.value
    }, e.label);
  }))), _react["default"].createElement(_antd.Form.Item, {
    "data-testid": "practitioners",
    name: _constants.practitionerParticipants,
    id: "practitionerParticipants",
    label: t('Practitioner Participant')
  }, _react["default"].createElement(_antd.Select, {
    placeholder: t('Select practitioners to assign to this Care Team'),
    allowClear: true,
    mode: "multiple",
    showSearch: true,
    options: practOptions,
    filterOption: _utils.selectFilterFunction
  })), _react["default"].createElement(_antd.Form.Item, {
    name: _constants.managingOrganizations,
    id: "managingOrganizations",
    label: t('Managing organizations'),
    tooltip: t('Select one or more managing organizations')
  }, _react["default"].createElement(_antd.Select, {
    options: orgOptions,
    mode: "multiple",
    allowClear: true,
    showSearch: true,
    placeholder: t('Select a managing Organization'),
    filterOption: _utils.selectFilterFunction
  })), _react["default"].createElement(_antd.Form.Item, _reactUtils.tailLayout, _react["default"].createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    className: "create-group"
  }, isSubmitting ? t('Saving') : t('Save')), _react["default"].createElement(_antd.Button, {
    onClick: function onClick() {
      return history.push(_constants.URL_CARE_TEAM);
    },
    className: "cancel-care-team"
  }, t('Cancel'))))));
};

exports.CareTeamForm = CareTeamForm;