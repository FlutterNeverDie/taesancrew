import type { MetadataRoute } from "next";
import { branches, company } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";
import { localeInfo, locales, lp, type Locale } from "@/i18n/config";

// 정적 사이트(output: export)라 빌드할 때 파일로 만들어 둔다
export const dynamic = "force-static";

// 검색엔진(네이버·구글)에 알려줄 페이지 목록. 새 페이지를 만들면 pages에 추가한다. 블로그 글·지점은 자동.
// 페이지마다 13개 언어 주소를 모두 넣고, 서로 "같은 페이지의 다른 언어판"이라고 알려준다(hreflang)
const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/jobs", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/business", priority: 0.8 },
  { path: "/branches", priority: 0.8 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/awards", priority: 0.5 },
  { path: "/blog", priority: 0.6 },
  { path: "/visa", priority: 0.6 },
  { path: "/privacy", priority: 0.2 },
  ...branches.map((b) => ({ path: `/branches/${b.slug}`, priority: 0.9 })),
  ...getAllPosts().map((p) => ({ path: `/blog/${p.slug}`, priority: 0.5 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (lang: Locale, path: string) => {
    const p = lp(lang, path);
    return `${company.siteUrl}${p === "/" ? "" : p}`;
  };
  return pages.flatMap((p) =>
    locales.map((lang) => ({
      url: url(lang, p.path),
      changeFrequency: "weekly" as const,
      // 한국어가 기본이라 다른 언어판은 조금 낮게
      priority: lang === "ko" ? p.priority : Math.round(p.priority * 0.8 * 10) / 10,
      alternates: { languages: Object.fromEntries(locales.map((l) => [localeInfo[l].html, url(l, p.path)])) },
    })),
  );
}
