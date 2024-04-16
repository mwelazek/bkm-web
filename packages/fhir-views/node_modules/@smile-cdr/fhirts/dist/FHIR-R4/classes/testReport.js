"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestReport = void 0;
/**
 * A summary of information based on the results of executing a TestScript.
 */
class TestReport {
}
exports.TestReport = TestReport;
(function (TestReport) {
    TestReport.StatusEnum = {
        Completed: 'completed',
        InProgress: 'in-progress',
        Waiting: 'waiting',
        Stopped: 'stopped',
        EnteredInError: 'entered-in-error'
    };
    TestReport.ResultEnum = {
        Pass: 'pass',
        Fail: 'fail',
        Pending: 'pending'
    };
})(TestReport = exports.TestReport || (exports.TestReport = {}));
