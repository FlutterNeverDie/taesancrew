import type { Locale } from "@/i18n";
import { PrivacyView, privacyMeta } from "@/views/privacy";

// 다른 언어 페이지 (/en/privacy 등). 화면 구성은 src/views/privacy.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  return privacyMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  return <PrivacyView lang={(await params).lang as Locale} />;
}
