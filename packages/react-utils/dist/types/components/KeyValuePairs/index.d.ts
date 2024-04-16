/// <reference types="react" />
import './index.css';
type KeyValuePairs = Record<string, string | number | boolean | JSX.Element>;
export declare const KeyValueGrid: (props: KeyValuePairs) => JSX.Element;
/**
 * Use for single key value pair
 *
 * @param props - key value pair map
 */
export declare const SingleKeyNestedValue: (props: KeyValuePairs) => JSX.Element | null;
/**
 * Dryed out util for displaying keyValue ui for an obj
 *
 * @param obj - obj with info to be displayed
 */
export declare const renderObjectAsKeyvalue: (obj: Record<string, unknown>) => JSX.Element;
export {};
