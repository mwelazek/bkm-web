import { LocationFormFields } from './utils';
import { LocationUnit } from '../../ducks/location-units';
import { CustomTreeSelectProps } from './CustomTreeSelect';
/** props for the location form */
export interface LocationFormProps extends Pick<CustomTreeSelectProps, 'disabledTreeNodesCallback'> {
    initialValues?: LocationFormFields;
    successURLGenerator: (payload: LocationUnit) => string;
    opensrpBaseURL: string;
    hidden: string[];
    disabled: string[];
    onCancel: () => void;
    username: string;
    filterByParentId?: boolean;
    afterSubmit: (payload: LocationUnit) => void;
}
/** form component to add/edit location units */
declare const LocationForm: {
    (props: LocationFormProps): JSX.Element;
    defaultProps: {
        initialValues: LocationFormFields;
        filterByParentId: boolean;
        successURLGenerator: () => string;
        hidden: never[];
        disabled: never[];
        onCancel: () => undefined;
        username: string;
        opensrpBaseURL: string;
        afterSubmit: () => void;
    };
};
export { LocationForm };
