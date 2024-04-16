import { UtilPageExtraProps } from '../UtilPageExtra';
/** props for the unauthorized page component */
export interface UnauthorizedPageProps extends UtilPageExtraProps {
    title?: string;
    errorMessage?: string;
}
/** the component that renders a 500 view */
declare const UnauthorizedPage: {
    (props: UnauthorizedPageProps): JSX.Element;
    defaultProps: {
        homeUrl: string;
    };
};
export { UnauthorizedPage };
/** custom hook that abstracts behavior of an unauthorized page */
export declare const useHandleUnauthorizedPage: () => {
    unauthorized: boolean;
    errorMessage: string | undefined;
    handleUnauthorizedPage: (error: Error) => void;
};
