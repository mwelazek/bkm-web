/// <reference types="react" />
import { Period } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/period';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import { Column } from '@opensrp/react-utils';
import type { GenericWithKey } from '@opensrp/react-utils';
import { CodeableConcept } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/codeableConcept';
/**
 * Abstracts sort functionality for dates as strings
 *
 * @param accessor - the key name
 * @param isDate - if the string represents a date
 */
export declare const sorterFn: (accessor: string, isDate?: boolean) => (a: Record<string, unknown>, b: Record<string, unknown>) => number;
/**
 * Abstracts how to render a Fhir Period data type
 *
 * @param props - Period object
 */
export declare const FhirPeriod: (props: Period) => JSX.Element;
/**
 * Abstracts how Codings will be rendered
 *
 * @param root0 - props
 * @param root0.codings -  the codings
 */
export declare const FhirCodesTooltips: ({ codings }: {
    codings?: Coding[] | undefined;
}) => JSX.Element;
/**
 * normalize codeCodeable concept representation
 *
 * @param concepts - codecodeableConcept
 */
export declare const getCodeableConcepts: (concepts?: CodeableConcept[] | CodeableConcept) => Coding[];
interface PatientDetailsTableProps<T, ParsedType> {
    resources: T[];
    parseResource: (resource: T) => ParsedType;
    columns: Column<ParsedType>[];
}
/**
 * Renders simple table
 *
 * @param props - component props
 */
export declare function PatientDetailsTable<T, ParsedType extends GenericWithKey>(props: PatientDetailsTableProps<T, ParsedType>): JSX.Element;
export {};
