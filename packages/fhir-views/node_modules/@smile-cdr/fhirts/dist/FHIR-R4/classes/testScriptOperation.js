"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestScriptOperation = void 0;
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
class TestScriptOperation {
}
exports.TestScriptOperation = TestScriptOperation;
(function (TestScriptOperation) {
    TestScriptOperation.MethodEnum = {
        Delete: 'delete',
        Get: 'get',
        Options: 'options',
        Patch: 'patch',
        Post: 'post',
        Put: 'put',
        Head: 'head'
    };
})(TestScriptOperation = exports.TestScriptOperation || (exports.TestScriptOperation = {}));
