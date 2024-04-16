"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
class Appointment {
}
exports.Appointment = Appointment;
(function (Appointment) {
    Appointment.StatusEnum = {
        Proposed: 'proposed',
        Pending: 'pending',
        Booked: 'booked',
        Arrived: 'arrived',
        Fulfilled: 'fulfilled',
        Cancelled: 'cancelled',
        Noshow: 'noshow',
        EnteredInError: 'entered-in-error',
        CheckedIn: 'checked-in',
        Waitlist: 'waitlist'
    };
})(Appointment = exports.Appointment || (exports.Appointment = {}));
