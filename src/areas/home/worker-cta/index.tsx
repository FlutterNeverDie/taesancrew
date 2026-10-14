import { ButtonLink, Container, SectionTitle, Lines } from "@/components/ui";
import { fmt, getDict, lp, type Locale } from "@/i18n";

// 설명의 보낼 항목은 일자리 페이지 문자 양식(sms.fields)과 같은 목록을 쓴다
export function HomeWorkerCta({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.home;
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
        <div>
          <SectionTitle title={<Lines lines={t.workerTitle} />} desc={fmt(t.workerDesc, { fields: d.sms.fields.join(", ") })} />
          <ButtonLink href={lp(lang, "/jobs")}>{t.workerButton}</ButtonLink>
        </div>
        {/* 구분선은 divide-y로 (gap-px + 배경색 방식은 화면 배율에 따라 1px 선이 사라질 때가 있음) */}
        <ul className="reveal divide-y divide-rule overflow-hidden rounded-lg border border-rule bg-paper">
          {t.workerPerks.map((p) => (
            <li key={p} className="px-4 py-5 text-base font-semibold text-ink md:px-5 md:text-lg">
              {p}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
