"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationDefinitionBinding = void 0;
/**
 * A formal computable definition of an operation (on the RESTful class) or a named query (using the search interaction).
 */
class OperationDefinitionBinding {
}
exports.OperationDefinitionBinding = OperationDefinitionBinding;
(function (OperationDefinitionBinding) {
    OperationDefinitionBinding.StrengthEnum = {
        Required: 'required',
        Extensible: 'extensible',
        Preferred: 'preferred',
        Example: 'example'
    };
})(OperationDefinitionBinding = exports.OperationDefinitionBinding || (exports.OperationDefinitionBinding = {}));
