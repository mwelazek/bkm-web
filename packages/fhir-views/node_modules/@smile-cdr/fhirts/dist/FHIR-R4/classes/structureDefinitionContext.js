"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureDefinitionContext = void 0;
/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 */
class StructureDefinitionContext {
}
exports.StructureDefinitionContext = StructureDefinitionContext;
(function (StructureDefinitionContext) {
    StructureDefinitionContext.TypeEnum = {
        Fhirpath: 'fhirpath',
        Element: 'element',
        Extension: 'extension'
    };
})(StructureDefinitionContext = exports.StructureDefinitionContext || (exports.StructureDefinitionContext = {}));
