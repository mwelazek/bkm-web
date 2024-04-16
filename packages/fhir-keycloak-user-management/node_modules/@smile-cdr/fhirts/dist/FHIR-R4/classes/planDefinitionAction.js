"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDefinitionAction = void 0;
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
class PlanDefinitionAction {
}
exports.PlanDefinitionAction = PlanDefinitionAction;
(function (PlanDefinitionAction) {
    PlanDefinitionAction.GroupingBehaviorEnum = {
        VisualGroup: 'visual-group',
        LogicalGroup: 'logical-group',
        SentenceGroup: 'sentence-group'
    };
    PlanDefinitionAction.SelectionBehaviorEnum = {
        Any: 'any',
        All: 'all',
        AllOrNone: 'all-or-none',
        ExactlyOne: 'exactly-one',
        AtMostOne: 'at-most-one',
        OneOrMore: 'one-or-more'
    };
    PlanDefinitionAction.RequiredBehaviorEnum = {
        Must: 'must',
        Could: 'could',
        MustUnlessDocumented: 'must-unless-documented'
    };
    PlanDefinitionAction.PrecheckBehaviorEnum = {
        Yes: 'yes',
        No: 'no'
    };
    PlanDefinitionAction.CardinalityBehaviorEnum = {
        Single: 'single',
        Multiple: 'multiple'
    };
})(PlanDefinitionAction = exports.PlanDefinitionAction || (exports.PlanDefinitionAction = {}));
