import { Valueof } from './helpers/types';
export declare enum Permit {
    CREATE = 1,
    READ = 2,
    UPDATE = 4,
    DELETE = 8,
    MANAGE = 15
}
/**
 * Authorization server resources that this web client is familiar with, thus we can enforce rbac for permissions on views that
 * deal with the below resource.
 */
export declare const IamResources: readonly ["iam_user", "iam_role", "iam_group"];
export type IamResource = typeof IamResources[number];
/**
 * fhir hapi Server resources that this web client is familiar with, thus we can enforce rbac for permissions on views that
 * deal with the below resource.
 */
export declare const FhirResources: readonly ["Patient", "Practitioner", "PractitionerRole", "Group", "Organization", "OrganizationAffiliation", "HealthcareService", "Location", "Observation", "QuestionnaireResponse", "CareTeam", "PlanDefinition", "Questionnaire"];
export type FhirResource = typeof FhirResources[number];
export type AuthZResource = IamResource | FhirResource;
export type BinaryNumber = number;
export type PermitKey = keyof typeof Permit;
export type PermitKeyValues = Valueof<typeof Permit>;
export type ResourcePermitMap = Map<AuthZResource, number>;
