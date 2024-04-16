import { AuthZResource, BinaryNumber, ResourcePermitMap } from '../constants';
import { MatchStrategy } from '../helpers/types';
export declare class UserRole {
    private permissions;
    constructor(resource?: AuthZResource | AuthZResource[], verb?: BinaryNumber);
    getPermissionMap(): ResourcePermitMap;
    hasRoles(roles: UserRole[] | UserRole): boolean;
    hasPermissions(permissions: string | string[], strategy?: MatchStrategy): boolean;
    static fromResourceMap(resourceMap: ResourcePermitMap): UserRole | undefined;
    static fromPermissionStrings(permissionStrings: string | string[]): UserRole | undefined;
    static combineRoles(roles: UserRole[]): UserRole;
}
