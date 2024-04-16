import React from 'react';
import { RouteComponentProps } from 'react-router';
import { fetchKeycloakUsers, KeycloakUser, Practitioner } from '../../ducks/user';
import { Dictionary } from '@onaio/utils';
import '../../index.css';
import { UserFormProps } from '../forms/UserForm/types';
import { IPractitioner } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitioner';
import { IPractitionerRole } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPractitionerRole';
/** inteface for route params */
export interface RouteParams {
    userId?: string;
}
/** props for editing a user view */
export interface CreateEditUserProps {
    keycloakUser: KeycloakUser | null;
    keycloakBaseURL: string;
    baseUrl: string;
    extraData: Dictionary;
    fetchKeycloakUsersCreator: typeof fetchKeycloakUsers;
    userFormHiddenFields?: UserFormProps['hiddenFields'];
    userFormRenderFields?: UserFormProps['renderFields'];
    getPractitionerFun: (baseUrl: string, userId: string) => Promise<Practitioner | IPractitioner>;
    getPractitionerRoleFun?: (baseUrl: string, userId: string) => Promise<IPractitionerRole>;
    postPutPractitionerFactory: UserFormProps['practitionerUpdaterFactory'];
}
/** type intersection for all types that pertain to the props */
export type CreateEditPropTypes = CreateEditUserProps & RouteComponentProps<RouteParams>;
/**
 *
 * @param props - CreateEditUser component props
 */
declare const CreateEditUser: React.FC<CreateEditPropTypes>;
export { CreateEditUser };
export declare const ConnectedCreateEditUser: import("react-redux").ConnectedComponent<React.FC<CreateEditPropTypes>, import("react-redux").Omit<CreateEditPropTypes, "extraData" | "keycloakUser" | "fetchKeycloakUsersCreator"> & CreateEditUserProps & RouteComponentProps<RouteParams, import("react-router").StaticContext, unknown>>;
