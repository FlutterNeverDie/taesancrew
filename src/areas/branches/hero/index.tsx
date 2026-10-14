import { PageHero } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

export function BranchesHero({ lang }: { lang: Locale }) {
  const t = getDict(lang).branchesPage;
  return <PageHero title={t.title} desc={t.desc} />;
}
