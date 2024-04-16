import React from 'react';
import './tree.css';
import { TreeNode } from '../../helpers/types';
interface TreeProp {
    data: TreeNode[];
    selectedNode?: TreeNode;
    onSelect: (node?: TreeNode) => void;
}
export declare const Tree: React.FC<TreeProp>;
export default Tree;
