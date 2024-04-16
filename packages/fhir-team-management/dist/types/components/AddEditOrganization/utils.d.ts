import { IOrganization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganization';
import { IPractitionerRole } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitionerRole';
import { Rule } from 'rc-field-form/lib/interface';
import { IPractitioner } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner';
import type { TFunction } from '@opensrp/i18n';
import { PractToOrgAssignmentStrategy } from '@opensrp/pkg-config';
import { IOrganizationAffiliation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganizationAffiliation';
import { Reference } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/reference';
export interface OrganizationFormFields {
    id?: string;
    identifier?: string;
    active?: boolean;
    name?: string;
    alias?: string;
    type?: string;
    members?: string[];
}
/**
 * factory for validation rules for OrganizationForm component
 *
 * @param t - translator functioin
 */
export declare const validationRulesFactory: (t: TFunction) => {
    id: Rule[];
    identifier: Rule[];
    name: Rule[];
    alias: Rule[];
    status: Rule[];
    type: Rule[];
    members: Rule[];
};
/**
 * Converts organization resource to initial values
 *
 * @param org - the organization resource
 * @param assignedPractitioners - practitioner roles for assigned practitioners
 */
export declare const getOrgFormFields: (org?: IOrganization, assignedPractitioners?: IPractitionerRole[]) => OrganizationFormFields;
/**
 * Regenerates org payload from form values
 *
 * @param values - form values
 */
export declare const generateOrgPayload: (values: OrganizationFormFields) => IOrganization;
/** create organization's type select options */
export declare const getOrgTypeSelectOptions: () => {
    label: string;
    value: string;
    system: string;
}[];
/**
 * map practitioner roles to select options
 *
 * @param roles - practitioner roles representing assigned practitioners
 */
export declare const getAssignedPractsOptions: (roles: IPractitionerRole[]) => {
    label: string | undefined;
    value: string;
}[];
/**
 * map practitioner to select options
 *
 * @param practitioners - map of practitioners
 * @param existingPractitionerRoles - practitioner Roles that reference organizatio, [] when creating an organization
 * @param allPractitionerRoles - all practitioner roles resources
 * @param assignmentStrategy - strategy to use when generating options to assign
 */
export declare const getPractitionerOptions: (practitioners: IPractitioner[], existingPractitionerRoles: IPractitionerRole[], allPractitionerRoles: IPractitionerRole[], assignmentStrategy?: PractToOrgAssignmentStrategy) => {
    value: string;
    label: string;
}[];
/**
 * Find locations assigned to a particular organization
 *
 * @param orgAffiliations - Affiliations
 * @param id - Id of the affiliated organization
 */
export declare const FindAssignedLocations: (orgAffiliations: IOrganizationAffiliation[], id: string | undefined) => Reference[];
