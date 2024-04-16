/// <reference types="react" />
import { KeycloakService } from '@opensrp/keycloak-service';
import { Dictionary } from '@onaio/utils';
import { KeycloakUser, fetchKeycloakUsers, removeKeycloakUsers } from '../../ducks/user';
import { RouteComponentProps } from 'react-router';
/** interface for component props */
export interface Props {
    serviceClass: typeof KeycloakService;
    fetchKeycloakUsersCreator: typeof fetchKeycloakUsers;
    removeKeycloakUsersCreator: typeof removeKeycloakUsers;
    keycloakUsers: KeycloakUser[];
    keycloakBaseURL: string;
    opensrpBaseURL: string;
    extraData: Dictionary;
    usersPageSize: number;
}
/** default component props */
export declare const defaultProps: {
    serviceClass: typeof KeycloakService;
    fetchKeycloakUsersCreator: (usersList?: KeycloakUser[], overwrite?: boolean | undefined) => import("../../ducks/user").FetchKeycloakUsersAction;
    removeKeycloakUsersCreator: () => import("../../ducks/user").RemoveKeycloakUsersAction;
    keycloakUsers: never[];
    keycloakBaseURL: string;
    opensrpBaseURL: string;
    extraData: {};
    usersPageSize: number;
};
export type UserListTypes = Props & RouteComponentProps;
declare const UserList: {
    (props: UserListTypes): JSX.Element;
    defaultProps: {
        serviceClass: typeof KeycloakService;
        fetchKeycloakUsersCreator: (usersList?: KeycloakUser[], overwrite?: boolean | undefined) => import("../../ducks/user").FetchKeycloakUsersAction;
        removeKeycloakUsersCreator: () => import("../../ducks/user").RemoveKeycloakUsersAction;
        keycloakUsers: never[];
        keycloakBaseURL: string;
        opensrpBaseURL: string;
        extraData: {};
        usersPageSize: number;
    };
};
export { UserList };
export declare const ConnectedUserList: import("react-redux").ConnectedComponent<{
    (props: UserListTypes): JSX.Element;
    defaultProps: {
        serviceClass: typeof KeycloakService;
        fetchKeycloakUsersCreator: (usersList?: KeycloakUser[], overwrite?: boolean | undefined) => import("../../ducks/user").FetchKeycloakUsersAction;
        removeKeycloakUsersCreator: () => import("../../ducks/user").RemoveKeycloakUsersAction;
        keycloakUsers: never[];
        keycloakBaseURL: string;
        opensrpBaseURL: string;
        extraData: {};
        usersPageSize: number;
    };
}, import("react-redux").Omit<Pick<Props & RouteComponentProps<{}, import("react-router").StaticContext, unknown>, keyof RouteComponentProps<{}, import("react-router").StaticContext, unknown>> & Partial<Pick<Props & RouteComponentProps<{}, import("react-router").StaticContext, unknown>, keyof Props>> & Partial<Pick<{
    serviceClass: typeof KeycloakService;
    fetchKeycloakUsersCreator: (usersList?: KeycloakUser[], overwrite?: boolean | undefined) => import("../../ducks/user").FetchKeycloakUsersAction;
    removeKeycloakUsersCreator: () => import("../../ducks/user").RemoveKeycloakUsersAction;
    keycloakUsers: never[];
    keycloakBaseURL: string;
    opensrpBaseURL: string;
    extraData: {};
    usersPageSize: number;
}, never>>, "removeKeycloakUsersCreator" | "extraData" | "fetchKeycloakUsersCreator">>;
