import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { getPost } from "@/lib/posts";
import { BlogHero } from "@/areas/blog/hero";
import { BlogList } from "@/areas/blog/list";
import { BlogPost } from "@/areas/blog/post";
import { BlogPostMore } from "@/areas/blog/post-more";

export const blogMeta = (lang: Locale) => {
  const t = getDict(lang).meta;
  return pageMeta(lang, "/blog", t.blogTitle, t.blogDesc);
};

export function BlogView({ lang }: { lang: Locale }) {
  return (
    <>
      <BlogHero lang={lang} />
      <BlogList lang={lang} />
    </>
  );
}

export const postMeta = (lang: Locale, slug: string) => {
  const post = getPost(slug, lang);
  return pageMeta(lang, `/blog/${slug}`, post.title, post.summary);
};

export function PostView({ lang, slug }: { lang: Locale; slug: string }) {
  return (
    <>
      <BlogPost lang={lang} slug={slug} />
      <BlogPostMore lang={lang} slug={slug} />
    </>
  );
}
