import React from 'react';
import { FormFields } from './utils';
import { IOrganization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganization';
import { IPractitioner } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner';
export interface CareTeamFormProps {
    initialValues: FormFields;
    fhirBaseURL: string;
    practitioners: IPractitioner[];
    organizations: IOrganization[];
}
/**
 * Care Team form for editing/adding FHIR Care Teams
 *
 * @param {object} props - component props
 */
declare const CareTeamForm: React.FC<CareTeamFormProps>;
export { CareTeamForm };
