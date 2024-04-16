/// <reference types="react" />
import { PaginationProps } from 'antd/lib/pagination/Pagination';
export declare const supportedLanguageCodes: readonly ["en", "sw", "fr", "ar", "th", "vi"];
export declare const supportedProjectCode: readonly ["eusm", "core", "echis"];
export declare const supportedRbacStrategies: readonly ["keycloak"];
export type LanguageCode = typeof supportedLanguageCodes[number];
export type ProjectCode = typeof supportedProjectCode[number];
export type KeycloakStrategies = typeof supportedRbacStrategies[number];
export type GlobalState = ConfigState & UserPreference;
export type PaginationState = Pick<PaginationProps, 'current' | 'pageSize'>;
export interface TableState {
    pagination?: PaginationState;
}
/** interface for configs for this package */
export interface ConfigState {
    languageCode?: LanguageCode;
    projectCode?: ProjectCode;
    appLoginURL?: string;
    keycloakBaseURL?: string;
    opensrpBaseURL?: string;
    fhirBaseURL?: string;
    defaultTablesPageSize?: number;
    rbacStrategy?: KeycloakStrategies;
    practToOrgAssignmentStrategy?: PractToOrgAssignmentStrategy;
}
export interface UserPreference {
    tablespref?: Record<string, TableState>;
}
/**
 * This strategy only applies unilaterally, i.e. from practitioner to organization.
 * It does not imply any relations in the opposite direction i.e. from organization
 * to practitioner.
 */
export declare enum PractToOrgAssignmentStrategy {
    ONE_TO_ONE = "ONE_TO_ONE",
    ONE_TO_MANY = "ONE_TO_MANY"
}
/**
 * hook to get and update values in the config store
 *
 * @example
 * import { useGlobalConfigs } from `'@opensrp/pkg-config'`;
 *
 * const Component = () => {
 *   const [language, setLanguage] = useGlobalConfigs('languageCode');
 *   ...
 * };
 */
declare const useGlobalConfigs: <StateKey extends "tablespref" | keyof ConfigState>(stateKey: StateKey) => readonly [GlobalState[StateKey], (u: import("react").SetStateAction<GlobalState[StateKey]>) => void];
/**
 * function to get config values outside of React
 *
 * @example
 * import {getConfig} from `"@opensrp/pkg-config"`;
 *
 * const language = getConfig('languageCode');
 */
declare const getConfig: <StateKey_1 extends "tablespref" | keyof ConfigState>(stateKey: StateKey_1) => GlobalState[StateKey_1];
/**
 * function to set config values outside of React
 *
 * @param key name of the config to set
 * @param value value of the config to set
 * @example
 * import {setConfig} from `'@opensrp/pkg-config'`;
 *
 * const language = setConfig('languageCode', 'fr');
 */
declare function setConfig<T extends keyof GlobalState>(key: T, value: GlobalState[T]): void;
/**
 * function to get all config values outside of React
 *
 * @example
 * import {getAllConfigs} from `'@opensrp/pkg-config'`;
 *
 * const allConfigs = getAllConfigs();;
 */
declare const getAllConfigs: () => GlobalState;
/**
 * function to get all config values outside of React
 *
 * @param value Object for setting all config values
 * @example
 * import {setAllConfigs} from `'@opensrp/pkg-config'`;
 *
 * const configs = {
 *  languageCode: 'en',
 *  projectCode: 'core',
 * }
 *
 * const allConfigs = setAllConfigs(configs);
 */
declare function setAllConfigs(value: GlobalState): void;
export { useGlobalConfigs, getConfig, setConfig, getAllConfigs, setAllConfigs };
