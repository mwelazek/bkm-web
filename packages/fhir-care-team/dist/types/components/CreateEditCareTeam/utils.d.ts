import { id, organizationParticipants, practitionerParticipants, uuid, name, status, managingOrganizations } from '../../constants';
import type { TFunction } from '@opensrp/i18n';
import { ICareTeam } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ICareTeam';
import { IOrganization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganization';
import { HumanName } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/humanName';
import { IPractitioner } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner';
export declare const submitForm: (values: FormFields, initialValues: FormFields, fhirBaseURL: string, organizations: IOrganization[], practitioners: IPractitioner[], t: TFunction) => Promise<void>;
/**
 * Util function to build out patient or practitioner name
 *
 * @param {object} obj - patient resource object
 * @returns {string | undefined} - returns patient or practitioner name string
 */
export declare function getPatientName<T extends {
    name?: HumanName[];
}>(obj?: T | undefined): string | undefined;
export interface FormFields {
    [uuid]?: string;
    [id]?: string;
    [name]?: string;
    [status]?: string;
    [practitionerParticipants]: string[];
    initialCareTeam?: ICareTeam;
    [organizationParticipants]: string[];
    [managingOrganizations]: string[];
}
export declare const defaultInitialValues: FormFields;
export declare const getCareTeamFormFields: (careTeam?: ICareTeam) => FormFields;
export interface SelectOptions {
    value: string;
    label?: string;
}
export declare const getOrgSelectOptions: (orgs?: IOrganization[]) => SelectOptions[];
export declare const getPractitionerSelectOptions: (resources?: IPractitioner[]) => SelectOptions[];
/**
 * filter practitioners select on search
 *
 * @param inputValue search term
 * @param option select option to filter against
 */
export declare const selectFilterFunction: (inputValue: string, option?: SelectOptions) => boolean;
