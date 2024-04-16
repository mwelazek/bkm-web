/** allowed http methods */
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export interface Payload {
    headers: HeadersInit;
    method: HTTPMethod;
}
export declare const defaultErrorCallback: () => void;
/**
 * custom function that logs user from both a keycloak authorization server
 * and the opensrp server
 *
 * @param payload - payload to add to the fetch request
 * @param keycloakLogoutUri - url to logout from keycloak
 * @param redirectUri - uri to redirect to after logout
 * @param opensrpLogoutUri - url to logout from opensrp
 * @param idTokenHint - when present keycloak can auto logout user.
 */
export declare const logout: (payload: Payload, keycloakLogoutUri: string, redirectUri: string, opensrpLogoutUri?: string, idTokenHint?: string) => Promise<null>;
