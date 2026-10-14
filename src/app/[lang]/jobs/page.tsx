import type { Locale } from "@/i18n";
import { JobsView, jobsMeta } from "@/views/jobs";

// 다른 언어 페이지 (/en/jobs 등). 화면 구성은 src/views/jobs.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]/jobs">) {
  return jobsMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/jobs">) {
  return <JobsView lang={(await params).lang as Locale} />;
}
