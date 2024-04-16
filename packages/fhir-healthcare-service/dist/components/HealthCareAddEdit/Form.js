"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HealthCareForm = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _constants = require("../../constants");

var _notifications = require("@opensrp/notifications");

var _reactQuery = require("react-query");

var _reactUtils = require("@opensrp/react-utils");

var _reactRouter = require("react-router");

var _utils = require("./utils");

var _mls = require("../../mls");

var FormItem = _antd.Form.Item;
var defaultProps = {
  initialValues: {},
  disabled: []
};

var HealthCareForm = function HealthCareForm(props) {
  var fhirBaseUrl = props.fhirBaseUrl,
      initialValues = props.initialValues,
      disabled = props.disabled,
      cancelUrl = props.cancelUrl,
      successUrl = props.successUrl,
      organizations = props.organizations;
  var queryClient = (0, _reactQuery.useQueryClient)();
  var history = (0, _reactRouter.useHistory)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var goTo = function goTo() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#';
    return history.push(url);
  };

  var _useMutation = (0, _reactQuery.useMutation)(function (values) {
    var payload = (0, _utils.generateHealthCarePayload)(values, organizations, initialValues);
    return (0, _utils.postPutHealthCareService)(fhirBaseUrl, payload);
  }, {
    onError: function onError(err) {
      (0, _notifications.sendErrorNotification)(err.message);
    },
    onSuccess: function onSuccess() {
      (0, _notifications.sendSuccessNotification)(t('Health care service updated successfully'));
      queryClient.invalidateQueries([_constants.healthCareServiceResourceType])["catch"](function () {
        (0, _notifications.sendInfoNotification)(t('Failed to refresh data, please refresh the page'));
      });
      goTo(successUrl);
    }
  }),
      mutate = _useMutation.mutate,
      isLoading = _useMutation.isLoading;

  var statusOptions = [{
    label: t('Inactive'),
    value: false
  }, {
    label: t('active'),
    value: true
  }];
  var orgOptions = (0, _utils.getOrgSelectOptions)(organizations);
  var validationRules = (0, _utils.validationRulesFactory)(t);
  return _react["default"].createElement(_antd.Form, (0, _extends2["default"])({
    requiredMark: false
  }, _reactUtils.formItemLayout, {
    onFinish: function onFinish(values) {
      mutate(values);
    },
    initialValues: initialValues
  }), _react["default"].createElement(FormItem, {
    hidden: true,
    id: "id",
    name: _constants.id,
    label: t('Id')
  }, _react["default"].createElement(_antd.Input, {
    disabled: true
  })), _react["default"].createElement(FormItem, {
    hidden: true,
    id: "identifier",
    name: _constants.identifier,
    label: t('Identifier')
  }, _react["default"].createElement(_antd.Input, {
    disabled: true
  })), _react["default"].createElement(FormItem, {
    id: "name",
    name: _constants.name,
    rules: validationRules.name,
    label: t('Name')
  }, _react["default"].createElement(_antd.Input, {
    disabled: disabled.includes(_constants.name),
    placeholder: t('Name')
  })), _react["default"].createElement(FormItem, {
    id: "active",
    rules: validationRules.active,
    name: _constants.active,
    label: t('Status')
  }, _react["default"].createElement(_antd.Radio.Group, {
    disabled: disabled.includes(_constants.active),
    options: statusOptions
  })), _react["default"].createElement(FormItem, {
    id: "comment",
    rules: validationRules.comment,
    name: _constants.comment,
    label: t('Comment')
  }, _react["default"].createElement(_antd.Input.TextArea, {
    disabled: disabled.includes(_constants.comment),
    rows: 2,
    placeholder: t('Enter comment')
  })), _react["default"].createElement(FormItem, {
    id: "extraDetails",
    rules: validationRules.extraDetails,
    name: _constants.extraDetails,
    label: t('Extra details')
  }, _react["default"].createElement(_antd.Input.TextArea, {
    disabled: disabled.includes(_constants.extraDetails),
    rows: 4,
    placeholder: t('Enter extra details')
  })), _react["default"].createElement(FormItem, {
    id: "providedBy",
    name: _constants.providedBy,
    rules: validationRules.providedBy,
    label: t('Provided by')
  }, _react["default"].createElement(_antd.Select, {
    disabled: disabled.includes(_constants.providedBy),
    placeholder: t('Select organization'),
    options: orgOptions,
    showSearch: true,
    filterOption: _utils.orgFilterFunction
  })), _react["default"].createElement(FormItem, _reactUtils.tailLayout, _react["default"].createElement(_antd.Space, null, _react["default"].createElement(_antd.Button, {
    type: "primary",
    id: "submit-button",
    disabled: isLoading,
    htmlType: "submit"
  }, isLoading ? t('Saving') : t('save')), _react["default"].createElement(_antd.Button, {
    id: "cancel-button",
    onClick: function onClick() {
      goTo(cancelUrl);
    }
  }, t('Cancel')))));
};

exports.HealthCareForm = HealthCareForm;
HealthCareForm.defaultProps = defaultProps;