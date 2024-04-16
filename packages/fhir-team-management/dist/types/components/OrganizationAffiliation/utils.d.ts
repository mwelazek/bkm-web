import { ILocation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ILocation';
import { IOrganization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganization';
import { IOrganizationAffiliation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganizationAffiliation';
export interface OrgSelectOptions {
    value: string;
    label?: string;
    affiliation?: IOrganizationAffiliation;
}
export interface AffiliationsByLocationId {
    [key: string]: IOrganizationAffiliation[];
}
export declare const reformatOrganizationByLocation: (orgAffiliations: IOrganizationAffiliation[]) => AffiliationsByLocationId;
export declare const getOrgSelectOptions: (orgs?: IOrganization[]) => OrgSelectOptions[];
/**
 * filter practitioners select on search
 *
 * @param inputValue search term
 * @param option select option to filter against
 */
export declare const orgsFilterFunction: (inputValue: string, option?: OrgSelectOptions) => boolean;
export declare const getOrgOptionsFromAffiliations: (affiliatedOrgs?: IOrganizationAffiliation[]) => OrgSelectOptions[];
/**
 * key affiliations by orgId and then locationID
 *
 * @param affiliations - affiliation
 */
export declare const keyAffiliationsByOrgLocIds: (affiliations: IOrganizationAffiliation[]) => Record<string, Record<string, IOrganizationAffiliation>>;
/**
 * @param baseUrl - fhir base url
 * @param currentOptions - affiliations after user selection
 * @param initialOptions - affiliations before user selection
 * @param location - location object
 * @param allAffiliations - all existing affiliation resource objects
 */
export declare const postPutAffiliations: (baseUrl: string, currentOptions: OrgSelectOptions[], initialOptions: OrgSelectOptions[], location: ILocation, allAffiliations: IOrganizationAffiliation[]) => Promise<unknown[]>;
