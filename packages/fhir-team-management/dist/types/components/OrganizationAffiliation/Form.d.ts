import { IOrganization } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganization';
import { AffiliationsByLocationId } from './utils';
import { ILocation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ILocation';
import { IOrganizationAffiliation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IOrganizationAffiliation';
interface AffiliationModalProps {
    baseUrl: string;
    allOrgs: IOrganization[];
    location?: ILocation;
    visible: boolean;
    handleCancel: () => void;
    affiliationsByLoc: AffiliationsByLocationId;
    allAffiliations: IOrganizationAffiliation[];
}
/**
 * Modal that shows a select where users can assign organizations to locations
 *
 * @param props - component props
 */
export declare const AffiliationModal: (props: AffiliationModalProps) => JSX.Element | null;
export {};
