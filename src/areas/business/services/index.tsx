import { Container, SectionTitle } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

export function BusinessServices({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <section className="bg-navy-50 py-20 md:py-28">
      <Container>
        <SectionTitle title={d.business.servicesTitle} />
        <ul className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 xl:grid-cols-4">
          {d.services.map((s) => (
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
