import { Dictionary } from '@onaio/utils';
import { IPatient } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPatient';
/**
 * util to extract patient name
 *
 * @param patient - patient object
 * @returns {string[]} - returns an array of name strings
 */
export declare function getPatientName(patient?: IPatient): string | undefined;
/**
 * Walks thru an object (ar array) and returns the value found at the provided
 * path. This function is very simple so it intentionally does not support any
 * argument polymorphism, meaning that the path can only be a dot-separated
 * string. If the path is invalid returns undefined.
 *
 * @param {Object} obj The object (or Array) to walk through
 * @param {string} path The path (eg. "a.b.4.c")
 * @returns {*} Whatever is found in the path or undefined
 */
export declare function getPath(obj: Dictionary, path?: string): Dictionary<any>;
/**
 * Function to get observation label
 *
 * @param {Object} obj - resource object
 * @returns {string} - returns label string
 */
export declare function getObservationLabel(obj: Dictionary): string;
/**
 * Function to get observation value quantity
 *
 * @param {Object} obj - resource object
 * @returns {string} - returns value string
 */
export declare function buildObservationValueString(obj: Dictionary): string;
