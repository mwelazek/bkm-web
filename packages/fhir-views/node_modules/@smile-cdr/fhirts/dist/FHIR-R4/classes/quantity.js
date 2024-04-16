"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quantity = void 0;
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
class Quantity {
}
exports.Quantity = Quantity;
(function (Quantity) {
    Quantity.ComparatorEnum = {
        LessThan: '<',
        LessThanOrEqualTo: '<=',
        GreaterThanOrEqualTo: '>=',
        GreaterThan: '>'
    };
})(Quantity = exports.Quantity || (exports.Quantity = {}));
