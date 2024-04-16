import { IImmunization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IImmunization';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import type { TFunction } from '@opensrp/i18n';
export declare const parseImmunization: (obj: IImmunization) => {
    status: string | undefined;
    vaccineCode: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/codeableConcept").CodeableConcept;
    occurenceDateTime: any;
    reasonCode: Coding[];
    id: string | undefined;
};
export type ImmunizationTableData = ReturnType<typeof parseImmunization>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    sorter?: undefined;
    render?: undefined;
} | {
    title: string;
    dataIndex: string;
    sorter: (accessor: string, isDate?: boolean) => (a: Record<string, unknown>, b: Record<string, unknown>) => number;
    render?: undefined;
} | {
    title: string;
    dataIndex: string;
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
    render: (value: string) => string;
} | {
    title: string;
    dataIndex: string;
    render: (value: Coding[]) => JSX.Element;
    sorter?: undefined;
})[];
