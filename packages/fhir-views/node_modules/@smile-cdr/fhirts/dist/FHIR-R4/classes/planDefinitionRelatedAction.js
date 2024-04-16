"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDefinitionRelatedAction = void 0;
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
class PlanDefinitionRelatedAction {
}
exports.PlanDefinitionRelatedAction = PlanDefinitionRelatedAction;
(function (PlanDefinitionRelatedAction) {
    PlanDefinitionRelatedAction.RelationshipEnum = {
        BeforeStart: 'before-start',
        Before: 'before',
        BeforeEnd: 'before-end',
        ConcurrentWithStart: 'concurrent-with-start',
        Concurrent: 'concurrent',
        ConcurrentWithEnd: 'concurrent-with-end',
        AfterStart: 'after-start',
        After: 'after',
        AfterEnd: 'after-end'
    };
})(PlanDefinitionRelatedAction = exports.PlanDefinitionRelatedAction || (exports.PlanDefinitionRelatedAction = {}));
