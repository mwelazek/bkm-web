"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
class Device {
}
exports.Device = Device;
(function (Device) {
    Device.StatusEnum = {
        Active: 'active',
        Inactive: 'inactive',
        EnteredInError: 'entered-in-error',
        Unknown: 'unknown'
    };
})(Device = exports.Device || (exports.Device = {}));
