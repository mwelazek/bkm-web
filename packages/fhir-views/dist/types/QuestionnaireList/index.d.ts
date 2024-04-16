import { Column } from '@opensrp/react-utils';
import { ParsedQuestionnaire } from '@opensrp/fhir-resources';
import type { TFunction } from '@opensrp/i18n';
import './index.css';
import { UserRole } from '@opensrp/rbac';
/** props for the PlansList view */
interface QuestionnaireListProps {
    fhirBaseURL: string;
}
export declare const NamesColumnCustomRenderLink: Column<ParsedQuestionnaire>['render'];
export declare const NamesColumnCustomRender: Column<ParsedQuestionnaire>['render'];
/**
 * generates columns for questionnaire rendering component
 *
 * @param t - translator function
 * @param userRole - role of logged in user
 */
export declare const getColumns: (t: TFunction, userRole: UserRole) => Column<ParsedQuestionnaire>[];
/**
 * api paginated table view listing questionnaires
 *
 * @param props - component props
 */
declare const QuestionnaireList: (props: QuestionnaireListProps) => JSX.Element;
export { QuestionnaireList };
