import { ILocation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ILocation';
/**
 * Convert a hierarchy from flat to nested representation.
 *
 * @param {Array} locations The array with the hierachy flat representation.
 */
export declare function nestLocations(locations: ILocation[]): {
    nodeId: string;
    label: string;
    node: ILocation;
}[];
