"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentManifest = void 0;
/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 */
class DocumentManifest {
}
exports.DocumentManifest = DocumentManifest;
(function (DocumentManifest) {
    DocumentManifest.StatusEnum = {
        Current: 'current',
        Superseded: 'superseded',
        EnteredInError: 'entered-in-error'
    };
})(DocumentManifest = exports.DocumentManifest || (exports.DocumentManifest = {}));
