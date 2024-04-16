"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStatementResource = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatementResource {
}
exports.CapabilityStatementResource = CapabilityStatementResource;
(function (CapabilityStatementResource) {
    CapabilityStatementResource.VersioningEnum = {
        NoVersion: 'no-version',
        Versioned: 'versioned',
        VersionedUpdate: 'versioned-update'
    };
    CapabilityStatementResource.ConditionalReadEnum = {
        NotSupported: 'not-supported',
        ModifiedSince: 'modified-since',
        NotMatch: 'not-match',
        FullSupport: 'full-support'
    };
    CapabilityStatementResource.ConditionalDeleteEnum = {
        NotSupported: 'not-supported',
        Single: 'single',
        Multiple: 'multiple'
    };
})(CapabilityStatementResource = exports.CapabilityStatementResource || (exports.CapabilityStatementResource = {}));
