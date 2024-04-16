"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompartmentDefinition = void 0;
var CompartmentDefinition;
(function (CompartmentDefinition) {
    CompartmentDefinition.StatusEnum = {
        Draft: 'draft',
        Active: 'active',
        Retired: 'retired',
        Unknown: 'unknown'
    };
    CompartmentDefinition.CodeEnum = {
        Patient: 'Patient',
        Encounter: 'Encounter',
        RelatedPerson: 'RelatedPerson',
        Practitioner: 'Practitioner',
        Device: 'Device'
    };
})(CompartmentDefinition = exports.CompartmentDefinition || (exports.CompartmentDefinition = {}));
