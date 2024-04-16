"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureMapSource = void 0;
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
class StructureMapSource {
}
exports.StructureMapSource = StructureMapSource;
(function (StructureMapSource) {
    StructureMapSource.ListModeEnum = {
        First: 'first',
        NotFirst: 'not_first',
        Last: 'last',
        NotLast: 'not_last',
        OnlyOne: 'only_one'
    };
})(StructureMapSource = exports.StructureMapSource || (exports.StructureMapSource = {}));
