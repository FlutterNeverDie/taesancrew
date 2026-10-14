import type { Locale } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { getVisa } from "@/i18n/visa";
import { VisaBody } from "@/areas/visa/body";

export const visaMeta = (lang: Locale) => {
  const t = getVisa(lang);
  return pageMeta(lang, "/visa", t.metaTitle, t.metaDesc, true);
};

export function VisaView({ lang }: { lang: Locale }) {
  return <VisaBody lang={lang} />;
}
