import { Container, SectionTitle } from "@/components/ui";
import { process } from "@/lib/site";

export function BusinessProcess() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle title="요청부터 배치, 사후 관리까지" />
        {/* 실제 순서가 있는 절차라 단계 번호를 쓴다 */}
        <ol className="grid gap-8 md:grid-cols-5 md:gap-4">
          {process.map((p, i) => (
            <li key={p.step} className="border-t-4 border-navy-800 pt-4">
              <p className="text-base font-bold text-navy-700 tabular-nums">{i + 1}단계</p>
              <p className="mt-1 text-lg font-bold text-navy-950">{p.step}</p>
              <p className="mt-2 text-base leading-relaxed text-muted md:text-lg">{p.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
