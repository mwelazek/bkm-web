"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
class Invoice {
}
exports.Invoice = Invoice;
(function (Invoice) {
    Invoice.StatusEnum = {
        Draft: 'draft',
        Issued: 'issued',
        Balanced: 'balanced',
        Cancelled: 'cancelled',
        EnteredInError: 'entered-in-error'
    };
})(Invoice = exports.Invoice || (exports.Invoice = {}));
