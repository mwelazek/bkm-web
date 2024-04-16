"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphDefinitionCompartment = void 0;
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
class GraphDefinitionCompartment {
}
exports.GraphDefinitionCompartment = GraphDefinitionCompartment;
(function (GraphDefinitionCompartment) {
    GraphDefinitionCompartment.UseEnum = {
        Condition: 'condition',
        Requirement: 'requirement'
    };
    GraphDefinitionCompartment.RuleEnum = {
        Identical: 'identical',
        Matching: 'matching',
        Different: 'different',
        Custom: 'custom'
    };
})(GraphDefinitionCompartment = exports.GraphDefinitionCompartment || (exports.GraphDefinitionCompartment = {}));
