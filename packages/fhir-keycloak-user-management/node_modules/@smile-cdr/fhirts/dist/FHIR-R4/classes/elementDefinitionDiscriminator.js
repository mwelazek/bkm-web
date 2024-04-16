"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementDefinitionDiscriminator = void 0;
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
class ElementDefinitionDiscriminator {
}
exports.ElementDefinitionDiscriminator = ElementDefinitionDiscriminator;
(function (ElementDefinitionDiscriminator) {
    ElementDefinitionDiscriminator.TypeEnum = {
        Value: 'value',
        Exists: 'exists',
        Pattern: 'pattern',
        Type: 'type',
        Profile: 'profile'
    };
})(ElementDefinitionDiscriminator = exports.ElementDefinitionDiscriminator || (exports.ElementDefinitionDiscriminator = {}));
