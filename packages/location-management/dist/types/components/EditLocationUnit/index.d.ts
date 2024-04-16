import { LocationUnit } from '../../ducks/location-units';
import { RouteComponentProps } from 'react-router';
import { LocationFormProps } from '../LocationForm';
import { FormInstances } from '../LocationForm/utils';
export type LocationRouteProps = {
    id: string;
};
export interface EditLocationUnitProps extends Pick<LocationFormProps, 'hidden' | 'disabled' | 'disabledTreeNodesCallback' | 'successURLGenerator'>, RouteComponentProps<LocationRouteProps> {
    opensrpBaseURL: string;
    instance: FormInstances;
    filterByParentId?: boolean;
    cancelURLGenerator: (data: LocationUnit) => string;
}
/**
 * renders page where user can Edit already created location unit
 *
 * @param props - this components props
 */
declare const EditLocationUnit: {
    (props: EditLocationUnitProps): JSX.Element;
    defaultProps: {
        redirectAfterAction: string;
        filterByParentId: boolean;
        opensrpBaseURL: string;
        instance: FormInstances;
        hidden: never[];
        disabled: never[];
        successURLGenerator: () => string;
        cancelURLGenerator: () => string;
    };
};
export { EditLocationUnit };
