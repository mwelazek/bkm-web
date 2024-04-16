"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeSystem = void 0;
var CodeSystem;
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
