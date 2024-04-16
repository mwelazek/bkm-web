"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
class Account {
}
exports.Account = Account;
(function (Account) {
    Account.StatusEnum = {
        Active: 'active',
        Inactive: 'inactive',
        EnteredInError: 'entered-in-error',
        OnHold: 'on-hold',
        Unknown: 'unknown'
    };
})(Account = exports.Account || (exports.Account = {}));
