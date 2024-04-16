import React from 'react';
import { TableData } from './Table';
import './LocationUnitList.css';
import { TreeNode } from '../../helpers/types';
interface LocationUnitListProps {
    fhirBaseURL: string;
    fhirRootLocationId: string;
}
export interface AntTreeData {
    data: TreeNode;
    title: JSX.Element;
    key: string;
    children: AntTreeData[];
}
/**
 * Parse the hierarchy node into table data
 *
 * @param  hierarchy - hierarchy node to be parsed
 * @returns array of table data
 */
export declare function parseTableData(hierarchy: TreeNode[]): TableData[];
export declare const LocationUnitList: React.FC<LocationUnitListProps>;
export {};
