import { Container, SectionTitle } from "@/components/ui";
import { businessFaq, workerFaq } from "@/lib/site";
import { FaqList } from "@/areas/shared/faq-list";

export function FaqColumns() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div id="business" className="min-w-0 scroll-mt-20">
          <SectionTitle title="기업 고객" />
          <FaqList items={businessFaq} />
        </div>
        <div id="worker" className="min-w-0 scroll-mt-20">
          <SectionTitle title="일하려는 분" />
          <FaqList items={workerFaq} />
        </div>
      </Container>
    </section>
  );
}
