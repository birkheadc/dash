import { TOptions, i18n } from "i18next";
import { useTranslation } from "react-i18next";

export type KeyedTranslationReturn = {
  t: (key: string | number, options?: TOptions) => string;
  i18n: i18n;
};

export function useKeyedTranslation(base: string): KeyedTranslationReturn {
  const { t: _t, i18n } = useTranslation();
  const t = (key: string | number, options?: TOptions) =>
    _t(`${base}.${key}`, options);
  return { t, i18n };
}
