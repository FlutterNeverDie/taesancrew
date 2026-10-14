import { Container } from "@/components/ui";
import { branches, tel } from "@/lib/site";
import { smsApplyHref } from "@/i18n/sms";
import { branchText, getDict, type Locale } from "@/i18n";

export function JobsBranches({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <Container>
        <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">{d.jobs.branchesTitle}</h2>
        <ul className="mt-8 border-t-4 border-navy-900 md:mt-10">
          {branches.map((b) => {
            const bt = branchText(d, b.slug);
            return (
              <li key={b.slug} className="grid gap-4 border-b border-navy-200 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
                <div className="min-w-0">
                  <p className="text-2xl font-extrabold text-navy-950">{bt.name}</p>
                  <p className="mt-1.5 text-lg text-ink">{b.address}</p>
                  {bt.landmark && <p className="mt-0.5 text-base font-semibold text-navy-700 md:text-lg">{bt.landmark}</p>}
                </div>
                {b.phone && (
                  <div className="flex flex-wrap items-center gap-2">
                    <a href={tel(b.phone)} className="press inline-flex min-h-13 items-center gap-2 rounded-md bg-navy-900 px-5 text-lg font-bold whitespace-nowrap text-white tabular-nums hover:bg-navy-800">
                      {d.common.call} <span dir="ltr">{b.phone}</span>
                    </a>
                    <a href={smsApplyHref(b.phone, b.name, lang)} className="press inline-flex min-h-13 items-center rounded-md border-2 border-navy-900 px-5 text-lg font-bold whitespace-nowrap text-navy-900 hover:bg-paper">
                      {d.common.smsApply}
                    </a>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
