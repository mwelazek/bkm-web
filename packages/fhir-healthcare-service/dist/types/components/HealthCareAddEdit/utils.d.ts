import { IHealthcareService } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IHealthcareService';
import { Rule } from 'rc-field-form/lib/interface';
import { IOrganization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganization';
import type { TFunction } from '@opensrp/i18n';
export interface HealthCareFormFields {
    id?: string;
    identifier?: string;
    active?: boolean;
    name?: string;
    comment?: string;
    extraDetails?: string;
    providedBy?: string;
    initialObject?: IHealthcareService;
}
/**
 * factory for validation rules for OrganizationForm component
 *
 * @param t - the translator function
 */
export declare const validationRulesFactory: (t: TFunction) => {
    id: Rule[];
    identifier: Rule[];
    name: Rule[];
    active: Rule[];
    comment: Rule[];
    providedBy: Rule[];
    extraDetails: Rule[];
};
/**
 * Converts organization resource to initial values
 *
 * @param obj - the organization resource
 */
export declare const getHealthCareFormFields: (obj?: IHealthcareService) => HealthCareFormFields;
/**
 * Regenerates health care payload from form values
 *
 * @param values - form values
 * @param orgs - the organizations
 * @param initialValues - initial form values
 */
export declare const generateHealthCarePayload: (values: HealthCareFormFields, orgs: IOrganization[], initialValues: HealthCareFormFields) => IHealthcareService;
export interface SelectOption {
    value: string;
    label: string;
}
/**
 * get select options from list of organizations
 *
 * @param orgs - an array of organizations
 */
export declare const getOrgSelectOptions: (orgs: IOrganization[]) => {
    value: string;
    label: string;
}[];
/**
 * filter orgs select on search
 *
 * @param inputValue search term
 * @param option select option to filter against
 */
export declare const orgFilterFunction: (inputValue: string, option?: SelectOption) => boolean;
/**
 * either posts or puts a health care service payload to fhir server
 *
 * @param baseUrl - server base url
 * @param payload - the organization payload
 */
export declare const postPutHealthCareService: (baseUrl: string, payload: IHealthcareService) => Promise<IOrganization>;
