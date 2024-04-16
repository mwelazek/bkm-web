"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentParticipant = void 0;
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
class AppointmentParticipant {
}
exports.AppointmentParticipant = AppointmentParticipant;
(function (AppointmentParticipant) {
    AppointmentParticipant.RequiredEnum = {
        Required: 'required',
        Optional: 'optional',
        InformationOnly: 'information-only'
    };
    AppointmentParticipant.StatusEnum = {
        Accepted: 'accepted',
        Declined: 'declined',
        Tentative: 'tentative',
        NeedsAction: 'needs-action'
    };
})(AppointmentParticipant = exports.AppointmentParticipant || (exports.AppointmentParticipant = {}));
