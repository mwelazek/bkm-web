"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeItem = void 0;
var ChargeItem;
(function (ChargeItem) {
    ChargeItem.StatusEnum = {
        Planned: 'planned',
        Billable: 'billable',
        NotBillable: 'not-billable',
        Aborted: 'aborted',
        Billed: 'billed',
        EnteredInError: 'entered-in-error',
        Unknown: 'unknown'
    };
})(ChargeItem = exports.ChargeItem || (exports.ChargeItem = {}));
