import Link from "next/link";
import { Container } from "@/components/ui";
import { getPost } from "@/lib/posts";
import { getDict, lp, type Locale } from "@/i18n";

// 소식 글 본문. 글 내용은 content/blog/<slug>.md (다른 언어는 content/blog/<언어>/<slug>.md)
export function BlogPost({ lang, slug }: { lang: Locale; slug: string }) {
  const t = getDict(lang).blog;
  const post = getPost(slug, lang);

  return (
    <article className="pt-14 pb-12 md:pt-20 md:pb-14">
      {/* 읽은 만큼 차는 막대 (globals.css의 .read-progress) */}
      <div aria-hidden className="read-progress fixed inset-x-0 top-16 z-30 h-1 bg-point" />
      <Container className="max-w-3xl">
        <Link href={lp(lang, "/blog")} className="text-base font-semibold text-navy-700 hover:underline">
          {t.back}
        </Link>
        <div className="mt-8 flex items-center gap-3 text-base">
          <span className="rounded-full bg-navy-50 px-3 py-1 font-bold text-navy-700">{t.categories[post.category] ?? post.category}</span>
          <span className="text-muted tabular-nums">{post.date}</span>
        </div>
        <h1 className="mt-4 text-3xl leading-snug font-extrabold text-navy-950 md:text-4xl">{post.title}</h1>
        <div className="prose-post mt-10 text-lg text-ink" dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </article>
  );
}
