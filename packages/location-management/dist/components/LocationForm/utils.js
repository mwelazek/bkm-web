"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedLocTagObj = exports.getPointCoordinates = exports.getLocationTagOptions = exports.getLocationFormFields = exports.generateLocationUnit = exports.defaultFormField = exports.cordIsPoint = exports.FormInstances = void 0;
exports.getServiceTypeOptions = getServiceTypeOptions;
exports.handleGeoFieldsChangeFactory = void 0;
exports.removeEmptykeys = removeEmptykeys;
exports.validationRulesFactory = exports.treeToOptions = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _locationUnits = require("../../ducks/location-units");

var _uuid = require("uuid");

var _constants = require("../../constants");

var _lodash = require("lodash");

var _excluded = ["name", "status", "parentId", "username", "externalId", "type"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var FormInstances;
exports.FormInstances = FormInstances;

(function (FormInstances) {
  FormInstances["CORE"] = "core";
  FormInstances["EUSM"] = "eusm";
})(FormInstances || (exports.FormInstances = FormInstances = {}));

var defaultFormField = {
  instance: FormInstances.CORE,
  name: '',
  status: _locationUnits.LocationUnitStatus.ACTIVE,
  isJurisdiction: true,
  serviceType: undefined,
  locationTags: [],
  externalId: '',
  extraFields: [],
  username: ''
};
exports.defaultFormField = defaultFormField;

var getLocationFormFields = function getLocationFormFields(location) {
  var _location$isJurisdict, _location$locationTag;

  var instance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FormInstances.CORE;
  var isJurisdiction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var commonValues = {
    instance: instance,
    isJurisdiction: (_location$isJurisdict = location === null || location === void 0 ? void 0 : location.isJurisdiction) !== null && _location$isJurisdict !== void 0 ? _location$isJurisdict : isJurisdiction
  };
  if (!location) return _objectSpread(_objectSpread({}, defaultFormField), commonValues);
  var _location$properties = location.properties,
      name = _location$properties.name,
      status = _location$properties.status,
      parentId = _location$properties.parentId,
      username = _location$properties.username,
      externalId = _location$properties.externalId,
      type = _location$properties.type,
      restProperties = (0, _objectWithoutProperties2["default"])(_location$properties, _excluded);
  var geoObject = location.geometry;
  var geoJson = JSON.stringify(geoObject);

  var _getPointCoordinates = getPointCoordinates(geoJson),
      longitude = _getPointCoordinates.longitude,
      latitude = _getPointCoordinates.latitude;

  var formFields = _objectSpread(_objectSpread(_objectSpread({}, defaultFormField), commonValues), {}, {
    id: location.id,
    locationTags: (_location$locationTag = location.locationTags) === null || _location$locationTag === void 0 ? void 0 : _location$locationTag.map(function (loc) {
      return loc.id;
    }),
    geometry: geoJson,
    name: name,
    username: username,
    status: status,
    parentId: parentId,
    externalId: externalId,
    serviceType: type,
    extraFields: Object.entries(restProperties).map(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      return (0, _defineProperty2["default"])({}, key, val);
    }),
    longitude: longitude,
    latitude: latitude
  });

  return formFields;
};

exports.getLocationFormFields = getLocationFormFields;

function removeEmptykeys(obj) {
  Object.entries(obj).forEach(function (_ref4) {
    var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];

    if (typeof value === 'undefined') delete obj[key];else if (key !== 'parentId' && (value === '' || value === null)) delete obj[key];else if (Array.isArray(value) && value.length === 0) delete obj[key];else if ((0, _typeof2["default"])(value) === 'object') removeEmptykeys(value);
  });
}

