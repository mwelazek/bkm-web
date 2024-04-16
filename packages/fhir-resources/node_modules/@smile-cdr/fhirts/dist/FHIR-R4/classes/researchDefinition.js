"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchDefinition = void 0;
/**
 * The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
class ResearchDefinition {
}
exports.ResearchDefinition = ResearchDefinition;
(function (ResearchDefinition) {
    ResearchDefinition.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(ResearchDefinition = exports.ResearchDefinition || (exports.ResearchDefinition = {}));
