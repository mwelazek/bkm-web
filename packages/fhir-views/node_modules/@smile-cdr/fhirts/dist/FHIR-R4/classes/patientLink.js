"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientLink = void 0;
/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
class PatientLink {
}
exports.PatientLink = PatientLink;
(function (PatientLink) {
    PatientLink.TypeEnum = {
        ReplacedBy: 'replaced-by',
        Replaces: 'replaces',
        Refer: 'refer',
        Seealso: 'seealso'
    };
})(PatientLink = exports.PatientLink || (exports.PatientLink = {}));
