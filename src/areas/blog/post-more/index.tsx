import Link from "next/link";
import { Container } from "@/components/ui";
import { getAllPosts } from "@/lib/posts";
import { company } from "@/lib/site";
import { getDict, lp, type Locale } from "@/i18n";
import { ShareButtons } from "./ShareButtons";

// 소식 글 아래: 이 글 공유하기 + 다른 소식 3개 (같은 분류 글 먼저, 그다음 최신 글)
export function BlogPostMore({ lang, slug }: { lang: Locale; slug: string }) {
  const d = getDict(lang);
  const t = d.blog;
  const posts = getAllPosts(lang);
  const current = posts.find((p) => p.slug === slug);
  const others = posts.filter((p) => p.slug !== slug);
  const more = [...others.filter((p) => p.category === current?.category), ...others.filter((p) => p.category !== current?.category)].slice(0, 3);

  return (
    <section className="pb-16 md:pb-24">
      <Container className="max-w-3xl">
        <div className="border-t-2 border-navy-900 pt-8">
          <h2 className="text-xl font-extrabold text-navy-950 md:text-2xl">{t.shareTitle}</h2>
          <div className="mt-4">
            <ShareButtons t={d.dock} title={current?.title ?? ""} url={`${company.siteUrl}${lp(lang, `/blog/${slug}`)}`} />
          </div>
        </div>

        {more.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-extrabold text-navy-950 md:text-2xl">{t.moreTitle}</h2>
            <ul className="mt-4 divide-y divide-rule border-y border-rule">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link href={lp(lang, `/blog/${p.slug}`)} className="group block py-5">
                    <div className="flex items-center gap-3 text-base">
                      <span className="rounded-full bg-navy-50 px-3 py-1 font-bold text-navy-700">{t.categories[p.category] ?? p.category}</span>
                      <span className="text-muted tabular-nums">{p.date}</span>
                    </div>
                    <p className="mt-2.5 text-lg font-bold text-navy-950 md:text-xl">
                      <span className="link-slide pb-0.5">{p.title}</span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={lp(lang, "/blog")} className="mt-6 inline-block text-lg font-bold text-navy-700 underline decoration-2 underline-offset-4 hover:text-navy-950">
              {t.back}
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
