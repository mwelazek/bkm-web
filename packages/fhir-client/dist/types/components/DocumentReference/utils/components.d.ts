import { ReactNode } from 'react';
import { fhirR4 } from '@smile-cdr/fhirts';
import { ParsedDocReference } from './utils';
export interface ValueSectionProps {
    dataTestId?: string;
    children: ReactNode;
    label: string;
}
export type ValueProps = ValueSectionProps;
export declare const ValueSection: (props: ValueSectionProps) => JSX.Element;
export declare const Value: (props: ValueProps) => JSX.Element;
export interface DocTitleProps {
    title?: string;
    status?: string;
}
export declare const DocTitle: ({ title, status }: DocTitleProps) => JSX.Element;
export interface CodingProps {
    coding: fhirR4.Coding;
}
/**
 * Render a Coding data type
 *
 * @param props - props for Rendering Coding
 */
export declare const Coding: (props: CodingProps) => JSX.Element | null;
export interface DocPropertyDisplayProps {
    parsedDoc: ParsedDocReference[0];
    fhirBaseUrl: string;
}
export declare const DocPropertyDisplay: (props: DocPropertyDisplayProps) => JSX.Element;
interface DownloadLinkProps {
    linkToResource: string;
    fhirBaseUrl: string;
    filename: string;
}
/**
 * link to download downloaded binary data
 *
 * @param props - Props for download link
 */
export declare const DownloadLink: (props: DownloadLinkProps) => JSX.Element;
export {};
