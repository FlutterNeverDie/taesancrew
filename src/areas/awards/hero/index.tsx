import { PageHero } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

export function AwardsHero({ lang }: { lang: Locale }) {
  const t = getDict(lang).awards;
  return <PageHero title={t.title} desc={t.desc} />;
}
