import { IOrganization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganization';
import { IPractitioner } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner';
import { IPractitionerRole } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitionerRole';
import { OrganizationFormFields } from './components/AddEditOrganization/utils';
/**
 * either posts or puts an organization payload to fhir server
 *
 * @param baseUrl - server base url
 * @param payload - the organization payload
 */
export declare const postPutOrganization: (baseUrl: string, payload: IOrganization) => Promise<IOrganization>;
export interface SelectOption {
    value: string;
    label: string;
}
/**
 * filter practitioners select on search
 *
 * @param inputValue search term
 * @param option select option to filter against
 */
export declare const practitionersFilterFunction: (inputValue: string, option?: SelectOption) => boolean;
/**
 * Updates practitioner roles after organization creation
 *
 * @param baseUrl - the server base url
 * @param values - form field values
 * @param initialValues - initial form field values
 * @param organization -  all organizations
 * @param practitioners - all practitioners
 * @param existingRoles - all existing practitioner assignments to organizations
 */
export declare const updatePractitionerRoles: (baseUrl: string, values: OrganizationFormFields, initialValues: OrganizationFormFields, organization: IOrganization, practitioners: IPractitioner[], existingRoles: IPractitionerRole[]) => Promise<IPractitionerRole[]>;
