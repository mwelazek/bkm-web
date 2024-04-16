import { RouteProps } from 'react-router';
/** Private/Public component props */
interface ComponentProps extends Partial<RouteProps> {
    component: any;
    redirectPath: string;
    disableLoginProtection: boolean;
    path: string;
    keycloakBaseURL?: string;
    opensrpBaseURL?: string;
    fhirBaseURL?: string;
    permissions: string[];
}
/**
 * Util wrapper around Route for rendering components
 *  that use public routes/ dont require authentication
 *
 * @param props - Component props object
 */
export declare const PublicComponent: ({ component: Component, ...rest }: Partial<ComponentProps>) => JSX.Element;
/**
 * Util function to check if user is authorized to access a particular page
 *
 * @param {string[]} roles - list of all user roles from keycloak
 * @param {string[]} activeRoles - list of roles required to access a module/page
 */
export declare const isAuthorized: (roles: string[], activeRoles: string[]) => boolean;
/** Dry-ed out form layout configs */
/** responsive layout for the form labels and columns */
export declare const formItemLayout: {
    labelCol: {
        xs: {
            span: number;
        };
        sm: {
            span: number;
        };
        md: {
            span: number;
        };
        lg: {
            span: number;
        };
    };
    wrapperCol: {
        xs: {
            span: number;
        };
        sm: {
            span: number;
        };
        md: {
            span: number;
        };
        lg: {
            span: number;
        };
    };
};
export declare const tailLayout: {
    wrapperCol: {
        xs: {
            offset: number;
            span: number;
        };
        sm: {
            offset: number;
            span: number;
        };
        md: {
            offset: number;
            span: number;
        };
        lg: {
            offset: number;
            span: number;
        };
    };
};
export {};
