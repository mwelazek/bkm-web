"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicePriceComponent = void 0;
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
class InvoicePriceComponent {
}
exports.InvoicePriceComponent = InvoicePriceComponent;
(function (InvoicePriceComponent) {
    InvoicePriceComponent.TypeEnum = {
        Base: 'base',
        Surcharge: 'surcharge',
        Deduction: 'deduction',
        Discount: 'discount',
        Tax: 'tax',
        Informational: 'informational'
    };
})(InvoicePriceComponent = exports.InvoicePriceComponent || (exports.InvoicePriceComponent = {}));
