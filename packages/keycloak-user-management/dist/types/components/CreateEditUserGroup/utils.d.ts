import { Dispatch, SetStateAction } from 'react';
import { store } from '@opensrp/store';
import { KeycloakUserRole } from '../../ducks/userRoles';
import { KeycloakUserGroup } from '../../ducks/userGroups';
import type { TFunction } from '@opensrp/i18n';
/**
 * Fetch available, assigned or effective roles
 *
 * @param groupId - user group id
 * @param keycloakBaseURL - keycloak API base URL
 * @param roleMappingEndpoint - keycloak endpoint for fetching assigned, available or effective roles
 * @param setRolesAction method to set state for selected actions
 * @param t - translator function
 */
export declare const fetchRoleMappings: (groupId: string, keycloakBaseURL: string, roleMappingEndpoint: string, setRolesAction: (role: KeycloakUserRole[]) => void, t: TFunction) => Promise<void>;
/**
 * Remove assigned roles
 *
 * @param groupId - user group id
 * @param keycloakBaseURL - keycloak API base URL
 * @param allRoles - an array of all realm roles
 * @param rolesToRemove - list of role ids
 * @param t - translator function
 */
export declare const removeAssignedRoles: (groupId: string, keycloakBaseURL: string, allRoles: KeycloakUserRole[], rolesToRemove: string[], t: TFunction) => Promise<void>;
/**
 * Set assigned roles
 *
 * @param groupId - user group id
 * @param keycloakBaseURL - keycloak API base URL
 * @param allRoles - an array of all realm roles
 * @param rolesToAdd - list of role ids
 * @param t - the language object
 */
export declare const assignRoles: (groupId: string, keycloakBaseURL: string, allRoles: KeycloakUserRole[], rolesToAdd: string[], t: TFunction) => Promise<void>;
/**
 * Fetch single user group
 *
 * @param groupId -
 * @param keycloakBaseURL - keycloak API base URL
 * @param dispatch method to dispatch action to store
 * @param t - translator function
 */
export declare const fetchSingleGroup: (groupId: string, keycloakBaseURL: string, dispatch: import("redux").Dispatch<import("redux").AnyAction>, t: TFunction) => Promise<void>;
export declare const submitForm: (values: KeycloakUserGroup & {
    roles?: string[];
}, keycloakBaseURL: string, setSubmittingCallback: Dispatch<SetStateAction<boolean>>, t: TFunction) => Promise<void>;
