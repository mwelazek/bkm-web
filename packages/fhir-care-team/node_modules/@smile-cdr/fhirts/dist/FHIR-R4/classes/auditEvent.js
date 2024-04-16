"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEvent = void 0;
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
class AuditEvent {
}
exports.AuditEvent = AuditEvent;
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
