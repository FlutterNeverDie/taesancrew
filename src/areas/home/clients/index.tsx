import { Container, SectionTitle } from "@/components/ui";
import { ClientWall } from "@/areas/shared/client-wall";
import { getDict, type Locale } from "@/i18n";

export function HomeClients({ lang }: { lang: Locale }) {
  const t = getDict(lang).home;
  return (
    <section className="border-t border-rule py-20 md:py-24">
      <Container>
        <SectionTitle title={t.clientsTitle} desc={t.clientsDesc} />
        <ClientWall variant="marquee" />
      </Container>
    </section>
  );
}
