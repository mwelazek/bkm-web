import { IBundle } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IBundle';
import { URLParams } from '@opensrp/server-service';
import { HumanName } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/humanName';
/**
 * retrieve object(s) from an array if it has a given property that has a specified value
 *
 * @param objArr - array of objects
 * @param key - the accessor
 * @param value - the value the accessor should have
 * @param all - whether to return all values that are matched or just the first
 */
export declare const getObjLike: <T extends object>(objArr: T[] | undefined, key: string, value: unknown, all?: boolean) => T[];
export declare enum IdentifierUseCodes {
    USUAL = "usual",
    OFFICIAL = "official",
    TEMP = "temp",
    SECONDARY = "secondary",
    OLD = "old"
}
/**
 * fetch all resources for a certain endpoint
 *
 * @param baseUrl - the fhir server url
 * @param resourceType - the resource type
 * @param extraFilters - extra filters
 */
export declare const loadAllResources: (baseUrl: string, resourceType: string, extraFilters?: URLParams) => Promise<IBundle>;
/**
 *  return a single string representing FHIR human name data type
 *
 * @param hName - fhir HumanName object
 */
export declare const parseFhirHumanName: (hName?: HumanName) => string | undefined;
