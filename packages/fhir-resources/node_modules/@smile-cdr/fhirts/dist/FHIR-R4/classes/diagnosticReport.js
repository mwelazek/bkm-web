"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticReport = void 0;
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
class DiagnosticReport {
}
exports.DiagnosticReport = DiagnosticReport;
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
