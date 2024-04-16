/// <reference types="react" />
import { UserRole } from '@opensrp/rbac';
export declare const superUserRole: UserRole;
export interface ContextProviderProps {
    children: JSX.Element;
}
export declare const ContextProvider: (props: ContextProviderProps) => JSX.Element;
