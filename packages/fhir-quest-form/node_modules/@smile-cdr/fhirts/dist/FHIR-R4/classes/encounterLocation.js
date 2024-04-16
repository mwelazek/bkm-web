"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterLocation = void 0;
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
class EncounterLocation {
}
exports.EncounterLocation = EncounterLocation;
(function (EncounterLocation) {
    EncounterLocation.StatusEnum = {
        Planned: 'planned',
        Active: 'active',
        Reserved: 'reserved',
        Completed: 'completed'
    };
})(EncounterLocation = exports.EncounterLocation || (exports.EncounterLocation = {}));
