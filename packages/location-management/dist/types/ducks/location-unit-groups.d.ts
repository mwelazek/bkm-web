/** interface for location Unit Group */
export interface LocationUnitGroup {
    id: number;
    active: boolean;
    name: string;
    description: string;
}
export interface LocationUnitGroupPayloadPOST {
    active: boolean;
    name: string;
    description: string;
}
export interface LocationUnitGroupPayloadPUT extends LocationUnitGroupPayloadPOST {
    id: string;
}
/** reducer name for the Item module */
export declare const reducerName = "location-unit-groups";
/** Item Reducer */
export declare const reducer: (state: import("@opensrp/reducer-factory").ImmutableObjectState<LocationUnitGroup> | undefined, action: import("@opensrp/reducer-factory").ItemsActionTypes<LocationUnitGroup>) => import("@opensrp/reducer-factory").ImmutableObjectState<LocationUnitGroup>;
/** actionCreator returns action to to add Item records to store */
export declare const fetchLocationUnitGroups: (objectsList?: LocationUnitGroup[] | undefined, overwrite?: boolean | undefined) => import("@opensrp/reducer-factory").FetchAction<LocationUnitGroup>;
export declare const removeLocationUnitGroups: () => import("@opensrp/reducer-factory").RemoveAction;
export declare const setTotalLocationunitgroups: (totalCount: number) => import("@opensrp/reducer-factory").SetTotalRecordsAction;
export declare const getLocationUnitGroupsById: (state: Partial<import("redux").Store<any, import("redux").AnyAction>>) => import("@onaio/utils").Dictionary<LocationUnitGroup>;
export declare const getLocationUnitGroupById: (state: Partial<import("redux").Store<any, import("redux").AnyAction>>, id: string) => LocationUnitGroup | null;
export declare const getLocationUnitGroupsArray: (state: Partial<import("redux").Store<any, import("redux").AnyAction>>) => LocationUnitGroup[];
export declare const getTotalLocationUnitGroups: (state: Partial<import("redux").Store<any, import("redux").AnyAction>>) => number;
export default reducer;
