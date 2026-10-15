import { Container } from "@/components/ui";
import { company, tel } from "@/lib/site";
import { getDict, lp, type Locale } from "@/i18n";
import { PhoneIcon } from "@/components/icons";
import { ContactForm as Form } from "./ContactForm";

export function ContactFormArea({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.contact;
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Form t={t.form} jobsHref={lp(lang, "/jobs")} privacyHref={lp(lang, "/privacy")} />
        {/* 오른쪽: 요청부터 배치·사후 관리까지 5단계(사전의 process) + 맨 끝에 대표전화. PC에서는 스크롤해도 따라온다 */}
        <aside className="self-start md:sticky md:top-24">
          <h2 className="text-xl font-extrabold text-navy-950 md:text-2xl">{d.business.processTitle}</h2>
          <ol className="mt-6 space-y-0 border-s-2 border-navy-100 ms-4">
            {d.process.map((p, i) => (
              <li key={p.step} className="relative pb-6 ps-8 last:pb-0">
                <span className="absolute -start-[1.0625rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-extrabold text-point ring-4 ring-paper">
                  {i + 1}
                </span>
                <p className="pt-0.5 text-lg font-extrabold text-navy-950">{p.step}</p>
                <p className="mt-1 text-base leading-relaxed text-muted md:text-lg">{p.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 border-t border-rule pt-6">
            <p className="text-base font-bold text-navy-700">{t.mainPhone}</p>
            <a href={tel(company.mainPhone)} dir="ltr" className="mt-1.5 inline-flex items-center gap-2.5 font-display text-[2rem] leading-none font-extrabold tracking-tight text-navy-950 tabular-nums hover:text-navy-700 md:text-[2.25rem]">
              <PhoneIcon className="h-7 w-7 text-navy-800" />
              {company.mainPhone}
            </a>
          </div>
        </aside>
      </Container>
    </section>
  );
}
