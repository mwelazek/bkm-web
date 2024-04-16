import React from 'react';
import { TreeNode } from '@opensrp/fhir-location-management';
import { ILocation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ILocation';
export interface TableData {
    id: string;
    key: string;
    name: string;
    description?: string;
    status?: string;
    physicalType?: string;
    partOf?: string;
    node: ILocation;
}
/**
 * Parse the hierarchy node into table data
 *
 * @param  locationNode - list of location nodes
 */
export declare function parseTableData(locationNode: TreeNode[]): TableData[];
export interface Props {
    baseUrl: string;
    locationNodes: TreeNode[];
}
declare const AffiliationTable: React.FC<Props>;
export default AffiliationTable;
