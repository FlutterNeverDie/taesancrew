import { Lines, PageHero } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

export function AboutHero({ lang }: { lang: Locale }) {
  const t = getDict(lang).about;
  return <PageHero title={<Lines lines={t.title} />} desc={t.desc} />;
}
