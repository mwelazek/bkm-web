"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationDefinition = void 0;
var OperationDefinition;
(function (OperationDefinition) {
    OperationDefinition.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
    OperationDefinition.KindEnum = {
        Operation: 'operation',
        Query: 'query'
    };
})(OperationDefinition = exports.OperationDefinition || (exports.OperationDefinition = {}));
