import { Container, SectionTitle } from "@/components/ui";
import { services } from "@/lib/site";

export function AboutServices() {
  return (
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
  );
}
