import TreeModel from 'tree-model';
import { ILocation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ILocation';
import { Resource } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/resource';
import { Uri } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/uri';
export interface CommonHierarchyNode {
    nodeId: Uri;
    label: string;
    node: ILocation;
    parent?: Uri;
}
export interface LocationHierarchyTreeNode extends CommonHierarchyNode {
    children?: Array<ChildNodeList>;
}
export interface ParsedHierarchyNode extends CommonHierarchyNode {
    children?: Array<ParsedHierarchyNode>;
}
export interface ParentNodeList {
    treeNodeId: Uri;
    treeNode: Array<LocationHierarchyTreeNode>;
}
export interface ChildNodeList {
    childId: Uri;
    treeNode: LocationHierarchyTreeNode;
}
export interface LocationHierarchyResource extends Resource {
    LocationHierarchyTree: {
        locationsHierarchy: {
            listOfNodes: ParentNodeList;
            parentChildren: [
                {
                    identifier: Uri;
                    childIdentifiers: Uri[];
                }
            ];
        };
    };
}
/** helper type, shortened form */
export type TreeNode = TreeModel.Node<ParsedHierarchyNode>;
export declare enum LocationUnitStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    SUSPENDED = "suspended"
}
