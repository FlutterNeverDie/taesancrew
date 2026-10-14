import { Container, SectionTitle } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

export function AboutGreeting({ lang }: { lang: Locale }) {
  const t = getDict(lang).about;
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/team/ceo.webp" alt={t.ceoAlt} width={1000} height={1250} className="reveal aspect-[4/5] w-full rounded-lg object-cover" />
        <div>
          <SectionTitle title={t.greetingTitle} />
          <div className="space-y-5 text-lg leading-relaxed font-medium text-ink md:text-xl md:leading-relaxed">
            {t.greeting.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
