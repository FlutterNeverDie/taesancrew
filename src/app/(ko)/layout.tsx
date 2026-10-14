import type { Metadata } from "next";
import { getDict } from "@/i18n";
import { SiteChrome } from "@/areas/layout/chrome";
import { company } from "@/lib/site";

// 한국어(기본) 페이지 틀. 주소 앞에 언어 코드가 없다 (/jobs, /about …)
const t = getDict("ko").meta;
export const metadata: Metadata = {
  title: { default: t.homeTitle, template: t.titleTemplate },
  description: t.homeDesc,
  // 소식 RSS (네이버 서치어드바이저에 제출)
  alternates: { types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: `${company.title} 소식` }] } },
};

export default function KoLayout({ children }: { children: React.ReactNode }) {
  return <SiteChrome lang="ko">{children}</SiteChrome>;
}
