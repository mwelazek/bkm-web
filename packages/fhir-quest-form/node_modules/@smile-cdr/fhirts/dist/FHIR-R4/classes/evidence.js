"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evidence = void 0;
/**
 * The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
class Evidence {
}
exports.Evidence = Evidence;
(function (Evidence) {
    Evidence.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(Evidence = exports.Evidence || (exports.Evidence = {}));
