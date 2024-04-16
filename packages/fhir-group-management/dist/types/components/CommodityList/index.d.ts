import { IGroup } from '@smile-cdr/fhirts/dist/FHIR-R4/interfaces/IGroup';
interface GroupListProps {
    fhirBaseURL: string;
    listId: string;
}
/**
 * Shows the list of all group and there details
 *
 * @param  props - GroupList component props
 * @returns returns healthcare display
 */
export declare const CommodityList: (props: GroupListProps) => JSX.Element;
/**
 * Soft deletes a commodity resource. Sets its active to false and removes it from the
 * list resource.
 *
 * @param fhirBaseURL - base url to fhir server
 * @param obj - commodity resource to be disabled
 * @param listId - id of list resource where this was referenced.
 */
export declare const deleteCommodity: (fhirBaseURL: string, obj: IGroup, listId: string) => Promise<IGroup>;
export {};
