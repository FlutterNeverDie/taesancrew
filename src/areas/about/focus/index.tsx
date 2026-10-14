import Link from "next/link";
import { Container } from "@/components/ui";
import { getDict, lp, type Locale } from "@/i18n";

// 회사소개 안의 "중점분야": 어떤 분야에 사람을 보내는지. 위에서 아래로 읽히게(제목 → 큰 분야 → 나머지 분야)
// 물류 현장 이름은 지점 채용 전단에 실제로 나온 곳만 적는다 (사전의 about.focusSites)
export function AboutFocus({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.about;
  const [main, ...others] = d.services; // services[0] = 물류·유통 아웃소싱

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[1.75rem] leading-snug font-extrabold text-navy-950 md:text-[2.5rem]">{t.focusTitle}</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted md:text-xl">{t.focusDesc}</p>
          </div>
          <Link href={lp(lang, "/business")} className="text-lg font-bold text-navy-700 underline decoration-2 underline-offset-4 hover:text-navy-900">
            {t.focusLink}
          </Link>
        </div>

        {/* 가장 큰 분야: 물류·유통 */}
        <article className="on-dark mt-10 grid gap-8 rounded-lg bg-navy-900 p-7 text-white md:mt-12 md:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="inline-block rounded-md bg-point px-3 py-1.5 text-base font-bold text-navy-950">{t.focusBadge}</p>
            <h3 className="mt-5 text-[1.75rem] leading-tight font-extrabold md:text-[2.25rem]">{main.title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-white/90 md:text-xl">{main.desc}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {t.focusTasks.map((x) => (
                <li key={x} className="rounded-md border border-white/30 px-3.5 py-1.5 text-base font-semibold md:text-lg">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-white/15 pt-6 lg:border-t-0 lg:border-s lg:pt-0 lg:ps-14">
            <p className="text-base font-bold text-brand-sky">{t.focusSitesLabel}</p>
            <ul className="mt-3 divide-y divide-white/15">
              {t.focusSites.map((s) => (
                <li key={s} className="py-3.5 text-xl font-bold">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* 나머지 분야 */}
        <ul className="mt-4 grid gap-4 md:grid-cols-3">
          {others.map((s) => (
            <li key={s.title} className="rounded-lg bg-navy-50 p-7">
              <h3 className="text-xl font-extrabold text-navy-950 md:text-2xl">{s.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
