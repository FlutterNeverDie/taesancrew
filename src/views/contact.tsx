import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { ContactHero } from "@/areas/contact/hero";
import { ContactFormArea } from "@/areas/contact/form";

export const contactMeta = (lang: Locale) => {
  const t = getDict(lang).meta;
  return pageMeta(lang, "/contact", t.contactTitle, t.contactDesc);
};

export function ContactView({ lang }: { lang: Locale }) {
  return (
    <>
      <ContactHero lang={lang} />
      <ContactFormArea lang={lang} />
    </>
  );
}
