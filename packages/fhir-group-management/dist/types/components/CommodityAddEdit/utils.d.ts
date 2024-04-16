import { IGroup } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IGroup';
import { IList } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IList';
import { Rule } from 'rc-field-form/lib/interface';
import { active, id, identifier, type, unitOfMeasure, name } from '../../constants';
import type { TFunction } from '@opensrp/i18n';
export declare enum UnitOfMeasure {
    Pieces = "Pieces",
    Tablets = "Tablets",
    Ampoules = "Ampoules",
    Strips = "Strips",
    Cycles = "Cycles",
    Bottles = "Bottles",
    TestKits = "Test kits",
    Sachets = "Sachets",
    Straps = "Straps"
}
export declare enum TypeOfGroup {
    Medication = "medication",
    Decive = "device"
}
export interface GroupFormFields {
    [id]?: string;
    [identifier]?: string;
    [active]?: boolean;
    [name]?: string;
    [type]?: string;
    [unitOfMeasure]?: IGroup['type'];
    initialObject?: IGroup;
}
export declare const defaultCharacteristic: {
    code: {
        coding: {
            system: string;
            code: string;
            display: string;
        }[];
    };
    valueCodeableConcept: {
        coding: {
            system: string;
            code: string;
            display: string;
        }[];
        text: undefined;
    };
};
export declare const defaultCode: {
    coding: {
        system: string;
        code: string;
        display: string;
    }[];
};
/**
 * factory for validation rules for GroupForm component
 *
 * @param t - the translator function
 */
export declare const validationRulesFactory: (t: TFunction) => {
    id: Rule[];
    identifier: Rule[];
    name: Rule[];
    active: Rule[];
    type: Rule[];
    unitOfMeasure: Rule[];
};
/**
 * Converts group resource to initial values
 *
 * @param obj - the group resource
 */
export declare const getGroupFormFields: (obj?: IGroup) => GroupFormFields;
/**
 * Regenerates group payload from form values
 *
 * @param values - form values
 * @param initialValues - initial form values
 */
export declare const generateGroupPayload: (values: GroupFormFields, initialValues: GroupFormFields) => IGroup;
export interface SelectOption {
    value: string;
    label: string;
}
/**
 * get select options for group types
 *
 */
export declare const getGroupTypeOptions: () => {
    value: TypeOfGroup;
    label: string;
}[];
/**
 * get select options for group units of measure
 *
 */
export declare const getUnitOfMeasureOptions: () => {
    value: UnitOfMeasure;
    label: string;
}[];
/**
 * filter select options
 *
 * @param inputValue search term
 * @param option select option to filter against
 */
export declare const groupSelectfilterFunction: (inputValue: string, option?: SelectOption) => boolean;
/**
 * either posts or puts a group resource payload to fhir server
 *
 * @param baseUrl - server base url
 * @param payload - the organization payload
 */
export declare const postPutGroup: (baseUrl: string, payload: IGroup) => Promise<IGroup>;
/**
 * Gets list resource for given id, create it if it does not exist
 *
 * @param baseUrl - api base url
 * @param listId - list id
 */
export declare function getOrCreateList(baseUrl: string, listId: string): Promise<IList>;
/**
 * @param baseUrl - the api base url
 * @param listId - list resource id to add the group to
 */
export declare const updateListReferencesFactory: (baseUrl: string, listId: string) => (group: IGroup, edited: boolean) => Promise<IList | undefined>;
/**
 * Creates a very specific list resource that will curate a set of commodities to be used on the client.
 * This is so that the list resource can then be used when configuring the fhir mobile client
 *
 * @param id - externally defined id that will be the id of the new list resource
 */
export declare function createSupplyManagementList(id: string): IList;
