"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationDefinitionParameter = void 0;
/**
 * A formal computable definition of an operation (on the RESTful class) or a named query (using the search interaction).
 */
class OperationDefinitionParameter {
}
exports.OperationDefinitionParameter = OperationDefinitionParameter;
(function (OperationDefinitionParameter) {
    OperationDefinitionParameter.UseEnum = {
        In: 'in',
        Out: 'out'
    };
    OperationDefinitionParameter.SearchTypeEnum = {
        Number: 'number',
        Date: 'date',
        String: 'string',
        Token: 'token',
        Reference: 'reference',
        Composite: 'composite',
        Quantity: 'quantity',
        Uri: 'uri',
        Special: 'special'
    };
})(OperationDefinitionParameter = exports.OperationDefinitionParameter || (exports.OperationDefinitionParameter = {}));
