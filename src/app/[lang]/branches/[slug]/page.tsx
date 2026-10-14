import { notFound } from "next/navigation";
import type { Locale } from "@/i18n";
import { branches } from "@/lib/site";
import { BranchView, branchMeta } from "@/views/branch";

export const dynamicParams = false;
export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/branches/[slug]">) {
  const { lang, slug } = await params;
  const b = branches.find((x) => x.slug === slug);
  return b ? branchMeta(lang as Locale, b) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/branches/[slug]">) {
  const { lang, slug } = await params;
  const b = branches.find((x) => x.slug === slug);
  if (!b) notFound();
  return <BranchView lang={lang as Locale} b={b} />;
}
