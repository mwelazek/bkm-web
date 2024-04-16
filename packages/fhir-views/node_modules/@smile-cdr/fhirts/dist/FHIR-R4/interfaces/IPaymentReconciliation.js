"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentReconciliation = void 0;
var PaymentReconciliation;
(function (PaymentReconciliation) {
    PaymentReconciliation.OutcomeEnum = {
        Queued: 'queued',
        Complete: 'complete',
        Error: 'error',
        Partial: 'partial'
    };
})(PaymentReconciliation = exports.PaymentReconciliation || (exports.PaymentReconciliation = {}));
