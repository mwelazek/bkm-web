/// <reference types="react" />
import { Dictionary } from '@onaio/utils';
import { UseInfiniteQueryOptions } from 'react-query/react';
import { TableProps } from '../TableLayout';
export type PaginatedData<T> = {
    data: T;
    total?: number;
};
export type DataDictionary<T> = Dictionary<PaginatedData<T>>;
export interface PaginateData<Data, Response = Data[], Error = unknown> {
    onSuccess?: (response: PaginatedData<Response>) => void;
    onError?: (error: Error) => void;
    onSelect?: (response: Response) => Data[];
    queryFn: (currentPage: number, pageSize: number, queryString?: string) => Promise<Response> | Response;
    queryOptions?: Omit<UseInfiniteQueryOptions<PaginatedData<Response>, Error, PaginatedData<Response>, PaginatedData<Response>, (string | number | Dictionary | undefined)[]>, 'queryKey' | 'queryFn' | 'onSuccess' | 'onError'>;
    queryid: string;
    currentPage?: number;
    pageSize?: number;
    queryPram?: Dictionary;
    total?: number | ((data: Response, page: number, pageSize: number, queryString?: string) => Promise<number> | number);
    children: (props: TableProps<Data> & {
        fetchNextPage: Function;
        fetchPreviousPage: Function;
    }) => JSX.Element;
}
/**
 * Loads Data in Paginated format
 *
 * @param {PaginateData} props - component props
 * @returns {Element} - component
 */
export declare function PaginateData<Data extends object = Dictionary, Response = Data[]>(props: PaginateData<Data, Response>): JSX.Element;
