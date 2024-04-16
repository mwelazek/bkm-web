import { store } from '@opensrp/store';
import type { TFunction } from '@opensrp/i18n';
/**
 * Fetch all realm roles
 *
 * @param  keycloakBaseURL - keycloak API base URL
 * @param dispatch method to dispatch action to store
 * @param  t - translator function
 */
export declare const fetchAllRoles: (keycloakBaseURL: string, dispatch: import("redux").Dispatch<import("redux").AnyAction>, t: TFunction) => Promise<void>;
