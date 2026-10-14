import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

// 정적 사이트(output: export)라 빌드할 때 파일로 만들어 둔다
export const dynamic = "force-static";
import { getAllPosts } from "@/lib/posts";
import { branches } from "@/lib/site";

// 검색엔진(네이버·구글)에 알려줄 페이지 목록. 새 페이지를 만들면 pages에 추가한다. 블로그 글은 자동
const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/jobs", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/business", priority: 0.8 },
  { path: "/branches", priority: 0.8 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/awards", priority: 0.5 },
  { path: "/blog", priority: 0.6 },
  { path: "/privacy", priority: 0.2 },
  // 지점 페이지는 site.ts에서 자동
  ...branches.map((b) => ({ path: `/branches/${b.slug}`, priority: 0.9 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl;
  return [
    ...pages.map((p) => ({ url: `${base}${p.path}`, changeFrequency: "weekly" as const, priority: p.priority })),
    ...getAllPosts().map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: post.date, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
