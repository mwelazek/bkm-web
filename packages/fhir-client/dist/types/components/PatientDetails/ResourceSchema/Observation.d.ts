import { IObservation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IObservation';
import type { TFunction } from '@opensrp/i18n';
export declare const parseObservation: (obj: IObservation) => {
    observationValue: string;
    status: import("@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IObservation").Observation.StatusEnum | undefined;
    id: string | undefined;
    issued: string | undefined;
};
export type ObservationTableData = ReturnType<typeof parseObservation>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: "id";
    render?: undefined;
    sorter?: undefined;
} | {
    title: string;
    dataIndex: "observationValue";
    render?: undefined;
    sorter?: undefined;
} | {
    title: string;
    dataIndex: "status";
    render?: undefined;
    sorter?: undefined;
} | {
    title: string;
    dataIndex: "issued";
    render: (value: string) => string;
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
})[];
