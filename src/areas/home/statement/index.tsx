import { ButtonLink, Container, Lines } from "@/components/ui";
import { company, tel } from "@/lib/site";
import { getDict, type Locale } from "@/i18n";

export function HomeStatement({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <Container>
        <p className="font-display max-w-4xl text-[1.75rem] leading-snug font-extrabold text-navy-900 md:text-[2.75rem]">
          <Lines lines={d.home.statement} />
        </p>
        <p className="mt-5 max-w-xl text-lg text-muted md:text-xl">{d.home.statementSub}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={tel(company.mainPhone)}>
            {d.common.call} <span dir="ltr">{company.mainPhone}</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
