"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
var Invoice;
(function (Invoice) {
    Invoice.StatusEnum = {
        Draft: 'draft',
        Issued: 'issued',
        Balanced: 'balanced',
        Cancelled: 'cancelled',
        EnteredInError: 'entered-in-error'
    };
})(Invoice = exports.Invoice || (exports.Invoice = {}));
