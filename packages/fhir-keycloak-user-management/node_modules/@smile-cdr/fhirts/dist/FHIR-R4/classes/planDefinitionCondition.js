"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDefinitionCondition = void 0;
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
class PlanDefinitionCondition {
}
exports.PlanDefinitionCondition = PlanDefinitionCondition;
(function (PlanDefinitionCondition) {
    PlanDefinitionCondition.KindEnum = {
        Applicability: 'applicability',
        Start: 'start',
        Stop: 'stop'
    };
})(PlanDefinitionCondition = exports.PlanDefinitionCondition || (exports.PlanDefinitionCondition = {}));
