import { LocationHierarchyResource, ParsedHierarchyNode, TreeNode } from './types';
import TreeModel from 'tree-model';
import { IBundle } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IBundle';
import { UseQueryOptions } from 'react-query';
import { ILocation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ILocation';
import { HTTPError } from '@opensrp/server-service';
export declare const parseFHIRHierarchy: (fhirTree: LocationHierarchyResource) => {
    children: ParsedHierarchyNode[];
    nodeId: string;
    label: string;
    node: ILocation;
    parent?: string | undefined;
};
export declare const generateFhirLocationTree: (rootNode: LocationHierarchyResource) => TreeModel.Node<ParsedHierarchyNode>;
export declare const convertApiResToTree: (apiRes: IBundle) => TreeModel.Node<ParsedHierarchyNode> | undefined;
/**
 * serialize tree due to circular dependencies
 *
 * @param trees - trees to be serialized
 */
export declare const serializeTree: (trees?: TreeNode[] | TreeNode) => string;
/**
 * get the location hierarchy of location with given identifier
 *
 * @param baseUrl - the server base url
 * @param rootId - the location identifier
 * @param queryOptions - extra query options.
 */
export declare const useGetLocationHierarchy: (baseUrl: string, rootId: string, queryOptions?: UseQueryOptions<IBundle, HTTPError, TreeNode>) => import("react-query").UseQueryResult<TreeNode, HTTPError>;
/**
 * get single location
 *
 * @param baseUrl - the server base url
 * @param locId - the location identifier
 */
export declare const useGetLocation: (baseUrl: string, locId?: string) => import("react-query").UseQueryResult<ILocation, unknown>;
