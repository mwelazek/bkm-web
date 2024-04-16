import { IMedicationRequest } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IMedicationRequest';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import type { TFunction } from '@opensrp/i18n';
export declare const parseMedicationRequest: (obj: IMedicationRequest) => {
    authoredOn: Date | undefined;
    id: string | undefined;
    reasonCodes: Coding[];
};
export type MeidationRequestTableData = ReturnType<typeof parseMedicationRequest>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    render?: undefined;
    sorter?: undefined;
} | {
    title: string;
    dataIndex: string;
    render: (value: Coding[]) => JSX.Element;
    sorter?: undefined;
} | {
    title: string;
    dataIndex: string;
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
    render: (value: string) => string;
})[];
