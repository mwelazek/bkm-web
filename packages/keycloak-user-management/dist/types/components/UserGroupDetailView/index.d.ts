import { UserGroupMembers } from '../UserGroupsList';
import { KeycloakUserGroup } from '../../ducks/userGroups';
import { KeycloakUserRole } from 'keycloak-user-management/src/ducks/userRoles';
/** typings for the view details component */
export interface ViewDetailsProps {
    loading: boolean;
    error: boolean;
    GroupDetails: KeycloakUserGroup | undefined;
    effectiveRoles: KeycloakUserRole[] | undefined;
    userGroupMembers: UserGroupMembers[] | undefined;
    onClose: () => void;
}
/**
 * component that renders the details view to the right side
 * of list view
 *
 * @param props - detail view component props
 */
declare const ViewDetails: (props: ViewDetailsProps) => JSX.Element;
export { ViewDetails };
