import { Container } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

// 근무 조건을 공고문의 "항목 | 내용" 표로. 내용은 홈페이지 기획 자료 + 지점 채용 전단에 있는 사실만 (사전의 jobs.conditions)
export function JobsConditions({ lang }: { lang: Locale }) {
  const t = getDict(lang).jobs;
  return (
    <section className="py-14 md:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)] lg:gap-16">
        <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">{t.conditionsTitle}</h2>
        <dl className="border-t-4 border-navy-900">
          {t.conditions.map((r) => (
            <div key={r.label} className="grid gap-2 border-b border-rule py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 md:py-6">
              <dt className="text-lg font-extrabold text-navy-700 md:text-xl">{r.label}</dt>
              <dd className="flex flex-wrap gap-x-6 gap-y-1.5 text-lg font-semibold text-ink md:text-xl">
                {r.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
