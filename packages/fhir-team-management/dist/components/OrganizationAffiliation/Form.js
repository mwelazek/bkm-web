"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AffiliationModal = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _antd = require("antd");

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _fhirLocationManagement = require("@opensrp/fhir-location-management");

var _constants = require("../../constants");

var _reactQuery = require("react-query");

var _notifications = require("@opensrp/notifications");

var _mls = require("../../mls");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AffiliationModal = function AffiliationModal(props) {
  var handleCancel = props.handleCancel,
      visible = props.visible,
      allOrgs = props.allOrgs,
      affiliationsByLoc = props.affiliationsByLoc,
      baseUrl = props.baseUrl,
      location = props.location,
      allAffiliations = props.allAffiliations;
  var locationName = location === null || location === void 0 ? void 0 : location.name;
  var locationId = location === null || location === void 0 ? void 0 : location.id;
  var orgSelectOptions = (0, _utils.getOrgSelectOptions)(allOrgs);
  var currentAffiliations = affiliationsByLoc["".concat(_fhirLocationManagement.locationResourceType, "/").concat(locationId)];
  var defaultOrgsValues = (0, _utils.getOrgOptionsFromAffiliations)(currentAffiliations);

  var _useState = (0, _react.useState)(defaultOrgsValues),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var queryClient = (0, _reactQuery.useQueryClient)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useMutation = (0, _reactQuery.useMutation)(function () {
    return (0, _utils.postPutAffiliations)(baseUrl, values, defaultOrgsValues, location, allAffiliations);
  }, {
    onError: function onError(err) {
      return (0, _notifications.sendErrorNotification)(err.message);
    },
    onSuccess: function onSuccess() {
      (0, _notifications.sendSuccessNotification)(t('Team assignments updated successfully'));
      handleCancel();
      queryClient.refetchQueries([_constants.organizationAffiliationResourceType])["catch"](function () {
        (0, _notifications.sendInfoNotification)(t('Failed to refresh assignments, Please Refresh the page to see the changes'));
      });
    }
  }),
      mutate = _useMutation.mutate,
      isLoading = _useMutation.isLoading;

  if (!locationId) {
    return null;
  }

  var handleChange = function handleChange(_, fullOption) {
    var options = Array.isArray(fullOption) ? fullOption : [fullOption];
    setValues(options);
  };

  var submit = function submit() {
    return mutate();
  };

  return _react["default"].createElement(_antd.Modal, {
    destroyOnClose: true,
    title: t("Assign/Unassign Teams | {{locationName}}", {
      locationName: locationName
    }),
    open: visible,
    okText: "Save",
    onCancel: handleCancel,
    cancelText: "Cancel",
    footer: [_react["default"].createElement(_antd.Button, {
      "data-testid": "submit-affiliations",
      disabled: isLoading,
      onClick: submit,
      type: "primary",
      key: "submit"
    }, isLoading ? t('Saving') : t('save')), _react["default"].createElement(_antd.Button, {
      "data-testid": "cancel-affiliations",
      id: 'cancel',
      key: "cancel",
      onClick: function onClick() {
        handleCancel();
      }
    }, t('Cancel'))],
    okType: "default"
  }, _react["default"].createElement(_antd.Select, {
    className: "full-width",
    "data-testid": "affiliation-select",
    mode: "multiple",
    allowClear: true,
    showSearch: true,
    placeholder: t('Select teams'),
    options: orgSelectOptions,
    defaultValue: defaultOrgsValues,
    filterOption: _utils.orgsFilterFunction,
    onChange: handleChange
  }));
};

exports.AffiliationModal = AffiliationModal;