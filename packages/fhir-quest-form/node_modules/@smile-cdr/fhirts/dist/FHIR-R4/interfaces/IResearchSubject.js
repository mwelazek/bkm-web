"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchSubject = void 0;
var ResearchSubject;
(function (ResearchSubject) {
    ResearchSubject.StatusEnum = {
        Candidate: 'candidate',
        Eligible: 'eligible',
        FollowUp: 'follow-up',
        Ineligible: 'ineligible',
        NotRegistered: 'not-registered',
        OffStudy: 'off-study',
        OnStudy: 'on-study',
        OnStudyIntervention: 'on-study-intervention',
        OnStudyObservation: 'on-study-observation',
        PendingOnStudy: 'pending-on-study',
        PotentialCandidate: 'potential-candidate',
        Screening: 'screening',
        Withdrawn: 'withdrawn'
    };
})(ResearchSubject = exports.ResearchSubject || (exports.ResearchSubject = {}));
