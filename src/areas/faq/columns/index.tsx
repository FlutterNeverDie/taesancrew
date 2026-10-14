import { Container, SectionTitle } from "@/components/ui";
import { FaqList } from "@/areas/shared/faq-list";
import { getDict, type Locale } from "@/i18n";

export function FaqColumns({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div id="business" className="min-w-0 scroll-mt-20">
          <SectionTitle title={d.faq.business} />
          <FaqList items={d.businessFaq} />
        </div>
        <div id="worker" className="min-w-0 scroll-mt-20">
          <SectionTitle title={d.faq.worker} />
          <FaqList items={d.workerFaq} />
        </div>
      </Container>
    </section>
  );
}
