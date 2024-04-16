"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParameter = void 0;
/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
class SearchParameter {
}
exports.SearchParameter = SearchParameter;
(function (SearchParameter) {
    SearchParameter.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
    SearchParameter.TypeEnum = {
        Number: 'number',
        Date: 'date',
        String: 'string',
        Token: 'token',
        Reference: 'reference',
        Composite: 'composite',
        Quantity: 'quantity',
        Uri: 'uri',
        Special: 'special'
    };
    SearchParameter.XpathUsageEnum = {
        Normal: 'normal',
        Phonetic: 'phonetic',
        Nearby: 'nearby',
        Distance: 'distance',
        Other: 'other'
    };
})(SearchParameter = exports.SearchParameter || (exports.SearchParameter = {}));
