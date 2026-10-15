import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { AwardsHero } from "@/areas/awards/hero";
import { AwardsLicenses } from "@/areas/awards/licenses";

// 등록증 페이지 (수상·감사패는 쓰지 않기로 해서 영역을 지웠다, 2026-10-15)
export const awardsMeta = (lang: Locale) => {
  const t = getDict(lang).meta;
  return pageMeta(lang, "/awards", t.awardsTitle, t.awardsDesc);
};

export function AwardsView({ lang }: { lang: Locale }) {
  return (
    <>
      <AwardsHero lang={lang} />
      <AwardsLicenses lang={lang} />
    </>
  );
}
