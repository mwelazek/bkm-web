import type { QuestionnaireItem } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/questionnaireItem';
interface GroupProps {
    qItems?: QuestionnaireItem[];
}
export declare const QItems: (props: GroupProps) => JSX.Element | null;
export {};
