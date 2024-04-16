"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestReportAssert = void 0;
/**
 * A summary of information based on the results of executing a TestScript.
 */
class TestReportAssert {
}
exports.TestReportAssert = TestReportAssert;
(function (TestReportAssert) {
    TestReportAssert.ResultEnum = {
        Pass: 'pass',
        Skip: 'skip',
        Fail: 'fail',
        Warning: 'warning',
        Error: 'error'
    };
})(TestReportAssert = exports.TestReportAssert || (exports.TestReportAssert = {}));