var generateLocationUnit = function generateLocationUnit(formValues, nameOfUser) {
  var _parentNode$model$nod;

  var selectedTags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var parentNode = arguments.length > 3 ? arguments[3] : undefined;
  var serviceType = formValues.serviceType,
      id = formValues.id,
      externalId = formValues.externalId,
      parentId = formValues.parentId,
      name = formValues.name,
      status = formValues.status,
      geometry = formValues.geometry,
      extraFields = formValues.extraFields,
      username = formValues.username;
  var parentGeographicLevel = (_parentNode$model$nod = parentNode === null || parentNode === void 0 ? void 0 : parentNode.model.node.attributes.geographicLevel) !== null && _parentNode$model$nod !== void 0 ? _parentNode$model$nod : 0;
  var thisGeoLevel = parentId ? parentGeographicLevel + 1 : 0;
  var thisLocationsId = id ? id : (0, _uuid.v4)();
  var uName = id ? username : nameOfUser !== null && nameOfUser !== void 0 ? nameOfUser : '';
  var initialPayload = {
    properties: {
      geographicLevel: thisGeoLevel,
      username: uName,
      externalId: externalId,
      parentId: parentId !== null && parentId !== void 0 ? parentId : '',
      name: name,
      name_en: name,
      status: status,
      type: serviceType
    },
    id: thisLocationsId,
    syncStatus: _locationUnits.LocationUnitSyncStatus.SYNCED,
    type: _constants.LOCATION_UNIT_TYPE,
    locationTags: selectedTags,
    geometry: geometry ? JSON.parse(geometry) : undefined
  };
  extraFields.forEach(function (obj) {
    Object.keys(obj).forEach(function (key) {
      if (key === 'geographicLevel') {
        initialPayload.properties[key] = thisGeoLevel;
      } else {
        initialPayload.properties[key] = obj[key];
      }
    });
  });
  removeEmptykeys(initialPayload);
  return initialPayload;
};

exports.generateLocationUnit = generateLocationUnit;

function getServiceTypeOptions(data) {
  return data.map(function (setting) {
    return {
      value: setting.value,
      label: setting.value
    };
  });
}

var validationRulesFactory = function validationRulesFactory(t) {
  return {
    instance: [{
      type: 'enum',
      "enum": Object.values(FormInstances),
      required: true
    }],
    id: [{
      type: 'string'
    }],
    parentId: [{
      type: 'string',
      message: t('Parent ID can only contain letters, numbers and spaces')
    }, function (_ref6) {
      var getFieldValue = _ref6.getFieldValue;
      var instance = getFieldValue('instance');
      if (instance === FormInstances.EUSM) return {
        required: true
      };
      return {
        required: false
      };
    }],
    name: [{
      type: 'string',
      message: t('Name can only contain letters, numbers and spaces')
    }, {
      required: true,
      message: t('Name is required')
    }],
    status: [{
      type: 'string'
    }, {
      required: true,
      message: t('Status is required')
    }],
    type: [{
      type: 'string'
    }, function (_ref7) {
      var getFieldValue = _ref7.getFieldValue;
      var instance = getFieldValue('instance');
      if (instance === FormInstances.CORE) return {
        required: true,
        message: t('Type can only contain letters, numbers and spaces')
      };
      return {
        required: false
      };
    }],
    externalId: [{
      type: 'string',
      message: t('External ID can only contain letters, numbers and spaces')
    }],
    locationTags: [{
      type: 'array',
      message: t('Location Unit must be an array')
    }],
    geometry: [{
      type: 'string',
      message: t('Location Unit must be an array')
    }],
    isJurisdiction: [{
      type: 'boolean'
    }, function (_ref8) {
      var getFieldValue = _ref8.getFieldValue;
      var id = getFieldValue('id');
      var isCreateMode = !id;
      if (isCreateMode) return {
        required: true,
        message: t('Location category is required')
      };
      return {
        required: false
      };
    }],
    serviceTypes: [function (_ref9) {
      var getFieldValue = _ref9.getFieldValue;
      var instance = getFieldValue('instance');
      if (instance === FormInstances.EUSM) return {
        required: true,
        message: t('Service types is required')
      };
      return {
        required: false
      };
    }],
    longitude: [function () {
      return {
        validator: function validator(_, value) {
          if (!value) {
            return Promise.resolve();
          }

          return rejectIfNan(value, t('Only decimal values allowed'));
        }
      };
    }],
    latitude: [function () {
      return {
        validator: function validator(_, value) {
          if (!value) {
            return Promise.resolve();
          }

          return rejectIfNan(value, t('Only decimal values allowed'));
        }
      };
    }],
    extraFields: [{
      required: false
    }]
  };
};

exports.validationRulesFactory = validationRulesFactory;

var rejectIfNan = function rejectIfNan(value, message) {
  if (isNaN(Number(value))) {
    return Promise.reject(message);
  } else {
    return Promise.resolve();
  }
};

