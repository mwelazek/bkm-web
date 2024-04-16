export type ParamKeyValuePairs = Record<string, string | undefined>;
/**
 * Commit search param changes directly to history.
 * TODO: - can be replaced with useSearchParams equivalent once we update to react-router v6.4.0
 */
export declare function useSearchParams(): {
    sParams: URLSearchParams;
    addParam: (queryKey: string, value?: string) => void;
    addParams: (keyValues: ParamKeyValuePairs) => void;
    removeParam: (queryKey: string) => void;
};
