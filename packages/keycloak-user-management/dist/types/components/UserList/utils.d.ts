import { Dictionary } from '@onaio/utils';
import { Column } from '@opensrp/react-utils';
import type { TFunction } from '@opensrp/i18n';
import { KeycloakUser } from '../../ducks/user';
/**
 * Get table columns for user list
 *
 * @param  t - translations object lookup
 * @param sortedInfo - applied sort
 * @returns  an array of table columns
 */
export declare const getTableColumns: (t: TFunction, sortedInfo?: Dictionary) => Column<KeycloakUser>[];
