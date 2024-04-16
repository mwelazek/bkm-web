import { IProcedure } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IProcedure';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import type { TFunction } from '@opensrp/i18n';
export declare const parseProcedure: (obj: IProcedure) => {
    type: Coding[];
    status: string | undefined;
    performedDateTime: string | undefined;
    procedure: Coding[];
};
export type ProcedureTableData = ReturnType<typeof parseProcedure>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    sorter?: undefined;
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
