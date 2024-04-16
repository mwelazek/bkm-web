"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeOfCareStatusHistory = void 0;
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
class EpisodeOfCareStatusHistory {
}
exports.EpisodeOfCareStatusHistory = EpisodeOfCareStatusHistory;
(function (EpisodeOfCareStatusHistory) {
    EpisodeOfCareStatusHistory.StatusEnum = {
        Planned: 'planned',
        Waitlist: 'waitlist',
        Active: 'active',
        Onhold: 'onhold',
        Finished: 'finished',
        Cancelled: 'cancelled',
        EnteredInError: 'entered-in-error'
    };
})(EpisodeOfCareStatusHistory = exports.EpisodeOfCareStatusHistory || (exports.EpisodeOfCareStatusHistory = {}));
