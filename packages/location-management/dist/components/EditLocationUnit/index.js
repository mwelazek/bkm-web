"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditLocationUnit = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _reactUtils = require("@opensrp/react-utils");

var _serverService = require("@opensrp/server-service");

var _locationUnits = require("../../ducks/location-units");

var _dataLoaders = require("../../helpers/dataLoaders");

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _LocationForm = require("../LocationForm");

var _utils = require("../LocationForm/utils");

var _antd = require("antd");

var _sessionReducer = require("@onaio/session-reducer");

var _mls = require("../../mls");

var _reactHelmet = require("react-helmet");

var _reduxReducerRegistry = _interopRequireDefault(require("@onaio/redux-reducer-registry"));

var _locationHierarchy = require("../../ducks/location-hierarchy");

var _utils2 = require("../../ducks/locationHierarchy/utils");

var _reactQuery = require("react-query");

var _constants = require("../../constants");

var _notifications = require("@opensrp/notifications");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

_reduxReducerRegistry["default"].register(_locationUnits.locationUnitsReducerName, _locationUnits.locationUnitsReducer);

var locationsSelector = (0, _locationUnits.getLocationsByFilters)();
var defaultEditLocationUnitProps = {
  redirectAfterAction: '',
  filterByParentId: false,
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

var EditLocationUnit = function EditLocationUnit(props) {
  var instance = props.instance,
      hidden = props.hidden,
      disabled = props.disabled,
      opensrpBaseURL = props.opensrpBaseURL,
      filterByParentId = props.filterByParentId,
      cancelURLGenerator = props.cancelURLGenerator,
      successURLGenerator = props.successURLGenerator,
      disabledTreeNodesCallback = props.disabledTreeNodesCallback;

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var history = (0, _reactRouter.useHistory)();
  var queryClient = (0, _reactQuery.useQueryClient)();
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isJurisdiction = _useState2[0],
      setIsJurisdiction = _useState2[1];

  var _useHandleBrokenPage = (0, _reactUtils.useHandleBrokenPage)(),
      broken = _useHandleBrokenPage.broken,
      errorMessage = _useHandleBrokenPage.errorMessage,
      handleBrokenPage = _useHandleBrokenPage.handleBrokenPage;

  var user = (0, _reactRedux.useSelector)(function (state) {
    return (0, _sessionReducer.getUser)(state);
  });
  var locId = props.match.params.id;
  var thisLocation = (0, _reactRedux.useSelector)(function (state) {
    var filters = {
      ids: [locId]
    };
    return locationsSelector(state, filters);
  })[0];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      thisLocIsLoading = _useState4[0],
      setThisLocIsLoading = _useState4[1];

  _react["default"].useEffect(function () {
    var commonParams = {
      return_geometry: true
    };

    var structureParams = _objectSpread(_objectSpread({}, commonParams), {}, {
      is_jurisdiction: false
    });

    var jurisdictionParams = _objectSpread(_objectSpread({}, commonParams), {}, {
      is_jurisdiction: true
    });

    var locationsDispatcher = function locationsDispatcher(location, isJurisdiction) {
      if (location) {
        var locations = [location];
        dispatch((0, _locationUnits.fetchLocationUnits)(locations, isJurisdiction));
      }
    };

    var firstPromise = (0, _dataLoaders.loadJurisdiction)(locId, undefined, opensrpBaseURL, jurisdictionParams).then(function (res) {
      if (res) {
        locationsDispatcher(res, true);
      }
    })["catch"](function (err) {
      throw err;
    });
    var secondPromise = (0, _dataLoaders.loadJurisdiction)(locId, undefined, opensrpBaseURL, structureParams).then(function (res) {
      if (res) {
        setIsJurisdiction(false);
        locationsDispatcher(res, false);
      }
    })["catch"](function (err) {
      throw err;
    });
    Promise.all([firstPromise, secondPromise])["catch"](function (err) {
      return handleBrokenPage(err);
    })["finally"](function () {
      setThisLocIsLoading(false);
    });
  }, [locId]);

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
  var treeDataQuery = (0, _reactQuery.useQueries)(locationUnits.data && locationUnits.data.length ? locationUnits.data.map(function (location) {
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

  if (locationUnits.isLoading || thisLocIsLoading || treeDataQuery.length > 0 && treeDataQuery.every(function (query) {
    return query.isLoading;
  })) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (broken) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: errorMessage
    });
  }

  if (!thisLocation) {
    return _react["default"].createElement(_reactUtils.Resource404, null);
  }

  var initialValues = (0, _utils.getLocationFormFields)(thisLocation, instance, isJurisdiction);

  var cancelHandler = function cancelHandler() {
    var cancelURL = cancelURLGenerator(thisLocation);
    history.push(cancelURL);
  };

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
        if (grandparenthierarchy && grandparenthierarchy.id) queryClient.invalidateQueries([_constants.LOCATION_HIERARCHY, grandparenthierarchy.id])["catch"](function () {
          return (0, _notifications.sendErrorNotification)(t('There was a problem fetching the location hierachy'));
        });else (0, _notifications.sendErrorNotification)(t('There was a problem getting the hierachy node'));
      }

      dispatch((0, _locationHierarchy.fetchAllHierarchies)([]));
    },
    disabledTreeNodesCallback: disabledTreeNodesCallback
  };
  var pageTitle = t('Edit > {{name}}', {
    name: thisLocation.properties.name
  });
  return _react["default"].createElement(_antd.Row, {
    className: "content-section"
  }, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, pageTitle)), _react["default"].createElement(_reactUtils.PageHeader, {
    title: pageTitle
  }), _react["default"].createElement(_antd.Col, {
    className: "bg-white p-4",
    span: 24
  }, _react["default"].createElement(_LocationForm.LocationForm, locationFormProps)));
};

exports.EditLocationUnit = EditLocationUnit;
EditLocationUnit.defaultProps = defaultEditLocationUnitProps;