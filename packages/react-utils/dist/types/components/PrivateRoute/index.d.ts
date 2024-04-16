import { RouteProps } from 'react-router';
export declare const LOGIN_REDIRECT_URL_PARAM = "next";
/** interface for PrivateRoute props */
interface PrivateRouteProps extends RouteProps {
    disableLoginProtection: boolean /** should we disable login protection */;
    redirectPath: string /** redirect to this path is use if not authenticated */;
    permissions: string[] /** string representing permissions required to view nested view */;
}
/**
 * Wrapper around route that makes sure user is authenticated and has the correct permission
 *
 * @param props - component props
 */
declare const PrivateRoute: {
    (props: PrivateRouteProps): JSX.Element;
    defaultProps: Partial<PrivateRouteProps>;
};
export { PrivateRoute };
