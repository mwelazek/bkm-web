"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDefinition = void 0;
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
class PlanDefinition {
}
exports.PlanDefinition = PlanDefinition;
(function (PlanDefinition) {
    PlanDefinition.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(PlanDefinition = exports.PlanDefinition || (exports.PlanDefinition = {}));
