import { Organization } from '@opensrp/team-management';
import { Practitioner, KeycloakUser } from '../../ducks/user';
interface UserDetailProps {
    onClose: Function;
    keycloakUser: KeycloakUser;
    practitioner?: Practitioner;
    assignedTeams: Organization[];
}
export type UserDetailType = Omit<UserDetailProps, 'onClose'>;
export declare const UserDetails: (props: Partial<UserDetailProps>) => JSX.Element;
export {};
