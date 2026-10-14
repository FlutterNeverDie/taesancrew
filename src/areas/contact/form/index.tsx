import { Container } from "@/components/ui";
import { company, tel } from "@/lib/site";
import { getDict, lp, type Locale } from "@/i18n";
import { ContactForm as Form } from "./ContactForm";

export function ContactFormArea({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.contact;
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Form t={t.form} jobsHref={lp(lang, "/jobs")} privacyHref={lp(lang, "/privacy")} />
        <aside className="space-y-4">
          <a href={tel(company.mainPhone)} className="press block rounded-lg bg-point p-7 hover:bg-point-dark">
            <p className="text-base font-bold text-navy-900/70">{t.mainPhone}</p>
            <p dir="ltr" className="mt-1 text-3xl font-extrabold text-navy-950">{company.mainPhone}</p>
          </a>
          <div className="rounded-lg bg-navy-50 p-7 text-ink">
            <p>
              {t.office} <span dir="ltr">{company.officePhone}</span>
            </p>
            <p>
              {t.fax} <span dir="ltr">{company.fax}</span>
            </p>
            <p>
              {t.email} {company.email}
            </p>
          </div>
        </aside>
      </Container>
    </section>
  );
}
