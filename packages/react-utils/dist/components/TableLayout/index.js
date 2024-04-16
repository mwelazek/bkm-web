"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableLayout = TableLayout;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _constants = require("../../constants");

var _pkgConfig = require("@opensrp/pkg-config");

var _mls = require("../../mls");

var _excluded = ["id", "columns", "datasource", "children", "persistState", "actions", "dataKeyAccessor", "pagination"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function TableLayout(props) {
  var _getConfig, _getConfig2;

  var id = props.id,
      columns = props.columns,
      datasource = props.datasource,
      children = props.children,
      persistState = props.persistState,
      actions = props.actions,
      dataKeyAccessor = props.dataKeyAccessor,
      pagination = props.pagination,
      restprops = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useTranslation = (0, _mls.useTranslation)(),
      t = _useTranslation.t;

  var paginationDefaults = {
    showQuickJumper: true,
    showSizeChanger: true,
    defaultPageSize: (_getConfig = (0, _pkgConfig.getConfig)('defaultTablesPageSize')) !== null && _getConfig !== void 0 ? _getConfig : _constants.TABLE_PAGE_SIZE,
    pageSizeOptions: _constants.TABLE_PAGE_SIZE_OPTIONS
  };

  var options = _objectSpread({
    pagination: pagination === false ? false : _objectSpread(_objectSpread({}, paginationDefaults), pagination)
  }, restprops);

  var tablesState = (_getConfig2 = (0, _pkgConfig.getConfig)('tablespref')) !== null && _getConfig2 !== void 0 ? _getConfig2 : {};
  var tablecolumn = (0, _react.useMemo)(function () {
    if (columns && actions) {
      var actionsColumn = _objectSpread({
        key: _constants.TABLE_ACTIONS_KEY,
        title: t('Actions')
      }, actions);

      return [].concat((0, _toConsumableArray2["default"])(columns), [actionsColumn]);
    } else return columns;
  }, [columns, actions, t]);

  var _useState = (0, _react.useState)(id && tablesState[id] !== undefined ? tablesState[id] : {}),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      tableState = _useState2[0],
      setTableState = _useState2[1];

  var data = (0, _react.useMemo)(function () {
    return datasource.map(function (e, index) {
      var _e$key;

      return _objectSpread(_objectSpread({}, e), {}, {
        key: (_e$key = e.key) !== null && _e$key !== void 0 ? _e$key : dataKeyAccessor ? e[dataKeyAccessor] : index
      });
    });
  }, [dataKeyAccessor, datasource]);

  function onChange(pagination, filters, sorter, extra) {
    if (props.onChange) props.onChange(pagination, filters, sorter, extra);
    if (id && persistState) SaveTableState(pagination.current, pagination.pageSize);
  }

  function SaveTableState(current, pageSize) {
    var newstate = _objectSpread(_objectSpread({}, tableState), {}, {
      pagination: _objectSpread(_objectSpread({}, tableState), {}, {
        current: current,
        pageSize: pageSize
      })
    });

    tablesState[id] = newstate;
    (0, _pkgConfig.setConfig)('tablespref', _objectSpread({}, tablesState));
    setTableState(newstate);
  }

  return _react["default"].createElement(_antd.Table, (0, _extends2["default"])({}, _objectSpread(_objectSpread({}, options), tablesState), {
    onChange: onChange,
    dataSource: data,
    columns: tablecolumn
  }), children);
}

var _default = TableLayout;
exports["default"] = _default;