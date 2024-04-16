/** props for the PlansList view */
export interface QuestionnaireListProps {
    fhirBaseURL: string;
}
export declare const qrListRouteKey: "id";
export interface RouteProps {
    [qrListRouteKey]: string;
}
/** component that renders plans */
declare const QuestionnaireResponseList: (props: QuestionnaireListProps) => JSX.Element;
export { QuestionnaireResponseList };
