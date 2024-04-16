import { RouteComponentProps } from 'react-router';
import { LocationFormProps } from '../LocationForm';
export type LocationRouteProps = {
    id?: string;
};
/** full props for the new location component */
export interface NewEditLocationUnitProps extends Pick<LocationFormProps, 'hidden' | 'disabled' | 'disabledTreeNodesCallback' | 'successURLGenerator'>, RouteComponentProps<LocationRouteProps> {
    fhirBaseURL: string;
    fhirRootLocationId: string;
    cancelURLGenerator: () => string;
}
/**
 * renders page where user can create new location unit
 *
 * @param props - this components props
 */
export declare const NewEditLocationUnit: (props: NewEditLocationUnitProps) => JSX.Element;
