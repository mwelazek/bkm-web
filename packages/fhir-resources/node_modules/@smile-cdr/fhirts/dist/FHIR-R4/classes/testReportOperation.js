"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestReportOperation = void 0;
/**
 * A summary of information based on the results of executing a TestScript.
 */
class TestReportOperation {
}
exports.TestReportOperation = TestReportOperation;
(function (TestReportOperation) {
    TestReportOperation.ResultEnum = {
        Pass: 'pass',
        Skip: 'skip',
        Fail: 'fail',
        Warning: 'warning',
        Error: 'error'
    };
})(TestReportOperation = exports.TestReportOperation || (exports.TestReportOperation = {}));
