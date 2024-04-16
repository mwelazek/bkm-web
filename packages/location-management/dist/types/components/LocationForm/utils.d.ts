import { Dictionary } from '@onaio/utils';
import { LocationUnit, LocationUnitStatus, LocationUnitTag } from '../../ducks/location-units';
import { Rule } from 'rc-field-form/lib/interface';
import { TreeNode } from '../../ducks/locationHierarchy/types';
import { DataNode } from 'rc-tree-select/lib/interface';
import { Geometry } from 'geojson';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import { GetSelectedFullData } from './CustomSelect';
import type { TFunction } from '@opensrp/i18n';
export declare enum FormInstances {
    CORE = "core",
    EUSM = "eusm"
}
export type ExtraFields = Dictionary;
/** describes known fields that the form will have */
export interface LocationFormFields {
    instance?: FormInstances;
    id?: string;
    name: string;
    status: LocationUnitStatus;
    parentId?: string;
    externalId?: string;
    locationTags?: number[];
    geometry?: string;
    isJurisdiction: boolean;
    serviceType?: string;
    extraFields: ExtraFields[];
    username?: string;
    latitude?: string;
    longitude?: string;
}
interface BaseSetting {
    key: string;
    description: string;
    uuid: string;
    settingsId: string;
    settingIdentifier: string;
    settingMetadataId: string;
    v1Settings: false;
    resolveSettings: false;
    documentId: string;
    serverVersion: number;
}
/** describes a single settings object as received from location settings api */
export interface LocationSetting extends BaseSetting {
    label: string;
}
/** describes a single settings object as received from service types settings api */
export interface ServiceTypeSetting extends BaseSetting {
    value: string;
}
export declare const defaultFormField: LocationFormFields;
/**
 * helps compute the default values of the location form field values
 *
 * @param location - the location unit
 * @param instance - the form instance
 * @param isJurisdiction - whether location is jurisdiction or structure
 */
export declare const getLocationFormFields: (location?: LocationUnit, instance?: FormInstances, isJurisdiction?: boolean) => LocationFormFields;
/**
 * removes empty undefined and null objects before they payload is sent to server
 *
 * @param {Dictionary} obj object to remove empty keys from
 */
export declare function removeEmptykeys(obj: Dictionary): void;
/**
 * util method to generate a location unit payload from form values
 *
 * @param formValues - values from the form
 * @param nameOfUser - the name of the user
 * @param selectedTags - the selected location tags
 * @param parentNode - selected node to be the parent node
 */
export declare const generateLocationUnit: (formValues: LocationFormFields, nameOfUser?: string, selectedTags?: LocationUnitTag[], parentNode?: TreeNode) => LocationUnit;
/**
 * service types options from settings
 *
 * @param data - the settings array to convert to select options
 */
export declare function getServiceTypeOptions(data: ServiceTypeSetting[]): {
    value: string;
    label: string;
}[];
/**
 * factory for validation rules for LocationForm component
 *
 * @param t - language translation string obj lookup
 */
export declare const validationRulesFactory: (t: TFunction) => {
    instance: Rule[];
    id: Rule[];
    parentId: Rule[];
    name: Rule[];
    status: Rule[];
    type: Rule[];
    externalId: Rule[];
    locationTags: Rule[];
    geometry: Rule[];
    isJurisdiction: Rule[];
    serviceTypes: Rule[];
    longitude: Rule[];
    latitude: Rule[];
    extraFields: {
        required: boolean;
    }[];
};
/**
 * gets location tag options for location form location tags select field
 *
 * @param tags - location unit tags
 */
export declare const getLocationTagOptions: (tags: LocationUnitTag[]) => {
    label: string;
    value: number;
}[];
/**
 * method to get the full Location tag object once user selects an option in the select dropdown,
 * once the user selects, you only get the id of the selected object, this function will be called
 * to get the full location Tag.
 *
 * @param data - the full data objects
 * @param getOptions - function used to get the options tos how on the dropdown
 * @param value - selected value (an array for multi select otherwise a string)
 */
export declare const getSelectedLocTagObj: GetSelectedFullData<LocationUnitTag>;
/**
 * generates tree select options
 *
 * @param trees - an array of parsed trees
 * @param parentIdDisabledCallback - callback to help determine disabled status of nodes in treeSelect
 */
export declare const treeToOptions: (trees: TreeNode[], parentIdDisabledCallback?: ((node: TreeNode) => boolean) | undefined) => DataNode[];
/**
 * validate coordinates, returns true only if coordinates belong to a point
 *
 * @param geoJson - the geojson object
 */
export declare const cordIsPoint: (geoJson?: Partial<Geometry>) => boolean;
export declare const getPointCoordinates: (geoText: string) => {
    longitude?: undefined;
    latitude?: undefined;
} | {
    longitude: string | undefined;
    latitude: string | undefined;
};
/**
 * handles form values change , creates a values change handler that listens for
 * changes to geometry, latitude and longitude and syncs changes across the 3 fields
 *
 * @param form - the form instance
 */
export declare const handleGeoFieldsChangeFactory: (form: FormInstance) => (changedValues: Partial<LocationFormFields>, allValues: LocationFormFields) => void;
export {};
