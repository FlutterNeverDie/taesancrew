import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { branches } from "@/lib/site";
import { BranchHero } from "@/areas/branch/hero";
import { BranchInfo } from "@/areas/branch/info";
import { BranchPostings } from "@/areas/branch/postings";
import { BranchOthers } from "@/areas/branch/others";

// 지점별 페이지 (/branches/gwangju, /branches/sujin, /branches/cheonho). "성남 인력사무소" 같은 지역 검색용
export const dynamicParams = false;
export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/branches/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const b = branches.find((x) => x.slug === slug);
  if (!b) return {};
  return { title: { absolute: b.seoTitle }, description: b.seoDesc, alternates: { canonical: `/branches/${b.slug}` } };
}

export default async function BranchPage({ params }: PageProps<"/branches/[slug]">) {
  const { slug } = await params;
  const b = branches.find((x) => x.slug === slug);
  if (!b) notFound();
  return (
    <>
      <BranchHero b={b} />
      <BranchInfo b={b} />
      <BranchPostings b={b} />
      <BranchOthers b={b} />
    </>
  );
}
