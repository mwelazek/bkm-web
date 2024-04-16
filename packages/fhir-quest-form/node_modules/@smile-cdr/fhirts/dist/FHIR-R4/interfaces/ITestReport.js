"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestReport = void 0;
var TestReport;
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
