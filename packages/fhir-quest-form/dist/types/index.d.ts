import { RouteComponentProps } from 'react-router';
import type { IQuestionnaire } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IQuestionnaire';
/**
 * not clear in documentation ( notes on use of skjemautfyller):
 * gotchas:
 *  - dependencies are actually peer dependencies, versions are left to trial and error
 *  - node-sass is left out.
 *  - comes with its own redux-store arch
 * TODOs:
 *  - validation errors are not intuitive
 *
 * Issues:
 * - some forms are not displayed, they just show submit and cancel buttons
 *  - This function `getRootQuestionnaireResponseItemFromData` in skjemautfyller is passed stale formData parameter,
 *    due to a bug in redux action creator
 */
export interface BaseQuestRFormProps {
    resourceId: string;
    isQuestionnaire?: boolean;
    fhirBaseURL: string;
    onSubmit: (qr: IQuestionnaire) => void;
    onCancel: () => void;
}
export declare const questionnaireResponseResourceType: "QuestionnaireResponse";
export declare const questionnaireResourceType: "Questionnaire";
export declare const BaseQuestRForm: (props: BaseQuestRFormProps) => JSX.Element;
export declare const resourceIdParam: "resourceId";
export declare const resourceTypeParam: "resourceType";
export interface RouteParams {
    [resourceIdParam]: string;
    [resourceTypeParam]: typeof questionnaireResourceType | typeof questionnaireResponseResourceType;
}
export type QuestRFormProps = Pick<BaseQuestRFormProps, 'fhirBaseURL'> & RouteComponentProps<RouteParams>;
export declare const QuestRForm: (props: QuestRFormProps) => JSX.Element;
