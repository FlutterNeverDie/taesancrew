import type { Locale } from "@/i18n";
import { BusinessView, businessMeta } from "@/views/business";

// 다른 언어 페이지 (/en/business 등). 화면 구성은 src/views/business.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]/business">) {
  return businessMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/business">) {
  return <BusinessView lang={(await params).lang as Locale} />;
}
