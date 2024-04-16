import React from 'react';
import type { TFunction } from '@opensrp/i18n';
interface FormField {
    name: string;
    description: string;
    active: boolean;
}
interface Props {
    id?: string;
    opensrpBaseURL: string;
    setEditTitle: Function;
}
/**
 * Handle form submission
 *
 * @param values the form fields
 * @param opensrpBaseURL - base url
 * @param props component props
 * @param setSubmitting method to set submission status
 * @param t - translations object lookup
 */
export declare const onSubmit: (values: FormField, opensrpBaseURL: string, props: Props, setSubmitting: (isSubmitting: boolean) => void, t: TFunction) => void;
export declare const Form: React.FC<Props>;
export default Form;
