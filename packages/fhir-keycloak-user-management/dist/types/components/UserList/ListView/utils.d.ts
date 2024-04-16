import { FhirApiFilter } from '@opensrp/react-utils';
import type { TFunction } from '@opensrp/i18n';
/**
 * Delete keycloak user and practitioner
 *
 * @param keycloakBaseURL - remove users action creator
 * @param baseUrl - server base url
 * @param userId - id of user to be deleted
 * @param t - translator function
 */
export declare const deleteUser: (keycloakBaseURL: string, baseUrl: string, userId: string, t: TFunction) => Promise<void>;
export declare const loadKeycloakResources: (baseUrl: string, endpoint: string, params?: Partial<FhirApiFilter>) => Promise<{
    total: number;
    records: any;
}>;
