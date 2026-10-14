import { Container } from "@/components/ui";
import { recruitPosts } from "@/lib/site";
import { getDict, type Locale } from "@/i18n";
import { PostingCard, PostingsJsonLd } from "@/areas/shared/posting-card";

export function JobsPostings({ lang }: { lang: Locale }) {
  const t = getDict(lang).jobs;
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">{t.postingsTitle}</h2>
          <p className="text-lg text-muted md:text-xl">{t.postingsHint}</p>
        </div>
        <ul className="reveal-each mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 xl:grid-cols-3">
          {recruitPosts.map((p) => (
            <li key={p.slug}>
              <PostingCard p={p} lang={lang} />
            </li>
          ))}
        </ul>
        {lang === "ko" && <PostingsJsonLd posts={recruitPosts} />}
      </Container>
    </section>
  );
}
