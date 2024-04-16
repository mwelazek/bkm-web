import { ICarePlan } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ICarePlan';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import { Period } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/period';
import type { TFunction } from '@opensrp/i18n';
export declare const parseCareplan: (obj: ICarePlan) => {
    title: string | undefined;
    period: Period | undefined;
    categories: Coding[];
    status: string | undefined;
    id: string | undefined;
};
export type CarePlanTableData = ReturnType<typeof parseCareplan>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: "title";
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
    render?: undefined;
} | {
    title: string;
    dataIndex: "categories";
    render: (value: Coding[]) => JSX.Element;
    sorter?: undefined;
} | {
    title: string;
    dataIndex: "period";
    render: (value: Period) => JSX.Element;
    sorter?: undefined;
} | {
    title: string;
    dataIndex: "status";
    sorter?: undefined;
    render?: undefined;
})[];
