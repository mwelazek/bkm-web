import { IPractitioner } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner';
import { IPractitionerRole } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitionerRole';
import { OrganizationFormFields } from './utils';
import { PractToOrgAssignmentStrategy } from '@opensrp/pkg-config';
interface OrganizationFormProps {
    fhirBaseUrl: string;
    initialValues: OrganizationFormFields;
    disabled: string[];
    cancelUrl?: string;
    successUrl?: string;
    practitioners: IPractitioner[];
    existingPractitionerRoles: IPractitionerRole[];
    allPractitionerRoles: IPractitionerRole[];
    configuredPractAssignmentStrategy?: PractToOrgAssignmentStrategy;
}
declare const OrganizationForm: {
    (props: OrganizationFormProps): JSX.Element;
    defaultProps: {
        initialValues: {};
        disabled: never[];
    };
};
export { OrganizationForm };
