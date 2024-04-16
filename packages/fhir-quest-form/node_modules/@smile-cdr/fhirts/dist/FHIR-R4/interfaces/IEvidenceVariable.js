"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceVariable = void 0;
var EvidenceVariable;
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
