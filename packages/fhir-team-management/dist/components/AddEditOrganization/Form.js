"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrganizationForm = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _constants = require("../../constants");

var _reactQuery = require("react-query");

var _mls = require("../../mls");

var _utils = require("../../utils");

var _notifications = require("@opensrp/notifications");

var _reactRouter = require("react-router");

var _utils2 = require("./utils");

var _reactUtils = require("@opensrp/react-utils");

var FormItem = _antd.Form.Item;
var defaultProps = {
  initialValues: {},
  disabled: []
};

var OrganizationForm = function OrganizationForm(props) {
  var fhirBaseUrl = props.fhirBaseUrl,
      initialValues = props.initialValues,
      disabled = props.disabled,
      cancelUrl = props.cancelUrl,
      successUrl = props.successUrl,
      practitioners = props.practitioners,
      existingPractitionerRoles = props.existingPractitionerRoles,
      allPractitionerRoles = props.allPractitionerRoles,
      configuredPractAssignmentStrategy = props.configuredPractAssignmentStrategy;
  var queryClient = (0, _reactQuery.useQueryClient)();
  var history = (0, _reactRouter.useHistory)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var goTo = function goTo() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#';
    return history.push(url);
  };

  var _useMutation = (0, _reactQuery.useMutation)(function (values) {
    var payload = (0, _utils2.generateOrgPayload)(values);
    return (0, _utils.postPutOrganization)(fhirBaseUrl, payload).then(function (organization) {
      (0, _notifications.sendSuccessNotification)(t('Organization updated successfully'));
      return (0, _utils.updatePractitionerRoles)(fhirBaseUrl, values, initialValues, organization, practitioners, existingPractitionerRoles).then(function () {
        return queryClient.invalidateQueries([_constants.practitionerResourceType, _constants.organizationResourceType, organization.id]);
      }).then(function () {
        (0, _notifications.sendSuccessNotification)(t('Practitioner assignments updated successfully'));
      });
    });
  }, {
    onError: function onError() {
      (0, _notifications.sendErrorNotification)(t('There was a problem updating organization'));
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_constants.organizationResourceType])["catch"](function () {
        (0, _notifications.sendInfoNotification)(t('Failed to refresh data, please refresh the page'));
      });
      goTo(successUrl);
    }
  }),
      mutate = _useMutation.mutate,
      isLoading = _useMutation.isLoading;

  var statusOptions = [{
    label: t('active'),
    value: true
  }, {
    label: t('Inactive'),
    value: false
  }];
  var practitionersSelectOptions = (0, _utils2.getPractitionerOptions)(practitioners, existingPractitionerRoles, allPractitionerRoles, configuredPractAssignmentStrategy);
  var validationRules = (0, _utils2.validationRulesFactory)(t);
  return _react["default"].createElement(_antd.Form, (0, _extends2["default"])({}, _reactUtils.formItemLayout, {
    onFinish: function onFinish(values) {
      mutate(values);
    },
    initialValues: initialValues
  }), _react["default"].createElement(FormItem, {
    name: _constants.id,
    label: t('Id'),
    id: "id",
    hidden: true
  }, _react["default"].createElement(_antd.Input, null)), _react["default"].createElement(FormItem, {
    name: _constants.identifier,
    label: t('Identifier'),
    id: "identifier",
    hidden: true
  }, _react["default"].createElement(_antd.Input, null)), _react["default"].createElement(FormItem, {
    name: _constants.name,
    rules: validationRules.name,
    id: "name",
    label: t('Name')
  }, _react["default"].createElement(_antd.Input, {
    placeholder: t('Enter team name')
  })), _react["default"].createElement(FormItem, {
    name: _constants.alias,
    rules: validationRules.alias,
    id: "alias",
    label: t('Alias')
  }, _react["default"].createElement(_antd.Input, {
    placeholder: t('Enter team alias')
  })), _react["default"].createElement(FormItem, {
    id: "status",
    name: _constants.active,
    label: "Status",
    rules: validationRules.status
  }, _react["default"].createElement(_antd.Radio.Group, {
    disabled: disabled.includes(_constants.active),
    options: statusOptions
  })), _react["default"].createElement(FormItem, {
    hidden: true,
    id: "type",
    name: _constants.type,
    label: "Type",
    rules: validationRules.type
  }, _react["default"].createElement(_antd.Select, {
    disabled: disabled.includes(_constants.type),
    options: (0, _utils2.getOrgTypeSelectOptions)()
  })), _react["default"].createElement(FormItem, {
    id: "members",
    name: _constants.members,
    label: t('Practitioners'),
    rules: validationRules.members
  }, _react["default"].createElement(_antd.Select, {
    allowClear: true,
    mode: "multiple",
    optionFilterProp: "label",
    placeholder: t('Select user (practitioners only)'),
    options: practitionersSelectOptions,
    filterOption: _utils.practitionersFilterFunction
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

exports.OrganizationForm = OrganizationForm;
OrganizationForm.defaultProps = defaultProps;