import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import type { Branch } from "@/lib/site";
import { BranchHero } from "@/areas/branch/hero";
import { BranchInfo } from "@/areas/branch/info";
import { BranchPostings } from "@/areas/branch/postings";
import { BranchOthers } from "@/areas/branch/others";

// 지점별 페이지 (/branches/gwangju 등). "성남 인력사무소" 같은 지역 검색용
export const branchMeta = (lang: Locale, b: Branch) => {
  const t = getDict(lang).branches[b.slug as keyof ReturnType<typeof getDict>["branches"]];
  return pageMeta(lang, `/branches/${b.slug}`, t.seoTitle, t.seoDesc, true);
};

export function BranchView({ lang, b }: { lang: Locale; b: Branch }) {
  return (
    <>
      <BranchHero lang={lang} b={b} />
      <BranchInfo lang={lang} b={b} />
      <BranchPostings lang={lang} b={b} />
      <BranchOthers lang={lang} b={b} />
    </>
  );
}
