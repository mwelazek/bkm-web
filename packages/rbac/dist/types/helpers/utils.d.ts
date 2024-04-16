import { ResourcePermitMap } from '../constants';
/**
 * convert to array if not array
 *
 * @param obj - value to conver to array if not array.
 */
export declare function makeArray<T>(obj: T | T[]): T[];
export declare const permitLiteralKeys: string[];
/**
 * validates that a string is a valid representation of one of the recognized
 * resource permit combinations.
 *
 * @param permission - string to be validated.
 */
export declare function validatePermissionStr(permission: string): boolean;
/**
 * creates resourcePermit maps from human readable strings
 *
 * @param permissions - string of arrays to be converted to resourcePermitMaps
 */
export declare function parsePermissionStr(permissions: string[]): ResourcePermitMap[];
/**
 * @param resourcePermits array of resource permits to merge into one resource permit map
 */
export declare function combineResourcePermits(resourcePermits: ResourcePermitMap[]): Map<any, any>;
