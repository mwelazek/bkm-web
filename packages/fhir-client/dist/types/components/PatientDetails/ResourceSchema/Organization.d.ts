import { IOrganization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganization';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import type { TFunction } from '@opensrp/i18n';
export declare const parseOrganization: (obj: IOrganization) => {
    type: Coding[];
    name: string | undefined;
    active: boolean | undefined;
};
export type CarePlanTableData = ReturnType<typeof parseOrganization>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    editable: boolean;
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
    render?: undefined;
} | {
    title: string;
    dataIndex: string;
    render: (value: Coding[]) => JSX.Element;
    editable?: undefined;
    sorter?: undefined;
} | {
    title: string;
    dataIndex: string;
    render: (value: boolean) => "Active" | "Inactive";
    editable?: undefined;
    sorter?: undefined;
})[];
