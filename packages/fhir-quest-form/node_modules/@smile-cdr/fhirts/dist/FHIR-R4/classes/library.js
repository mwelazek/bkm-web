"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
class Library {
}
exports.Library = Library;
(function (Library) {
    Library.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(Library = exports.Library || (exports.Library = {}));
