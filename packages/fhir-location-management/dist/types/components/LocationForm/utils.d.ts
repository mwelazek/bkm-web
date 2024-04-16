import { Dictionary } from '@onaio/utils';
import { Rule } from 'rc-field-form/lib/interface';
import { TreeNode } from '../../helpers/types';
import { DataNode } from 'rc-tree-select/lib/interface';
import { IfhirR4 } from '@smile-cdr/fhirts';
import { ILocation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ILocation';
import { LocationUnitStatus } from '../../helpers/types';
import type { TFunction } from '@opensrp/i18n';
export type ExtraFields = Dictionary;
/** describes known fields that the form will have */
export interface LocationFormFields {
    id?: string;
    name: string;
    status: LocationUnitStatus;
    parentId?: string;
    description?: string;
    alias?: string;
    isJurisdiction: boolean;
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
 * @param parentId - parent node id
 */
export declare const getLocationFormFields: (location?: IfhirR4.ILocation, parentId?: string) => LocationFormFields;
/**
 * util method to generate a location unit payload from form values
 *
 * @param formValues - values from the form
 * @param initialValues - initial values
 * @param parentNode - parent node of created location
 */
export declare const generateLocationUnit: (formValues: LocationFormFields, initialValues: LocationFormFields, parentNode?: TreeNode) => IfhirR4.ILocation;
/**
 * factory for validation rules for LocationForm component
 *
 * @param t - language translator
 */
export declare const validationRulesFactory: (t: TFunction) => {
    id: Rule[];
    parentId: Rule[];
    name: Rule[];
    alias: Rule[];
    status: Rule[];
    isJurisdiction: Rule[];
    description: Rule[];
};
/**
 * generates tree select options
 *
 * @param trees - an array of parsed trees
 * @param parentIdDisabledCallback - callback to help determine disabled status of nodes in treeSelect
 */
export declare const treeToOptions: (trees: TreeNode[], parentIdDisabledCallback?: ((node: TreeNode) => boolean) | undefined) => DataNode[];
/**
 * @param payload - the payload
 * @param baseUrl -  base url of api
 */
export declare function postPutLocationUnit(payload: ILocation, baseUrl: string): Promise<IfhirR4.ILocation>;
export {};
