import type { IBundle } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IBundle';
/**
 * From T, convert a set of keys to optional, that are in the union K.
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
/**
 * From T, convert a set of keys to required, that are in the union K.
 */
export type Require<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
/**
 * @param bundle - a fhir resource bundle api response
 */
export declare function getResourcesFromBundle<TResource>(bundle: IBundle): TResource[];
/**
 * Function to save blob response to file
 *
 * @param {string} blob - blob data to be written to file
 * @param {string} filename - name of the file to be saved
 * @param {string} contentType - MIME type for the file
 */
export declare const downloadFile: (blob: string | Blob, filename: string, contentType?: string) => void;
/**
 * extract file name from content-disposition header.
 * matches CDHeader = attachment;(space)filename=sample-downloaded-report-file-2022-02.xlsx(;)(other-parameters)
 * where content in brackets is optional.
 * caveat is if filename itself contains a semicolon
 *
 * @param CDHeader content-disposition header
 * @returns filename extracted from content-disposition header
 */
export declare const getFileNameFromCDHHeader: (CDHeader: string) => string;
