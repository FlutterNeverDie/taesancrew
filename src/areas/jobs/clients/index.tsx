import { Container } from "@/components/ui";
import { ClientWall } from "@/areas/shared/client-wall";
import { getDict, type Locale } from "@/i18n";

export function JobsClients({ lang }: { lang: Locale }) {
  return (
    <section className="border-t border-rule py-14 md:py-20">
      <Container>
        <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">{getDict(lang).jobs.clientsTitle}</h2>
        <div className="mt-8 md:mt-10">
          <ClientWall />
        </div>
      </Container>
    </section>
  );
}
