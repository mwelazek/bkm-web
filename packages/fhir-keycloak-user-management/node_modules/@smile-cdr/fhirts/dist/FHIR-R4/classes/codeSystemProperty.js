"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeSystemProperty = void 0;
/**
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 */
class CodeSystemProperty {
}
exports.CodeSystemProperty = CodeSystemProperty;
(function (CodeSystemProperty) {
    CodeSystemProperty.TypeEnum = {
        Code: 'code',
        Coding: 'Coding',
        String: 'string',
        Integer: 'integer',
        Boolean: 'boolean',
        DateTime: 'dateTime',
        Decimal: 'decimal'
    };
})(CodeSystemProperty = exports.CodeSystemProperty || (exports.CodeSystemProperty = {}));
