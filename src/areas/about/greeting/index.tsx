import { Container, SectionTitle } from "@/components/ui";

export function AboutGreeting() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/team/ceo.jpg" alt="태산 리크루트 & 태산크루 대표" width={1000} height={1250} className="aspect-[4/5] w-full rounded-lg object-cover" />
        <div>
          <SectionTitle title="인력이 곧 기업의 경쟁력입니다" />
          <div className="space-y-5 text-lg leading-relaxed font-medium text-ink md:text-xl md:leading-relaxed">
            <p>
              태산크루는 물류 업계에서 20년 이상 쌓은 노하우를 바탕으로 경기 광주·성남·서울 동부에 직영 지점을 운영하며,
              직접 구축하고 관리하는 인력 DB로 신속하게 인력을 배치합니다.
            </p>
            <p>
              20년 이상 현장 경험을 가진 대표를 중심으로, 각 지점 대표가 직접 현장을 책임지고 운영합니다.
              책임감 있고 신뢰할 수 있는 아웃소싱 파트너로서 고객과 함께 성장하고 있습니다.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
