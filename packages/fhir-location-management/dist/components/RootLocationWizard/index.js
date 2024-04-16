"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RootLocationWizard = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reactHelmet = require("react-helmet");

var _reactUtils = require("@opensrp/react-utils");

var _mls = require("../../mls");

var _constants = require("../../constants");

var _reactRouter = require("react-router");

var _utils = require("../LocationForm/utils");

var _reactQuery = require("react-query");

var _notifications = require("@opensrp/notifications");

var _rbac = require("@opensrp/rbac");

var _i18n = require("@opensrp/i18n");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Text = _antd.Typography.Text;

var RootLocationWizard = function RootLocationWizard(props) {
  var rootLocationId = props.rootLocationId,
      fhirBaseUrl = props.fhirBaseUrl;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var _useQuery = (0, _reactQuery.useQuery)([_constants.locationResourceType], function () {
    return (0, _reactUtils.loadAllResources)(fhirBaseUrl, _constants.locationResourceType, {
      _summary: 'count'
    });
  }, {
    select: function select(res) {
      return res.total;
    }
  }),
      LocationCount = _useQuery.data,
      error = _useQuery.error,
      isLoading = _useQuery.isLoading;

  var pageTitle = t('Location Unit Management');
  return _react["default"].createElement("section", {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement(_antd.Row, {
    className: "list-view"
  }, _react["default"].createElement(_antd.Col, {
    className: "main-content"
  }, _react["default"].createElement(_antd.Card, {
    title: t('Root location was not found'),
    style: {
      minHeight: '60vh'
    }
  }, _react["default"].createElement("p", null, t("Root location with id: {{rootLocationId}} was not found on the server.", {
    rootLocationId: rootLocationId
  })), _react["default"].createElement(CardBodyContent, {
    fetching: isLoading,
    locationNum: LocationCount,
    fhirBaseUrl: fhirBaseUrl,
    rootLocationId: rootLocationId,
    error: error
  })))));
};

exports.RootLocationWizard = RootLocationWizard;

var CardBodyContent = function CardBodyContent(_ref) {
  var fetching = _ref.fetching,
      locationNum = _ref.locationNum,
      fhirBaseUrl = _ref.fhirBaseUrl,
      rootLocationId = _ref.rootLocationId,
      error = _ref.error;

  var _useTranslation2 = (0, _mls.useTranslation)(),
      t = _useTranslation2.t;

  var createRootConfirmProps = {
    fhirBaseUrl: fhirBaseUrl,
    rootLocationId: rootLocationId
  };

  if (fetching) {
    return _react["default"].createElement(_i18n.Trans, {
      i18nKey: "LookingForUploadedLocations",
      t: t
    }, _react["default"].createElement(_antd.Spin, {
      size: "small"
    }), " Looking for uploaded locations on the server.");
  } else if (error || locationNum === undefined) {
    return _react["default"].createElement(_antd.Space, {
      direction: "vertical"
    }, _react["default"].createElement(_antd.Alert, {
      type: "error",
      message: t('Unable to check if the server has any locations.')
    }), _react["default"].createElement(CreateRootConfirm, createRootConfirmProps));
  } else if (locationNum === 0) {
    return _react["default"].createElement(_antd.Space, {
      direction: "vertical"
    }, _react["default"].createElement(Text, null, t('No locations have been uploaded yet.')), _react["default"].createElement(CreateRootConfirm, createRootConfirmProps));
  } else {
    return _react["default"].createElement(_antd.Space, {
      direction: "vertical"
    }, _react["default"].createElement(_i18n.Trans, {
      i18nKey: 'locationsOnServer',
      t: t,
      locationNum: locationNum
    }, _react["default"].createElement(Text, null, "There exists ", {
      locationNum: locationNum
    }, " locations on the server."), _react["default"].createElement(Text, null, " One of these could be the intended but wrongly configured, root location. "), _react["default"].createElement(Text, null, " If you are not sure, kindly reach out to the web administrator for help.")), _react["default"].createElement(CreateRootConfirm, createRootConfirmProps));
  }
};

var CreateRootConfirm = function CreateRootConfirm(props) {
  var fhirBaseUrl = props.fhirBaseUrl,
      rootLocationId = props.rootLocationId;
  var history = (0, _reactRouter.useHistory)();

  var _useTranslation3 = (0, _mls.useTranslation)(),
      t = _useTranslation3.t;

  var onOk = function onOk() {
    return history.push(_constants.URL_LOCATION_UNIT);
  };

  var rootLocationPayload = _objectSpread(_objectSpread({}, rootLocationTemplate), {}, {
    id: rootLocationId,
    identifier: [{
      use: 'official',
      value: rootLocationId
    }]
  });

  return _react["default"].createElement(_rbac.RbacCheck, {
    permissions: ['Location.create'],
    fallback: _react["default"].createElement(Text, {
      type: "warning"
    }, "Missing required permissions to create locations")
  }, _react["default"].createElement(_antd.Popconfirm, {
    title: t("This action will create a new location with id {{rootLocationId}}. The web application will then use the created location as the root location.", {
      rootLocationId: rootLocationId
    }),
    okText: t('Proceed'),
    cancelText: t('Cancel'),
    onConfirm: (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utils.postPutLocationUnit)(rootLocationPayload, fhirBaseUrl).then(function () {
                (0, _notifications.sendSuccessNotification)(t('Root location uploaded to the server.'));
                onOk();
              })["catch"](function () {
                (0, _notifications.sendErrorNotification)(t('Could not upload the root location at this time, please try again later.'));
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))
  }, _react["default"].createElement(_antd.Button, {
    type: "primary"
  }, t('Create root location.'))));
};

var rootLocationTemplate = {
  resourceType: 'Location',
  status: 'active',
  name: 'Root FHIR Location',
  alias: ['Root Location'],
  description: 'This is the Root Location that all other locations are part of. Any locations that are directly part of this should be displayed as the root location.',
  physicalType: {
    coding: [{
      system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
      code: 'jdn',
      display: 'Jurisdiction'
    }]
  }
};