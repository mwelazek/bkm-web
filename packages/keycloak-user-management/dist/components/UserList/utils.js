"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTableColumns = void 0;

var getTableColumns = function getTableColumns(t, sortedInfo) {
  var headerItems = [t('First Name'), t('Last Name'), t('Username')];
  var dataElements = [];
  var fields = ['firstName', 'lastName', 'username'];
  fields.forEach(function (field, index) {
    dataElements.push({
      title: headerItems[index],
      dataIndex: field,
      key: field,
      sorter: function sorter(a, b) {
        if (a[field] > b[field]) return -1;else if (a[field] < b[field]) return 1;
        return 0;
      },
      sortOrder: sortedInfo && sortedInfo.columnKey === field && sortedInfo.order,
      ellipsis: true
    });
  });
  return dataElements;
};

exports.getTableColumns = getTableColumns;