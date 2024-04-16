/** typings for the view details component */
export interface ViewDetailsProps {
    resourceId: string;
    fhirBaseUrl: string;
    keycloakBaseUrl: string;
}
export type ViewDetailsWrapperProps = Pick<ViewDetailsProps, 'fhirBaseUrl' | 'keycloakBaseUrl'> & {
    resourceId?: string;
};
/**
 * Displays resource Details
 *
 * @param props - detail view component props
 */
export declare const ViewDetails: (props: ViewDetailsProps) => JSX.Element;
/**
 * component that renders the details view to the right side
 * of list view
 *
 * @param props - detail view component props
 */
export declare const ViewDetailsWrapper: (props: ViewDetailsWrapperProps) => JSX.Element | null;
