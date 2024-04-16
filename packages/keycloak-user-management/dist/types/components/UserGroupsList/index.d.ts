import React from 'react';
import { RouteComponentProps } from 'react-router';
interface RouteParams {
    userGroupId: string | undefined;
}
export interface UserGroupMembers {
    createdTimestamp: number;
    disableableCredentialTypes?: string[];
    email?: string;
    emailVerified: boolean;
    enabled: boolean;
    firstName: string;
    id: string;
    lastName: string;
    notBefore: number;
    totp: boolean;
    username: string;
}
interface Props {
    keycloakBaseURL: string;
}
export type UserGroupListTypes = Props & RouteComponentProps<RouteParams>;
/**
 * Component which shows the list of all groups and their details
 *
 * @param {Object} props - UserGoupsList component props
 * @returns {Function} returns User Groups list display
 */
export declare const UserGroupsList: React.FC<UserGroupListTypes>;
export default UserGroupsList;
