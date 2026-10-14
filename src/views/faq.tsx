import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { FaqHero } from "@/areas/faq/hero";
import { FaqJumpNav } from "@/areas/faq/jump-nav";
import { FaqColumns } from "@/areas/faq/columns";
import { FaqCta } from "@/areas/faq/cta";

export const faqMeta = (lang: Locale) => {
  const t = getDict(lang).meta;
  return pageMeta(lang, "/faq", t.faqTitle, t.faqDesc);
};

export function FaqView({ lang }: { lang: Locale }) {
  return (
    <>
      <FaqHero lang={lang} />
      <FaqJumpNav lang={lang} />
      <FaqColumns lang={lang} />
      <FaqCta lang={lang} />
    </>
  );
}
