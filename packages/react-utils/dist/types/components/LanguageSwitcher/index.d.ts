import { LanguageCode } from '@opensrp/pkg-config';
/** describes object representation of language options */
export type LanguageOptions = {
    [key in LanguageCode]?: string;
};
interface LanguageSwitcherProps {
    allLanguageOptions: LanguageOptions;
    supportedLanguages: LanguageCode[];
    onLanguageChange?: (languageOptionKey: string | number) => void;
}
/**
 * globe icon ui that can be used to change the language of the application
 *
 * @param props - component props
 */
declare const LanguageSwitcher: {
    (props: LanguageSwitcherProps): JSX.Element;
    defaultProps: {
        allLanguageOptions: {};
        supportedLanguages: never[];
    };
};
export { LanguageSwitcher };
