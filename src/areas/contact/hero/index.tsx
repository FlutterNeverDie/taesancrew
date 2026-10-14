import { PageHero } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

export function ContactHero({ lang }: { lang: Locale }) {
  const t = getDict(lang).contact;
  return <PageHero title={t.title} desc={t.desc} />;
}
