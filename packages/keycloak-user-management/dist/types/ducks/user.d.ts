/** users ducks modules: actions, actionCreators, reducer and selectors */
import { Dictionary } from '@onaio/utils';
import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
/** The reducer name */
export declare const reducerName = "keycloakUsers";
/** Interface for UserGroup json object */
export interface UserGroup {
    id: string;
    name: string;
    path: string;
    subGroups?: UserGroup[];
}
/** Interface for practitioner json object */
export interface Practitioner {
    active: boolean;
    identifier: string;
    name: string;
    userId: string;
    username: string;
}
/** interface user action */
export interface UserAction {
    alias: string;
    name: string;
    providerId: string;
    enabled: boolean;
    defaultAction: boolean;
    priority: number;
    config: Dictionary;
}
export interface UserAttributes {
    contact?: string[];
    fhir_core_app_id?: string[];
}
/** Interface for user json object */
export interface KeycloakUser {
    access?: {
        manageGroupMembership: boolean;
        view: boolean;
        mapRoles: boolean;
        impersonate: boolean;
        manage: boolean;
    };
    createdTimestamp?: number;
    disableableCredentialTypes?: string[];
    email?: string;
    emailVerified?: boolean;
    enabled?: boolean;
    firstName: string;
    id: string;
    lastName: string;
    notBefore?: number;
    requiredActions?: string[];
    totp?: boolean;
    username: string;
    attributes?: UserAttributes;
}
/** action type for fetching keycloak users */
export declare const KEYCLOAK_USERS_FETCHED = "keycloak/reducer/users/userS_FETCHED";
/** action type for removing keycloak users */
export declare const REMOVE_KEYCLOAK_USERS = "keycloak/reducer/users/REMOVE_KEYCLOAK_USERS";
/** interface action to add users to store */
export interface FetchKeycloakUsersAction extends AnyAction {
    overwrite: boolean | undefined;
    usersById: Dictionary<KeycloakUser>;
    type: typeof KEYCLOAK_USERS_FETCHED;
}
/** Interface for removeusersAction */
export interface RemoveKeycloakUsersAction extends AnyAction {
    usersById: Dictionary<KeycloakUser>;
    type: typeof REMOVE_KEYCLOAK_USERS;
}
/** Create type for users reducer actions */
export type KeycloakUsersActionTypes = FetchKeycloakUsersAction | RemoveKeycloakUsersAction | AnyAction;
/**
 * Fetch users action creator
 *
 * @param {Array} usersList - keycloak users
 * @param {boolean} overwrite - whether to replace records in store for users
 * @returns {object} - the dispatcher to remove the user
 */
export declare const fetchKeycloakUsers: (usersList?: KeycloakUser[], overwrite?: boolean) => FetchKeycloakUsersAction;
/**
 * Remove users action creator
 *
 * @returns {object} - the dispatcher to remove the user
 */
export declare const removeKeycloakUsers: () => RemoveKeycloakUsersAction;
/** interface for keycloak users state in redux store */
export interface KeycloakUsersState {
    usersById: Dictionary<KeycloakUser> | Dictionary;
}
/** Create an immutable keycloak users state */
export type ImmutableKeycloakUsersState = KeycloakUsersState & SeamlessImmutable.ImmutableObject<KeycloakUsersState>;
/** initial keycloak users state */
export declare const initialState: ImmutableKeycloakUsersState;
/**
 * the users reducer function
 *
 * @param {object} state - keycloak users states
 * @param {object} action - keycloak users actions
 * @returns {object} - the updated states
 */
export declare function reducer(state: ImmutableKeycloakUsersState | undefined, action: KeycloakUsersActionTypes): ImmutableKeycloakUsersState;
export interface KeycloakUsersFilters {
    id?: string[] /** get all users whose ids appear in this array */;
    username?: string /** get users whose username includes text in the username field */;
    searchText?: string /** filter user with given text */;
}
/**
 * Gets id from KeycloakUsersFilters
 *
 * @param _ - the redux store
 * @param props - the keycloak users filters object
 */
export declare const getUserIds: (_: Partial<Store>, props: KeycloakUsersFilters) => string[] | undefined;
/**
 * Gets name from KeycloakUsersFilters
 *
 * @param _ - the redux store
 * @param props - the users filters object
 */
export declare const getUsername: (_: Partial<Store>, props: KeycloakUsersFilters) => string | undefined;
/**
 * Gets searchText from filter props
 *
 * @param _ - the redux store
 * @param props - the users filters object
 */
export declare const getSearchText: (_: Partial<Store>, props: KeycloakUsersFilters) => string | undefined;
/**
 * returns all users in the store as values whose keys are their respective ids
 *
 * @param {any} state - the redux store
 * @returns {object} - users object as values, respective ids as keys
 */
export declare function getKeycloakUsersById(state: Partial<Store>): {
    [key: string]: KeycloakUser;
};
/**
 * gets keycloak users as an array of user objects
 *
 * @param {any} state - the redux store
 * @returns {Array} - an array of users objs
 */
export declare function getKeycloakUsersArray(state: Partial<Store>): KeycloakUser[];
export declare const getUsersByUsername: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    id?: string[] | undefined;
    username?: string | undefined;
    searchText?: string | undefined;
}) => KeycloakUser[]) & import("reselect").OutputSelectorFields<(args_0: KeycloakUser[], args_1: string | undefined) => KeycloakUser[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const getKeycloakUsersByIds: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    id?: string[] | undefined;
    username?: string | undefined;
    searchText?: string | undefined;
}) => KeycloakUser[]) & import("reselect").OutputSelectorFields<(args_0: {
    [key: string]: KeycloakUser;
}, args_1: string[] | undefined, args_2: KeycloakUser[]) => KeycloakUser[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const makeKeycloakUsersSelector: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    id?: string[] | undefined;
    username?: string | undefined;
    searchText?: string | undefined;
}) => KeycloakUser[]) & import("reselect").OutputSelectorFields<(args_0: KeycloakUser[], args_1: KeycloakUser[], args_2: string | undefined) => KeycloakUser[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
