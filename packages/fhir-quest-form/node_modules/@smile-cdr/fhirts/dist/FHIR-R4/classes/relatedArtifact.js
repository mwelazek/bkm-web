"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedArtifact = void 0;
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
class RelatedArtifact {
}
exports.RelatedArtifact = RelatedArtifact;
(function (RelatedArtifact) {
    RelatedArtifact.TypeEnum = {
        Documentation: 'documentation',
        Justification: 'justification',
        Citation: 'citation',
        Predecessor: 'predecessor',
        Successor: 'successor',
        DerivedFrom: 'derived-from',
        DependsOn: 'depends-on',
        ComposedOf: 'composed-of'
    };
})(RelatedArtifact = exports.RelatedArtifact || (exports.RelatedArtifact = {}));
