import type { Locale } from "@/i18n";
import { getAllPosts } from "@/lib/posts";
import { PostView, postMeta } from "@/views/blog";

// 다른 언어 소식 글. 번역 파일은 content/blog/<언어>/<slug>.md (없으면 한국어 원문)
export const dynamicParams = false;
export function generateStaticParams() {
  return getAllPosts("ko").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  return postMeta(lang as Locale, slug);
}

export default async function Page({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  return <PostView lang={lang as Locale} slug={slug} />;
}
