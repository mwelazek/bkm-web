import { ICondition } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ICondition';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import type { TFunction } from '@opensrp/i18n';
export declare const parseCondition: (obj: ICondition) => {
    condition: Coding[];
    severity: Coding[];
    verificationStatus: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/codeableConcept").CodeableConcept | undefined;
};
export type ConditionTableData = ReturnType<typeof parseCondition>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    render: (value: Coding[]) => JSX.Element;
} | {
    title: string;
    dataIndex: string;
    render?: undefined;
})[];
