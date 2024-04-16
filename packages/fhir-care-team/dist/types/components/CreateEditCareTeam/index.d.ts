import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ROUTE_PARAM_CARE_TEAM_ID } from '../../constants';
interface RouteParams {
    [ROUTE_PARAM_CARE_TEAM_ID]?: string;
}
/** props for editing a user view */
export interface EditCareTeamProps {
    fhirBaseURL: string;
}
/** type intersection for all types that pertain to the props */
export type CreateEditCareTeamProps = EditCareTeamProps & RouteComponentProps<RouteParams>;
/**
 *
 * @param props - CreateEditUser component props
 */
declare const CreateEditCareTeam: React.FC<CreateEditCareTeamProps>;
export { CreateEditCareTeam };
