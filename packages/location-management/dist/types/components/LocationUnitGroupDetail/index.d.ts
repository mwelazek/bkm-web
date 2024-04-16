import { LocationUnitGroup } from '../../ducks/location-unit-groups';
export interface LocationUnitGroupDetailProps extends LocationUnitGroup {
    onClose?: Function;
}
declare const LocationUnitGroupDetail: (props: LocationUnitGroupDetailProps) => JSX.Element;
export default LocationUnitGroupDetail;
