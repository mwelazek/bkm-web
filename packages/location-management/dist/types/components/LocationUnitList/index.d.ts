import React from 'react';
import { Props as LocationDetailData } from '../LocationUnitDetail';
import { TableData } from './Table';
import './LocationUnitList.css';
import type { TFunction } from '@opensrp/i18n';
interface Props {
    opensrpBaseURL: string;
    filterByParentId?: boolean;
}
export interface AntTreeProps {
    title: JSX.Element;
    key: string;
    children: AntTreeProps[];
}
/**
 * Function to Load selected location unit for details
 *
 * @param row data selected from the table
 * @param opensrpBaseURL - base url
 * @param setDetail function to set detail to state
 * @param t translation string lookup
 */
export declare function loadSingleLocation(row: TableData, opensrpBaseURL: string, setDetail: React.Dispatch<React.SetStateAction<LocationDetailData | 'loading' | null>>, t: TFunction): Promise<void>;
export declare const LocationUnitList: React.FC<Props>;
export default LocationUnitList;
