"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flag = void 0;
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
class Flag {
}
exports.Flag = Flag;
(function (Flag) {
    Flag.StatusEnum = {
        Active: 'active',
        Inactive: 'inactive',
        EnteredInError: 'entered-in-error'
    };
})(Flag = exports.Flag || (exports.Flag = {}));
