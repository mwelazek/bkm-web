/// <reference types="react" />
import { CreateEditPropTypes, FormFields } from '@opensrp/user-management';
import { IPractitioner } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner';
import { IGroup } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IGroup';
import { TFunction } from 'i18n/dist/types';
import { IPractitionerRole } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitionerRole';
import { HumanName } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/humanName';
export declare const getPractitioner: (baseUrl: string, userId: string) => Promise<IPractitioner>;
export declare const getGroup: (baseUrl: string, userId: string) => Promise<IGroup>;
export declare const getPractitionerRole: (baseUrl: string, userId: string) => Promise<IPractitionerRole>;
export declare const createEditGroupResource: (keycloakUserEnabled: boolean, keycloakID: string, keycloakUserName: string, practitionerID: string, baseUrl: string, existingGroupID?: string) => Promise<IGroup>;
export declare const createEditPractitionerRoleResource: (userType: FormFields['userType'], keycloakID: string, keycloakUserEnabled: boolean, practitionerID: string, practitionerName: HumanName[], baseUrl: string, existingPractitionerRoleID?: string) => Promise<IPractitionerRole>;
export declare const practitionerUpdater: (baseUrl: string) => (values: FormFields, userId: string, t?: TFunction) => Promise<void>;
/**
 *  Create users and Fhir practitioners
 *
 * @param props - component props
 */
export declare function CreateEditUser(props: CreateEditPropTypes): JSX.Element;
