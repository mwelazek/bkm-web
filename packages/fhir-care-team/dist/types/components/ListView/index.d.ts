import React from 'react';
import { RouteComponentProps } from 'react-router';
import type { TFunction } from '@opensrp/i18n';
interface RouteParams {
    careTeamId: string | undefined;
}
interface Props {
    fhirBaseURL: string;
    careTeamPageSize: number;
}
export type CareTeamListPropTypes = Props & RouteComponentProps<RouteParams>;
export declare const deleteCareTeam: (fhirBaseURL: string, id: string, t: TFunction) => Promise<void>;
/**
 * Function which shows the list of all roles and their details
 *
 * @param {Object} props - UserRolesList component props
 * @returns {Function} returns User Roles list display
 */
export declare const CareTeamList: React.FC<CareTeamListPropTypes>;
export {};
