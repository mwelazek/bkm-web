import { fetchLocationUnits, LocationUnit } from '../ducks/location-units';
import { fetchTree } from '../ducks/locationHierarchy';
import { RawOpenSRPHierarchy } from '../ducks/locationHierarchy/types';
import { URLParams } from '@opensrp/server-service';
import { LocationUnitGroup } from '../ducks/location-unit-groups';
/** Abstract 2 functions; get jurisdiction at any geo-level, get hierarchy */
/** hierarchy params */
export interface LoadHierarchyParams {
    return_structure_count?: boolean;
}
export declare const defaultHierarchyParams: LoadHierarchyParams;
/**
 * get the jurisdiction Tree given the rootJurisdiction Id
 *
 * @param rootJurisdictionId - id of top level jurisdiction
 * @param dispatcher - dispatches an action to add hierarchy to store
 * @param openSRPBaseURL - base url
 * @param urlParams - parameters to add to request
 */
export declare function loadHierarchy(rootJurisdictionId: string, dispatcher?: typeof fetchTree, openSRPBaseURL?: string, urlParams?: LoadHierarchyParams): Promise<RawOpenSRPHierarchy | undefined>;
/** URL params for load jurisdiction request */
export interface GetLocationParams {
    is_jurisdiction?: boolean;
    return_geometry?: boolean;
    properties_filter?: string;
}
export declare const defaultGetLocationParams: GetLocationParams;
/** filter params to be added as value of properties_filter url param */
export interface ParamFilters {
    status?: string;
    geographicLevel?: number;
}
export declare const defaultParamFilters: ParamFilters;
/**
 * loader function to get jurisdictions by geographic level
 *
 * @param dispatcher - called with response, adds data to store
 * @param openSRPBaseURL - the openSRP api base url
 * @param urlParams - search params to be added to request
 * @param filterParams - filterParams for property_filter search_param
 * @param endpoint - the openSRP endpoint
 * @param filterByParentId - boolean to filter by parentId properties filter
 */
export declare function loadJurisdictions(dispatcher?: typeof fetchLocationUnits, openSRPBaseURL?: string, urlParams?: GetLocationParams, filterParams?: ParamFilters, endpoint?: string, filterByParentId?: boolean): Promise<LocationUnit[] | undefined>;
export declare const defaultSettingsParams: {
    serverVersion: string;
};
/**
 * request to get service points from settings
 *
 * @param settingsIdentifier - id for settings to query from api
 * @param baseURL - the openSRP api base url
 * @param callback - callback to call with resolved response
 * @param params - extra params to add to request
 */
export declare function loadSettings<T>(settingsIdentifier: string, baseURL: string, callback?: (data: T[]) => void, params?: URLParams): Promise<void>;
/**
 * gets location tags from the api
 *
 * @param baseURL - openSRP base url
 * @param callback - callback to call with response data
 */
export declare function loadLocationTags(baseURL: string, callback?: (data: LocationUnitGroup[]) => void): Promise<void>;
export declare const defaultPostLocationParams: {
    is_jurisdiction: boolean;
};
/**
 * @param payload - the payload
 * @param openSRPBaseURL -  base url of api
 * @param isEdit - help decide whether to post or put plan
 * @param params - params to add to url
 */
export declare function postPutLocationUnit(payload: LocationUnit, openSRPBaseURL?: string, isEdit?: boolean, params?: URLParams): Promise<Record<string, unknown>>;
/**
 * loader function to get jurisdictions by id
 *
 * @param locId - the string
 * @param dispatcher - called with response, adds data to store
 * @param openSRPBaseURL - the openSRP api base url
 * @param urlParams - search params to be added to request
 */
export declare function loadJurisdiction(locId: string, dispatcher?: (loc: LocationUnit | null) => void, openSRPBaseURL?: string, urlParams?: GetLocationParams): Promise<LocationUnit | null>;
