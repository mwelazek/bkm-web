import { IMedication } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IMedication';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import { Reference } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/reference';
import type { TFunction } from '@opensrp/i18n';
export declare const parseMedication: (obj: IMedication) => {
    status: string | undefined;
    code: Coding[];
    manufacturer: Reference | undefined;
    id: string | undefined;
};
export type MedicationTableData = ReturnType<typeof parseMedication>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    render?: undefined;
    value?: undefined;
} | {
    title: string;
    dataIndex: string;
    render: (value: Coding[]) => JSX.Element;
    value?: undefined;
} | {
    title: string;
    dataIndex: string;
    value: (value: Reference | undefined) => string | undefined;
    render?: undefined;
})[];
