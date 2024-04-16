import React from 'react';
import { ParsedHierarchyNode } from '../../ducks/locationHierarchy/types';
export interface TableData extends Pick<ParsedHierarchyNode, 'id' | 'label'> {
    geographicLevel: number;
}
export interface Props {
    data: TableData[];
    onViewDetails?: (row: TableData) => void;
}
declare const Table: React.FC<Props>;
export default Table;
