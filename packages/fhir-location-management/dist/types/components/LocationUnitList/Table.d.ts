import React from 'react';
export interface TableData {
    id: string;
    key: string;
    name: string;
    description?: string;
    status?: string;
    physicalType?: string;
    partOf?: string;
}
export interface Props {
    data: TableData[];
    onViewDetails?: (row: TableData) => void;
}
declare const Table: React.FC<Props>;
export default Table;
