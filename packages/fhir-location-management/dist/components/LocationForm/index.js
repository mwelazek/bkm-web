"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _reactRouter = require("react-router");

var _notifications = require("@opensrp/notifications");

var _utils = require("./utils");

var _constants = require("../../constants");

var _CustomTreeSelect = require("./CustomTreeSelect");

var _types = require("../../helpers/types");

var _reactQuery = require("react-query");

var _mls = require("../../mls");

var _useDeepCompareEffect = _interopRequireDefault(require("use-deep-compare-effect"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FormItem = _antd.Form.Item;
var defaultProps = {
  initialValues: _utils.defaultFormField,
  successURLGenerator: function successURLGenerator() {
    return '#';
  },
  hidden: [],
  disabled: [],
  onCancel: function onCancel() {
    return undefined;
  }
};
var formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    },
    md: {
      span: 4
    },
    lg: {
      span: 6
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 18
    },
    md: {
      span: 16
    },
    lg: {
      span: 14
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

var LocationForm = function LocationForm(props) {
  var _tree$first;

  var initialValues = props.initialValues,
      disabled = props.disabled,
      hidden = props.hidden,
      disabledTreeNodesCallback = props.disabledTreeNodesCallback,
      fhirBaseURL = props.fhirBaseURL,
      afterSubmit = props.afterSubmit,
      successURLGenerator = props.successURLGenerator,
      onCancel = props.onCancel,
      tree = props.tree;
  var isEditMode = !!initialValues.id;
  var defaultParentNode = (_tree$first = tree.first(function (node) {
    return node.model.nodeId === initialValues.parentId;
  })) !== null && _tree$first !== void 0 ? _tree$first : tree;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isSubmitting = _useState2[0],
      setSubmitting = _useState2[1];

  var _useState3 = (0, _react.useState)(defaultParentNode),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      parentNode = _useState4[0],
      setParentNode = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      areWeDoneHere = _useState6[0],
      setAreWeDoneHere = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      successUrl = _useState8[0],
      setSuccessUrl = _useState8[1];

  var queryClient = (0, _reactQuery.useQueryClient)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var validationRules = (0, _utils.validationRulesFactory)(t);

  var isHidden = function isHidden(fieldName) {
    return hidden.includes(fieldName);
  };

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = (0, _slicedToArray2["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  (0, _useDeepCompareEffect["default"])(function () {
    form.resetFields();
  }, [form, initialValues]);
  var status = [{
    label: t('Active'),
    value: _types.LocationUnitStatus.ACTIVE
  }, {
    label: t('Inactive'),
    value: _types.LocationUnitStatus.INACTIVE
  }];
  var locationCategoryOptions = [{
    label: t('Jurisdiction'),
    value: true
  }, {
    label: t('Building'),
    value: false
  }];

  if (areWeDoneHere && successUrl) {
    return _react["default"].createElement(_reactRouter.Redirect, {
      to: successUrl
    });
  }

  return _react["default"].createElement("div", {
    className: "location-form form-container"
  }, _react["default"].createElement(_antd.Form, (0, _extends2["default"])({}, formItemLayout, {
    form: form,
    name: "location-form",
    scrollToFirstError: true,
    initialValues: initialValues,
    onFinish: function () {
      var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(values) {
        var payload, successMessage;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSubmitting(true);
                payload = (0, _utils.generateLocationUnit)(values, initialValues, parentNode);
                successMessage = isEditMode ? t("Location was successfully updated") : t('Location was successfully created');
                (0, _utils.postPutLocationUnit)(payload, fhirBaseURL).then(function () {
                  var successUrl = successURLGenerator(payload);
                  (0, _notifications.sendSuccessNotification)(successMessage);
                  afterSubmit === null || afterSubmit === void 0 ? void 0 : afterSubmit(payload);
                  queryClient.cancelQueries([_constants.locationHierarchyResourceType])["catch"](function (err) {
                    throw err;
                  });
                  queryClient.invalidateQueries({
                    predicate: function predicate(query) {
                      return [_constants.locationResourceType, _constants.locationHierarchyResourceType].includes(query.queryKey[0]);
                    }
                  })["catch"](function (err) {
                    throw err;
                  });
                  setSuccessUrl(successUrl);
                  setAreWeDoneHere(true);
                })["catch"](function (err) {
                  (0, _notifications.sendErrorNotification)(err.message);
                })["finally"](function () {
                  setSubmitting(false);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  }), _react["default"].createElement(FormItem, {
    name: "id",
    label: t('Id'),
    rules: validationRules.id,
    hidden: true,
    id: "id"
  }, _react["default"].createElement(_antd.Input, {
    disabled: true
  })), _react["default"].createElement(FormItem, {
    id: "parentId",
    hidden: isHidden('parentId'),
    label: t('Part Of'),
    name: "parentId",
    rules: validationRules.parentId
  }, _react["default"].createElement(_CustomTreeSelect.CustomTreeSelect, {
    disabled: disabled.includes('parentId'),
    dropdownStyle: {
      maxHeight: 400,
      overflow: 'auto'
    },
    placeholder: t('Select the parent location'),
    disabledTreeNodesCallback: disabledTreeNodesCallback,
    fullDataCallback: setParentNode,
    tree: tree,
    allowClear: true
  })), _react["default"].createElement(FormItem, {
    id: "name",
    rules: validationRules.name,
    hidden: isHidden('name'),
    name: "name",
    label: t('Name'),
    hasFeedback: true
  }, _react["default"].createElement(_antd.Input, {
    disabled: disabled.includes('name'),
    placeholder: t('Enter a location name')
  })), _react["default"].createElement(FormItem, {
    id: "alias",
    hidden: isHidden('alias'),
    name: "alias",
    label: t('Alias'),
    hasFeedback: true
  }, _react["default"].createElement(_antd.Input, {
    disabled: disabled.includes('description'),
    placeholder: t('Alias')
  })), _react["default"].createElement(FormItem, {
    id: "status",
    rules: validationRules.status,
    hidden: isHidden('status'),
    label: t('Status'),
    name: "status"
  }, _react["default"].createElement(_antd.Radio.Group, {
    name: "active"
  }, status.map(function (e) {
    return _react["default"].createElement(_antd.Radio, {
      name: "status",
      key: e.label,
      value: e.value
    }, e.label);
  }))), _react["default"].createElement(FormItem, {
    hidden: isHidden('isJurisdiction'),
    label: t('Physical type'),
    name: "isJurisdiction",
    id: "isJurisdiction",
    rules: validationRules.isJurisdiction
  }, _react["default"].createElement(_antd.Radio.Group, {
    disabled: disabled.includes('isJurisdiction'),
    options: locationCategoryOptions
  })), _react["default"].createElement(FormItem, {
    id: "description",
    rules: validationRules.description,
    hidden: isHidden('description'),
    name: "description",
    label: t('Description'),
    hasFeedback: true
  }, _react["default"].createElement(_antd.Input.TextArea, {
    rows: 4,
    disabled: disabled.includes('description'),
    placeholder: t('Description')
  })), _react["default"].createElement(FormItem, tailLayout, _react["default"].createElement(_antd.Space, null, _react["default"].createElement(_antd.Button, {
    type: "primary",
    id: "location-form-submit-button",
    disabled: isSubmitting,
    htmlType: "submit"
  }, isSubmitting ? t('Saving') : t('Save')), _react["default"].createElement(_antd.Button, {
    id: "location-form-cancel-button",
    onClick: onCancel
  }, t('Cancel'))))));
};

exports.LocationForm = LocationForm;
LocationForm.defaultProps = defaultProps;