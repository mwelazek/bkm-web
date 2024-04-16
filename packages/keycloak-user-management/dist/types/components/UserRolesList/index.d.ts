import React from 'react';
import { RouteComponentProps } from 'react-router';
import { fetchAllRoles } from './utils';
interface Props {
    keycloakBaseURL: string;
}
/**
 * Function which shows the list of all roles and their details
 *
 * @param {Object} props - UserRolesList component props
 * @returns {Function} returns User Roles list display
 */
export declare const UserRolesList: React.FC<Props & RouteComponentProps>;
export default UserRolesList;
export { fetchAllRoles };
