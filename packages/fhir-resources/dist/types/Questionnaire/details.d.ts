import { Period } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/period';
export interface QuestionnaireDetailsProps {
    version?: string;
    subjectType?: string;
    publisher?: string;
    effectivePeriod?: Period;
    lastReviewDate?: string;
    title?: string;
    date?: string;
    description?: string;
}
export declare const QuestionnaireDetails: (props: QuestionnaireDetailsProps) => JSX.Element;
