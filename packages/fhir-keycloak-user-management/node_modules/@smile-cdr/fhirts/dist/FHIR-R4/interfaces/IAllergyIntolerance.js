"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllergyIntolerance = void 0;
var AllergyIntolerance;
(function (AllergyIntolerance) {
    AllergyIntolerance.TypeEnum = {
        Allergy: 'allergy',
        Intolerance: 'intolerance'
    };
    AllergyIntolerance.CriticalityEnum = {
        Low: 'low',
        High: 'high',
        UnableToAssess: 'unable-to-assess'
    };
})(AllergyIntolerance = exports.AllergyIntolerance || (exports.AllergyIntolerance = {}));
