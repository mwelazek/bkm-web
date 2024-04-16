"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllergyIntolerance = void 0;
/**
 * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 */
class AllergyIntolerance {
}
exports.AllergyIntolerance = AllergyIntolerance;
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
