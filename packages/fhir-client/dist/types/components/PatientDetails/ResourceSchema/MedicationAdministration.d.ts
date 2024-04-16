import { IMedicationAdministration } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IMedicationAdministration';
import type { TFunction } from '@opensrp/i18n';
export declare const parseMedicationAdministration: (obj: IMedicationAdministration) => {
    status: string | undefined;
    id: string | undefined;
    occurenceDateTime: any;
};
export type MedicationAdminTableData = ReturnType<typeof parseMedicationAdministration>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    sorter?: undefined;
    render?: undefined;
} | {
    title: string;
    dataIndex: string;
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
    render?: undefined;
} | {
    title: string;
    dataIndex: string;
    render: (value: string) => string;
    sorter?: undefined;
})[];
