"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nestLocations = nestLocations;

function nestLocations(locations) {
  var id, parentId;
  var roots = [];
  var temp = {};
  var pendingChildOf = {};

  for (var i = 0, len = locations.length; i < len; i++) {
    var _rawLocation$name;

    var rawLocation = locations[i];
    var location = {
      nodeId: "".concat(rawLocation.resourceType, "/").concat(rawLocation.id),
      label: (_rawLocation$name = rawLocation.name) !== null && _rawLocation$name !== void 0 ? _rawLocation$name : '',
      node: rawLocation
    };
    id = rawLocation.id;
    parentId = getParentResourceId(rawLocation);
    temp[id] = location;

    if (parentId === undefined || parentId === null) {
      roots.push(location);
    } else {
      if (temp[parentId] !== undefined) {
        initPush('children', temp[parentId], location);
      } else {
        initPush(parentId, pendingChildOf, location);
      }
    }

    if (pendingChildOf[id] !== undefined) {
      multiInitPush('children', location, pendingChildOf[id]);
    }
  }

  return roots;
}

var initPush = function initPush(arrayName, obj, toPush) {
  var typedObj = obj;

  if (typedObj[arrayName] === undefined) {
    typedObj[arrayName] = [];
  }

  typedObj[arrayName].push(toPush);
};

var multiInitPush = function multiInitPush(arrayName, obj, toPushArray) {
  var len;
  len = toPushArray.length;
  var typedObj = obj;

  if (typedObj[arrayName] === undefined) {
    typedObj[arrayName] = [];
  }

  while (len-- > 0) {
    typedObj[arrayName].push(toPushArray.shift());
  }
};

var getParentResourceId = function getParentResourceId(obj) {
  var _obj$partOf;

  var reference = (_obj$partOf = obj.partOf) === null || _obj$partOf === void 0 ? void 0 : _obj$partOf.reference;

  if (reference === undefined) {
    return undefined;
  }

  var parts = reference.split('/');

  if (parts.length < 2) {
    return undefined;
  }

  return parts[parts.length - 1];
};