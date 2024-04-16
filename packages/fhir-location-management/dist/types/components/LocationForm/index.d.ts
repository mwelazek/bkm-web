import { LocationFormFields } from './utils';
import { CustomTreeSelectProps } from './CustomTreeSelect';
import { IfhirR4 } from '@smile-cdr/fhirts';
import { TreeNode } from '../../helpers/types';
import { ILocation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ILocation';
/** props for the location form */
export interface LocationFormProps extends Pick<CustomTreeSelectProps, 'disabledTreeNodesCallback'> {
    initialValues: LocationFormFields;
    tree: TreeNode;
    successURLGenerator: (payload: ILocation) => string;
    fhirBaseURL: string;
    hidden: string[];
    disabled: string[];
    onCancel: () => void;
    afterSubmit?: (payload: IfhirR4.ILocation) => void;
}
/** form component to add/edit location units */
declare const LocationForm: {
    (props: LocationFormProps): JSX.Element;
    defaultProps: {
        initialValues: LocationFormFields;
        successURLGenerator: () => string;
        hidden: never[];
        disabled: never[];
        onCancel: () => undefined;
    };
};
export { LocationForm };
