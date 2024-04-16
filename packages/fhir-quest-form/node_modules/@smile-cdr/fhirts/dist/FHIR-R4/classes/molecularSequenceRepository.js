"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MolecularSequenceRepository = void 0;
/**
 * Raw data describing a biological sequence.
 */
class MolecularSequenceRepository {
}
exports.MolecularSequenceRepository = MolecularSequenceRepository;
(function (MolecularSequenceRepository) {
    MolecularSequenceRepository.TypeEnum = {
        Directlink: 'directlink',
        Openapi: 'openapi',
        Login: 'login',
        Oauth: 'oauth',
        Other: 'other'
    };
})(MolecularSequenceRepository = exports.MolecularSequenceRepository || (exports.MolecularSequenceRepository = {}));
