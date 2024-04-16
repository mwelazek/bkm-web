import { IGoal } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IGoal';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import type { TFunction } from '@opensrp/i18n';
export declare const parseGoal: (obj: IGoal) => {
    category: Coding[];
    status: any;
    id: string | undefined;
    description: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/codeableConcept").CodeableConcept;
    priority: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/codeableConcept").CodeableConcept | undefined;
    achievementStatus: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/codeableConcept").CodeableConcept | undefined;
};
export type GoalTableData = ReturnType<typeof parseGoal>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    render?: undefined;
} | {
    title: string;
    dataIndex: string;
    render: (value: Coding[]) => JSX.Element;
})[];
