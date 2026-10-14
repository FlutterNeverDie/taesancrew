import type { Locale } from "@/i18n";
import { HomeView, homeMeta } from "@/views/home";

// 다른 언어 페이지 (/en/ 등). 화면 구성은 src/views/home.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  return homeMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  return <HomeView lang={(await params).lang as Locale} />;
}
