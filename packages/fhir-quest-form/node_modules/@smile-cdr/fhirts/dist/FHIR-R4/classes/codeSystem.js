"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeSystem = void 0;
/**
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 */
class CodeSystem {
}
exports.CodeSystem = CodeSystem;
(function (CodeSystem) {
    CodeSystem.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
    CodeSystem.HierarchyMeaningEnum = {
        GroupedBy: 'grouped-by',
        IsA: 'is-a',
        PartOf: 'part-of',
        ClassifiedWith: 'classified-with'
    };
    CodeSystem.ContentEnum = {
        NotPresent: 'not-present',
        Example: 'example',
        Fragment: 'fragment',
        Complete: 'complete',
        Supplement: 'supplement'
    };
})(CodeSystem = exports.CodeSystem || (exports.CodeSystem = {}));
