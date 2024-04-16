"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchStudy = void 0;
/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
class ResearchStudy {
}
exports.ResearchStudy = ResearchStudy;
(function (ResearchStudy) {
    ResearchStudy.StatusEnum = {
        Active: 'active',
        AdministrativelyCompleted: 'administratively-completed',
        Approved: 'approved',
        ClosedToAccrual: 'closed-to-accrual',
        ClosedToAccrualAndIntervention: 'closed-to-accrual-and-intervention',
        Completed: 'completed',
        Disapproved: 'disapproved',
        InReview: 'in-review',
        TemporarilyClosedToAccrual: 'temporarily-closed-to-accrual',
        TemporarilyClosedToAccrualAndIntervention: 'temporarily-closed-to-accrual-and-intervention',
        Withdrawn: 'withdrawn'
    };
})(ResearchStudy = exports.ResearchStudy || (exports.ResearchStudy = {}));
