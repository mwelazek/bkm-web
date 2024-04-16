import { KeycloakUser, removeKeycloakUsers } from '../../../ducks/user';
import { Dictionary } from '@onaio/utils';
export interface Props {
    removeKeycloakUsersCreator: typeof removeKeycloakUsers;
    keycloakBaseURL: string;
    opensrpBaseURL: string;
    record: KeycloakUser;
    extraData: Dictionary;
    setDetailsCallback: (keycloakUser: KeycloakUser) => void;
}
/**
 * Component TableActions
 *
 * @param {React.PropsTypes} props - component props
 * @returns {Element} - actions
 */
declare const TableActions: (props: Props) => JSX.Element;
export { TableActions };
