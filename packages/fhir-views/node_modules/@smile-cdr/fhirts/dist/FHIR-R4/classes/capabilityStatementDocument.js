"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStatementDocument = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatementDocument {
}
exports.CapabilityStatementDocument = CapabilityStatementDocument;
(function (CapabilityStatementDocument) {
    CapabilityStatementDocument.ModeEnum = {
        Producer: 'producer',
        Consumer: 'consumer'
    };
})(CapabilityStatementDocument = exports.CapabilityStatementDocument || (exports.CapabilityStatementDocument = {}));
