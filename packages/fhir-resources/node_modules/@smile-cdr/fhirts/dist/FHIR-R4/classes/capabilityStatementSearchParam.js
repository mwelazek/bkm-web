"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStatementSearchParam = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatementSearchParam {
}
exports.CapabilityStatementSearchParam = CapabilityStatementSearchParam;
(function (CapabilityStatementSearchParam) {
    CapabilityStatementSearchParam.TypeEnum = {
        Number: 'number',
        Date: 'date',
        String: 'string',
        Token: 'token',
        Reference: 'reference',
        Composite: 'composite',
        Quantity: 'quantity',
        Uri: 'uri',
        Special: 'special'
    };
})(CapabilityStatementSearchParam = exports.CapabilityStatementSearchParam || (exports.CapabilityStatementSearchParam = {}));
