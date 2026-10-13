import type { Metadata } from "next";
import { Container, PageHero, Placeholder, SectionTitle } from "@/components/ui";
import { services, stats } from "@/lib/site";

export const metadata: Metadata = { title: "회사소개" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={<>믿을 수 있는<br />일자리 파트너, 태산크루</>}
        desc="변화하는 시장에 유연하게 대응하는 인력운영·아웃소싱 전문기업입니다."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
          <Placeholder label="대표 사진 또는 사무실 사진" className="aspect-[4/5]" />
          <div>
            <SectionTitle title="인력이 곧 기업의 경쟁력입니다" />
            <div className="space-y-4 text-lg leading-relaxed text-ink">
              <p>
                태산크루는 물류 업계에서 20년 이상 쌓은 노하우를 바탕으로 경기 광주·성남·서울 동부에 직영 지점을 운영하며,
                직접 구축하고 관리하는 인력 DB로 신속하게 인력을 배치합니다.
              </p>
              <p>
                20년 이상 현장 경험을 가진 대표와 늘 겸손하고 꼼꼼한 대표의 공동 경영 체제로,
                책임감 있고 신뢰할 수 있는 아웃소싱 파트너로서 고객과 함께 성장하고 있습니다.
              </p>
              <p className="text-base text-muted">대표 인사말 원문을 받으면 교체합니다.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-rule">
        <Container>
          <dl className="grid grid-cols-2 gap-px bg-rule md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse bg-paper px-4 py-7 md:px-8 md:py-9">
                <dt className="text-sm text-muted md:text-base">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-navy-800 md:text-[2.75rem]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle title="사업 영역" desc="고객 중심의 인력 운영, 성과로 증명합니다." />
          <ul className="grid border-t-2 border-navy-900 md:grid-cols-2 md:gap-x-12">
            {services.map((s) => (
              <li key={s.title} className="border-b border-rule py-6">
                <h3 className="text-xl font-bold text-navy-950">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.desc}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy-50 py-20 md:py-28">
        <Container>
          <SectionTitle title="연혁" />
          <ol className="relative space-y-8 border-l-2 border-rule pl-8">
            <li>
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-navy-800" />
              <p className="font-extrabold text-navy-800">2023. 11</p>
              <p className="mt-1 text-ink">경기광주점 개업</p>
            </li>
            <li>
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-navy-100" />
              <p className="font-extrabold text-muted">연도 준비 중</p>
              <p className="mt-1 text-muted">수진역점·천호점 개업, 태산크루 출범 등 - 자료를 받으면 채웁니다</p>
            </li>
          </ol>
        </Container>
      </section>
    </>
  );
}
