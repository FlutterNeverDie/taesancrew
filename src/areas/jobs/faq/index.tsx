import Link from "next/link";
import { Container } from "@/components/ui";
import { FaqList } from "@/areas/shared/faq-list";
import { getDict, lp, type Locale } from "@/i18n";

export function JobsFaq({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const [before, link, after] = d.jobs.faqMore;
  return (
    <section className="bg-navy-50 py-16 md:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)] lg:gap-16">
        <div>
          <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">{d.jobs.faqTitle}</h2>
          <p className="mt-4 text-lg text-ink">
            {before}
            <Link href={`${lp(lang, "/faq")}#worker`} className="font-bold text-navy-800 underline decoration-2 underline-offset-4">
              {link}
            </Link>
            {after}
          </p>
        </div>
        <FaqList items={d.workerFaq.slice(0, 4)} />
      </Container>
    </section>
  );
}
