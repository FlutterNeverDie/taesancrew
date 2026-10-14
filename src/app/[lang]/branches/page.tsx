import type { Locale } from "@/i18n";
import { BranchesView, branchesMeta } from "@/views/branches";

// 다른 언어 페이지 (/en/branches 등). 화면 구성은 src/views/branches.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]/branches">) {
  return branchesMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/branches">) {
  return <BranchesView lang={(await params).lang as Locale} />;
}
