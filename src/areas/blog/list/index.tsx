import Link from "next/link";
import { Container } from "@/components/ui";
import { getAllPosts } from "@/lib/posts";
import { getDict, lp, type Locale } from "@/i18n";

export function BlogList({ lang }: { lang: Locale }) {
  const t = getDict(lang).blog;
  const posts = getAllPosts(lang);
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-4xl">
        <ul className="divide-y divide-rule border-y border-rule">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={lp(lang, `/blog/${p.slug}`)} className="group block py-7">
                <div className="flex items-center gap-3 text-base">
                  <span className="rounded-full bg-navy-50 px-3 py-1 font-bold text-navy-700">{t.categories[p.category] ?? p.category}</span>
                  <span className="text-muted tabular-nums">{p.date}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-navy-950 md:text-2xl">
                  <span className="link-slide pb-0.5">{p.title}</span>
                </h2>
                <p className="mt-2 text-lg text-muted">{p.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
