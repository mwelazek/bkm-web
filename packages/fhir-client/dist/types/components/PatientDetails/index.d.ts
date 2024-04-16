import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface RouteParams {
    id: string;
}
/** props for editing a user view */
export interface PatientDetailProps {
    fhirBaseURL: string;
    patientBundleSize: number;
}
/** type intersection for all types that pertain to the props */
export type PatientDetailPropTypes = PatientDetailProps & RouteComponentProps<RouteParams>;
/** default props for editing patient component */
export declare const defaultEditPatientProps: PatientDetailProps;
/**
 * Component which shows FHIR resource details of a single patient
 *
 * @param {Object} props - PatientDetails component props
 * @returns {React.FC} returns patient resources display
 */
declare const PatientDetails: React.FC<PatientDetailPropTypes>;
export { PatientDetails };
