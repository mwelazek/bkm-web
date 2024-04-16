/// <reference types="react" />
import { IGroup } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IGroup';
import { TFunction } from 'i18n/dist/types';
/**
 * parse a Group to object we can easily consume in Table layout
 *
 * @param obj - the organization resource object
 */
export declare const parseGroup: (obj: IGroup) => {
    name: string | undefined;
    active: boolean | undefined;
    id: string | undefined;
    identifier: any;
    lastUpdated: any;
    members: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/groupMember").GroupMember[] | undefined;
    quantity: number | undefined;
    type: import("@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IGroup").Group.TypeEnum | undefined;
    characteristic: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/groupCharacteristic").GroupCharacteristic[] | undefined;
    obj: IGroup;
};
/** typings for the view details component */
export interface ViewDetailsProps {
    resourceId: string;
    fhirBaseURL: string;
    keyValueMapperRenderProp: (obj: IGroup, t: TFunction) => JSX.Element;
}
export type ViewDetailsWrapperProps = Pick<ViewDetailsProps, 'fhirBaseURL' | 'keyValueMapperRenderProp'> & {
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
