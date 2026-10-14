import type { Locale } from "@/i18n";
import { VisaView, visaMeta } from "@/views/visa";

// 다른 언어 페이지 (/en/visa 등). 화면 구성은 src/views/visa.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]/visa">) {
  return visaMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/visa">) {
  return <VisaView lang={(await params).lang as Locale} />;
}
