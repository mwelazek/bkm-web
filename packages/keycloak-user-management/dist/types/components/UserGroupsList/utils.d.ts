import { KeycloakUserGroup } from '../../ducks/userGroups';
import { UserGroupMembers } from '.';
/**
 * Function to fetch group members from keycloak
 *
 * @param {string} groupId - user group id
 * @param {string} baseURL - keycloak base url
 */
export declare const loadGroupMembers: (groupId: string, baseURL: string) => Promise<UserGroupMembers[]>;
/**
 * Function to fetch single group details from keycloak
 *
 * @param {string} groupId - user group id
 * @param {string} baseURL - keycloak base url
 */
export declare const loadGroupDetails: (groupId: string, baseURL: string) => Promise<KeycloakUserGroup>;
