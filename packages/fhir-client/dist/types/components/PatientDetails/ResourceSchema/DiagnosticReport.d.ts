import { IDiagnosticReport } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IDiagnosticReport';
import type { TFunction } from '@opensrp/i18n';
export declare const parseDiagnosticReport: (obj: IDiagnosticReport) => {
    issued: string | undefined;
    id: string | undefined;
    conclusion: string | undefined;
};
export type DiagnosticReportTableData = ReturnType<typeof parseDiagnosticReport>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    sorter?: undefined;
} | {
    title: string;
    dataIndex: string;
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
})[];
