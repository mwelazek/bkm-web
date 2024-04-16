import { IEncounter } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IEncounter';
import { Period } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/period';
import { Coding } from '@smile-cdr/fhirts/dist/FHIR-R4/classes/coding';
import type { TFunction } from '@opensrp/i18n';
export declare const parseEncounter: (encounter: IEncounter) => {
    type: Coding[];
    reason: Coding[];
    status: import("@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IEncounter").Encounter.StatusEnum | undefined;
    classCode: Coding[];
    period: Period | undefined;
    duration: any;
};
export type EncounterTableData = ReturnType<typeof parseEncounter>;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: "period";
    render: (value: Period) => JSX.Element;
} | {
    title: string;
    dataIndex: "reason";
    render: (value: Coding[]) => JSX.Element;
} | {
    title: string;
    dataIndex: "status";
    render?: undefined;
} | {
    title: string;
    dataIndex: "classCode";
    render: (value: Coding[]) => JSX.Element;
} | {
    title: string;
    dataIndex: "type";
    render: (value: Coding[]) => JSX.Element;
})[];
