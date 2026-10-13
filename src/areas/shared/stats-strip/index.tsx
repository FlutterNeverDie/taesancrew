import { Container } from "@/components/ui";
import { stats } from "@/lib/site";

// 강조 숫자 4개 (20년+, 100명+, 3개, 10대+). 값은 site.ts의 stats
export function StatsStrip() {
  return (
    <section className="border-y border-rule">
      <Container>
        <dl className="grid grid-cols-2 gap-px bg-rule md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-paper px-4 py-7 max-md:odd:pl-0 md:px-8 md:py-9 md:first:pl-0">
              <dt className="text-base text-muted md:text-lg">{s.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-navy-800 md:text-[2.75rem]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
