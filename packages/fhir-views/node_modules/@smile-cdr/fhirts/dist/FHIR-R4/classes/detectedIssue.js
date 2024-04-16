"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectedIssue = void 0;
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
class DetectedIssue {
}
exports.DetectedIssue = DetectedIssue;
(function (DetectedIssue) {
    DetectedIssue.SeverityEnum = {
        High: 'high',
        Moderate: 'moderate',
        Low: 'low'
    };
})(DetectedIssue = exports.DetectedIssue || (exports.DetectedIssue = {}));
