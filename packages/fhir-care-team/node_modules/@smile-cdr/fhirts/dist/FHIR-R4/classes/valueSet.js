"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueSet = void 0;
/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
class ValueSet {
}
exports.ValueSet = ValueSet;
(function (ValueSet) {
    ValueSet.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(ValueSet = exports.ValueSet || (exports.ValueSet = {}));
