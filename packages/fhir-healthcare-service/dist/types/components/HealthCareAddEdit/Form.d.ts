import { IOrganization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganization';
import { HealthCareFormFields } from './utils';
interface HealthCareFormProps {
    fhirBaseUrl: string;
    initialValues: HealthCareFormFields;
    disabled: string[];
    cancelUrl?: string;
    successUrl?: string;
    organizations: IOrganization[];
}
declare const HealthCareForm: {
    (props: HealthCareFormProps): JSX.Element;
    defaultProps: {
        initialValues: {};
        disabled: never[];
    };
};
export { HealthCareForm };
