import React from 'react';
import { LocationUnitGroup } from '../../ducks/location-unit-groups';
import { LocationUnitGroupDetailProps } from '../LocationUnitGroupDetail';
import type { TFunction } from '@opensrp/i18n';
export interface Props {
    data: LocationUnitGroup[];
    opensrpBaseURL: string;
    onViewDetails?: (locationUnit: LocationUnitGroupDetailProps) => void;
}
/**
 * function to delete the record
 *
 * @param record - The record to delete
 * @param opensrpBaseURL - base url
 * @param t - the language translation lookup object
 */
export declare const onDelete: (record: LocationUnitGroup, opensrpBaseURL: string, t: TFunction) => void;
declare const Table: React.FC<Props>;
export default Table;
