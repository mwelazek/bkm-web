import { IfhirR4 } from '@smile-cdr/fhirts';
export interface DocumentReferenceDetailsProps {
    documentResources: IfhirR4.IDocumentReference[];
    fhirBaseApiUrl: string;
}
/**
 * Renders details within a documentReference resource
 *
 * @param props - the props
 */
export declare const DocumentReferenceDetails: (props: DocumentReferenceDetailsProps) => JSX.Element;
