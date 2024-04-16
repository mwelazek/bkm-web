"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateEditCareTeam = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reactQuery = require("react-query");

var _notifications = require("@opensrp/notifications");

var _reactRouterDom = require("react-router-dom");

var _reactUtils = require("@opensrp/react-utils");

var _constants = require("../../constants");

var _Form = require("./Form");

var _utils = require("./utils");

var _mls = require("../../mls");

var CreateEditCareTeam = function CreateEditCareTeam(props) {
  var _organizations$data, _fhirPractitioners$da;

  var fhirBaseURL = props.fhirBaseURL;
  var params = (0, _reactRouterDom.useParams)();
  var careTeamId = params[_constants.ROUTE_PARAM_CARE_TEAM_ID];

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var singleCareTeam = (0, _reactQuery.useQuery)([_constants.FHIR_CARE_TEAM, careTeamId], (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new _reactUtils.FHIRServiceClass(fhirBaseURL, _constants.FHIR_CARE_TEAM).read(careTeamId);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), {
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching the Care Team'));
    },
    select: function select(res) {
      return res;
    },
    enabled: !!careTeamId,
    cacheTime: 0,
    staleTime: 0
  });
  var organizations = (0, _reactQuery.useQuery)(_constants.organizationResourceType, (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _reactUtils.loadAllResources)(fhirBaseURL, _constants.organizationResourceType));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), {
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching organizations'));
    },
    select: function select(res) {
      return (0, _reactUtils.getResourcesFromBundle)(res);
    }
  });
  var fhirPractitioners = (0, _reactQuery.useQuery)(_constants.FHIR_PRACTITIONERS, (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", (0, _reactUtils.loadAllResources)(fhirBaseURL, _constants.practitionerResourceType, {
              active: true
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), {
    onError: function onError() {
      return (0, _notifications.sendErrorNotification)(t('There was a problem fetching practitioners'));
    },
    select: function select(res) {
      return (0, _reactUtils.getResourcesFromBundle)(res);
    }
  });

  if (fhirPractitioners.isLoading || organizations.isLoading || !singleCareTeam.isIdle && singleCareTeam.isLoading) {
    return _react["default"].createElement(_antd.Spin, {
      size: "large",
      className: "custom-spinner"
    });
  }

  if (singleCareTeam.error && !singleCareTeam.data) {
    return _react["default"].createElement(_reactUtils.BrokenPage, {
      errorMessage: singleCareTeam.error.message
    });
  }

  var buildInitialValues = (0, _utils.getCareTeamFormFields)(singleCareTeam.data);
  var careTeamFormProps = {
    fhirBaseURL: fhirBaseURL,
    initialValues: buildInitialValues,
    organizations: (_organizations$data = organizations.data) !== null && _organizations$data !== void 0 ? _organizations$data : [],
    practitioners: (_fhirPractitioners$da = fhirPractitioners.data) !== null && _fhirPractitioners$da !== void 0 ? _fhirPractitioners$da : []
  };
  return _react["default"].createElement(_antd.Row, null, _react["default"].createElement(_antd.Col, {
    span: 24
  }, _react["default"].createElement(_Form.CareTeamForm, careTeamFormProps)));
};

exports.CreateEditCareTeam = CreateEditCareTeam;