"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingSystem = void 0;
var NamingSystem;
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
