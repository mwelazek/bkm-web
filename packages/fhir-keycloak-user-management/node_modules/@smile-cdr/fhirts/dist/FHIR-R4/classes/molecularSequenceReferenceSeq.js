"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MolecularSequenceReferenceSeq = void 0;
/**
 * Raw data describing a biological sequence.
 */
class MolecularSequenceReferenceSeq {
}
exports.MolecularSequenceReferenceSeq = MolecularSequenceReferenceSeq;
(function (MolecularSequenceReferenceSeq) {
    MolecularSequenceReferenceSeq.OrientationEnum = {
        Sense: 'sense',
        Antisense: 'antisense'
    };
    MolecularSequenceReferenceSeq.StrandEnum = {
        Watson: 'watson',
        Crick: 'crick'
    };
})(MolecularSequenceReferenceSeq = exports.MolecularSequenceReferenceSeq || (exports.MolecularSequenceReferenceSeq = {}));
