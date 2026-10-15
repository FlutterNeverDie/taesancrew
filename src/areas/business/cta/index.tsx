import { ButtonLink, Container } from "@/components/ui";
import { company, tel } from "@/lib/site";
import { getDict, lp, type Locale } from "@/i18n";
import { BrochureButton } from "@/areas/shared/brochure-button";

export function BusinessCta({ lang }: { lang: Locale }) {
  const t = getDict(lang).business;
  return (
    <section className="on-dark bg-navy-800 py-16 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="text-2xl font-extrabold md:text-3xl">{t.ctaText}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={tel(company.mainPhone)} variant="point">
            <span dir="ltr">{company.mainPhone}</span>
          </ButtonLink>
          <ButtonLink href={lp(lang, "/contact")} variant="ghost">{t.ctaQuote}</ButtonLink>
          <BrochureButton lang={lang} tone="dark" />
        </div>
      </Container>
    </section>
  );
}
