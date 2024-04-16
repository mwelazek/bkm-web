import React from 'react';
import { LocationUnit } from '../../ducks/location-units';
export interface Props extends LocationUnit {
    onClose?: Function;
}
declare const LocationUnitDetail: React.FC<Props>;
export default LocationUnitDetail;
