"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueSetFilter = void 0;
/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
class ValueSetFilter {
}
exports.ValueSetFilter = ValueSetFilter;
(function (ValueSetFilter) {
    ValueSetFilter.OpEnum = {
        Equal: '=',
        IsA: 'is-a',
        DescendentOf: 'descendent-of',
        IsNotA: 'is-not-a',
        Regex: 'regex',
        In: 'in',
        NotIn: 'not-in',
        Generalizes: 'generalizes',
        Exists: 'exists'
    };
})(ValueSetFilter = exports.ValueSetFilter || (exports.ValueSetFilter = {}));
