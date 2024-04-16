"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSubmit = exports["default"] = exports.Form = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var Yup = _interopRequireWildcard(require("yup"));

var _react = _interopRequireWildcard(require("react"));

var _formikAntd = require("formik-antd");

var _antd = require("antd");

var _connectedReducerRegistry = require("@onaio/connected-reducer-registry");

var _reactUtils = require("@opensrp/react-utils");

var _formik = require("formik");

var _constants = require("../../constants");

var _mls = require("../../mls");

var _notifications = require("@opensrp/notifications");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 11
  }
};
var offsetLayout = {
  wrapperCol: {
    offset: 8,
    span: 11
  }
};
var userSchema = Yup.object().shape({
  name: Yup.string().typeError('Name must be a String').required('Name is Required'),
  active: Yup["boolean"]().typeError('Status must be a Boolean').required('Status is Required'),
  description: Yup.string().typeError('Description must be a String')
});

var _onSubmit = function onSubmit(values, opensrpBaseURL, props, setSubmitting, t) {
  var serve = new _reactUtils.OpenSRPService(_constants.LOCATION_UNIT_GROUP_ALL, opensrpBaseURL);
  var payload = values;

  if (props.id) {
    payload.id = props.id;
    serve.update(payload).then(function () {
      (0, _notifications.sendSuccessNotification)('Location Unit Group updated successfully');
      setSubmitting(false);

      _connectedReducerRegistry.history.goBack();
    })["catch"](function () {
      (0, _notifications.sendErrorNotification)(t('There was a problem updating Location Unit Group'));
      setSubmitting(false);
    });
  } else {
    serve.create(payload).then(function () {
      (0, _notifications.sendSuccessNotification)('Location Unit Group created successfully');
      setSubmitting(false);

      _connectedReducerRegistry.history.goBack();
    })["catch"](function () {
      (0, _notifications.sendErrorNotification)(t('There was a problem creating Location Unit Group'));
      setSubmitting(false);
    });
  }
};

exports.onSubmit = _onSubmit;

var Form = function Form(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)({
    name: '',
    description: '',
    active: true
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      initialValue = _useState4[0],
      setInitialValue = _useState4[1];

  var opensrpBaseURL = props.opensrpBaseURL,
      setEditTitle = props.setEditTitle;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var status = [{
    label: t('Active'),
    value: true
  }, {
    label: t('Inactive'),
    value: false
  }];
  (0, _react.useEffect)(function () {
    if (isLoading) {
      if (props.id) {
        var serve = new _reactUtils.OpenSRPService(_constants.LOCATION_UNIT_GROUP_GET + props.id, opensrpBaseURL);
        serve.list().then(function (response) {
          setInitialValue({
            active: response.active,
            description: response.description,
            name: response.name
          });
          setEditTitle(response.name);
          setIsLoading(false);
        })["catch"](function () {
          return (0, _notifications.sendErrorNotification)(t('There was a problem submitting the form'));
        });
      } else setIsLoading(false);
    }
  }, [isLoading, props.id, opensrpBaseURL, setEditTitle, t]);
  if (isLoading) return _react["default"].createElement(_antd.Spin, {
    className: "custom-spinner",
    size: 'large'
  });
  return _react["default"].createElement(_formik.Formik, {
    initialValues: initialValue,
    validationSchema: userSchema,
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      return _onSubmit(values, opensrpBaseURL, props, setSubmitting, t);
    }
  }, function (_ref2) {
    var isSubmitting = _ref2.isSubmitting,
        handleSubmit = _ref2.handleSubmit;
    return _react["default"].createElement(_formikAntd.Form, (0, _extends2["default"])({
      requiredMark: false
    }, layout, {
      onSubmitCapture: handleSubmit
    }), _react["default"].createElement(_formikAntd.Form.Item, {
      label: t('Location Name'),
      name: "name"
    }, _react["default"].createElement(_formikAntd.Input, {
      name: "name",
      placeholder: t('Enter a location group name')
    })), _react["default"].createElement(_formikAntd.Form.Item, {
      label: t('Status'),
      name: "active",
      valuePropName: "checked"
    }, _react["default"].createElement(_formikAntd.Radio.Group, {
      name: "active",
      defaultValue: initialValue.active
    }, status.map(function (e) {
      return _react["default"].createElement(_formikAntd.Radio, {
        name: "active",
        key: e.label,
        value: e.value
      }, e.label);
    }))), _react["default"].createElement(_formikAntd.Form.Item, {
      name: "description",
      label: t('Description')
    }, _react["default"].createElement(_formikAntd.Input.TextArea, {
      name: "description",
      rows: 4,
      placeholder: t('Description')
    })), _react["default"].createElement(_formikAntd.Form.Item, (0, _extends2["default"])({
      name: 'buttons'
    }, offsetLayout), _react["default"].createElement(_formikAntd.SubmitButton, {
      id: "submit"
    }, isSubmitting ? t('Saving') : t('Save')), _react["default"].createElement(_antd.Button, {
      id: "cancel",
      onClick: function onClick() {
        return _connectedReducerRegistry.history.goBack();
      },
      type: "dashed"
    }, t('Cancel'))));
  });
};

exports.Form = Form;
var _default = Form;
exports["default"] = _default;