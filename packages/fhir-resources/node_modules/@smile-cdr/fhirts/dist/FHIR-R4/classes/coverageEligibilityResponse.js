"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageEligibilityResponse = void 0;
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
class CoverageEligibilityResponse {
}
exports.CoverageEligibilityResponse = CoverageEligibilityResponse;
(function (CoverageEligibilityResponse) {
    CoverageEligibilityResponse.OutcomeEnum = {
        Queued: 'queued',
        Complete: 'complete',
        Error: 'error',
        Partial: 'partial'
    };
})(CoverageEligibilityResponse = exports.CoverageEligibilityResponse || (exports.CoverageEligibilityResponse = {}));
