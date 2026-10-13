import { Container, SectionTitle } from "@/components/ui";
import { branches } from "@/lib/site";

export function AboutHistory() {
  return (
    <section id="history" className="scroll-mt-20 bg-navy-50 py-20 md:py-28">
      <Container>
        <SectionTitle title="연혁" />
        {/* 지점 개업 연월은 site.ts의 branches.opened */}
        <ol className="relative space-y-8 border-l-2 border-navy-200 pl-8">
          {branches.map((b) => (
            <li key={b.slug} className="relative">
              <span className="absolute top-1.5 -left-[41px] h-4 w-4 rounded-full border-2 border-navy-50 bg-navy-800" aria-hidden />
              <p className="font-extrabold text-navy-800 tabular-nums">{b.opened}</p>
              <p className="mt-1 text-lg font-semibold text-ink">{b.name} 개업</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
