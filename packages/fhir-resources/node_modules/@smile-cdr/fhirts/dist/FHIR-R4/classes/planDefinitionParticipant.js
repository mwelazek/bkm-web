"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDefinitionParticipant = void 0;
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
class PlanDefinitionParticipant {
}
exports.PlanDefinitionParticipant = PlanDefinitionParticipant;
(function (PlanDefinitionParticipant) {
    PlanDefinitionParticipant.TypeEnum = {
        Patient: 'patient',
        Practitioner: 'practitioner',
        RelatedPerson: 'related-person',
        Device: 'device'
    };
})(PlanDefinitionParticipant = exports.PlanDefinitionParticipant || (exports.PlanDefinitionParticipant = {}));
