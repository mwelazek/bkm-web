"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplanationOfBenefit = void 0;
/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
class ExplanationOfBenefit {
}
exports.ExplanationOfBenefit = ExplanationOfBenefit;
(function (ExplanationOfBenefit) {
    ExplanationOfBenefit.StatusEnum = {
        Active: 'active',
        Cancelled: 'cancelled',
        Draft: 'draft',
        EnteredInError: 'entered-in-error'
    };
})(ExplanationOfBenefit = exports.ExplanationOfBenefit || (exports.ExplanationOfBenefit = {}));
