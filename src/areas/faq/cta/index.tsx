import { ButtonLink, Container } from "@/components/ui";
import { company, tel } from "@/lib/site";
import { getDict, lp, type Locale } from "@/i18n";

export function FaqCta({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <section className="on-dark bg-navy-800 py-16 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="text-2xl font-extrabold md:text-3xl">{d.faq.ctaText}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={tel(company.mainPhone)} variant="point">
            {d.common.call} <span dir="ltr">{company.mainPhone}</span>
          </ButtonLink>
          <ButtonLink href={lp(lang, "/contact")} variant="ghost">{d.faq.ctaLeave}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
