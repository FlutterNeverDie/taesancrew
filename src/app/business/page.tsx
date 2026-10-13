import type { Metadata } from "next";
import { ButtonLink, Container, PageHero, SectionTitle } from "@/components/ui";
import { clients, company, process, services, strengths, tel } from "@/lib/site";

export const metadata: Metadata = { title: "중점분야" };

const management = [
  {
    title: "실시간 커뮤니케이션",
    items: ["현장 담당자 전용 메신저 채널", "긴급 상황 즉시 대응 및 근태 모니터링", "고객 요청사항 즉시 피드백"],
  },
  {
    title: "24시간 내 피드백",
    items: ["이슈 발생 시 24시간 이내 답변", "근로자 문제는 소장이 직접 현장 방문", "연중무휴 도급사 의견 청취"],
  },
  {
    title: "일일·주간·월간 리포트",
    items: ["출퇴근 근태 현황", "근무 만족도·이슈 개선사항", "신규 채용 및 배치 현황"],
  },
  {
    title: "현장 관리 구조",
    items: ["본사-현장 2중 관리 체계", "직무 + 안전 통합 교육 정례화", "고정인력 90% 이상 유지"],
  },
];

// 강점 다섯 가지 중 "신속 & 책임"을 대표로 크게 보여준다
const featured = strengths.find((s) => s.title === "신속 & 책임") ?? strengths[0];
const rest = strengths.filter((s) => s !== featured);

export default function BusinessPage() {
  return (
    <>
      <PageHero
        title={<>필요한 순간,<br />정확한 인력을 보내드립니다</>}
        desc="화주사·도급사를 위한 인력 소개·도급 서비스. 24시간 즉시 대응 체계와 맞춤형 인력 솔루션으로 현장을 지원합니다."
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle title="태산크루가 약속하는 다섯 가지" />
          {/* 가장 큰 차별점(신속 & 책임)을 왼쪽에 크게, 나머지 넷은 2×2 */}
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div className="on-dark flex flex-col justify-between gap-8 rounded-lg bg-navy-900 p-7 text-white md:p-9">
              <div>
                <p className="inline-block rounded-md bg-point px-3 py-1.5 text-base font-bold text-navy-950">{featured.title}</p>
                <p className="font-display mt-6 text-[1.75rem] leading-snug font-extrabold md:text-[2rem]">
                  근로자 문제가 생기면
                  <br />
                  소장이 직접
                  <br />
                  현장으로 갑니다
                </p>
              </div>
              <p className="text-lg leading-relaxed text-white/85">24시간 연중무휴로 도급사의 의견을 듣고, 이슈는 24시간 안에 답합니다.</p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {rest.map((s) => (
                <div key={s.title} className="rounded-lg bg-navy-50 p-7 md:p-8">
                  <dt className="text-xl font-bold text-navy-950 md:text-2xl">{s.title}</dt>
                  <dd className="mt-3 text-base leading-relaxed text-muted md:text-lg">{s.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20 md:py-28">
        <Container>
          <SectionTitle title="서비스 분야" />
          <ul className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 xl:grid-cols-4">
            {services.map((s) => (
              <li key={s.title} className="bg-paper p-6 md:p-7">
                <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-muted">{s.desc}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle title="요청부터 배치, 사후 관리까지" />
          {/* 실제 순서가 있는 절차라 단계 번호를 쓴다 */}
          <ol className="grid gap-8 md:grid-cols-5 md:gap-4">
            {process.map((p, i) => (
              <li key={p.step} className="border-t-4 border-navy-800 pt-4">
                <p className="text-base font-bold text-navy-700 tabular-nums">{i + 1}단계</p>
                <p className="mt-1 text-lg font-bold text-navy-950">{p.step}</p>
                <p className="mt-2 text-base leading-relaxed text-muted">{p.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="on-dark bg-navy-950 py-20 text-white md:py-28">
        <Container>
          <SectionTitle light title="체계적인 현장 관리" desc="급변하는 현장 상황에 능동적으로 대응하고, 운영 리스크를 최소화합니다." />
          <div className="grid gap-x-12 md:grid-cols-2">
            {management.map((m) => (
              <div key={m.title} className="border-t border-white/15 py-7">
                <h3 className="text-lg font-bold text-white">{m.title}</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-navy-100/85 marker:text-point">
                  {m.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle title="주요 고객사" />
          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-lg font-semibold text-navy-800/80 md:text-xl">
            {clients.map((c) => (
              <li key={c} className="whitespace-nowrap">{c}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="on-dark bg-navy-800 py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-2xl font-extrabold md:text-3xl">인력 운영, 태산 리크루트 &amp; 태산크루와 상담하세요</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={tel(company.mainPhone)} variant="point">{company.mainPhone}</ButtonLink>
            <ButtonLink href="/contact?type=business" variant="ghost">견적 문의</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
