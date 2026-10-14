import { Container, Lines, SectionTitle } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

// 강점 다섯 가지 중 "신속 & 책임"(사전 strengths의 3번째)을 대표로 크게 보여준다
const FEATURED = 3;

export function BusinessPromises({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.business;
  const featured = d.strengths[FEATURED] ?? d.strengths[0];
  const rest = d.strengths.filter((s) => s !== featured);
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle title={t.promisesTitle} />
        {/* 가장 큰 차별점(신속 & 책임)을 앞에 크게, 나머지 넷은 2×2 */}
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="on-dark flex flex-col justify-between gap-8 rounded-lg bg-navy-900 p-7 text-white md:p-9">
            <div>
              <p className="inline-block rounded-md bg-point px-3 py-1.5 text-base font-bold text-navy-950">{featured.title}</p>
              <p className="font-display mt-6 text-[1.75rem] leading-snug font-extrabold md:text-[2rem]">
                <Lines lines={t.featured} />
              </p>
            </div>
            <p className="text-lg leading-relaxed text-white/90 md:text-xl">{t.featuredSub}</p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {rest.map((s) => (
              <div key={s.title} className="rounded-lg bg-navy-50 p-7 md:p-8">
                <dt className="text-xl font-bold text-navy-950 md:text-2xl">{s.title}</dt>
                <dd className="mt-3 text-lg leading-relaxed text-muted">{s.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
