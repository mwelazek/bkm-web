import { RouteComponentProps } from 'react-router';
import { LocationFormProps } from '../LocationForm';
import { FormInstances, LocationFormFields } from '../LocationForm/utils';
/** full props for the new location component */
export interface NewLocationUnitProps extends Pick<LocationFormProps, 'hidden' | 'disabled' | 'disabledTreeNodesCallback' | 'successURLGenerator'>, RouteComponentProps {
    opensrpBaseURL: string;
    instance: FormInstances;
    filterByParentId?: boolean;
    processInitialValues?: (formFields: LocationFormFields) => LocationFormFields;
    cancelURLGenerator: () => string;
}
/**
 * renders page where user can create new location unit
 *
 * @param props - this components props
 */
declare const NewLocationUnit: {
    (props: NewLocationUnitProps): JSX.Element;
    defaultProps: {
        redirectAfterAction: string;
        findByParentId: boolean;
        opensrpBaseURL: string;
        instance: FormInstances;
        hidden: never[];
        disabled: never[];
        successURLGenerator: () => string;
        cancelURLGenerator: () => string;
    };
};
export { NewLocationUnit };
