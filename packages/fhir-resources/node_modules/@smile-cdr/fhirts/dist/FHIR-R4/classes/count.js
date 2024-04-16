"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Count = void 0;
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
class Count {
}
exports.Count = Count;
(function (Count) {
    Count.ComparatorEnum = {
        LessThan: '<',
        LessThanOrEqualTo: '<=',
        GreaterThanOrEqualTo: '>=',
        GreaterThan: '>'
    };
})(Count = exports.Count || (exports.Count = {}));
