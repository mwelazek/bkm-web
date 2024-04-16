"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStatementInteraction = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatementInteraction {
}
exports.CapabilityStatementInteraction = CapabilityStatementInteraction;
(function (CapabilityStatementInteraction) {
    CapabilityStatementInteraction.CodeEnum = {
        Read: 'read',
        Vread: 'vread',
        Update: 'update',
        Patch: 'patch',
        Delete: 'delete',
        HistoryInstance: 'history-instance',
        HistoryType: 'history-type',
        Create: 'create',
        SearchType: 'search-type'
    };
})(CapabilityStatementInteraction = exports.CapabilityStatementInteraction || (exports.CapabilityStatementInteraction = {}));
