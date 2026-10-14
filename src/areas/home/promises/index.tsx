import Link from "next/link";
import { Container, SectionTitle, Lines } from "@/components/ui";
import { getDict, lp, type Locale } from "@/i18n";

export function HomePromises({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.home;
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle title={<Lines lines={t.promisesTitle} />} desc={t.promisesDesc} />
          <Link href={lp(lang, "/business")} className="font-bold text-navy-700 underline decoration-2 underline-offset-4 hover:text-navy-900">
            {t.promisesLink}
          </Link>
        </div>
        <ul className="reveal-each grid border-t-2 border-navy-900 xl:grid-cols-2 xl:gap-x-12">
          {d.strengths.map((s) => (
            <li key={s.title} className="border-b border-rule py-7">
              <h3 className="text-xl font-bold text-navy-950 md:text-2xl">{s.title}</h3>
              <p className="mt-2 max-w-xl text-lg leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
