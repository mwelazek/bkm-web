import { RbacAdapter } from '../helpers/types';
import { UserRole } from '../roleDefinition';
export declare const parseFHirRoles: (role: string) => UserRole | undefined;
export declare const parseKeycloakRoles: (stringRole: string) => UserRole | undefined;
export interface KeycloakRoleData {
    realmAccess?: string[];
    clientRoles?: Record<string, string[]>;
}
export declare const adapter: RbacAdapter;
