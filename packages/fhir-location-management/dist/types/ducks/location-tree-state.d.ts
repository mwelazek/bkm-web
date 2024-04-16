/**
  simple store to track state of selected nodes
 */
import { Dictionary } from '@onaio/utils';
import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
import { TreeNode } from '../helpers/types';
/** reducer name for hierarchy reducer */
export declare const reducerName = "location-tree-state";
/** action to add a tree state to store */
export declare const SET_LOCATION_TREE_STATE: string;
export interface LocationTreeState {
    selectedNode?: TreeNode;
}
/** describes action that saves the selectedNode to store */
export interface SetSelectedNode extends AnyAction {
    type: typeof SET_LOCATION_TREE_STATE;
    selectedNode?: TreeNode;
}
/** combined full action types | its a union */
export type TreeActionTypes = SetSelectedNode | AnyAction;
/**
 * action creator when adding the selectedNode to store
 *
 * @param node - the selectedNode
 * @returns - action object
 */
export declare function setSelectedNode(node?: TreeNode): SetSelectedNode;
/** Create an immutable tree state */
export type ImmutableTreeState = LocationTreeState & SeamlessImmutable.ImmutableObject<LocationTreeState>;
/** starting state */
export declare const initialState: ImmutableTreeState;
/**
 *
 * @param {Dictionary} state - the store
 * @param {AnyAction} action - the redux action
 * @returns {object} - updated state
 */
export declare function reducer(state: Dictionary<any> | ImmutableTreeState | undefined, action: TreeActionTypes): Dictionary<any> | ImmutableTreeState;
/**
 * retrieves the stored selected node
 *
 * @param state - the store
 */
export declare const getSelectedNode: (state: Partial<Store>) => TreeNode | undefined;
