import { IfhirR4 } from '@smile-cdr/fhirts';
/**
 * checks if collection is empty or if all values in the obj can be said to hold null values
 *
 * @param coll - the collection
 */
export declare const itemIsEmpty: <T extends object>(coll?: T | undefined) => boolean;
/**
 * process top level fields of the documentReference resource
 *
 * @param docResource DocumentResource
 */
export declare const processTopLevelFields: (docResource: IfhirR4.IDocumentReference) => {
    id: string | undefined;
    title: string | undefined;
    createdAt: string | undefined;
    status: IfhirR4.DocumentReference.StatusEnum | undefined;
    documentType: {
        codeList: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/coding").Coding[] | undefined;
        code: any;
    };
    securityCodes: {
        codeList: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/codeableConcept").CodeableConcept[] | undefined;
        code: any;
    };
};
/**
 * Process context field in a documentReference
 *
 * @param docResource - the document resource
 */
export declare const processContextFields: (docResource: IfhirR4.IDocumentReference) => {
    periodStart: string | undefined;
    periodEnd: string | undefined;
    eventCoding: any;
    facilityTypeCoding: any;
    practiceSettingCoding: any;
};
/**
 * extract values from content field, will include the attachments and their formats
 *
 * @param docResource - the document resource
 */
export declare const processContentFields: (docResource: IfhirR4.IDocumentReference) => {
    attachment: {
        url: any;
        urlIsAbsolute: boolean | undefined;
        binaryUrl: string | undefined;
        data: any;
    };
    size: any;
    formatCode: any;
    formatDisplay: any;
    formatContentType: any;
}[];
/**
 * parses docResources and extracts attachment data, filtering out those with empty string data uris
 *
 * @param docResources - documentReference resource array
 */
export declare const processDocumentReferences: (docResources: IfhirR4.IDocumentReference[]) => {
    context: {
        periodStart: string | undefined;
        periodEnd: string | undefined;
        eventCoding: any;
        facilityTypeCoding: any;
        practiceSettingCoding: any;
    };
    content: {
        attachment: {
            url: any;
            urlIsAbsolute: boolean | undefined;
            binaryUrl: string | undefined;
            data: any;
        };
        size: any;
        formatCode: any;
        formatDisplay: any;
        formatContentType: any;
    }[];
    id: string | undefined;
    title: string | undefined;
    createdAt: string | undefined;
    status: IfhirR4.DocumentReference.StatusEnum | undefined;
    documentType: {
        codeList: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/coding").Coding[] | undefined;
        code: any;
    };
    securityCodes: {
        codeList: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/codeableConcept").CodeableConcept[] | undefined;
        code: any;
    };
}[];
export type ParsedDocReference = ReturnType<typeof processDocumentReferences>;
/**
 * get the discrete and multipart of a content-type
 *
 * @param contentType - mime type
 */
export declare const splitContentType: (contentType: string) => {
    discretePart: string;
    multipart: string;
};
/**
 * Act as a proxy when downloading attachments so that we can customize the name.
 * This pulls attachment as blob from fhir /Binary endpoint
 *
 * @param fhirBaseURL -the fhir base url
 * @param binaryEndpoint - a Binary endpoint url path
 */
export declare const fetchAttachmentForDownload: (fhirBaseURL: string, binaryEndpoint: string) => Promise<any>;
