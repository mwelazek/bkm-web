import { TreeNode } from '../../../helpers/types';
import { TreeSelectProps } from 'antd/lib/tree-select/';
import { LabelValueType } from 'rc-tree-select/lib/interface';
/** props for service types select component */
export interface CustomTreeSelectProps extends TreeSelectProps<LabelValueType> {
    tree: TreeNode;
    fullDataCallback?: (node: TreeNode) => void;
    disabledTreeNodesCallback?: (node: TreeNode) => boolean;
}
/**
 * form field where user can select the parent location from a tree structure
 *
 * @param props - the component props
 */
export declare const CustomTreeSelect: (props: CustomTreeSelectProps) => JSX.Element;
