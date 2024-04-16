import { IImmunizationRecommendation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IImmunizationRecommendation';
import type { TFunction } from '@opensrp/i18n';
export declare const parseImmunizationRecommendation: (obj: IImmunizationRecommendation) => {
    created: Date | undefined;
    dosesNum: any;
    nextDoseDate: any;
};
export type ImmunizationRecTableData = ReturnType<typeof parseImmunizationRecommendation>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: "created";
    render: (value: string) => string;
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
} | {
    title: string;
    dataIndex: "nextDoseDate";
    render?: undefined;
    sorter?: undefined;
} | {
    title: string;
    dataIndex: "dosesNum";
    render?: undefined;
    sorter?: undefined;
})[];
