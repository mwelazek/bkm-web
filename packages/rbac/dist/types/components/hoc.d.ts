import { ReactNode } from 'react';
import React from 'react';
import { UserRole } from '../roleDefinition';
import { MatchStrategy } from '../helpers/types';
export interface RbacProps {
    permissions: string[];
    matchStrategy?: MatchStrategy;
    children?: JSX.Element | null;
    fallback?: JSX.Element;
}
/**
 * HOC that checks if user has required roles to see the nested component tree.
 *
 * @param props - component props
 */
export declare function RbacCheck(props: RbacProps): JSX.Element | null;
export declare const RoleContext: React.Context<UserRole>;
export interface RbacProviderProps {
    children: ReactNode;
}
/**
 * Provides the userRole context to tree.
 *
 * @param props - props
 */
export declare function RbacProvider(props: RbacProviderProps): JSX.Element;
/**
 *
 */
export declare function useStoreUserRole(): UserRole;
/**
 * Get userRole from RoleContext
 */
export declare function useUserRole(): UserRole;
