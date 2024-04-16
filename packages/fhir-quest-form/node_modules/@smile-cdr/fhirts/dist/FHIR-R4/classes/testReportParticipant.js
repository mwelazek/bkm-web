"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestReportParticipant = void 0;
/**
 * A summary of information based on the results of executing a TestScript.
 */
class TestReportParticipant {
}
exports.TestReportParticipant = TestReportParticipant;
(function (TestReportParticipant) {
    TestReportParticipant.TypeEnum = {
        TestEngine: 'test-engine',
        Client: 'client',
        Server: 'server'
    };
})(TestReportParticipant = exports.TestReportParticipant || (exports.TestReportParticipant = {}));
