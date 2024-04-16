/** users ducks modules: actions, actionCreators, reducer and selectors */
import { Dictionary } from '@onaio/utils';
import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
/** The reducer name */
export declare const reducerName = "keycloakUserRoles";
/** Interface for user role json object */
export interface KeycloakUserRole {
    clientRole: boolean;
    composite: boolean;
    containerId: string;
    description: string;
    id: string;
    name: string;
}
/** action type for fetching keycloak user roles */
export declare const USER_ROLES_FETCHED = "keycloak/reducer/userRoles/USER_ROLES_FETCHED";
/** action type for removing keycloak user roles */
export declare const REMOVE_USER_ROLES = "keycloak/reducer/userRoles/REMOVE_USER_ROLES";
/** interface action to add user roles to store */
export interface FetchKeycloakUserRolesAction extends AnyAction {
    userRolesById: Dictionary<KeycloakUserRole>;
    type: typeof USER_ROLES_FETCHED;
}
/** Interface for remove user roles Action */
export interface RemoveKeycloakUserRolessAction extends AnyAction {
    userRolesById: Dictionary<KeycloakUserRole>;
    type: typeof REMOVE_USER_ROLES;
}
/** Create type for user roles reducer actions */
export type KeycloakUserRolesActionTypes = FetchKeycloakUserRolesAction | RemoveKeycloakUserRolessAction | AnyAction;
/**
 * Fetch user roles action creator
 *
 * @param {Array} userRolesList - keycloak user roles
 * @returns {object} - returns an object of user roles
 */
export declare const fetchKeycloakUserRoles: (userRolesList?: KeycloakUserRole[]) => FetchKeycloakUserRolesAction;
/**
 * Remove user roles action creator
 *
 * @returns {object} - the dispatcher to remove the user roles
 */
export declare const removeKeycloakUserRoles: () => RemoveKeycloakUserRolessAction;
/** interface for keycloak user roles state in redux store */
export interface KeycloakUserRolesState {
    userRolesById: Dictionary<KeycloakUserRole> | Dictionary;
}
/** Create an immutable keycloak user roles state */
export type ImmutableKeycloakUserRolesState = KeycloakUserRolesState & SeamlessImmutable.ImmutableObject<KeycloakUserRolesState>;
/** initial keycloak user roles state */
export declare const initialState: ImmutableKeycloakUserRolesState;
/**
 * the user roles reducer function
 *
 * @param {object} state - keycloak user roles states
 * @param {object} action - keycloak user roles actions
 * @returns {object} - the updated states
 */
export declare function reducer(state: ImmutableKeycloakUserRolesState | undefined, action: KeycloakUserRolesActionTypes): ImmutableKeycloakUserRolesState;
export interface Filters {
    id?: string[] /** get all roles whose ids appear in this array */;
    name?: string /** get user roles whose name includes text in the name field */;
    searchText?: string /** filter user roles with given text */;
}
/**
 * Gets id from Filter props
 *
 * @param _ - the redux store
 * @param props - the keycloak user role filters object
 */
export declare const getUserRolesIds: (_: Partial<Store>, props: Filters) => string[] | undefined;
/**
 * Gets name from Filter props
 *
 * @param _ - the redux store
 * @param props - the user roles filters object
 */
export declare const getRoleName: (_: Partial<Store>, props: Filters) => string | undefined;
/**
 * Gets searchText from filter props
 *
 * @param _ - the redux store
 * @param props - the user roles filters object
 */
export declare const getSearchText: (_: Partial<Store>, props: Filters) => string | undefined;
/**
 * returns all user roles in the store as values whose keys are their respective ids
 *
 * @param {any} state - the redux store
 * @returns {object} - user roles object as values, respective ids as keys
 */
export declare function getKeycloakUserRolesById(state: Partial<Store>): {
    [key: string]: KeycloakUserRole;
};
/**
 * gets keycloak user roles as an array of objects
 *
 * @param {any} state - the redux store
 * @returns {Array} - an array of user roles objs
 */
export declare function getKeycloakUserRolesArray(state: Partial<Store>): KeycloakUserRole[];
export declare const getUserRoleByName: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    id?: string[] | undefined;
    name?: string | undefined;
    searchText?: string | undefined;
}) => KeycloakUserRole[]) & import("reselect").OutputSelectorFields<(args_0: KeycloakUserRole[], args_1: string | undefined) => KeycloakUserRole[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const getKeycloakUserRolesByIds: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    id?: string[] | undefined;
    name?: string | undefined;
    searchText?: string | undefined;
}) => KeycloakUserRole[]) & import("reselect").OutputSelectorFields<(args_0: {
    [key: string]: KeycloakUserRole;
}, args_1: string[] | undefined, args_2: KeycloakUserRole[]) => KeycloakUserRole[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const makeKeycloakUserRolesSelector: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    id?: string[] | undefined;
    name?: string | undefined;
    searchText?: string | undefined;
}) => KeycloakUserRole[]) & import("reselect").OutputSelectorFields<(args_0: KeycloakUserRole[], args_1: KeycloakUserRole[], args_2: string | undefined) => KeycloakUserRole[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
