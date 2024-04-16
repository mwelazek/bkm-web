import React from 'react';
import { KeycloakUserGroup } from '../../ducks/userGroups';
import { KeycloakUserRole } from '../../ducks/userRoles';
import type { TFunction } from '@opensrp/i18n';
import './form.css';
/** Interface for practitioner json object */
export interface Practitioner {
    active: boolean;
    identifier: string;
    name: string;
    userId: string;
    username: string;
}
/** props for editing a user view */
export interface UserGroupFormProps {
    allRoles: KeycloakUserRole[];
    assignedRoles: KeycloakUserRole[];
    availableRoles: KeycloakUserRole[];
    initialValues: KeycloakUserGroup;
    keycloakBaseURL: string;
}
/** default form initial values */
export declare const defaultInitialValues: KeycloakUserGroup;
/** default props for editing user component */
export declare const defaultProps: Partial<UserGroupFormProps>;
/**
 * Util function that updates assigned/available roles on keycloak
 *
 * @param {KeycloakUserGroup} initialValues - form initial values
 * @param {string[]} targetSelectedKeys - target choice box selected keys
 * @param {string[]} sourceSelectedKeys - source choice box selected keys
 * @param {string} keycloakBaseURL - keycloak api base url
 * @param {KeycloakUserRole[]} roles - list of all keycloak realm roles
 * @param t translator function
 */
export declare const handleTransferChange: (initialValues: KeycloakUserGroup, targetSelectedKeys: string[], sourceSelectedKeys: string[], keycloakBaseURL: string, roles: KeycloakUserRole[], t: TFunction) => Promise<void>;
/**
 * User group form for editing/adding user groups
 *
 * @param {object} props - component props
 */
declare const UserGroupForm: React.FC<UserGroupFormProps>;
export { UserGroupForm };
