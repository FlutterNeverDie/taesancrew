import { Lines, PageHero } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

export function BusinessHero({ lang }: { lang: Locale }) {
  const t = getDict(lang).business;
  return <PageHero title={<Lines lines={t.title} />} desc={t.desc} />;
}
