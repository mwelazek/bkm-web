"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestScriptAssert = void 0;
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
class TestScriptAssert {
}
exports.TestScriptAssert = TestScriptAssert;
(function (TestScriptAssert) {
    TestScriptAssert.DirectionEnum = {
        Response: 'response',
        Request: 'request'
    };
    TestScriptAssert.OperatorEnum = {
        Equals: 'equals',
        NotEquals: 'notEquals',
        In: 'in',
        NotIn: 'notIn',
        GreaterThan: 'greaterThan',
        LessThan: 'lessThan',
        Empty: 'empty',
        NotEmpty: 'notEmpty',
        Contains: 'contains',
        NotContains: 'notContains',
        Eval: 'eval'
    };
    TestScriptAssert.RequestMethodEnum = {
        Delete: 'delete',
        Get: 'get',
        Options: 'options',
        Patch: 'patch',
        Post: 'post',
        Put: 'put',
        Head: 'head'
    };
    TestScriptAssert.ResponseEnum = {
        Okay: 'okay',
        Created: 'created',
        NoContent: 'noContent',
        NotModified: 'notModified',
        Bad: 'bad',
        Forbidden: 'forbidden',
        NotFound: 'notFound',
        MethodNotAllowed: 'methodNotAllowed',
        Conflict: 'conflict',
        Gone: 'gone',
        PreconditionFailed: 'preconditionFailed',
        Unprocessable: 'unprocessable'
    };
})(TestScriptAssert = exports.TestScriptAssert || (exports.TestScriptAssert = {}));
