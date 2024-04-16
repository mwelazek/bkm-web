import React from 'react';
import './tree.css';
import { ParsedHierarchyNode } from '../../ducks/locationHierarchy/types';
import TreeModel from 'tree-model';
/** helper type, shortened form */
export type TreeNode = TreeModel.Node<ParsedHierarchyNode>;
interface TreeProp {
    data: TreeNode[];
    selectedNode: TreeNode | undefined;
    onSelect: (item: TreeNode | undefined) => void;
}
export declare const Tree: React.FC<TreeProp>;
export default Tree;
