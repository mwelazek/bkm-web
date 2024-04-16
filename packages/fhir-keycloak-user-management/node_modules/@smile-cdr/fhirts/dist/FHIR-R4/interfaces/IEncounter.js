"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encounter = void 0;
var Encounter;
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
