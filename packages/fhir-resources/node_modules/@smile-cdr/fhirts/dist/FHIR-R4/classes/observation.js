"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observation = void 0;
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
class Observation {
}
exports.Observation = Observation;
(function (Observation) {
    Observation.StatusEnum = {
        Registered: 'registered',
        Preliminary: 'preliminary',
        Final: 'final',
        Amended: 'amended',
        Corrected: 'corrected',
        Cancelled: 'cancelled',
        EnteredInError: 'entered-in-error',
        Unknown: 'unknown'
    };
})(Observation = exports.Observation || (exports.Observation = {}));
