import { notFound } from "next/navigation";
import { branches } from "@/lib/site";
import { BranchView, branchMeta } from "@/views/branch";

// 지점별 페이지 (/branches/gwangju, /branches/sujin, /branches/cheonho)
export const dynamicParams = false;
export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/branches/[slug]">) {
  const { slug } = await params;
  const br = branches.find((x) => x.slug === slug);
  return br ? branchMeta("ko", br) : {};
}

export default async function Page({ params }: PageProps<"/branches/[slug]">) {
  const { slug } = await params;
  const b = branches.find((x) => x.slug === slug);
  if (!b) notFound();
  return <BranchView lang="ko" b={b} />;
}
