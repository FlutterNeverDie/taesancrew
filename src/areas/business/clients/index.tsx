import { Container, SectionTitle } from "@/components/ui";
import { ClientWall } from "@/areas/shared/client-wall";
import { getDict, type Locale } from "@/i18n";

export function BusinessClients({ lang }: { lang: Locale }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle title={getDict(lang).business.clientsTitle} />
        <ClientWall lang={lang} />
      </Container>
    </section>
  );
}
