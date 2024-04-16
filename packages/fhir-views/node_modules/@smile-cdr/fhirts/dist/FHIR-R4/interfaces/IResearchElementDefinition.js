"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchElementDefinition = void 0;
var ResearchElementDefinition;
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
