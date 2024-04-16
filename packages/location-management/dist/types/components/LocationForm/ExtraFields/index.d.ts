export interface ExtraFieldProps {
    baseURL: string;
    disabled: boolean;
    hidden: boolean;
}
/**
 * renders the extra fields form fields
 *
 * @param props - the components props
 */
declare const ExtraFields: {
    (props: ExtraFieldProps): JSX.Element;
    defaultProps: {
        baseURL: string;
        disabled: boolean;
        hidden: boolean;
    };
};
export { ExtraFields };
