"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticReport = void 0;
var DiagnosticReport;
(function (DiagnosticReport) {
    DiagnosticReport.StatusEnum = {
        Registered: 'registered',
        Partial: 'partial',
        Preliminary: 'preliminary',
        Final: 'final',
        Amended: 'amended',
        Corrected: 'corrected',
        Appended: 'appended',
        Cancelled: 'cancelled',
        EnteredInError: 'entered-in-error',
        Unknown: 'unknown'
    };
})(DiagnosticReport = exports.DiagnosticReport || (exports.DiagnosticReport = {}));
