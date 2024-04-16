import { UtilPageExtraProps } from '../UtilPageExtra';
/** props for the broken page component */
export interface BrokenPageProps extends UtilPageExtraProps {
    title?: string;
    errorMessage?: string;
}
export declare const defaultProps: {
    /** props for the broken page component */
    homeUrl: string;
};
/**
 * the component that renders a 500 view
 *
 * @param props - the component props
 */
declare const BrokenPage: {
    (props: BrokenPageProps): JSX.Element;
    defaultProps: {
        /** props for the broken page component */
        homeUrl: string;
    };
};
export { BrokenPage };
/** custom hook that abstracts behavior of a broken page */
export declare const useHandleBrokenPage: () => {
    broken: boolean;
    errorMessage: string | undefined;
    handleBrokenPage: (error: Error) => void;
};
