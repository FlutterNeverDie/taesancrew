import Link from "next/link";
import { Container } from "@/components/ui";
import { FaqList } from "@/areas/shared/faq-list";
import { getDict, lp, type Locale } from "@/i18n";

// 문의 페이지 맨 아래: 기업 고객이 자주 묻는 질문 앞 3개 + 전체 질문 링크
export function ContactFaq({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)] lg:gap-16">
        <div>
          <p className="text-base font-bold text-navy-700">{d.faq.business}</p>
          <h2 className="mt-1 text-[1.5rem] font-extrabold text-navy-950 md:text-[2rem]">{d.faq.title}</h2>
          <Link href={lp(lang, "/faq")} className="mt-4 inline-block text-lg font-bold text-navy-700 underline decoration-2 underline-offset-4 hover:text-navy-950">
            {d.jobs.faqMore[1]}
          </Link>
        </div>
        <FaqList lang={lang} items={d.businessFaq.slice(0, 3)} />
      </Container>
    </section>
  );
}
