import { UtilPageExtraProps } from '../UtilPageExtra';
/** typings for the resource404 component */
interface Resource404Props extends UtilPageExtraProps {
    title?: string;
    errorMessage?: string;
}
/**
 * component shown when a requested resource is not found;
 * the more canonical 404 component, is shown when a page is not yet bound
 * to the routing system, this component is to be used within an existing page
 * but where one or more resources to be shown on that page are deemed missing.
 */
declare const Resource404: {
    (props: Resource404Props): JSX.Element;
    defaultProps: {
        homeUrl: string;
    };
};
export { Resource404 };
