import { URLParams } from '@opensrp/server-service';
import { IBundle } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IBundle';
import { FhirApiFilter } from '../../hooks/useSimpleTabularView';
/**
 * Unified function that gets a list of FHIR resources from a FHIR hapi server
 *
 * @param baseUrl - base url
 * @param resourceType - resource type as endpoint
 * @param params - our params
 * @param extraParams - any extra user-defined params
 */
export declare const loadResources: (baseUrl: string, resourceType: string, params: FhirApiFilter, extraParams: URLParams) => Promise<IBundle>;
/**
 * uses data from the api to extract the total number of records there are
 *
 * @param bundles - an array of fetched bundles, bundles are split with respect to pagination
 */
export declare const getTotalRecordsOnApi: (bundles: IBundle[]) => number;
/**
 * Calculate the number of records in the bundle pages we have pulled so far.
 *
 * @param bundles - an array of fetched bundles, bundles are split with respect to pagination
 */
export declare const getTotalRecordsInBundles: (bundles: IBundle[]) => number;
