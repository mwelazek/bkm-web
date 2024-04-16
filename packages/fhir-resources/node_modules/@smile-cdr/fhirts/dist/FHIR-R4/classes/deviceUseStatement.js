"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceUseStatement = void 0;
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
class DeviceUseStatement {
}
exports.DeviceUseStatement = DeviceUseStatement;
(function (DeviceUseStatement) {
    DeviceUseStatement.StatusEnum = {
        Active: 'active',
        Completed: 'completed',
        EnteredInError: 'entered-in-error',
        Intended: 'intended',
        Stopped: 'stopped',
        OnHold: 'on-hold'
    };
})(DeviceUseStatement = exports.DeviceUseStatement || (exports.DeviceUseStatement = {}));
