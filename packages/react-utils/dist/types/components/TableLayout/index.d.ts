import React from 'react';
import type { TableProps as AntTableProps } from 'antd';
import { ColumnType } from 'antd/lib/table/interface';
import { Dictionary } from '@onaio/utils';
import { Optional } from '../../helpers/utils';
type Options<T = any> = AntTableProps<T>;
type Action<T> = Optional<Column<T>, 'key' | 'dataIndex'>;
type TKey<T> = keyof T & React.Key;
export interface Column<T> extends ColumnType<T>, Dictionary {
    dataIndex?: TKey<T>;
    key?: TKey<T>;
}
interface Props<T> extends Omit<Options<T>, 'columns' | 'dataSource'> {
    datasource: T[];
    dataKeyAccessor?: keyof T;
    columns?: Column<T>[];
    actions?: Action<T>;
}
interface PersistState {
    id: string;
    persistState: boolean;
}
interface NoPersistState {
    id?: string;
    persistState?: never;
}
export type TableProps<T> = Props<T> & (PersistState | NoPersistState);
export type GenericWithKey = object & {
    key?: string | number;
};
/**
 * Table Layout Component used to render the table with default Settings
 *
 * @param props - Table settings
 * @returns - the component
 */
export declare function TableLayout<T extends GenericWithKey = Dictionary>(props: TableProps<T>): JSX.Element;
export default TableLayout;
