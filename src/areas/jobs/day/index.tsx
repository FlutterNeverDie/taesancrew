import { Container, SectionTitle } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

// 출근하는 날 하루 흐름 (집결 → 셔틀 → 안전교육 → 작업 → 점심 → 퇴근 → 급여) + 준비물
// 휴대폰은 세로 줄, PC는 가로 한 줄. 문구는 사전의 jobs.day·bring (시간·금액은 넣지 않는다)
export function JobsDay({ lang }: { lang: Locale }) {
  const t = getDict(lang).jobs;
  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <Container>
        <SectionTitle title={t.dayTitle} desc={t.dayDesc} />
        <div className="relative">
        {/* PC: 번호 동그라미를 잇는 가로 줄 */}
        <div aria-hidden className="absolute inset-x-[7%] top-6 hidden h-0.5 bg-navy-200 lg:block" />
        <ol className="reveal-each relative ms-5 border-s-2 border-navy-200 lg:ms-0 lg:grid lg:grid-cols-7 lg:gap-4 lg:border-s-0">
          {t.day.map((s, i) => (
            <li key={s.title} className="relative pb-8 ps-9 last:pb-0 lg:pb-0 lg:ps-0 lg:text-center">
              <span className="absolute -start-[1.6rem] top-0 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-display text-xl font-extrabold text-point ring-4 ring-navy-50 lg:relative lg:start-auto lg:mx-auto">
                {i + 1}
              </span>
              <p className="pt-2.5 text-xl font-extrabold text-navy-950 lg:pt-4">{s.title}</p>
              <p className="mt-1.5 text-lg leading-relaxed text-ink lg:text-base xl:text-lg">{s.desc}</p>
            </li>
          ))}
        </ol>
        </div>

        <div className="reveal mt-12 rounded-lg border border-rule bg-paper p-6 md:mt-16 md:flex md:items-center md:gap-10 md:p-8">
          <p className="shrink-0 text-xl font-extrabold text-navy-950 md:text-2xl">{t.bringTitle}</p>
          <div className="mt-3 md:mt-0">
            <ul className="flex flex-wrap gap-2.5">
              {t.bring.map((b) => (
                <li key={b} className="rounded-md bg-navy-50 px-3.5 py-2 text-lg font-bold text-navy-900">{b}</li>
              ))}
            </ul>
            <p className="mt-3 text-lg text-muted">{t.bringNote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
