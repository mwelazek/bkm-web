import { TreeNode } from '../../../ducks/locationHierarchy/types';
import { TreeSelectProps } from 'antd/lib/tree-select/';
import { LabelValueType } from 'rc-tree-select/lib/interface';
/** props for service types select component */
export interface CustomTreeSelectProps extends TreeSelectProps<LabelValueType> {
    baseURL: string;
    filterByParentId?: boolean;
    fullDataCallback?: (node?: TreeNode) => void;
    disabledTreeNodesCallback?: (node: TreeNode) => boolean;
}
/**
 * form field where user can select the parent location from a tree structure
 *
 * @param props - the component props
 */
declare const CustomTreeSelect: {
    (props: CustomTreeSelectProps): JSX.Element;
    defaultProps: {
        baseURL: string;
    };
};
export { CustomTreeSelect };
