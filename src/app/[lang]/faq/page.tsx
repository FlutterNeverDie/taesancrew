import type { Locale } from "@/i18n";
import { FaqView, faqMeta } from "@/views/faq";

// 다른 언어 페이지 (/en/faq 등). 화면 구성은 src/views/faq.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]/faq">) {
  return faqMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/faq">) {
  return <FaqView lang={(await params).lang as Locale} />;
}
