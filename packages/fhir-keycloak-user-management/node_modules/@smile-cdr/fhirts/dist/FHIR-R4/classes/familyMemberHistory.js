"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyMemberHistory = void 0;
/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
class FamilyMemberHistory {
}
exports.FamilyMemberHistory = FamilyMemberHistory;
(function (FamilyMemberHistory) {
    FamilyMemberHistory.StatusEnum = {
        Partial: 'partial',
        Completed: 'completed',
        EnteredInError: 'entered-in-error',
        HealthUnknown: 'health-unknown'
    };
})(FamilyMemberHistory = exports.FamilyMemberHistory || (exports.FamilyMemberHistory = {}));
