"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encounter = void 0;
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
class Encounter {
}
exports.Encounter = Encounter;
(function (Encounter) {
    Encounter.StatusEnum = {
        Planned: 'planned',
        Arrived: 'arrived',
        Triaged: 'triaged',
        InProgress: 'in-progress',
        Onleave: 'onleave',
        Finished: 'finished',
        Cancelled: 'cancelled',
        EnteredInError: 'entered-in-error',
        Unknown: 'unknown'
    };
})(Encounter = exports.Encounter || (exports.Encounter = {}));
