import type { IQuestionnaireResponse } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IQuestionnaireResponse';
export declare const parseQuestionnaireResponse: (resource: IQuestionnaireResponse) => {
    id: string | undefined;
    basedOn: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/reference").Reference[] | undefined;
    partOf: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/reference").Reference[] | undefined;
    questionnaire: string | undefined;
    subject: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/reference").Reference | undefined;
    authoredDateTime: Date | undefined;
    author: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/reference").Reference | undefined;
    source: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/reference").Reference | undefined;
    rootItems: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/questionnaireResponseItem").QuestionnaireResponseItem[] | undefined;
    questionnaireVersion: string | undefined;
};
export type ParsedQuestionnaireResponse = ReturnType<typeof parseQuestionnaireResponse>;
