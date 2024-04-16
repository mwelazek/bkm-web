interface PatientListProps {
    fhirBaseURL: string;
}
/**
 * Component which shows the list of all patients in FHIR server
 *
 * @param {Object} props - UserGoupsList component props
 * @returns {Function} returns patients list display
 */
export declare const PatientsList: (props: PatientListProps) => JSX.Element;
export {};
