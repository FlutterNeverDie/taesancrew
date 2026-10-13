import { Container, SectionTitle } from "@/components/ui";

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

export function BusinessManagement() {
  return (
    <section className="on-dark bg-navy-950 py-20 text-white md:py-28">
      <Container>
        <SectionTitle light title="체계적인 현장 관리" desc="급변하는 현장 상황에 능동적으로 대응하고, 운영 리스크를 최소화합니다." />
        <div className="grid gap-x-12 md:grid-cols-2">
          {management.map((m) => (
            <div key={m.title} className="border-t border-white/15 py-7">
              <h3 className="text-lg font-bold text-white">{m.title}</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-lg text-white/90 marker:text-point">
                {m.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
