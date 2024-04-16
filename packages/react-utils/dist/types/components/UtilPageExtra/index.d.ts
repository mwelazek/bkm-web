export interface UtilPageExtraProps {
    homeUrl: string;
}
export declare const extraLinksDefault: {
    homeUrl: string;
};
/**
 * util component that is used in several other util-views that serve
 * as notification views
 */
declare const ExtraLinks: {
    (props: UtilPageExtraProps): JSX.Element;
    defaultProps: {
        homeUrl: string;
    };
};
export { ExtraLinks };
