"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentResponse = void 0;
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
class EnrollmentResponse {
}
exports.EnrollmentResponse = EnrollmentResponse;
(function (EnrollmentResponse) {
    EnrollmentResponse.OutcomeEnum = {
        Queued: 'queued',
        Complete: 'complete',
        Error: 'error',
        Partial: 'partial'
    };
})(EnrollmentResponse = exports.EnrollmentResponse || (exports.EnrollmentResponse = {}));
