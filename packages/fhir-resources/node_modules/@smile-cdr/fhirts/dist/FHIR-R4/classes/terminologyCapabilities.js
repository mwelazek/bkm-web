"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminologyCapabilities = void 0;
/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class TerminologyCapabilities {
}
exports.TerminologyCapabilities = TerminologyCapabilities;
(function (TerminologyCapabilities) {
    TerminologyCapabilities.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
    TerminologyCapabilities.CodeSearchEnum = {
        Explicit: 'explicit',
        All: 'all'
    };
})(TerminologyCapabilities = exports.TerminologyCapabilities || (exports.TerminologyCapabilities = {}));
