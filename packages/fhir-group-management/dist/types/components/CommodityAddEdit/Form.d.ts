import { GroupFormFields } from './utils';
import { IGroup } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IGroup';
export interface GroupFormProps {
    fhirBaseUrl: string;
    initialValues: GroupFormFields;
    disabled: string[];
    cancelUrl?: string;
    successUrl?: string;
    postSuccess?: (commodity: IGroup, edited: boolean) => Promise<unknown>;
}
declare const CommodityForm: {
    (props: GroupFormProps): JSX.Element;
    defaultProps: {
        initialValues: {};
        disabled: never[];
    };
};
export { CommodityForm };
