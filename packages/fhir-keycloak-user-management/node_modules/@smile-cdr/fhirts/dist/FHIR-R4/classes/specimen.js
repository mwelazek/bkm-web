"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specimen = void 0;
/**
 * A sample to be used for analysis.
 */
class Specimen {
}
exports.Specimen = Specimen;
(function (Specimen) {
    Specimen.StatusEnum = {
        Available: 'available',
        Unavailable: 'unavailable',
        Unsatisfactory: 'unsatisfactory',
        EnteredInError: 'entered-in-error'
    };
})(Specimen = exports.Specimen || (exports.Specimen = {}));
