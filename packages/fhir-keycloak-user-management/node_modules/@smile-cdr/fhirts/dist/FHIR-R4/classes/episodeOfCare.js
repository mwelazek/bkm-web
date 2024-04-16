"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeOfCare = void 0;
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
class EpisodeOfCare {
}
exports.EpisodeOfCare = EpisodeOfCare;
(function (EpisodeOfCare) {
    EpisodeOfCare.StatusEnum = {
        Planned: 'planned',
        Waitlist: 'waitlist',
        Active: 'active',
        Onhold: 'onhold',
        Finished: 'finished',
        Cancelled: 'cancelled',
        EnteredInError: 'entered-in-error'
    };
})(EpisodeOfCare = exports.EpisodeOfCare || (exports.EpisodeOfCare = {}));
