export declare class FHIRElement {
    id: string;
    extension: Extension[];
}
export declare class BackboneElement extends FHIRElement {
    modifierExtension: any;
}
export declare class Id {
    private id;
    constructor(input?: string);
}
export declare class DomainResource {
    text: Narrative;
    contained: Resource[];
    extension: Extension[];
    modifierExtension: Extension[];
}
export declare class Resource extends DomainResource {
    resourceType: string;
    id: string;
    meta: Meta;
    implicitRules: string;
    language: string;
}
export declare class Meta extends FHIRElement {
    versionId: Id;
    lastUpdated: Date;
    profile: string;
    security: Coding;
    tag: Coding;
}
export declare class Narrative {
    status: string;
    div: string;
}
export declare class CodeableConcept extends FHIRElement {
    coding: Coding[];
    text: string;
}
export declare class Identifier extends FHIRElement {
    use: string;
    type: CodeableConcept;
    system: string;
    value: string;
    period: Period;
    assigner: Reference;
}
export declare class Reference extends FHIRElement {
    reference: string;
    identifier: Identifier;
    display: string;
}
export declare class HumanName extends FHIRElement {
    use: string;
    text: string;
    family: string[];
    given: string[];
    prefix: string[];
    suffix: string[];
    period: Period;
}
export declare class Extension {
    url: string;
    valueString: string;
    valueCode: string;
    valueAddress: Address;
    valueBoolean?: boolean;
    valueHumanName: HumanName;
    valueReference: Reference;
    valueDate: Date;
    valueIdentifier: string;
    valueDecimal?: number;
    valueInteger: number;
    valuePeriod: Period;
}
export declare class Coding extends FHIRElement {
    system: string;
    version: string;
    code: string;
    display: string;
    userSelected: boolean;
}
export declare class Period extends FHIRElement {
    start: string;
    end: string;
}
export declare class Address extends FHIRElement {
    use: string;
    type: string;
    text: string;
    line: string[];
    city: string;
    district: string;
    state: string;
    postalCode: string;
    country: string;
    period: Period;
}
export declare class Contact extends BackboneElement {
    relationship: CodeableConcept[];
    name: HumanName;
    telecom: ContactPoint[];
    address: Address;
    gender: string;
    organization: Reference;
    period: Period;
}
export declare class ContactPoint extends FHIRElement {
    system: string;
    value: string;
    use: string;
    rank: number;
    period: Period;
}
export declare class Link extends BackboneElement {
    other: Reference;
    type: string;
}
export declare class PatientCommunication extends BackboneElement {
    language: CodeableConcept;
    preferred: boolean;
}
export declare class Patient extends Resource {
    identifier: Identifier[];
    active: boolean;
    name: HumanName[];
    telecom: ContactPoint[];
    gender: string;
    birthDate: string;
    address: Address[];
    maritalStatus: CodeableConcept;
    contact: Contact[];
    communication: PatientCommunication[];
    generalPractitioner: Reference[];
    managingOrganization: Reference;
    link: Link[];
}
export declare class OperationOutcome extends Resource {
    issue: Issue[];
}
export declare class Issue extends BackboneElement {
    severity: string;
    code: string;
    details: CodeableConcept;
    diagnostics: string;
    location: string[];
}
