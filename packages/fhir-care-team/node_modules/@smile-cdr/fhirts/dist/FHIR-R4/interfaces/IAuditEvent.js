"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEvent = void 0;
var AuditEvent;
(function (AuditEvent) {
    AuditEvent.ActionEnum = {
        C: 'C',
        R: 'R',
        U: 'U',
        D: 'D',
        E: 'E'
    };
    AuditEvent.OutcomeEnum = {
        _0: '0',
        _4: '4',
        _8: '8',
        _12: '12'
    };
})(AuditEvent = exports.AuditEvent || (exports.AuditEvent = {}));
