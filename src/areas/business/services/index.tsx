import { Container, SectionTitle } from "@/components/ui";
import { services } from "@/lib/site";

export function BusinessServices() {
  return (
    <section className="bg-navy-50 py-20 md:py-28">
      <Container>
        <SectionTitle title="서비스 분야" />
        <ul className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <li key={s.title} className="bg-paper p-6 md:p-7">
              <h3 className="text-xl font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-lg leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
