import { IResource } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IResource';
import { ChangeEvent } from 'react';
import { RouteComponentProps } from 'react-router';
export declare const pageSizeQuery = "pageSize";
export declare const pageQuery = "page";
export declare const searchQuery = "search";
export declare const viewDetailsQuery = "viewDetails";
/**
 * get a string search param from url
 *
 * @param location - route information
 * @param paramKey - search param key
 */
export declare const getStringParam: (location: RouteComponentProps['location'], paramKey: string) => string | null;
/**
 * get a search param that's of Number from url
 *
 * @param location -  route information
 * @param paramKey - search param key
 * @param fallback - fallback if key not found, or malformed
 */
export declare const getNumberParam: (location: RouteComponentProps['location'], paramKey: string, fallback?: number | null) => number | null;
/** default page number when paginating client and server-side */
export declare const startingPage = 1;
/** default page size used when paginating client and server-side */
export declare const startingPageSize = 20;
/**
 * generates the next url after a search input
 *
 * @param event - the search event
 * @param location - location object
 * @param match - information on the matched url
 */
export declare const getNextUrlOnSearch: (event: ChangeEvent<HTMLInputElement>, location: RouteComponentProps['location'], match: RouteComponentProps['match']) => string;
/**
 * how should objects be matched against the search string
 *
 * @param obj - resource payload
 * @param search - the search string
 */
export declare const matchesOnName: <T extends IResource>(obj: T, search: string) => boolean;
