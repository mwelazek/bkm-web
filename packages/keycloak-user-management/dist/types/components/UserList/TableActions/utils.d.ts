import { removeKeycloakUsers } from '../../../ducks/user';
import type { TFunction } from '@opensrp/i18n';
/**
 * Delete keycloak user and practitioner
 *
 * @param removeKeycloakUsersCreator - remove users action creator
 * @param keycloakBaseURL - keycloak api base URL
 * @param opensrpBaseURL - opensrp api base url
 * @param userId - id of user to be deleted
 * @param  t - translator function
 * @returns {void}
 */
export declare const deleteUser: (removeKeycloakUsersCreator: typeof removeKeycloakUsers, keycloakBaseURL: string, opensrpBaseURL: string, userId: string, t: TFunction) => Promise<void>;
