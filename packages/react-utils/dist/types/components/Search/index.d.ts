import { OnChangeType } from './utils';
import { InputProps } from 'antd/lib/input/';
/**
 * Interface for SearchForm props
 */
export interface SearchFormProps extends InputProps {
    onChangeHandler: OnChangeType;
}
/**
 * default props for SearchForm component
 */
export declare const defaultSearchProps: SearchFormProps;
/**
 * Base SearchForm component
 *
 * @param props - the component's props
 */
declare const SearchForm: {
    (props: SearchFormProps): JSX.Element;
    defaultProps: SearchFormProps;
};
export { SearchForm };
