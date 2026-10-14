import { PageHero } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

export function BlogHero({ lang }: { lang: Locale }) {
  const t = getDict(lang).blog;
  return <PageHero title={t.title} desc={t.desc} />;
}
