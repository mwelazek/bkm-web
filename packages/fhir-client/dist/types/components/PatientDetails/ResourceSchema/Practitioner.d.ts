import { IPractitioner } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner';
import type { TFunction } from '@opensrp/i18n';
export declare const parsePractitioner: (obj: IPractitioner) => {
    name: string | undefined;
    gender: import("@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner").Practitioner.GenderEnum | undefined;
    active: boolean | undefined;
};
export type CarePlanTableData = ReturnType<typeof parsePractitioner>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
    render?: undefined;
} | {
    title: string;
    dataIndex: string;
    sorter?: undefined;
    render?: undefined;
} | {
    title: string;
    dataIndex: string;
    render: (value: boolean) => "Active" | "Inacitve";
    sorter?: undefined;
})[];
