import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { HomeHero } from "@/areas/home/hero";
import { StatsStrip } from "@/areas/shared/stats-strip";
import { HomePromises } from "@/areas/home/promises";
import { HomeStatement } from "@/areas/home/statement";
import { HomeWorkerCta } from "@/areas/home/worker-cta";
import { HomeClients } from "@/areas/home/clients";
import { HomeAwards } from "@/areas/home/awards";
import { HomeNews } from "@/areas/home/news";

export const homeMeta = (lang: Locale) => {
  const t = getDict(lang).meta;
  return pageMeta(lang, "/", t.homeTitle, t.homeDesc, true);
};

export function HomeView({ lang }: { lang: Locale }) {
  return (
    <>
      <HomeHero lang={lang} />
      <StatsStrip lang={lang} />
      <HomePromises lang={lang} />
      <HomeStatement lang={lang} />
      <HomeWorkerCta lang={lang} />
      <HomeClients lang={lang} />
      <HomeAwards lang={lang} />
      <HomeNews lang={lang} />
    </>
  );
}
