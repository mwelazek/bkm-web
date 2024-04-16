"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeItemDefinition = void 0;
/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
class ChargeItemDefinition {
}
exports.ChargeItemDefinition = ChargeItemDefinition;
(function (ChargeItemDefinition) {
    ChargeItemDefinition.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(ChargeItemDefinition = exports.ChargeItemDefinition || (exports.ChargeItemDefinition = {}));
