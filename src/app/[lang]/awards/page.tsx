import type { Locale } from "@/i18n";
import { AwardsView, awardsMeta } from "@/views/awards";

// 다른 언어 페이지 (/en/awards 등). 화면 구성은 src/views/awards.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]/awards">) {
  return awardsMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/awards">) {
  return <AwardsView lang={(await params).lang as Locale} />;
}
