/**
 * store location hierarchy information
 * - should be able to add a tree model
 * - modify the tree model in a manner such that shallow comparison would yield false
 * - provide the selectors
 */
import { Dictionary } from '@onaio/utils';
import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
import { RawOpenSRPHierarchy, TreeNode } from './types';
/** reducer name for hierarchy reducer */
export declare const hierarchyReducerName = "locationHierarchy";
/** action to add a tree to store */
export declare const TREE_FETCHED = "opensrp/locations/hierarchy/TREE_FETCHED";
/** remove trees */
export declare const DEFOREST = "opensrp/locations/hierarchy/DEFOREST";
/** describes action that adds a tree to store */
export interface FetchedTreeAction extends AnyAction {
    type: typeof TREE_FETCHED;
    treeByRootId: Dictionary<TreeNode>;
}
/** describes action to remove all trees */
export interface DeforestAction extends AnyAction {
    type: typeof DEFOREST;
    treeByRootId: Record<string, any>;
}
/** combined full action types | its a union */
export type TreeActionTypes = FetchedTreeAction | DeforestAction | AnyAction;
/**
 * action creator when adding a tree to store
 *
 * @param apiResponse - the raw hierarchy as received from opensrp
 * @param treeId - the treeId to use while saving to the store
 */
export declare function fetchTree(apiResponse: RawOpenSRPHierarchy, treeId?: string | null): FetchedTreeAction;
/** clear all the trees */
export declare function deforest(): DeforestAction;
/**
  The store's slice state
 */
export interface TreeState {
    treeByRootId: Dictionary<TreeNode> | Record<string, any>;
}
/** Create an immutable tree state */
export type ImmutableTreeState = TreeState & SeamlessImmutable.ImmutableObject<TreeState>;
/** starting state */
export declare const initialState: ImmutableTreeState;
/**
 *
 * @param {Dictionary} state - the store
 * @param {AnyAction} action - the redux action
 * @returns {object} - updated state
 */
export declare function hierarchyReducer(state: Dictionary<any> | ImmutableTreeState | undefined, action: TreeActionTypes): Dictionary<any> | ImmutableTreeState;
/** prop filters to customize selector queries */
export interface Filters {
    rootJurisdictionId?: string[] /** specify which tree to act upon, undefined allows all */;
    geoLevel?: number /** get locations at the specified level */;
    searchQuery?: string /** search query to filter nodes against, by name and id */;
}
/**
 * retrieve the rootJurisdiction value
 *
 * @param _ - the store
 * @param props -  the filterProps
 */
export declare const getRootJurisdictionId: (_: Partial<Store>, props: Filters) => string[] | undefined;
/**
 * retrieve the geoLevel value
 *
 * @param _ - the store
 * @param props -  the filterProps
 */
export declare const getGeoLevel: (_: Partial<Store>, props: Filters) => number | undefined;
/**
 * retrieve the geoLevel value
 *
 * @param _ - the store
 * @param props -  the filterProps
 */
export declare const getSearchQuery: (_: Partial<Store>, props: Filters) => string | undefined;
/**
 * gets all trees key'd by the rootNodes id
 *
 * @param state - the store
 * @param _ -  the filterProps
 */
export declare const getTreesByRootId: (state: Partial<Store>, _: Filters) => Dictionary<TreeNode>;
/** factory that returns a selector to retrieve the tree(s) using their rootNode's ids */
export declare const getTreesByIds: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    rootJurisdictionId?: string[] | undefined;
    geoLevel?: number | undefined;
    searchQuery?: string | undefined;
}) => TreeNode[]) & import("reselect").OutputSelectorFields<(args_0: Dictionary<TreeNode>, args_1: string[] | undefined) => TreeNode[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * factory that returns a selector to retrieve the tree(s) using their rootNode's ids
 * the selector will return all nodes if geographic level is undefined
 */
export declare const getLocationsByLevel: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    rootJurisdictionId?: string[] | undefined;
    geoLevel?: number | undefined;
    searchQuery?: string | undefined;
}) => TreeNode[]) & import("reselect").OutputSelectorFields<(args_0: TreeNode[], args_1: number | undefined) => TreeNode[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * factory that returns a selector that can be used to filter the nodes by either their
 * labels or ids
 */
export declare const getLocationsByNameAndId: () => ((state: {
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    rootJurisdictionId?: string[] | undefined;
    geoLevel?: number | undefined;
    searchQuery?: string | undefined;
}) => TreeNode[]) & import("reselect").OutputSelectorFields<(args_0: TreeNode[], args_1: string | undefined) => TreeNode[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
