/** typings for the view details component */
export interface ViewDetailsProps {
    careTeamId: string;
    fhirBaseURL: string;
}
/**
 * component that renders the details view to the right side
 * of list view
 *
 * @param props - detail view component props
 */
declare const ViewDetails: (props: ViewDetailsProps) => JSX.Element;
export { ViewDetails };
