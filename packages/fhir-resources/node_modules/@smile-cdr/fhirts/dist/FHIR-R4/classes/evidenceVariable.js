"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceVariable = void 0;
/**
 * The EvidenceVariable resource describes a \"PICO\" element that knowledge (evidence, assertion, recommendation) is about.
 */
class EvidenceVariable {
}
exports.EvidenceVariable = EvidenceVariable;
(function (EvidenceVariable) {
    EvidenceVariable.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
    EvidenceVariable.TypeEnum = {
        Dichotomous: 'dichotomous',
        Continuous: 'continuous',
        Descriptive: 'descriptive'
    };
})(EvidenceVariable = exports.EvidenceVariable || (exports.EvidenceVariable = {}));
