import queryString from 'querystring';
import { ChangeEvent } from 'react';
import { RouteComponentProps } from 'react-router';
/** call handler function after this many milliseconds since when it was last invoked */
export declare const DEBOUNCE_HANDLER_MS = 1000;
/**
 * Get query params from URL
 *
 * @param {Location} location from props
 */
export declare const getQueryParams: (location: RouteComponentProps['location']) => queryString.ParsedUrlQuery;
/** function type for custom onChangeHandler functions */
export type OnChangeType = (event: ChangeEvent<HTMLInputElement>) => void;
/**
 * A callback helper to add filter text to url
 *
 * @param queryParam - the string to be used as the key when constructing searchParams
 * @param props - the component props; should include RouteComponentProps
 */
export declare const createChangeHandler: <T extends RouteComponentProps<{}, import("react-router").StaticContext, unknown>>(queryParam: string, props: T) => (event: ChangeEvent<HTMLInputElement>) => void;
