"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationForm = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _notifications = require("@opensrp/notifications");

var _reactRouter = require("react-router");

var _ExtraFields = require("./ExtraFields");

var _utils = require("./utils");

var _constants = require("../../constants");

var _locationUnits = require("../../ducks/location-units");

var _CustomSelect = require("./CustomSelect");

var _dataLoaders = require("../../helpers/dataLoaders");

var _mls = require("../../mls");

var _CustomTreeSelect = require("./CustomTreeSelect");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var FormItem = _antd.Form.Item;
var defaultProps = {
  initialValues: _utils.defaultFormField,
  filterByParentId: false,
  successURLGenerator: function successURLGenerator() {
    return _constants.URL_LOCATION_UNIT;
  },
  hidden: [],
  disabled: [],
  onCancel: function onCancel() {
    return void 0;
  },
  username: '',
  opensrpBaseURL: _constants.baseURL,
  afterSubmit: function afterSubmit() {
    return;
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
  var initialValues = props.initialValues,
      successURLGenerator = props.successURLGenerator,
      opensrpBaseURL = props.opensrpBaseURL,
      disabled = props.disabled,
      onCancel = props.onCancel,
      hidden = props.hidden,
      username = props.username,
      afterSubmit = props.afterSubmit,
      disabledTreeNodesCallback = props.disabledTreeNodesCallback,
      filterByParentId = props.filterByParentId;
  var isEditMode = !!(initialValues !== null && initialValues !== void 0 && initialValues.id);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      areWeDoneHere = _useState2[0],
      setAreWeDoneHere = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isSubmitting = _useState4[0],
      setSubmitting = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      selectedLocationTags = _useState6[0],
      setLocationTags = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      selectedParentNode = _useState8[0],
      setSelectedParentNode = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      generatedPayload = _useState10[0],
      setGeneratedPayload = _useState10[1];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var validationRules = (0, _utils.validationRulesFactory)(t);

  var isHidden = function isHidden(fieldName) {
    return hidden.includes(fieldName);
  };

  var isDisabled = function isDisabled(fieldName) {
    return disabled.includes(fieldName);
  };

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = (0, _slicedToArray2["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  _react["default"].useEffect(function () {
    form.setFieldsValue(_objectSpread(_objectSpread({}, initialValues), form.getFieldsValue()));
  }, [form, initialValues]);

  var status = [{
    label: t('Active'),
    value: _locationUnits.LocationUnitStatus.ACTIVE
  }, {
    label: t('Inactive'),
    value: _locationUnits.LocationUnitStatus.INACTIVE
  }];
  var locationCategoryOptions = [{
    label: t('Service point'),
    value: false
  }, {
    label: t('Jurisdiction'),
    value: true
  }];

  if (areWeDoneHere) {
    var redirectAfterAction = successURLGenerator(generatedPayload);
    return _react["default"].createElement(_reactRouter.Redirect, {
      to: redirectAfterAction
    });
  }

  var geoFieldsChangeHandler = (0, _utils.handleGeoFieldsChangeFactory)(form);
  return _react["default"].createElement("div", {
    className: "location-form form-container"
  }, _react["default"].createElement(_antd.Form, (0, _extends2["default"])({}, formItemLayout, {
    form: form,
    name: "location-form",
    scrollToFirstError: true,
    initialValues: initialValues,
    onValuesChange: geoFieldsChangeHandler,
    onFinish: function onFinish(values) {
      var payload = (0, _utils.generateLocationUnit)(values, username, selectedLocationTags, selectedParentNode);
      var successMessage = isEditMode ? t('Location was successfully updated') : t('Location was successfully created');
      var params = {
        is_jurisdiction: values.isJurisdiction
      };
      (0, _dataLoaders.postPutLocationUnit)(payload, opensrpBaseURL, isEditMode, params).then(function () {
        afterSubmit(payload);
        (0, _notifications.sendSuccessNotification)(successMessage);
        setGeneratedPayload(payload);
        setAreWeDoneHere(true);
      })["catch"](function (err) {
        (0, _notifications.sendErrorNotification)(err.name, err.message);
      })["finally"](function () {
        setSubmitting(false);
      });
    }
  }), _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(FormItem, {
    name: "instance",
    label: t('Instance'),
    rules: validationRules.instance,
    hidden: true,
    id: "instance"
  }, _react["default"].createElement(_antd.Input, {
    disabled: true
  })), _react["default"].createElement(FormItem, {
    name: "id",
    label: t('Id'),
    rules: validationRules.id,
    hidden: true,
    id: "id"
  }, _react["default"].createElement(_antd.Input, {
    disabled: true
  })), _react["default"].createElement(FormItem, {
    name: "username",
    label: t('username'),
    hidden: true,
    id: "username"
  }, _react["default"].createElement(_antd.Input, {
    disabled: true
  })), _react["default"].createElement(FormItem, {
    id: "parentId",
    hidden: isHidden('parentId'),
    label: t('Parent'),
    name: "parentId",
    rules: validationRules.parentId
  }, _react["default"].createElement(_CustomTreeSelect.CustomTreeSelect, {
    baseURL: opensrpBaseURL,
    filterByParentId: filterByParentId,
    disabled: disabled.includes('parentId'),
    dropdownStyle: {
      maxHeight: 400,
      overflow: 'auto'
    },
    placeholder: t('Select the parent location'),
    fullDataCallback: setSelectedParentNode,
    disabledTreeNodesCallback: disabledTreeNodesCallback
  })), _react["default"].createElement(FormItem, {
    id: "name",
    rules: validationRules.name,
    hidden: isHidden('name'),
    label: t('Name'),
    name: "name",
    hasFeedback: true
  }, _react["default"].createElement(_antd.Input, {
    disabled: disabled.includes('name'),
    placeholder: t('Enter a location name')
  })), _react["default"].createElement(FormItem, {
    id: "status",
    rules: validationRules.status,
    hidden: isHidden('status'),
    label: t('Status'),
    name: "status"
  }, _react["default"].createElement(_antd.Radio.Group, {
    options: status
  })), _react["default"].createElement(FormItem, {
    hidden: isHidden('isJurisdiction'),
    label: t('Location category'),
    name: "isJurisdiction",
    id: "isJurisdiction",
    rules: validationRules.isJurisdiction
  }, _react["default"].createElement(_antd.Radio.Group, {
    disabled: disabled.includes('isJurisdiction'),
    options: locationCategoryOptions
  })), _react["default"].createElement(FormItem, {
    hidden: isHidden('serviceType'),
    name: "serviceType",
    id: "serviceType",
    label: t('Type'),
    rules: validationRules.serviceTypes
  }, _react["default"].createElement(_CustomSelect.CustomSelect, {
    className: "select",
    placeholder: t('Select the service point type'),
    disabled: disabled.includes('serviceType'),
    loadData: function loadData(setData) {
      return (0, _dataLoaders.loadSettings)(_constants.SERVICE_TYPES_SETTINGS_ID, opensrpBaseURL, setData);
    },
    getOptions: _utils.getServiceTypeOptions
  })), _react["default"].createElement(FormItem, {
    id: "externalId",
    hidden: isHidden('externalId'),
    name: "externalId",
    label: t('External ID'),
    rules: validationRules.externalId
  }, _react["default"].createElement(_antd.Input, {
    disabled: disabled.includes('externalId'),
    placeholder: t('Select status')
  })), _react["default"].createElement(FormItem, {
    id: "geometry",
    rules: validationRules.geometry,
    hidden: isHidden('geometry'),
    name: "geometry",
    label: t('Geometry')
  }, _react["default"].createElement(_antd.Input.TextArea, {
    disabled: disabled.includes('geometry'),
    rows: 4,
    placeholder: t('</> JSON')
  })), _react["default"].createElement(FormItem, {
    id: "latitude",
    hidden: isHidden('latitude'),
    name: "latitude",
    label: t('Latitude'),
    rules: validationRules.latitude
  }, _react["default"].createElement(_antd.Input, {
    disabled: disabled.includes('latitude'),
    placeholder: t('E.g. -16.08306')
  })), _react["default"].createElement(FormItem, {
    id: "longitude",
    hidden: isHidden('longitude'),
    name: "longitude",
    label: t('Longitude'),
    rules: validationRules.longitude
  }, _react["default"].createElement(_antd.Input, {
    disabled: disabled.includes('longitude'),
    placeholder: t('E.g. 49.54933')
  })), _react["default"].createElement(FormItem, {
    id: "locationTags",
    hidden: isHidden('locationTags'),
    label: t('Unit group'),
    name: "locationTags",
    rules: validationRules.locationTags
  }, _react["default"].createElement(_CustomSelect.CustomSelect, {
    disabled: disabled.includes('locationTags'),
    mode: "multiple",
    allowClear: true,
    showSearch: true,
    placeholder: t('Enter a location group name'),
    loadData: function loadData(setData) {
      return (0, _dataLoaders.loadLocationTags)(opensrpBaseURL, setData);
    },
    getOptions: _utils.getLocationTagOptions,
    fullDataCallback: setLocationTags,
    getSelectedFullData: _utils.getSelectedLocTagObj
  })), _react["default"].createElement(_ExtraFields.ExtraFields, {
    baseURL: opensrpBaseURL,
    hidden: isHidden('extraFields'),
    disabled: isDisabled('extraFields')
  }), _react["default"].createElement(FormItem, tailLayout, _react["default"].createElement(_antd.Space, null, _react["default"].createElement(_antd.Button, {
    type: "primary",
    id: "location-form-submit-button",
    disabled: isSubmitting,
    htmlType: "submit"
  }, isSubmitting ? t('Saving') : t('Save')), _react["default"].createElement(_antd.Button, {
    id: "location-form-cancel-button",
    onClick: function onClick() {
      return onCancel();
    }
  }, t('Cancel')))))));
};

exports.LocationForm = LocationForm;
LocationForm.defaultProps = defaultProps;