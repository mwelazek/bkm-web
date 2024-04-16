"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureReport = void 0;
var MeasureReport;
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
