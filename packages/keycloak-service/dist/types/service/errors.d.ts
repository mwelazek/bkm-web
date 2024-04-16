import { Dictionary } from '@onaio/utils';
/** Modifies the name field for our custom Error classes */
declare class BaseError extends Error {
    constructor();
}
/**
 * used when we have an error arising from a non-200 http status
 * code in the response. It returns the error message or json description
 * provided by the api as part of the error object
 */
export declare class HTTPError extends BaseError {
    statusCode: number;
    statusText: string;
    url: string;
    description: string;
    constructor(response: Response, object: Dictionary | undefined, serviceDescription?: string);
}
/** Used to return an error arising from a failed network request */
export declare class NetworkError extends BaseError {
    constructor();
}
/**
 * helper function that reads a non-200 response and creates
 * our custom HTTPError object from it.
 *
 * @param {Response} response API interface represents the response to a request
 * @param {string} customMessage custom message to show
 */
export declare const throwHTTPError: (response: Response, customMessage?: string) => Promise<void>;
/**
 * a helper to create NetworkError objects, logic is a bit fuzzy since
 * only error.name is standardized across browsers when a network error
 * happens
 *
 * @param {Error} err error from API
 */
export declare const throwNetworkError: (err: Error) => Error;
export {};
