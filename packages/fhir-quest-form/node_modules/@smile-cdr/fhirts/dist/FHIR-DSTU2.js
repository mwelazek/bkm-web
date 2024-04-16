"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issue = exports.OperationOutcome = exports.Patient = exports.PatientCommunication = exports.Link = exports.ContactPoint = exports.Contact = exports.Address = exports.Period = exports.Coding = exports.Extension = exports.HumanName = exports.Reference = exports.Identifier = exports.CodeableConcept = exports.Narrative = exports.Meta = exports.Resource = exports.DomainResource = exports.Id = exports.BackboneElement = exports.FHIRElement = void 0;
/* This is base class from which other elements are derived */
class FHIRElement {
}
exports.FHIRElement = FHIRElement;
class BackboneElement extends FHIRElement {
}
exports.BackboneElement = BackboneElement;
/* FHIR classes used in resources */
class Id {
    constructor(input) {
        const re = new RegExp('[A-Za-z0-9\\-\\.]{1,64}');
        if (re.test(input)) {
            this.id = input;
        }
        else {
            throw new RangeError('Not a valid Id string - must match reg exp [A-Za-z0-9\\-\\.]{1,64} Was provided: ' + input);
        }
    }
}
exports.Id = Id;
class DomainResource {
}
exports.DomainResource = DomainResource;
class Resource extends DomainResource {
}
exports.Resource = Resource;
class Meta extends FHIRElement {
}
exports.Meta = Meta;
class Narrative {
}
exports.Narrative = Narrative;
class CodeableConcept extends FHIRElement {
}
exports.CodeableConcept = CodeableConcept;
class Identifier extends FHIRElement {
}
exports.Identifier = Identifier;
class Reference extends FHIRElement {
}
exports.Reference = Reference;
// Human Name - Last name is an array for DSTU2
class HumanName extends FHIRElement {
}
exports.HumanName = HumanName;
class Extension {
}
exports.Extension = Extension;
class Coding extends FHIRElement {
}
exports.Coding = Coding;
class Period extends FHIRElement {
}
exports.Period = Period;
class Address extends FHIRElement {
}
exports.Address = Address;
class Contact extends BackboneElement {
}
exports.Contact = Contact;
class ContactPoint extends FHIRElement {
}
exports.ContactPoint = ContactPoint;
class Link extends BackboneElement {
}
exports.Link = Link;
class PatientCommunication extends BackboneElement {
}
exports.PatientCommunication = PatientCommunication;
class Patient extends Resource {
}
exports.Patient = Patient;
class OperationOutcome extends Resource {
}
exports.OperationOutcome = OperationOutcome;
class Issue extends BackboneElement {
}
exports.Issue = Issue;
