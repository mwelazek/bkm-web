"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
var Appointment;
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
