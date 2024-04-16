"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consent = void 0;
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
class Consent {
}
exports.Consent = Consent;
(function (Consent) {
    Consent.StatusEnum = {
        Draft: 'draft',
        Proposed: 'proposed',
        Active: 'active',
        Rejected: 'rejected',
        Inactive: 'inactive',
        EnteredInError: 'entered-in-error'
    };
})(Consent = exports.Consent || (exports.Consent = {}));
