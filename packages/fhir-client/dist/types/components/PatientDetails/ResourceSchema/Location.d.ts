import { ILocation } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/ILocation';
import type { TFunction } from '@opensrp/i18n';
export declare const parseLocation: (obj: ILocation) => {
    name: string | undefined;
    alias: string[] | undefined;
    id: string | undefined;
    type: import("@smile-cdr/fhirts/dist/FHIR-R4/classes/coding").Coding[];
    city: any;
    country: any;
    state: any;
};
export type LocationTableData = ReturnType<typeof parseLocation>;
export declare const nameSorterFn: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
export declare const columns: (t: TFunction) => ({
    title: string;
    dataIndex: string;
    editable: boolean;
    sorter: (a: Record<string, unknown>, b: Record<string, unknown>) => number;
} | {
    title: string;
    dataIndex: string;
    editable?: undefined;
    sorter?: undefined;
})[];
