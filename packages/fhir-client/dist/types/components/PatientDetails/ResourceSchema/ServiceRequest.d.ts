import { IPractitioner } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import type { TFunction } from '@opensrp/i18n';
export declare const parseServiceRequest: (obj: IPractitioner) => {
    authoredOn: any;
    id: string | undefined;
    category: Coding[];
};
export type ParseServiceRequest = ReturnType<typeof parseServiceRequest>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: "id";
    sorter?: undefined;
    render?: undefined;
} | {
    title: string;
    dataIndex: "authoredOn";
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
    render?: undefined;
} | {
    title: string;
    dataIndex: "category";
    render: (value: Coding[]) => JSX.Element;
    sorter?: undefined;
})[];
