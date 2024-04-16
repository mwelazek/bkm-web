"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommodityForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

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

var CommodityForm = function CommodityForm(props) {
  var fhirBaseUrl = props.fhirBaseUrl,
      initialValues = props.initialValues,
      disabled = props.disabled,
      cancelUrl = props.cancelUrl,
      successUrl = props.successUrl,
      postSuccess = props.postSuccess;
  var queryClient = (0, _reactQuery.useQueryClient)();
  var history = (0, _reactRouter.useHistory)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var goTo = function goTo() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#';
    return history.push(url);
  };

  var _useMutation = (0, _reactQuery.useMutation)(function (values) {
    var payload = (0, _utils.generateGroupPayload)(values, initialValues);
    return (0, _utils.postPutGroup)(fhirBaseUrl, payload);
  }, {
    onError: function onError(err) {
      (0, _notifications.sendErrorNotification)(err.message);
    },
    onSuccess: function () {
      var _onSuccess = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(createdGroup) {
        var isEdit;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _notifications.sendSuccessNotification)(t('Commodity updated successfully'));
                isEdit = !!initialValues.id;
                _context.next = 4;
                return postSuccess === null || postSuccess === void 0 ? void 0 : postSuccess(createdGroup, isEdit)["catch"](function (err) {
                  (0, _notifications.sendErrorNotification)(err.message);
                });

              case 4:
                queryClient.refetchQueries([_constants.groupResourceType])["catch"](function () {
                  (0, _notifications.sendInfoNotification)(t('Failed to refresh data, please refresh the page'));
                });
                goTo(successUrl);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onSuccess(_x) {
        return _onSuccess.apply(this, arguments);
      }

      return onSuccess;
    }()
  }),
      mutate = _useMutation.mutate,
      isLoading = _useMutation.isLoading;

  var statusOptions = [{
    label: t('Active'),
    value: true
  }, {
    label: t('Disabled'),
    value: false
  }];
  var unitsOfMEasureOptions = (0, _utils.getUnitOfMeasureOptions)();
  var typeOptions = (0, _utils.getGroupTypeOptions)();
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
    label: t('Commodity Id')
  }, _react["default"].createElement(_antd.Input, {
    placeholder: t('(Auto generated)'),
    disabled: true
  })), _react["default"].createElement(FormItem, {
    hidden: true,
    id: "identifier",
    name: _constants.identifier,
    label: t('Identifier')
  }, _react["default"].createElement(_antd.Input, {
    placeholder: t('(Auto generated)'),
    disabled: true
  })), _react["default"].createElement(FormItem, {
    id: _constants.name,
    name: _constants.name,
    rules: validationRules[_constants.name],
    label: t('Enter Commodity name')
  }, _react["default"].createElement(_antd.Input, {
    disabled: disabled.includes(_constants.name),
    placeholder: t('Name')
  })), _react["default"].createElement(FormItem, {
    id: _constants.active,
    rules: validationRules[_constants.active],
    name: _constants.active,
    label: t('Select Commodity status')
  }, _react["default"].createElement(_antd.Radio.Group, {
    disabled: disabled.includes(_constants.active),
    options: statusOptions
  })), _react["default"].createElement(FormItem, {
    id: _constants.type,
    name: _constants.type,
    rules: validationRules[_constants.type],
    label: t('Select Commodity Type')
  }, _react["default"].createElement(_antd.Select, {
    disabled: disabled.includes(_constants.type),
    placeholder: t('Select Commodity type'),
    options: typeOptions,
    showSearch: true,
    filterOption: _utils.groupSelectfilterFunction
  })), _react["default"].createElement(FormItem, {
    id: _constants.unitOfMeasure,
    name: _constants.unitOfMeasure,
    rules: validationRules[_constants.unitOfMeasure],
    label: t('Select the unit of measure')
  }, _react["default"].createElement(_antd.Select, {
    disabled: disabled.includes(_constants.unitOfMeasure),
    placeholder: t('Select the unit of measure'),
    options: unitsOfMEasureOptions,
    showSearch: true,
    filterOption: _utils.groupSelectfilterFunction
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

exports.CommodityForm = CommodityForm;
CommodityForm.defaultProps = defaultProps;