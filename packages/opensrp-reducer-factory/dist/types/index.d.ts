import { Dictionary } from '@onaio/utils';
import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
/** creates a union types that correctly matches against keys belonging to Obj whose value is of type keyType */
export type KeysWhoseValuesAreType<Obj, KeyType> = {
    [K in keyof Obj]: Obj[K] extends KeyType ? K : never;
}[keyof Obj];
export type ItemsIdFieldType<T> = KeysWhoseValuesAreType<T, string | number>;
/** FETCHED action type */
export declare let FETCHED: string;
/** REMOVE action type */
export declare let REMOVE: string;
/** SET_TOTAL_RECORDS action type */
export declare let SET_TOTAL_RECORDS: string;
/**
 * interface for authorize action
 *  generic type - object type being handled by this function
 */
export interface FetchAction<ObjectType> extends AnyAction {
    objectsById: Dictionary<ObjectType>;
    type: typeof FETCHED;
    overwrite: boolean;
    reducerName: string;
}
/** Interface for removeAction */
export interface RemoveAction extends AnyAction {
    objectsById: Record<string, unknown>;
    type: typeof REMOVE;
    reducerName: string;
}
/** Interface for setTotalRecordsAction */
export interface SetTotalRecordsAction extends AnyAction {
    totalRecords: number;
    type: typeof SET_TOTAL_RECORDS;
    reducerName: string;
}
/** Create type for objects reducer actions */
export type ItemsActionTypes<ObjectType> = FetchAction<ObjectType> | RemoveAction | AnyAction;
/**
 * creates the action creator
 * ObjectType - generic type - object type being handled by this function
 *
 * @param {string} reducerName - generic name of reducer
 * @param {object} idField - key value whose value is more like an id for the objects,
 * this needs to be unique
 * @returns {Function} - the action creator
 */
export declare function fetchActionCreatorFactory<ObjectType>(reducerName: string, idField: ItemsIdFieldType<ObjectType>): (objectsList?: ObjectType[], overwrite?: boolean) => FetchAction<ObjectType>;
/**
 * removeAction action ; action creator factory
 *
 * @param {string} reducerName - name of reducer
 * @returns {Function} - the action creator
 */
export declare const removeActionCreatorFactory: (reducerName: string) => () => RemoveAction;
/**
 * creates actions to set total records
 *
 * @param {string} reducerName - generic name of the reducer
 * @returns {Function} - the action creator
 */
export declare function setTotalRecordsFactory(reducerName: string): (totalCount: number) => SetTotalRecordsAction;
/**
 * interface for object state in redux store
 * ObjectType - generic type - objects type being handled by this function
 */
interface ObjectState<ObjectType> {
    objectsById: {
        [key: string]: ObjectType;
    };
    totalRecords: number;
}
/**
 * Create an immutable object state
 * ObjectType - generic type - object type being handled by this function
 */
export type ImmutableObjectState<ObjectType> = ObjectState<ObjectType> & SeamlessImmutable.ImmutableObject<ObjectState<ObjectType>>;
/**
 * ObjectType - generic type - object type being handled by this function
 */
/**
 * factory function to create reducer
 *
 * @param {string} reducerName - generic reducer name
 * @param {string} fetchedActionType - custom value for action type FETCHED
 * @param {string} removeActionType - custom value for action type REMOVE
 * @param {string} setTotalRecordsActionType - custom value for action type SET_TOTAL_RECORDS
 * @returns {object} - the state
 */
export declare const reducerFactory: <ObjectType>(reducerName: string, fetchedActionType?: string, removeActionType?: string, setTotalRecordsActionType?: string) => (state: ImmutableObjectState<ObjectType> | undefined, action: ItemsActionTypes<ObjectType>) => ImmutableObjectState<ObjectType>;
/**
 * factory function that creates selector
 *  ObjectType - generic type - object type being handled by this function
 *
 *  @param {string} reducerName - the reducerName
 *  @returns {Function} - function that returns the state
 */
export declare const getItemsByIdFactory: <ObjectType>(reducerName: string) => (state: Partial<Store>) => Dictionary<ObjectType>;
/**
 * factory function that creates selector
 *
 * @param {string} reducerName - name of the reducer
 * @returns {Function} - an array of object type being handled by this function
 */
export declare const getItemsArrayFactory: <ObjectType>(reducerName: string) => (state: Partial<Store>) => ObjectType[];
/**
 * factory function that creates selector
 *
 * @param {string} reducerName -  name of reducer
 * @returns {Function} - object type being handled by this function
 */
export declare const getItemByIdFactory: <ObjectType>(reducerName: string) => (state: Partial<Store>, id: string) => ObjectType | null;
/**
 * factory function that creates selector
 *
 * @param {string} reducerName -  name of reducer
 * @returns {Function} - function that returns the total number of records
 */
export declare const getTotalRecordsFactory: (reducerName: string) => (state: Partial<Store>) => number;
export {};
