import type { Metadata } from "next";
import { ButtonLink, Container, PageHero, SectionTitle } from "@/components/ui";
import { clients, company, process, services, strengths, tel } from "@/lib/site";

export const metadata: Metadata = { title: "기업 고객" };

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
    title: "일일 · 주간 · 월간 리포트",
    items: ["출퇴근 근태 현황", "근무 만족도 · 이슈 개선사항", "신규 채용 및 배치 현황"],
  },
  {
    title: "현장 관리 구조",
    items: ["본사-현장 2중 관리 체계", "직무 + 안전 통합 교육 정례화", "고정인력 90% 이상 유지"],
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="FOR BUSINESS"
        title={<>필요한 순간,<br />정확한 인력을 보내드립니다</>}
        desc="화주사·도급사를 위한 인력 파견·도급 서비스. 24시간 즉시 대응 체계와 맞춤형 인력 솔루션으로 현장을 지원합니다."
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="WHY US" title="태산크루의 5가지 약속" />
          <div className="space-y-4">
            {strengths.map((s) => (
              <div key={s.no} className="flex gap-6 rounded-2xl border border-navy-100 p-6 md:items-center md:p-8">
                <p className="text-3xl font-extrabold text-navy-100 md:text-5xl">{s.no}</p>
                <div>
                  <h3 className="text-xl font-extrabold text-navy-950">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="SERVICES" title="서비스 분야" />
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-7">
                <h3 className="text-lg font-extrabold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-navy-900 p-7 text-white md:p-9">
            <p className="text-sm font-bold text-point">파견 vs 도급</p>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-lg font-extrabold">근로자 파견</p>
                <p className="mt-2 text-navy-100/80">필요한 인원을 보내드리고, 현장 업무 지시는 고객사가 합니다.</p>
              </div>
              <div>
                <p className="text-lg font-extrabold">도급</p>
                <p className="mt-2 text-navy-100/80">작업 단위로 맡아 태산크루가 인력 관리와 결과까지 책임집니다.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="PROCESS" title="인력 수급부터 배치까지 One-stop" />
          <ol className="grid gap-4 md:grid-cols-5">
            {process.map((p, i) => (
              <li key={p.step} className="relative rounded-2xl bg-navy-50 p-6">
                <p className="text-sm font-extrabold text-navy-700">STEP {i + 1}</p>
                <p className="mt-2 text-lg font-extrabold text-navy-950">{p.step}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white md:py-28">
        <Container>
          <SectionTitle light eyebrow="MANAGEMENT" title="체계적인 현장 관리" desc="급변하는 현장 상황에 능동적으로 대응하고, 운영 리스크를 최소화합니다." />
          <div className="grid gap-5 md:grid-cols-2">
            {management.map((m) => (
              <div key={m.title} className="rounded-2xl bg-white/5 p-7">
                <h3 className="text-lg font-extrabold text-point">{m.title}</h3>
                <ul className="mt-4 space-y-2 text-navy-100/85">
                  {m.items.map((it) => (
                    <li key={it}>· {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="CLIENTS" title="주요 고객사" />
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
            {clients.map((c) => (
              <div key={c} className="flex h-16 items-center justify-center rounded-lg border border-navy-100 px-2 text-center text-sm font-semibold text-navy-900">
                {c}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-800 py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-2xl font-extrabold md:text-3xl">인력 운영, 태산크루와 상담하세요</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={tel(company.mainPhone)} variant="point">{company.mainPhone}</ButtonLink>
            <ButtonLink href="/contact?type=business" variant="ghost">견적 문의</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
