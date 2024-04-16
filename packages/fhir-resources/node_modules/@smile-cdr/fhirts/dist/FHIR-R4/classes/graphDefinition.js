"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphDefinition = void 0;
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
class GraphDefinition {
}
exports.GraphDefinition = GraphDefinition;
(function (GraphDefinition) {
    GraphDefinition.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(GraphDefinition = exports.GraphDefinition || (exports.GraphDefinition = {}));
