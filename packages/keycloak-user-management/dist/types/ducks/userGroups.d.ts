/** users ducks modules: actions, actionCreators, reducer and selectors */
import { Dictionary } from '@onaio/utils';
import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
/** The reducer name */
export declare const reducerName = "keycloakUserGroups";
/** Interface for user group json object */
export interface KeycloakUserGroup {
    access?: {
        view: boolean;
        manage: boolean;
        manageMembership: boolean;
    };
    attributes?: Dictionary;
    clientRoles?: Dictionary;
    id: string;
    name: string;
    path: string;
    realmRoles?: string[];
    subGroups?: string[];
}
/** action type for fetching keycloak user groups */
export declare const USER_GROUPS_FETCHED = "keycloak/reducer/userGroups/USER_GROUPS_FETCHED";
/** action type for removing keycloak user groups */
export declare const REMOVE_USER_GROUPS = "keycloak/reducer/userGroups/REMOVE_USER_GROUPS";
/** interface action to add user groups to store */
export interface FetchKeycloakUserGroupsAction extends AnyAction {
    userGroupsById: Dictionary<KeycloakUserGroup>;
    type: typeof USER_GROUPS_FETCHED;
}
/** Interface for removeusersAction */
export interface RemoveKeycloakUserGroupsAction extends AnyAction {
    userGroupsById: Dictionary<KeycloakUserGroup>;
    type: typeof REMOVE_USER_GROUPS;
}
/** Create type for user groups reducer actions */
export type KeycloakUserGroupsActionTypes = FetchKeycloakUserGroupsAction | RemoveKeycloakUserGroupsAction | AnyAction;
/**
 * Fetch user groups action creator
 *
 * @param {Array} userGroupsList - keycloak user groups
 * @returns {object} - returns an object of user groups
 */
export declare const fetchKeycloakUserGroups: (userGroupsList?: KeycloakUserGroup[]) => FetchKeycloakUserGroupsAction;
/**
 * Remove users action creator
 *
 * @returns {object} - the dispatcher to remove the user groups
 */
export declare const removeKeycloakUserGroups: () => RemoveKeycloakUserGroupsAction;
/** interface for keycloak user groups state in redux store */
export interface KeycloakUserGroupsState {
    userGroupsById: Dictionary<KeycloakUserGroup> | Dictionary;
}
/** Create an immutable keycloak users state */
export type ImmutableKeycloakUserGroupsState = KeycloakUserGroupsState & SeamlessImmutable.ImmutableObject<KeycloakUserGroupsState>;
/** initial keycloak users state */
export declare const initialState: ImmutableKeycloakUserGroupsState;
/**
 * the users reducer function
 *
 * @param {object} state - keycloak users states
 * @param {object} action - keycloak users actions
 * @returns {object} - the updated states
 */
export declare function reducer(state: ImmutableKeycloakUserGroupsState | undefined, action: KeycloakUserGroupsActionTypes): ImmutableKeycloakUserGroupsState;
export interface Filters {
    id?: string[] /** get all groups whose ids appear in this array */;
    name?: string /** get user groups whose name includes text in the name field */;
    searchText?: string /** filter user group with given text */;
}
/**
 * Gets id from KeycloakUsersFilters
 *
 * @param _ - the redux store
 * @param props - the keycloak user groups filters object
 */
export declare const getUserGroupsIds: (_: Partial<Store>, props: Filters) => string[] | undefined;
/**
 * Gets name from KeycloakUsersFilters
 *
 * @param _ - the redux store
 * @param props - the user groups filters object
 */
export declare const getGroupName: (_: Partial<Store>, props: Filters) => string | undefined;
/**
 * Gets searchText from filter props
 *
 * @param _ - the redux store
 * @param props - the user groups filters object
 */
export declare const getSearchText: (_: Partial<Store>, props: Filters) => string | undefined;
/**
 * returns all user groups in the store as values whose keys are their respective ids
 *
 * @param {any} state - the redux store
 * @returns {object} - users object as values, respective ids as keys
 */
export declare function getKeycloakUserGroupsById(state: Partial<Store>): {
    [key: string]: KeycloakUserGroup;
};
/**
 * gets keycloak users as an array of user objects
 *
 * @param {any} state - the redux store
 * @returns {Array} - an array of users objs
 */
export declare function getKeycloakUserGroupsArray(state: Partial<Store>): KeycloakUserGroup[];
export declare const getUserGroupByName: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    id?: string[] | undefined;
    name?: string | undefined;
    searchText?: string | undefined;
}) => KeycloakUserGroup[]) & import("reselect").OutputSelectorFields<(args_0: KeycloakUserGroup[], args_1: string | undefined) => KeycloakUserGroup[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const getKeycloakUserGroupsByIds: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    id?: string[] | undefined;
    name?: string | undefined;
    searchText?: string | undefined;
}) => KeycloakUserGroup[]) & import("reselect").OutputSelectorFields<(args_0: {
    [key: string]: KeycloakUserGroup;
}, args_1: string[] | undefined, args_2: KeycloakUserGroup[]) => KeycloakUserGroup[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const makeKeycloakUserGroupsSelector: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    id?: string[] | undefined;
    name?: string | undefined;
    searchText?: string | undefined;
}) => KeycloakUserGroup[]) & import("reselect").OutputSelectorFields<(args_0: KeycloakUserGroup[], args_1: KeycloakUserGroup[], args_2: string | undefined) => KeycloakUserGroup[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
