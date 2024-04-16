import React, { MouseEventHandler } from 'react';
export interface LUDProps {
    onClose: MouseEventHandler<HTMLElement>;
    fhirBaseUrl: string;
    detailId: string;
}
export declare const LocationUnitDetail: React.FC<LUDProps>;
