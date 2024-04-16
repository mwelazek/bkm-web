"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentReconciliation = void 0;
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
class PaymentReconciliation {
}
exports.PaymentReconciliation = PaymentReconciliation;
(function (PaymentReconciliation) {
    PaymentReconciliation.OutcomeEnum = {
        Queued: 'queued',
        Complete: 'complete',
        Error: 'error',
        Partial: 'partial'
    };
})(PaymentReconciliation = exports.PaymentReconciliation || (exports.PaymentReconciliation = {}));
