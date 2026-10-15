import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { AboutHero } from "@/areas/about/hero";
import { AboutGreeting } from "@/areas/about/greeting";
import { StatsStrip } from "@/areas/shared/stats-strip";
import { AboutSubnav } from "@/areas/shared/about-subnav";
import { AboutFocus } from "@/areas/about/focus";
import { AboutBranches } from "@/areas/about/branches";
import { AboutPhotos } from "@/areas/about/photos";

export const aboutMeta = (lang: Locale) => {
  const t = getDict(lang).meta;
  return pageMeta(lang, "/about", t.aboutTitle, t.aboutDesc);
};

export function AboutView({ lang }: { lang: Locale }) {
  return (
    <>
      <AboutHero lang={lang} />
      <AboutSubnav lang={lang} current="about" />
      <AboutGreeting lang={lang} />
      <StatsStrip lang={lang} />
      <AboutPhotos lang={lang} />
      <AboutFocus lang={lang} />
      <AboutBranches lang={lang} />
    </>
  );
}
