"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = void 0;
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
class Identifier {
}
exports.Identifier = Identifier;
(function (Identifier) {
    Identifier.UseEnum = {
        Usual: 'usual',
        Official: 'official',
        Temp: 'temp',
        Secondary: 'secondary',
        Old: 'old'
    };
})(Identifier = exports.Identifier || (exports.Identifier = {}));
