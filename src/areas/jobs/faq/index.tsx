import Link from "next/link";
import { Container } from "@/components/ui";
import { workerFaq } from "@/lib/site";
import { FaqList } from "@/areas/shared/faq-list";

export function JobsFaq() {
  return (
    <section className="bg-navy-50 py-16 md:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)] lg:gap-16">
        <div>
          <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">자주 묻는 질문</h2>
          <p className="mt-4 text-lg text-ink">
            더 궁금하면{" "}
            <Link href="/faq#worker" className="font-bold text-navy-800 underline decoration-2 underline-offset-4">
              전체 질문
            </Link>
            을 보거나, 위의 지점 번호로 문자 한 통 보내주세요.
          </p>
        </div>
        <FaqList items={workerFaq.slice(0, 4)} />
      </Container>
    </section>
  );
}
