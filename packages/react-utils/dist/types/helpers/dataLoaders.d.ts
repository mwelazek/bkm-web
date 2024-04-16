import { getFetchOptions, OpenSRPService as GenericOpenSRPService, URLParams, GetAccessTokenType } from '@opensrp/server-service';
import { Dictionary } from '@onaio/utils';
import type { IResource } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IResource';
/** OpenSRP service Generic class */
export declare class OpenSRPService<T extends object = Dictionary> extends GenericOpenSRPService<T> {
    /**
     *
     * @param {string} endpoint - the OpenSRP endpoint
     * @param {string} baseURL - base OpenSRP API URL
     * @param {Function} fetchOptions - function to return options to be passed to request
     */
    constructor(endpoint: string, baseURL?: string, fetchOptions?: typeof getFetchOptions);
}
/**
 * A generic FHIR service class
 *
 * Sample usage:
 * -------------
 * const serve = new FHIRServiceClass('<base url>', '<resource type>');
 *
 * **To list all entries of a resource (GET request)**: serve.list()
 *
 * **To get one resource record**: service.read('<object id>')
 *
 * **To create a new resource**: service.create(payload)
 *
 * **To update a resource record**: service.update(payload)
 *
 * **To delete a resource entry**: service.delete(<id>)
 */
export declare class FHIRServiceClass<T extends IResource> {
    accessTokenOrCallBack: GetAccessTokenType | string;
    baseURL: string;
    resourceType: string;
    signal: AbortSignal;
    /**
     * Constructor method
     *
     * @param {string} baseURL - the base FHIR URL
     * @param {string} resourceType - FHIR resource type string
     * @param {AbortSignal} signal - Abort fetch request
     */
    constructor(baseURL: string, resourceType: string, signal?: AbortSignal);
    buildQueryParams(params: URLParams | null): string;
    private buildState;
    create(payload: T): Promise<T>;
    update(payload: T): Promise<T>;
    list(params?: URLParams | null): Promise<T>;
    read(id: string): Promise<T>;
    delete(id: string): Promise<unknown>;
}
/**
 * gets access token or redirects to login if session is expired
 *
 */
export declare function handleSessionOrTokenExpiry(): Promise<any>;
/**
 * Fetch an image that requires authentication and returns an
 * object URL from URL.createObjectURL
 *
 * @param imageURL the image source url
 */
export declare const fetchProtectedImage: (imageURL: string) => Promise<string | null>;
