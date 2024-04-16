/// <reference types="react" />
import { URLParams } from '@opensrp/server-service';
import type { SelectProps } from 'antd';
import { IResource } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IResource';
export type SelectOption<T extends IResource> = {
    label: string;
    value: string | number;
    ref: T;
};
export interface TransformOptions<T extends IResource> {
    (resource: T): SelectOption<T> | undefined;
}
export type AbstractedSelectOptions<ResourceT extends IResource> = Omit<SelectProps<string, SelectOption<ResourceT>>, 'loading' | 'options' | 'searchValue'>;
export interface FhirSelectProps<ResourceT extends IResource> extends AbstractedSelectOptions<ResourceT> {
    resourceType: string;
    baseUrl: string;
    transformOption: TransformOptions<ResourceT>;
    filterPageSize?: number;
    extraQueryParams?: URLParams;
    getFullOptionOnChange?: (obj: SelectOption<ResourceT> | SelectOption<ResourceT>[]) => void;
}
/**
 * Problem: When we want to api resources as options we need to fetch all resources on the api first
 * and add support for searching/filtering on the frontend. This leads to slow views and esentially means
 * we have to pull more data than sometimes we need.
 *
 * The solution: This component is a wrapper around the antd select component. It adds support for optional api side
 * searching, This means we no longer need to fetch all records of a certain specific resource to support searching.
 *
 * @param props - component props
 */
export declare function FhirSelect<ResourceT extends IResource>(props: FhirSelectProps<ResourceT>): JSX.Element;
