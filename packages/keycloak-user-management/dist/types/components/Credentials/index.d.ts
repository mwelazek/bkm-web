import React from 'react';
import { RouteComponentProps } from 'react-router';
import { KeycloakService } from '@opensrp/keycloak-service';
import '../../index.css';
import { fetchKeycloakUsers, KeycloakUser } from '../../ducks/user';
import { Dictionary } from '@onaio/utils';
import type { TFunction } from '@opensrp/i18n';
/** inteface for route params */
export interface CredentialsRouteParams {
    userId: string;
    username: string;
}
/** props for editing a user view */
export interface CredentialsProps {
    fetchKeycloakUsersCreator: typeof fetchKeycloakUsers;
    keycloakUser: KeycloakUser | null;
    serviceClass: typeof KeycloakService;
    keycloakBaseURL: string;
    cancelUserHandler: (genericHistory: Dictionary) => void;
}
/** interface for data fields for team's form */
export interface UserCredentialsFormFields {
    password: string;
    confirm: string;
    temporary: boolean;
}
/** type intersection for all types that pertain to the props */
export type CredentialsPropsTypes = CredentialsProps & RouteComponentProps<CredentialsRouteParams>;
/**
 * redirect to /admin view
 * find appropriate type for history from usehistory hook
 *
 * @param {Dictionary} genericHistory react-rouet usehistory hook
 */
export declare const cancelUserHandler: (genericHistory: Dictionary) => void;
/** default props for editing user component */
export declare const defaultCredentialsProps: Partial<CredentialsPropsTypes>;
/**
 * Handle form submission
 *
 * @param values - submitted values
 * @param userId - user id
 * @param serviceClass - KeycloakService
 * @param keycloakBaseURL - Keycloak API base URL
 * @param t - the translations look up object
 */
export declare const submitForm: (values: UserCredentialsFormFields, userId: string, serviceClass: typeof KeycloakService, keycloakBaseURL: string, t: TFunction) => void;
declare const UserCredentials: React.FC<CredentialsPropsTypes>;
export { UserCredentials };
