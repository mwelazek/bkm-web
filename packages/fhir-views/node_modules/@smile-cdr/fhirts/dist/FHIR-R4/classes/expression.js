"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expression = void 0;
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
class Expression {
}
exports.Expression = Expression;
(function (Expression) {
    Expression.LanguageEnum = {
        Textcql: 'text/cql',
        Textfhirpath: 'text/fhirpath',
        ApplicationxFhirQuery: 'application/x-fhir-query'
    };
})(Expression = exports.Expression || (exports.Expression = {}));
