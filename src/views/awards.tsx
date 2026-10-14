import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { AwardsHero } from "@/areas/awards/hero";
import { AwardsLicenses } from "@/areas/awards/licenses";

// 수상·감사패(awards/awards)는 받은 게 생기면 다시 넣는다
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
