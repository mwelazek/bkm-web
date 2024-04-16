import { IHealthcareService } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IHealthcareService';
export declare const parseHealthCare: (obj: IHealthcareService) => {
    id: string | undefined;
    name: string | undefined;
    comment: string | undefined;
    active: boolean | undefined;
    providedBy: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/reference").Reference | undefined;
    lastUpdated: string | undefined;
};
/** typings for the view details component */
export interface ViewDetailsProps {
    resourceId: string;
    fhirBaseURL: string;
}
export type ViewDetailsWrapperProps = Pick<ViewDetailsProps, 'fhirBaseURL'> & {
    resourceId?: string;
};
/**
 * Displays Health Care Details
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