var getLocationTagOptions = function getLocationTagOptions(tags) {
  return tags.map(function (locationTag) {
    return {
      label: locationTag.name,
      value: locationTag.id
    };
  });
};

exports.getLocationTagOptions = getLocationTagOptions;

var getSelectedLocTagObj = function getSelectedLocTagObj(data, getOptions, value) {
  var uniqData = (0, _lodash.uniqBy)(data, function (obj) {
    return obj.id;
  });
  var selected = uniqData.filter(function (dt) {
    var option = getOptions([dt])[0];
    return Array.isArray(value) && option.value && value.includes(option.value) || value === option.value;
  });
  return selected;
};

exports.getSelectedLocTagObj = getSelectedLocTagObj;

var treeToOptions = function treeToOptions(trees, parentIdDisabledCallback) {
  var recurseCreateOptions = function recurseCreateOptions(node) {
    var optionValue = _objectSpread({
      value: node.model.id,
      title: node.model.label
    }, parentIdDisabledCallback ? {
      disabled: parentIdDisabledCallback(node)
    } : {});

    if (node.hasChildren()) {
      optionValue.children = node.children.map(recurseCreateOptions);
    }

    return optionValue;
  };

  return trees.map(recurseCreateOptions);
};

exports.treeToOptions = treeToOptions;

var cordIsPoint = function cordIsPoint(geoJson) {
  return (geoJson === null || geoJson === void 0 ? void 0 : geoJson.type) === 'Point' && Array.isArray(geoJson.coordinates) && geoJson.coordinates.length === 2;
};

exports.cordIsPoint = cordIsPoint;

var getPointCoordinates = function getPointCoordinates(geoText) {
  var geojson;

  try {
    geojson = JSON.parse(geoText);
  } catch (err) {
    return {};
  }

  var isPoint = cordIsPoint(geojson);

  if (!isPoint) {
    return {};
  }

  var lng = geojson.coordinates[0];
  var lat = geojson.coordinates[1];
  var longitude = lng ? String(lng) : undefined;
  var latitude = lat ? String(lat) : undefined;
  return {
    longitude: longitude,
    latitude: latitude
  };
};

exports.getPointCoordinates = getPointCoordinates;

var handleGeoFieldsChangeFactory = function handleGeoFieldsChangeFactory(form) {
  return function (changedValues, allValues) {
    var geometry = changedValues.geometry,
        latitude = changedValues.latitude,
        longitude = changedValues.longitude;

    if (geometry !== undefined) {
      var _getPointCoordinates2 = getPointCoordinates(geometry),
          _longitude = _getPointCoordinates2.longitude,
          _latitude = _getPointCoordinates2.latitude;

      form.setFieldsValue({
        longitude: _longitude,
        latitude: _latitude
      });
    }

    var existingGeo = allValues.geometry,
        existingLat = allValues.latitude,
        ExistingLng = allValues.longitude;
    var currentGeoJson;

    try {
      currentGeoJson = JSON.parse(existingGeo !== null && existingGeo !== void 0 ? existingGeo : '{}');
    } catch (err) {
      currentGeoJson = {};
    }

    if (latitude !== undefined) {
      var isPoint = cordIsPoint(currentGeoJson);
      var parsedLatitude = Number(latitude);

      if (isPoint) {
        var currentGeometry = _objectSpread({}, currentGeoJson);

        currentGeometry.coordinates[1] = parsedLatitude;
        form.setFieldsValue({
          geometry: JSON.stringify(currentGeometry)
        });
      } else {
        form.setFieldsValue({
          geometry: JSON.stringify({
            type: 'Point',
            coordinates: [ExistingLng, parsedLatitude]
          })
        });
      }
    }

    if (longitude !== undefined) {
      var _isPoint = cordIsPoint(currentGeoJson);

      var parsedLongitude = Number(longitude);

      if (_isPoint) {
        var _currentGeometry = _objectSpread({}, currentGeoJson);

        _currentGeometry.coordinates[0] = Number(longitude);
        form.setFieldsValue({
          geometry: JSON.stringify(_currentGeometry)
        });
      } else {
        form.setFieldsValue({
          geometry: JSON.stringify({
            type: 'Point',
            coordinates: [parsedLongitude, existingLat]
          })
        });
      }
    }
  };
};

exports.handleGeoFieldsChangeFactory = handleGeoFieldsChangeFactory;