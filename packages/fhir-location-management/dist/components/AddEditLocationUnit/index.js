"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewEditLocationUnit = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _LocationForm = require("../LocationForm");

var _utils = require("../LocationForm/utils");

var _antd = require("antd");

var _reactUtils = require("@opensrp/react-utils");

var _reactHelmet = require("react-helmet");

var _utils2 = require("../../helpers/utils");

var _mls = require("../../mls");

var NewEditLocationUnit = function NewEditLocationUnit(props) {
  var _sParams$get;

  var hidden = props.hidden,
      disabled = props.disabled,
      fhirBaseURL = props.fhirBaseURL,
      fhirRootLocationId = props.fhirRootLocationId,
      successURLGenerator = props.successURLGenerator,
      cancelURLGenerator = props.cancelURLGenerator,
      disabledTreeNodesCallback = props.disabledTreeNodesCallback;
  var history = (0, _reactRouter.useHistory)();
  var location = (0, _reactRouter.useLocation)();
  var params = (0, _reactRouter.useParams)();
  var sParams = new URLSearchParams(location.search);

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var cancelHandler = function cancelHandler() {
    var cancelURL = cancelURLGenerator();
    history.push(cancelURL);
  };

  var _useGetLocationHierar = (0, _utils2.useGetLocationHierarchy)(fhirBaseURL, fhirRootLocationId),
      data = _useGetLocationHierar.data,
      error = _useGetLocationHierar.error,
      isLoading = _useGetLocationHierar.isLoading;

  var locId = params.id;

  var _useGetLocation = (0, _utils2.useGetLocation)(fhirBaseURL, locId),
      locData = _useGetLocation.data,
      locError = _useGetLocation.error,
      locIsLoading = _useGetLocation.isLoading,
      locIsIdle = _useGetLocation.isIdle;

  var ifNotIdle = function ifNotIdle(isDoing) {
    return !locIsIdle && isDoing;
  };

  if (isLoading || ifNotIdle(locIsLoading)) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (error && !data && locError && !locData) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: t('Unable to load the location or location hierarchy')
    });
  }

  if (!data || ifNotIdle(!locData)) {
    return _react["default"].createElement(_reactUtils.Resource404, {
      errorMessage: t('Unable to load the location or location hierarchy')
    });
  }

  var parentId = (_sParams$get = sParams.get('parentId')) !== null && _sParams$get !== void 0 ? _sParams$get : undefined;
  var initialValues = (0, _utils.getLocationFormFields)(locData, parentId);
  var locationFormProps = {
    initialValues: initialValues,
    tree: data,
    successURLGenerator: successURLGenerator,
    hidden: hidden,
    disabled: disabled,
    onCancel: cancelHandler,
    fhirBaseURL: fhirBaseURL,
    disabledTreeNodesCallback: disabledTreeNodesCallback
  };
  var pageTitle = locData ? t('Edit > {{name}}', {
    name: initialValues.name
  }) : t('Add Location Unit');
  return _react["default"].createElement(_antd.Row, {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-4",
    span: 24
  }, _react["default"].createElement(_LocationForm.LocationForm, locationFormProps)));
};

exports.NewEditLocationUnit = NewEditLocationUnit;