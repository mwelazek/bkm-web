import { IPatient } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPatient';
import { Column } from '@opensrp/react-utils';
import type { TFunction } from '@opensrp/i18n';
export declare const parsePatient: (patient: IPatient) => {
    id: string | undefined;
    name: string;
    dob: string | undefined;
    gender: import("@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPatient").Patient.GenderEnum | undefined;
    deceased: boolean | undefined;
    active: boolean | undefined;
};
export type PatientTableData = ReturnType<typeof parsePatient>;
export declare const columns: (t: TFunction) => Column<{
    id: string | undefined;
    name: string;
    dob: string | undefined;
    gender: import("@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IPatient").Patient.GenderEnum | undefined;
    deceased: boolean | undefined;
    active: boolean | undefined;
}>;
/**
 * maps the column field keys to their corresponding Fhir sortable keys for this resource.
 */
export declare const sortMap: {
    id: string;
    name: string;
    dob: string;
};
/**
 * Columns for this resource(Patients) but where sorting happens on the server side as opposed
 * to locally on the ui.
 *
 * @param t - the translator function
 */
export declare const serverSideSortedColumns: (t: TFunction) => any;
