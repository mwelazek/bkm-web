import { parseGroup, ViewDetailsProps } from '../GroupDetail';
import { Column } from '@opensrp/react-utils';
import { TFunction } from '@opensrp/i18n';
export type TableData = ReturnType<typeof parseGroup>;
export type BaseListViewProps = Pick<ViewDetailsProps, 'keyValueMapperRenderProp'> & {
    fhirBaseURL: string;
    getColumns: (t: TFunction) => Column<TableData>[];
    extraQueryFilters?: Record<string, string>;
    createButtonLabel: string;
    createButtonUrl?: string;
    pageTitle: string;
};
/**
 * Shows the list of all group and there details
 *
 * @param  props - GroupList component props
 * @returns returns healthcare display
 */
export declare const BaseListView: (props: BaseListViewProps) => JSX.Element;
