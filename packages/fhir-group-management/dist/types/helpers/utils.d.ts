import { IGroup } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IGroup';
/**
 * given group resource get characteristic whose coding matches certain system and code params
 *
 * @param obj -  the group resource
 */
export declare const getUnitMeasureCharacteristic: (obj: IGroup) => import("@smile-cdr/fhirts/dist/FHIR-R4/classes/groupCharacteristic").GroupCharacteristic | undefined;
export declare const snomedCodeSystem = "http://snomed.info/sct";
export declare const supplyMgSnomedCode = "386452003";
export declare const characteristicUnitMeasureCode = "767524001";
