import type { Locale } from "@/i18n";
import { AboutView, aboutMeta } from "@/views/about";

// 다른 언어 페이지 (/en/about 등). 화면 구성은 src/views/about.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  return aboutMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/about">) {
  return <AboutView lang={(await params).lang as Locale} />;
}
