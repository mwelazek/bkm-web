import { Dispatch, SetStateAction } from 'react';
import { Dictionary } from '@onaio/utils';
import { SelectProps, DefaultOptionType } from 'antd/lib/select';
type RawValueType = string | number | (string | number)[];
export type GetOptions<T> = (data: T[]) => DefaultOptionType[];
export type GetSelectedFullData<T> = (data: T[], getOptions: GetOptions<T>, value: SelectProps<RawValueType>['value']) => T[];
/**
 * default method to get the fullData object once use selects an option in the select dropdown,
 * once the user selects, you only get the id of the selected object, this function will be called
 * to get the full object.
 *
 * @param data - the full data objects
 * @param getOptions - function used to get the options tos how on the dropdown
 * @param value - selected value (an array for multi select otherwise a string)
 */
export declare function getSelectedFullData<T>(data: T[], getOptions: GetOptions<T>, value: SelectProps<RawValueType>['value']): T[];
/** props for custom select component */
export interface CustomSelectProps<T = Dictionary> extends SelectProps<RawValueType> {
    loadData: (stateSetter: Dispatch<SetStateAction<T[]>>) => Promise<void>;
    getOptions: GetOptions<T>;
    fullDataCallback?: (data: T[]) => void;
    getSelectedFullData: GetSelectedFullData<T>;
}
/**
 * custom select,  gets options from the api
 *
 * @param props - the component props
 */
declare function CustomSelect<T>(props: CustomSelectProps<T>): JSX.Element;
declare namespace CustomSelect {
    var defaultProps: {
        loadData: () => Promise<void>;
        getOptions: () => never[];
        getSelectedFullData: typeof getSelectedFullData;
        showSearch: boolean;
        filterOption: (inputValue: string, option?: DefaultOptionType | undefined) => boolean;
    };
}
export { CustomSelect };
