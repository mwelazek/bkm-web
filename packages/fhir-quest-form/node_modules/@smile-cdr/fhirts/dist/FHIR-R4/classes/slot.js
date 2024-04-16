"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
class Slot {
}
exports.Slot = Slot;
(function (Slot) {
    Slot.StatusEnum = {
        Busy: 'busy',
        Free: 'free',
        BusyUnavailable: 'busy-unavailable',
        BusyTentative: 'busy-tentative',
        EnteredInError: 'entered-in-error'
    };
})(Slot = exports.Slot || (exports.Slot = {}));
