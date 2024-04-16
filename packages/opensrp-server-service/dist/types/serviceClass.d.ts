/// <reference types="node" />
import { IncomingHttpHeaders } from 'http';
import { Dictionary } from '@onaio/utils';
/** defaults */
export declare const OPENSRP_API_BASE_URL = "https://opensrp-stage.smartregister.org/opensrp/rest/";
/** allowed http methods */
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
/**
 * get default HTTP headers for OpenSRP service
 *
 * @param {string} accessToken - the access token
 * @param {string} accept - the MIME type to accept
 * @param {string} authorizationType - the authorization type
 * @param {string} contentType - the content type
 * @returns {IncomingHttpHeaders} - the headers
 */
export declare function getDefaultHeaders(accessToken: string, accept?: string, authorizationType?: string, contentType?: string): IncomingHttpHeaders;
/**
 * get payload for fetch
 *
 * @param {object} _ - signal object that allows you to communicate with a DOM request
 * @param {string} accessToken - the access token
 * @param {string} method - the HTTP method
 * @param {object} data - data to be used for payload
 * @returns {Object} the payload
 */
export declare function getFetchOptions<T extends object = Dictionary>(_: AbortSignal, accessToken: string, method: HTTPMethod, data?: T): RequestInit;
/** interface to describe URL params object */
export interface URLParams {
    [key: string]: string | number | boolean | undefined;
}
export interface CustomFetch {
    (input: RequestInfo, init?: RequestInit | undefined): Promise<Response | undefined>;
}
export declare const customFetch: CustomFetch;
/** params option type */
type ParamsType = URLParams | null;
/** get acess token call back fn type */
export interface GetAccessTokenType {
    (...args: unknown[]): Promise<string | null>;
}
/**
 * The OpenSRP service class
 *
 * Sample usage:
 * -------------
 * const service = new OpenSRPService('the-endpoint');
 *
 * **To list all objects**: service.list()
 *
 * **To get one object**: service.read('the-object-identifier')
 *
 * **To create a new object**: service.create(theObject)
 *
 * **To update an object**: service.update(theObject)
 */
export declare class OpenSRPService<PayloadT extends object = Dictionary> {
    accessTokenOrCallBack: GetAccessTokenType | string;
    baseURL: string;
    endpoint: string;
    generalURL: string;
    getOptions: typeof getFetchOptions;
    signal: AbortSignal;
    /**
     * Constructor method
     *
     * @param {Function | string } accessTokenOrCallBack - asyc fn for getting the access token or access token
     * @param {string} baseURL - the base OpenSRP API URL
     * @param {string} endpoint - the OpenSRP endpoint
     * @param {Function} getOptions - a function to get the payload
     * @param {AbortController} signal - abort signal
     */
    constructor(accessTokenOrCallBack: GetAccessTokenType | string, baseURL: string | undefined, endpoint: string, getOptions?: typeof getFetchOptions, signal?: AbortSignal);
    /**
     * appends any query params to the url as a querystring
     *
     * @param {string} generalUrl - the url
     * @param {object} params - the url params object
     * @returns {string} the final url
     */
    static getURL(generalUrl: string, params: ParamsType): string;
    /**
     * converts filter params object to string
     *
     * @param {object} obj - the object representing filter params
     * @returns {string} filter params as a string
     */
    static getFilterParams(obj: URLParams | Record<string, unknown>): string;
    /**
     * process received access token
     *
     * @param {Function | string} accessTokenCallBack - received access token
     */
    static processAcessToken(accessTokenCallBack: GetAccessTokenType | string): Promise<string>;
    /**
     * create method
     * Send a POST request to the general endpoint containing the new object data
     * Successful requests will result in a HTTP status 201 response with no body
     *
     * @param {object} data - the data to be POSTed
     * @param {params} params - the url params object
     * @param {string} method - the HTTP method
     * @returns {object} the object returned by API
     */
    create(data: PayloadT, params?: ParamsType, method?: HTTPMethod): Promise<Record<string, unknown>>;
    /**
     * read method
     * Send a GET request to the url for the specific object
     *
     * @param {string|number} id - the identifier of the object
     * @param {params} params - the url params object
     * @param {string} method - the HTTP method
     * @returns {object} the object returned by API
     */
    read(id: string | number, params?: ParamsType, method?: HTTPMethod): Promise<any>;
    /**
     * update method
     * Simply send the updated object as PUT request to the general endpoint URL
     * Successful requests will result in a HTTP status 200/201 response with no body
     *
     * @param {object} data - the data to be POSTed
     * @param {params} params - the url params object
     * @param {string} method - the HTTP method
     * @returns {object} the object returned by API
     */
    update(data: PayloadT, params?: ParamsType, method?: HTTPMethod): Promise<Record<string, unknown>>;
    /**
     * list method
     * Send a GET request to the general API endpoint
     *
     * @param {params} params - the url params object
     * @param {string} method - the HTTP method
     * @returns {object} list of objects returned by API
     */
    list(params?: ParamsType, method?: HTTPMethod): Promise<any>;
    /**
     * delete method
     * Send a DELETE request to the general endpoint
     * Successful requests will result in a HTTP status 204
     *
     * @param {params} params - the url params object
     * @param {string} method - the HTTP method
     * @returns {object} the object returned by API
     */
    delete(params?: ParamsType, method?: HTTPMethod): Promise<Record<string, unknown>>;
    download(params?: ParamsType, method?: HTTPMethod): Promise<Response>;
}
export {};
