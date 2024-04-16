import { Store } from 'redux';
import { Dictionary } from '@onaio/utils';
interface APIFilters {
    accessToken?: boolean;
    apiToken?: boolean;
    providerState?: boolean;
}
/**
 * Fetch access token from store if access_token filter val is true
 *
 * @param {object} _ - redux store
 * @param {object} props - api filters object
 * @returns {boolean} returns boolean value
 */
export declare const fetchAccessToken: (_: Partial<Store>, props: APIFilters) => boolean | null;
/**
 * Fetch api token from store if api_token filter val is true
 *
 * @param {object} _ redux store
 * @param {object} props api filters object
 * @returns {boolean} returns boolean value
 */
export declare const fetchApiToken: (_: Partial<Store>, props: APIFilters) => boolean | null;
/**
 * Fetch oauth provider state from store if providerState filter val is true
 *
 * @param {Object} _ redux store
 * @param {Object} props api filters object
 * @returns {boolean} returns boolean value
 */
export declare const fetchOauthProviderState: (_: Partial<Store>, props: APIFilters) => boolean | null;
/**
 * Gets extra data object from store
 *
 * @param {object} state - redux store
 * @returns {Object}
 */
export declare const getExtraData: (state: Partial<Store>) => Dictionary;
/**
 * API state selector
 *
 * @returns {Object} - the states
 */
export declare const makeAPIStateSelector: () => ((state: {
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, import("redux").AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    accessToken?: boolean | undefined;
    apiToken?: boolean | undefined;
    providerState?: boolean | undefined;
}) => any) & import("reselect").OutputSelectorFields<(args_0: boolean | null, args_1: boolean | null, args_2: boolean | null, args_3: Dictionary<any>) => any> & {
    clearCache: () => void;
};
export {};
