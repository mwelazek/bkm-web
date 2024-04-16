import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface RouteParams {
    userGroupId: string;
}
/** props for editing a user view */
export interface EditUserGroupProps {
    keycloakBaseURL: string;
}
/** type intersection for all types that pertain to the props */
export type CreateEditGroupPropTypes = EditUserGroupProps & RouteComponentProps<RouteParams>;
/** default props for editing user component */
export declare const defaultEditUserGroupProps: EditUserGroupProps;
/**
 *
 * @param props - CreateEditUser component props
 */
declare const CreateEditUserGroup: React.FC<CreateEditGroupPropTypes>;
export { CreateEditUserGroup };
