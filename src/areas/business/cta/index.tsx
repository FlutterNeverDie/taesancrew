import { ButtonLink, Container } from "@/components/ui";
import { company, tel } from "@/lib/site";

export function BusinessCta() {
  return (
    <section className="on-dark bg-navy-800 py-16 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="text-2xl font-extrabold md:text-3xl">인력 운영, 태산 리크루트 &amp; 태산크루와 상담하세요</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={tel(company.mainPhone)} variant="point">{company.mainPhone}</ButtonLink>
          <ButtonLink href="/contact?type=business" variant="ghost">견적 문의</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
