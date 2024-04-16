import { IOrganization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganization';
import './index.css';
/**
 * parse an organization to object we can easily consume in Table layout
 *
 * @param org - the organization resource object
 */
export declare const parseOrganization: (org: IOrganization) => {
    id: string | undefined;
    identifier: any;
    active: boolean | undefined;
    name: string | undefined;
    type: any;
    alias: string[] | undefined;
    partOf: any;
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
 * Displays Organization Details
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
