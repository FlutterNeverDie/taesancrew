import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { PrivacyBody } from "@/areas/privacy/body";

export const privacyMeta = (lang: Locale) => {
  const t = getDict(lang).meta;
  return pageMeta(lang, "/privacy", t.privacyTitle, t.privacyDesc);
};

export function PrivacyView({ lang }: { lang: Locale }) {
  return <PrivacyBody lang={lang} />;
}
