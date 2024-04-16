"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureReport = void 0;
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
class MeasureReport {
}
exports.MeasureReport = MeasureReport;
(function (MeasureReport) {
    MeasureReport.StatusEnum = {
        Complete: 'complete',
        Pending: 'pending',
        Error: 'error'
    };
    MeasureReport.TypeEnum = {
        Individual: 'individual',
        SubjectList: 'subject-list',
        Summary: 'summary',
        DataCollection: 'data-collection'
    };
})(MeasureReport = exports.MeasureReport || (exports.MeasureReport = {}));
