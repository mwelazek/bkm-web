import { ParsedHierarchyNode, RawOpenSRPHierarchy, TreeNode } from './types';
import { LocationUnit } from '../../ducks/location-units';
/**
 * takes the raw opensrp hierarchy response and creates a tree model structure
 *
 * @param {RawOpenSRPHierarchy} apiResponse - the response we get from opensrp
 * @returns {TreeNode} - returns root node
 */
export declare const generateJurisdictionTree: (apiResponse: RawOpenSRPHierarchy) => TreeNode;
/**
 * Gets all the location unit at geographicLevel 0
 *
 * @param {string} opensrpBaseURL - base url
 * @param {boolean} filterByParentId - boolean to filter root locations with parent id
 * @returns {Promise<Array<LocationUnit>>} returns array of location unit at geographicLevel 0
 */
export declare function getBaseTreeNode(opensrpBaseURL: string, filterByParentId?: boolean): Promise<LocationUnit[]>;
/**
 * serialize tree due to circular dependencies
 *
 * @param trees - trees to be serialized
 */
export declare const serializeTree: (trees: TreeNode[]) => string;
/**
 * Find the specifc Hierarchy node inside HierarchyTree
 *
 * @param {ParsedHierarchyNode} hierarchy HeirarchyTree to search in
 * @param {string} id Id of the node to search for
 * @returns {ParsedHierarchyNode | undefined} returns the Node if found else undefined
 */
export declare function getHierarchyNode(hierarchy: ParsedHierarchyNode, id: string): ParsedHierarchyNode | undefined;
/**
 * Find the specifc Hierarchy node inside HierarchyTree Array
 *
 * @param {Array<ParsedHierarchyNode>} hierarchy Array of HeirarchyTree to search in
 * @param {string} id Id of the node to search for
 * @returns {ParsedHierarchyNode | undefined} returns the Node if found else undefined
 */
export declare function getHierarchyNodeFromArray(hierarchy: ParsedHierarchyNode[], id: string): ParsedHierarchyNode | undefined;
