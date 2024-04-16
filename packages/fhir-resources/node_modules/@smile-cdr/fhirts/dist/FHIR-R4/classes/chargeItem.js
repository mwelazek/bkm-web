"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeItem = void 0;
/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
class ChargeItem {
}
exports.ChargeItem = ChargeItem;
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
