import { KeycloakUser } from '@opensrp/user-management';
import { Dictionary } from '@onaio/utils';
import { Column } from '@opensrp/react-utils';
import { QueryClient } from 'react-query';
import type { TFunction } from '@opensrp/i18n';
import { UserRole } from '@opensrp/rbac';
import { History } from 'history';
/**
 * Get table columns for user list
 *
 * @param keycloakBaseUrl - keycloak base url
 * @param baseUrl - server base url
 * @param extraData - session data about logged in user
 * @param queryClient - react query client
 * @param t - translator function
 * @param onViewDetails - callback when view details is clicked.
 * @param userRole - role of logged in user.
 * @param history - history object for managing navigation
 */
export declare const getTableColumns: (keycloakBaseUrl: string, baseUrl: string, extraData: Dictionary, queryClient: QueryClient, t: TFunction, onViewDetails: (recordId: string) => void, userRole: UserRole, history: History) => Column<KeycloakUser>[];
