"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingSystem = void 0;
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a \"System\" used within the Identifier and Coding data types.
 */
class NamingSystem {
}
exports.NamingSystem = NamingSystem;
(function (NamingSystem) {
    NamingSystem.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
    NamingSystem.KindEnum = {
        Codesystem: 'codesystem',
        Identifier: 'identifier',
        Root: 'root'
    };
})(NamingSystem = exports.NamingSystem || (exports.NamingSystem = {}));
