"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStatementInteraction1 = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatementInteraction1 {
}
exports.CapabilityStatementInteraction1 = CapabilityStatementInteraction1;
(function (CapabilityStatementInteraction1) {
    CapabilityStatementInteraction1.CodeEnum = {
        Transaction: 'transaction',
        Batch: 'batch',
        SearchSystem: 'search-system',
        HistorySystem: 'history-system'
    };
})(CapabilityStatementInteraction1 = exports.CapabilityStatementInteraction1 || (exports.CapabilityStatementInteraction1 = {}));
