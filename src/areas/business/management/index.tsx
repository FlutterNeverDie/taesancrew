import { Container, SectionTitle } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

export function BusinessManagement({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <section className="on-dark bg-navy-950 py-20 text-white md:py-28">
      <Container>
        <SectionTitle light title={d.business.managementTitle} desc={d.business.managementDesc} />
        <div className="grid gap-x-12 md:grid-cols-2">
          {d.management.map((m) => (
            <div key={m.title} className="border-t border-white/15 py-7">
              <h3 className="text-lg font-bold text-white">{m.title}</h3>
              <ul className="mt-3 list-disc space-y-1.5 ps-5 text-lg text-white/90 marker:text-point">
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
