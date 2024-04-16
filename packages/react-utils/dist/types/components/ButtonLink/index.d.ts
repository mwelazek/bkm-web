import { HTMLAttributes } from 'react';
/***
 * Simple button, type link supposed to be used for navigation
 */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    name: string;
    route: string;
}
declare const ButtonLink: (props: ButtonProps) => JSX.Element;
export { ButtonLink };
