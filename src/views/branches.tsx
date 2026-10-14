import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { BranchesHero } from "@/areas/branches/hero";
import { AboutSubnav } from "@/areas/shared/about-subnav";
import { BranchesList } from "@/areas/branches/list";

export const branchesMeta = (lang: Locale) => {
  const t = getDict(lang).meta;
  return pageMeta(lang, "/branches", t.branchesTitle, t.branchesDesc, true);
};

export function BranchesView({ lang }: { lang: Locale }) {
  return (
    <>
      <BranchesHero lang={lang} />
      <AboutSubnav lang={lang} current="branches" />
      <BranchesList lang={lang} />
    </>
  );
}
