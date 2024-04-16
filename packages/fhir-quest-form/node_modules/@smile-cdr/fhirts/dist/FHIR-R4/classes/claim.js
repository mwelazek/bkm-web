"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Claim = void 0;
/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
class Claim {
}
exports.Claim = Claim;
(function (Claim) {
    Claim.UseEnum = {
        Claim: 'claim',
        Preauthorization: 'preauthorization',
        Predetermination: 'predetermination'
    };
})(Claim = exports.Claim || (exports.Claim = {}));
