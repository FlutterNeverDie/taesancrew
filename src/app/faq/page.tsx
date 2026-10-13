import type { Metadata } from "next";
import { ButtonLink, Container, PageHero, SectionTitle } from "@/components/ui";
import { FaqList } from "@/components/FaqList";
import { businessFaq, company, tel, workerFaq } from "@/lib/site";

export const metadata: Metadata = { title: "자주 묻는 질문" };

export default function FaqPage() {
  return (
    <>
      <PageHero title="자주 묻는 질문" desc="기업 고객과 일하려는 분이 가장 많이 묻는 내용을 모았습니다." />

      <nav aria-label="질문 분류" className="border-b border-rule">
        <Container className="flex max-w-3xl gap-2 py-4">
          <a href="#business" className="press rounded-md border border-navy-200 px-4 py-2 font-bold text-navy-800 hover:bg-navy-50">기업 고객</a>
          <a href="#worker" className="press rounded-md border border-navy-200 px-4 py-2 font-bold text-navy-800 hover:bg-navy-50">일하려는 분</a>
        </Container>
      </nav>

      <section id="business" className="scroll-mt-20 py-16 md:py-24">
        <Container className="max-w-3xl">
          <SectionTitle title="기업 고객" />
          <FaqList items={businessFaq} />
        </Container>
      </section>

      <section id="worker" className="scroll-mt-20 bg-navy-50 py-16 md:py-24">
        <Container className="max-w-3xl">
          <SectionTitle title="일하려는 분" />
          <FaqList items={workerFaq} />
        </Container>
      </section>

      <section className="on-dark bg-navy-800 py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-2xl font-extrabold md:text-3xl">찾는 답이 없나요?</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={tel(company.mainPhone)} variant="point">{`전화 ${company.mainPhone}`}</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">문의 남기기</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
