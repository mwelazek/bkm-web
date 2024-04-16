"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundle = void 0;
/**
 * A container for a collection of resources.
 */
class Bundle {
}
exports.Bundle = Bundle;
(function (Bundle) {
    Bundle.TypeEnum = {
        Document: 'document',
        Message: 'message',
        Transaction: 'transaction',
        TransactionResponse: 'transaction-response',
        Batch: 'batch',
        BatchResponse: 'batch-response',
        History: 'history',
        Searchset: 'searchset',
        Collection: 'collection'
    };
})(Bundle = exports.Bundle || (exports.Bundle = {}));
