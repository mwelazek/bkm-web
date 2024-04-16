"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewLocationUnit = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _sessionReducer = require("@onaio/session-reducer");

var _serverService = require("@opensrp/server-service");

var _react = _interopRequireDefault(require("react"));

var _reactUtils = require("@opensrp/react-utils");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _LocationForm = require("../LocationForm");

var _utils = require("../LocationForm/utils");

var _antd = require("antd");

var _reactHelmet = require("react-helmet");

var _mls = require("../../mls");

var _locationHierarchy = require("../../ducks/location-hierarchy");

var _utils2 = require("../../ducks/locationHierarchy/utils");

var _reactQuery = require("react-query");

var _constants = require("../../constants");

var _notifications = require("@opensrp/notifications");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultNewLocationUnitProps = {
  redirectAfterAction: '',
  findByParentId: false,
  opensrpBaseURL: _serverService.OPENSRP_API_BASE_URL,
  instance: _utils.FormInstances.CORE,
  hidden: [],
  disabled: [],
  successURLGenerator: function successURLGenerator() {
    return '';
  },
  cancelURLGenerator: function cancelURLGenerator() {
    return '';
  }
};

var NewLocationUnit = function NewLocationUnit(props) {
  var _urlquery$get;

  var instance = props.instance,
      hidden = props.hidden,
      disabled = props.disabled,
      opensrpBaseURL = props.opensrpBaseURL,
      filterByParentId = props.filterByParentId,
      successURLGenerator = props.successURLGenerator,
      cancelURLGenerator = props.cancelURLGenerator,
      processInitialValues = props.processInitialValues,
      disabledTreeNodesCallback = props.disabledTreeNodesCallback;
  var dispatch = (0, _reactRedux.useDispatch)();
  var queryClient = (0, _reactQuery.useQueryClient)();
  var history = (0, _reactRouter.useHistory)();

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var cancelHandler = function cancelHandler() {
    var cancelURL = cancelURLGenerator();
    history.push(cancelURL);
  };

  var user = (0, _reactRedux.useSelector)(function (state) {
    return (0, _sessionReducer.getUser)(state);
  });
  var urlquery = new URLSearchParams(history.location.search);

  var firstInitialValues = _objectSpread({
    parentId: (_urlquery$get = urlquery.get('parentId')) !== null && _urlquery$get !== void 0 ? _urlquery$get : undefined
  }, (0, _utils.getLocationFormFields)(undefined, instance));

  var initialValues = processInitialValues ? processInitialValues(firstInitialValues) : firstInitialValues;
  var locationUnits = (0, _reactQuery.useQuery)(_constants.LOCATION_UNIT_FIND_BY_PROPERTIES, function () {
    return (0, _utils2.getBaseTreeNode)(opensrpBaseURL, filterByParentId);
  }, {
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching Location Units'));
    },
    select: function select(res) {
      return res;
    }
  });
  var treeDataQuery = (0, _reactQuery.useQueries)(locationUnits.data ? locationUnits.data.map(function (location) {
    return {
      queryKey: [_constants.LOCATION_HIERARCHY, location.id],
      queryFn: function queryFn() {
        return new _reactUtils.OpenSRPService(_constants.LOCATION_HIERARCHY, opensrpBaseURL).read(location.id);
      },
      onError: function onError() {
        return (0, _notifications.sendErrorNotification)(t('There was a problem fetching the location hierachy'));
      },
      select: function select(res) {
        return (0, _utils2.generateJurisdictionTree)(res).model;
      }
    };
  }) : []);
  var treeData = treeDataQuery.map(function (query) {
    return query.data;
  }).filter(function (e) {
    return e !== undefined;
  });

  if (locationUnits.isLoading || treeDataQuery.length > 0 && treeDataQuery.every(function (query) {
    return query.isLoading;
  })) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  var locationFormProps = {
    initialValues: initialValues,
    successURLGenerator: successURLGenerator,
    hidden: hidden,
    disabled: disabled,
    onCancel: cancelHandler,
    opensrpBaseURL: opensrpBaseURL,
    filterByParentId: filterByParentId,
    username: user.username,
    afterSubmit: function afterSubmit(payload) {
      var parentid = payload.parentId;

      if (parentid) {
        var grandparenthierarchy = treeData.find(function (tree) {
          return (0, _utils2.getHierarchyNode)(tree, parentid);
        });
        if (grandparenthierarchy) queryClient.invalidateQueries([_constants.LOCATION_HIERARCHY, grandparenthierarchy])["catch"](function () {
          return (0, _notifications.sendErrorNotification)(t('An error occurred while refreshing the location data.'));
        });else (0, _notifications.sendErrorNotification)(t('There was a problem finding the location'));
      }

      dispatch((0, _locationHierarchy.fetchAllHierarchies)([]));
    },
    disabledTreeNodesCallback: disabledTreeNodesCallback
  };
  var pageTitle = t('Add Location Unit');
  return _react["default"].createElement(_antd.Row, {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-4",
    span: 24
  }, _react["default"].createElement(_LocationForm.LocationForm, locationFormProps)));
};

exports.NewLocationUnit = NewLocationUnit;
NewLocationUnit.defaultProps = defaultNewLocationUnitProps;