"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationDefinition = void 0;
/**
 * A formal computable definition of an operation (on the RESTful class) or a named query (using the search interaction).
 */
class OperationDefinition {
}
exports.OperationDefinition = OperationDefinition;
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
