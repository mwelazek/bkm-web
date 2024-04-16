import type { IQuestionnaire } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IQuestionnaire';
import './index.css';
export declare const parseQuestionnaire: (resource: IQuestionnaire) => {
    id: string | undefined;
    narrativePreview: string | undefined;
    title: string | undefined;
    rootItems: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/questionnaireItem").QuestionnaireItem[] | undefined;
    version: string | undefined;
    subjectType: string | undefined;
    publisher: string | undefined;
    effectivePeriod: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/period").Period | undefined;
    lastReviewDate: string | undefined;
    date: Date | undefined;
    description: string | undefined;
    status: import("@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IQuestionnaire").Questionnaire.StatusEnum | undefined;
    dateTime: Date | undefined;
};
export type ParsedQuestionnaire = ReturnType<typeof parseQuestionnaire>;
interface QuestionnaireProps {
    resource: IQuestionnaire;
}
export declare const Questionnaire: (props: QuestionnaireProps) => JSX.Element;
export {};
