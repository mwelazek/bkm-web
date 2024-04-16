import { Dictionary } from '@onaio/utils';
import { Geometry } from 'geojson';
import { Store } from 'redux';
/** interface for extra fields in location properties */
export interface ExtraField {
    key: string;
    value?: string | number;
    label?: string;
    description?: string;
    type: 'email' | 'number' | 'password' | 'text' | 'time' | 'url';
    uuid: string;
    settingsId: string;
    settingIdentifier: string;
    settingMetadataId: string;
    v1Settings: boolean;
    resolveSettings: boolean;
    documentId: string;
    serverVersion: number;
}
/** Enum representing the possible location unit status types */
export declare enum LocationUnitStatus {
    ACTIVE = "Active",
    INACTIVE = "InActive"
}
export declare enum LocationUnitSyncStatus {
    SYNCED = "Synced",
    NOTSYNCED = "NotSynced"
}
/** interface for LocationUnit.properties */
export interface Properties extends Dictionary<string | number | LocationUnitStatus | undefined | string[] | number[]> {
    name: string;
    parentId: string;
    status: LocationUnitStatus;
    geographicLevel?: number;
    username?: string;
    version?: number;
    name_en?: string;
    externalId?: string;
    type?: string;
}
/** location unit tag interface */
export interface LocationUnitTag {
    id: number;
    name: string;
}
/** location interface */
export interface LocationUnit {
    id: string;
    properties: Properties;
    type: string;
    locationTags?: LocationUnitTag[];
    geometry?: Geometry;
    syncStatus?: LocationUnitSyncStatus;
    parentId?: string;
    serverVersion?: number;
    isJurisdiction?: boolean;
}
/** reducer name for the Item module */
export declare const locationUnitsReducerName = "location-units";
/** Item Reducer */
export declare const locationUnitsReducer: (state: import("@opensrp/reducer-factory").ImmutableObjectState<LocationUnit> | undefined, action: import("@opensrp/reducer-factory").ItemsActionTypes<LocationUnit>) => import("@opensrp/reducer-factory").ImmutableObjectState<LocationUnit>;
/** actionCreator returns action to to add Item records to store */
export declare const defaultFetchLocations: (objectsList?: LocationUnit[] | undefined, overwrite?: boolean | undefined) => import("@opensrp/reducer-factory").FetchAction<LocationUnit>;
/**
 * action creator to add locations to store,
 *
 * @param locations - the location objects
 * @param isJurisdiction - if the location is a jurisdiction or structure
 */
export declare const fetchLocationUnits: (locations?: LocationUnit[], isJurisdiction?: boolean) => import("@opensrp/reducer-factory").FetchAction<LocationUnit>;
export declare const removeLocationUnits: () => import("@opensrp/reducer-factory").RemoveAction;
export declare const setTotalLocationUnits: (totalCount: number) => import("@opensrp/reducer-factory").SetTotalRecordsAction;
export declare const getLocationUnitsById: (state: Partial<Store<any, import("redux").AnyAction>>) => Dictionary<LocationUnit>;
export declare const getLocationUnitById: (state: Partial<Store<any, import("redux").AnyAction>>, id: string) => LocationUnit | null;
export declare const getLocationUnitsArray: (state: Partial<Store<any, import("redux").AnyAction>>) => LocationUnit[];
export declare const getTotalLocationUnits: (state: Partial<Store<any, import("redux").AnyAction>>) => number;
/**  prop filters for the selectors */
export interface LocationUnitSelectFilters {
    searchQuery?: string;
    isJurisdiction?: boolean;
    ids?: string[];
}
/**
 * non-memoized selector that returns the locationUnit array
 *
 * @param state - the store
 */
export declare const locationsByIdsSelector: (state: Partial<Store>) => Dictionary<LocationUnit>;
/**
 * memoized selector to get the location units array from their ids object
 */
export declare const locationsArraySelector: ((state: {
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, import("redux").AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}) => LocationUnit[]) & import("reselect").OutputSelectorFields<(args_0: Dictionary<LocationUnit>) => LocationUnit[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/** get locations depending on the isJurisdiction status */
export declare const getLocationsIfJurisdiction: () => ((state: {
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, import("redux").AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    searchQuery?: string | undefined;
    isJurisdiction?: boolean | undefined;
    ids?: string[] | undefined;
}) => LocationUnit[]) & import("reselect").OutputSelectorFields<(args_0: LocationUnit[], args_1: boolean | undefined) => LocationUnit[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/** get structures(locations with isJurisdiction = false) filterable by search text */
export declare const getLocationsBySearch: () => ((state: {
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, import("redux").AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    searchQuery?: string | undefined;
    isJurisdiction?: boolean | undefined;
    ids?: string[] | undefined;
}) => LocationUnit[]) & import("reselect").OutputSelectorFields<(args_0: LocationUnit[], args_1: string | undefined) => LocationUnit[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/** get locations by their ids */
export declare const getLocationByIds: () => ((state: {
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, import("redux").AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    searchQuery?: string | undefined;
    isJurisdiction?: boolean | undefined;
    ids?: string[] | undefined;
}) => LocationUnit[]) & import("reselect").OutputSelectorFields<(args_0: Dictionary<LocationUnit>, args_1: LocationUnit[], args_2: string[] | undefined) => LocationUnit[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/** main selector, combines the other selectors into one. */
export declare const getLocationsByFilters: () => ((state: {
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    getState?: (() => any) | undefined;
    subscribe?: ((listener: () => void) => import("redux").Unsubscribe) | undefined;
    replaceReducer?: ((nextReducer: import("redux").Reducer<any, import("redux").AnyAction>) => void) | undefined;
    [Symbol.observable]?: (() => import("redux").Observable<any>) | undefined;
}, params_0: {
    searchQuery?: string | undefined;
    isJurisdiction?: boolean | undefined;
    ids?: string[] | undefined;
}) => LocationUnit[]) & import("reselect").OutputSelectorFields<(args_0: LocationUnit[], args_1: LocationUnit[], args_2: LocationUnit[]) => LocationUnit[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
