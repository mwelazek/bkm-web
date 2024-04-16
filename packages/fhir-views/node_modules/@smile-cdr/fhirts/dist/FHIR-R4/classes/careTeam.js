"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareTeam = void 0;
/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 */
class CareTeam {
}
exports.CareTeam = CareTeam;
(function (CareTeam) {
    CareTeam.StatusEnum = {
        Proposed: 'proposed',
        Active: 'active',
        Suspended: 'suspended',
        Inactive: 'inactive',
        EnteredInError: 'entered-in-error'
    };
})(CareTeam = exports.CareTeam || (exports.CareTeam = {}));
