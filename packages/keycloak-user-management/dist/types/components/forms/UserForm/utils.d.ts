/// <reference types="lodash" />
import { KeycloakUser, UserGroup } from '../../../ducks/user';
import { PRACTITIONER_USER_TYPE_CODE, SUPERVISOR_USER_TYPE_CODE } from '../../../constants';
import { FormFields, PractitionerUpdaterFun, SelectOption } from './types';
import { Practitioner } from '@opensrp/team-management';
import { IPractitioner } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner';
import type { TFunction } from '@opensrp/i18n';
import { IPractitionerRole } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitionerRole';
import { IComposition } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IComposition';
/**
 * @param baseURL - opensrp API base URL
 * @param payload - the practitioner payload
 * @param isEditMode - whether we are creating or editing user.
 * @param t - translator function
 */
export declare const createOrEditPractitioners: (baseURL: string, payload: Practitioner, isEditMode: boolean | undefined, t: TFunction) => Promise<void>;
/**
 * Handle form submission
 *
 * @param values - form values
 * @param keycloakBaseURL - keycloak API base URL
 * @param allUserGroups - Array of Usergroups to get data from when sending payload of user groups
 * @param previousUserGroupIds - An array of previously selected user group ids
 * @param practitionerUpdater - async function that updates practitioner records
 * @param t - translator function
 */
export declare const submitForm: (values: FormFields, keycloakBaseURL: string, allUserGroups: UserGroup[], previousUserGroupIds: string[] | undefined, practitionerUpdater: PractitionerUpdaterFun, t: TFunction) => Promise<void>;
export declare const getUserTypeCode: (role: IPractitionerRole) => string | undefined;
export declare const getUserType: (userTypeCode: typeof PRACTITIONER_USER_TYPE_CODE | typeof SUPERVISOR_USER_TYPE_CODE) => "practitioner" | "supervisor";
/**
 * abstraction to derive formValues from keycloak user and optional associated practitioner
 *
 * @param keycloakUser - the keycloak user to be edited, undefined if creating user
 * @param practitioner - the associated practitioner
 * @param userGroups -  user groups assigned to this user
 * @param practitionerRole -  user practitioner role assigned to this user
 */
export declare const getFormValues: (keycloakUser?: KeycloakUser, practitioner?: Practitioner | IPractitioner, userGroups?: UserGroup[], practitionerRole?: IPractitionerRole) => FormFields;
/**
 * convert form fields values to objects that can be sent to api
 * creates the keycloakUser, practitioner, userGroups
 *
 * @param values - the form's values
 */
export declare const getUserAndGroupsPayload: (values: FormFields) => {
    isEditMode: boolean;
    keycloakUser: {
        attributes?: import("../../../ducks/user").UserAttributes | import("lodash").Dictionary<string[]> | undefined;
        enabled: boolean | undefined;
        email?: string | undefined;
        firstName: string;
        id: string;
        lastName: string;
        username: string;
        access?: {
            manageGroupMembership: boolean;
            view: boolean;
            mapRoles: boolean;
            impersonate: boolean;
            manage: boolean;
        } | undefined;
        createdTimestamp?: number | undefined;
        disableableCredentialTypes?: string[] | undefined;
        emailVerified?: boolean | undefined;
        notBefore?: number | undefined;
        requiredActions?: string[] | undefined;
        totp?: boolean | undefined;
    };
    userGroups: string[];
};
/**
 * converts userGroups to options that can be passed to antd Select
 *
 * @param userGroups - the userGroups in an array
 */
export declare const getUserGroupsOptions: (userGroups: UserGroup[]) => SelectOption[];
/**
 * filters options listed once user types in userGroups select
 *
 * @param inputValue - the search text,
 * @param option - one of the options
 */
export declare const userGroupOptionsFilter: (inputValue: string, option?: SelectOption) => boolean;
export declare const postPutPractitioner: (baseUrl: string) => (values: FormFields, userId: string, t: TFunction) => Promise<void>;
export declare const getCompositionOptions: (composition: IComposition) => {
    label: string;
    value: string;
    ref: IComposition;
} | undefined;
/** search param for filter to get composition resources of the type device setting */
export declare const compositionUrlFilter: {
    type: string;
    _elements: string;
};
