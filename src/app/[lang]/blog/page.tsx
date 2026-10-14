import type { Locale } from "@/i18n";
import { BlogView, blogMeta } from "@/views/blog";

// 다른 언어 페이지 (/en/blog 등). 화면 구성은 src/views/blog.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]/blog">) {
  return blogMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/blog">) {
  return <BlogView lang={(await params).lang as Locale} />;
}
