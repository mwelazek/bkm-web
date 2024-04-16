"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
class Group {
}
exports.Group = Group;
(function (Group) {
    Group.TypeEnum = {
        Person: 'person',
        Animal: 'animal',
        Practitioner: 'practitioner',
        Device: 'device',
        Medication: 'medication',
        Substance: 'substance'
    };
})(Group = exports.Group || (exports.Group = {}));
