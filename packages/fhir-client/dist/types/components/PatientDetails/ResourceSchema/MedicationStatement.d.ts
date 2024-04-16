import { IMedicationStatement } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IMedicationStatement';
import type { TFunction } from '@opensrp/i18n';
export declare const parseMedicationStatement: (obj: IMedicationStatement) => {
    status: string | undefined;
    id: string | undefined;
    dateAsserted: Date | undefined;
};
export type MedicationStatementTableData = ReturnType<typeof parseMedicationStatement>;
export declare const columns: (t: TFunction) => {
    title: string;
    dataIndex: string;
}[];
