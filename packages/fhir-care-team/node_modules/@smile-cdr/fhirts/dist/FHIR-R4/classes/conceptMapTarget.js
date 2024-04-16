"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptMapTarget = void 0;
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
class ConceptMapTarget {
}
exports.ConceptMapTarget = ConceptMapTarget;
(function (ConceptMapTarget) {
    ConceptMapTarget.EquivalenceEnum = {
        Relatedto: 'relatedto',
        Equivalent: 'equivalent',
        Equal: 'equal',
        Wider: 'wider',
        Subsumes: 'subsumes',
        Narrower: 'narrower',
        Specializes: 'specializes',
        Inexact: 'inexact',
        Unmatched: 'unmatched',
        Disjoint: 'disjoint'
    };
})(ConceptMapTarget = exports.ConceptMapTarget || (exports.ConceptMapTarget = {}));
