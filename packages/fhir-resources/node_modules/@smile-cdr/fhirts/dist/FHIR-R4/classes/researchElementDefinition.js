"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchElementDefinition = void 0;
/**
 * The ResearchElementDefinition resource describes a \"PICO\" element that knowledge (evidence, assertion, recommendation) is about.
 */
class ResearchElementDefinition {
}
exports.ResearchElementDefinition = ResearchElementDefinition;
(function (ResearchElementDefinition) {
    ResearchElementDefinition.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
    ResearchElementDefinition.TypeEnum = {
        Population: 'population',
        Exposure: 'exposure',
        Outcome: 'outcome'
    };
    ResearchElementDefinition.VariableTypeEnum = {
        Dichotomous: 'dichotomous',
        Continuous: 'continuous',
        Descriptive: 'descriptive'
    };
})(ResearchElementDefinition = exports.ResearchElementDefinition || (exports.ResearchElementDefinition = {}));
