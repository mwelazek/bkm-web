"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogEntry = void 0;
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
class CatalogEntry {
}
exports.CatalogEntry = CatalogEntry;
(function (CatalogEntry) {
    CatalogEntry.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
})(CatalogEntry = exports.CatalogEntry || (exports.CatalogEntry = {}));
