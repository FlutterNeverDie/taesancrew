import { ButtonLink, Container } from "@/components/ui";
import { company, tel } from "@/lib/site";

export function FaqCta() {
  return (
    <section className="on-dark bg-navy-800 py-16 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="text-2xl font-extrabold md:text-3xl">찾는 답이 없나요?</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={tel(company.mainPhone)} variant="point">{`전화 ${company.mainPhone}`}</ButtonLink>
          <ButtonLink href="/contact" variant="ghost">문의 남기기</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
