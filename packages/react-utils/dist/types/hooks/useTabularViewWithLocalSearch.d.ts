import { ChangeEvent } from 'react';
import { Resource } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/resource';
import { URLParams } from '@opensrp/server-service';
/**
 * Re-usable hook that abstracts search and table pagination for usual list view component
 * Should only be used when getting data from a server that follows the hapi FHIR spec
 *
 * @param fhirBaseUrl - fhir server baser url
 * @param resourceType - resource type as endpoint
 * @param extraParams - further custom search param filters during api requests
 * @param matchesSearch -  function that computes whether a resource payload should be matched by search
 */
export declare function useTabularViewWithLocalSearch<T extends Resource>(fhirBaseUrl: string, resourceType: string, extraParams?: URLParams | ((search: string | null) => URLParams), matchesSearch?: (obj: T, search: string) => boolean): {
    tablePaginationProps: {
        current: number;
        pageSize: number;
        total: number | undefined;
        defaultPageSize: number;
        onChange: (current: number, pageSize?: number) => void;
    };
    queryValues: {
        error: null;
        isError: false;
        isIdle: true;
        isLoading: false;
        isLoadingError: false;
        isRefetchError: false;
        isSuccess: false;
        status: "idle";
        dataUpdatedAt: number;
        errorUpdatedAt: number;
        failureCount: number;
        isFetched: boolean;
        isFetchedAfterMount: boolean;
        isFetching: boolean;
        isPlaceholderData: boolean;
        isPreviousData: boolean;
        isRefetching: boolean;
        isStale: boolean;
        refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<T[], unknown>>;
        remove: () => void;
        data: T[] | undefined;
    } | {
        error: unknown;
        isError: true;
        isIdle: false;
        isLoading: false;
        isLoadingError: true;
        isRefetchError: false;
        isSuccess: false;
        status: "error";
        dataUpdatedAt: number;
        errorUpdatedAt: number;
        failureCount: number;
        isFetched: boolean;
        isFetchedAfterMount: boolean;
        isFetching: boolean;
        isPlaceholderData: boolean;
        isPreviousData: boolean;
        isRefetching: boolean;
        isStale: boolean;
        refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<T[], unknown>>;
        remove: () => void;
        data: T[] | undefined;
    } | {
        error: null;
        isError: false;
        isIdle: false;
        isLoading: true;
        isLoadingError: false;
        isRefetchError: false;
        isSuccess: false;
        status: "loading";
        dataUpdatedAt: number;
        errorUpdatedAt: number;
        failureCount: number;
        isFetched: boolean;
        isFetchedAfterMount: boolean;
        isFetching: boolean;
        isPlaceholderData: boolean;
        isPreviousData: boolean;
        isRefetching: boolean;
        isStale: boolean;
        refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<T[], unknown>>;
        remove: () => void;
        data: T[] | undefined;
    } | {
        error: unknown;
        isError: true;
        isIdle: false;
        isLoading: false;
        isLoadingError: false;
        isRefetchError: true;
        isSuccess: false;
        status: "error";
        dataUpdatedAt: number;
        errorUpdatedAt: number;
        failureCount: number;
        isFetched: boolean;
        isFetchedAfterMount: boolean;
        isFetching: boolean;
        isPlaceholderData: boolean;
        isPreviousData: boolean;
        isRefetching: boolean;
        isStale: boolean;
        refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<T[], unknown>>;
        remove: () => void;
        data: T[] | undefined;
    } | {
        error: null;
        isError: false;
        isIdle: false;
        isLoading: false;
        isLoadingError: false;
        isRefetchError: false;
        isSuccess: true;
        status: "success";
        dataUpdatedAt: number;
        errorUpdatedAt: number;
        failureCount: number;
        isFetched: boolean;
        isFetchedAfterMount: boolean;
        isFetching: boolean;
        isPlaceholderData: boolean;
        isPreviousData: boolean;
        isRefetching: boolean;
        isStale: boolean;
        refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<T[], unknown>>;
        remove: () => void;
        data: T[] | undefined;
    };
    searchFormProps: {
        defaultValue: string | string[] | undefined;
        onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    };
};
