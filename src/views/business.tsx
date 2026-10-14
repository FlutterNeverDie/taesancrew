import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { AboutSubnav } from "@/areas/shared/about-subnav";
import { BusinessHero } from "@/areas/business/hero";
import { BusinessPromises } from "@/areas/business/promises";
import { BusinessServices } from "@/areas/business/services";
import { BusinessProcess } from "@/areas/business/process";
import { BusinessManagement } from "@/areas/business/management";
import { BusinessClients } from "@/areas/business/clients";
import { BusinessCta } from "@/areas/business/cta";

export const businessMeta = (lang: Locale) => {
  const t = getDict(lang).meta;
  return pageMeta(lang, "/business", t.businessTitle, t.businessDesc);
};

export function BusinessView({ lang }: { lang: Locale }) {
  return (
    <>
      <BusinessHero lang={lang} />
      <AboutSubnav lang={lang} current="business" />
      <BusinessPromises lang={lang} />
      <BusinessServices lang={lang} />
      <BusinessProcess lang={lang} />
      <BusinessManagement lang={lang} />
      <BusinessClients lang={lang} />
      <BusinessCta lang={lang} />
    </>
  );
}
