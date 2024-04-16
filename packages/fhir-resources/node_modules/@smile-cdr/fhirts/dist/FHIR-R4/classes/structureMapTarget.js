"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureMapTarget = void 0;
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
class StructureMapTarget {
}
exports.StructureMapTarget = StructureMapTarget;
(function (StructureMapTarget) {
    StructureMapTarget.ContextTypeEnum = {
        Type: 'type',
        Variable: 'variable'
    };
    StructureMapTarget.TransformEnum = {
        Create: 'create',
        Copy: 'copy',
        Truncate: 'truncate',
        Escape: 'escape',
        Cast: 'cast',
        Append: 'append',
        Translate: 'translate',
        Reference: 'reference',
        DateOp: 'dateOp',
        Uuid: 'uuid',
        Pointer: 'pointer',
        Evaluate: 'evaluate',
        Cc: 'cc',
        C: 'c',
        Qty: 'qty',
        Id: 'id',
        Cp: 'cp'
    };
})(StructureMapTarget = exports.StructureMapTarget || (exports.StructureMapTarget = {}));
